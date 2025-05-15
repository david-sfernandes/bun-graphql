import pool from "@/db/pool";
import prisma from "@/db/prisma";
import BitdefenderService from "@/services/bitdefender.service";
import MilvusService from "@/services/milvus.service";
import cleanNumericString from "@/utils/cleanNumericString";
import devicesToTVP from "@/utils/sql/DevicesToTVP";
import statusToTVP from "@/utils/sql/StatusToTVP";
import chalk from "chalk";
import sql from 'mssql';

class SourceFacade {
  private readonly milvusKey: string;
  private readonly bitdefenderKey: string;
  private readonly securityReportId: string;
  private milvusService;
  private bitdefenderService;
  private readonly THREE_HOURS_IN_MS = 60 * 60 * 1000 * 3;

  constructor() {
    this.milvusKey = Bun.env.MILVUS_KEY_TERABYTE || "";
    this.bitdefenderKey = Bun.env.BITDEFENDER_KEY_TERABYTE || "";
    this.securityReportId = Bun.env.BITDEFENDER_SEC_REPORT_ID || "";

    this.bitdefenderService = new BitdefenderService(
      this.bitdefenderKey,
      this.securityReportId,
    );
    this.milvusService = new MilvusService(this.milvusKey);
  }

  async syncClients() {
    const clients = await this.milvusService.getClients();
    for (const client of clients) {
      await prisma.client.upsert({
        where: { id: client.id },
        update: {
          name: client.nome_fantasia || "",
          companyName: client.razao_social,
          cnpj: cleanNumericString(client.cnpj_cpf || ""),
        },
        create: {
          id: client.id,
          name: client.nome_fantasia || "",
          companyName: client.razao_social,
          cnpj: cleanNumericString(client.cnpj_cpf || ""),
        },
      });
    }
    return clients.length;
  }

  async syncDevices() {
    const devices = await this.milvusService.getAllDevices();

    const tvp = devicesToTVP(devices);

    const result = (await pool.request().input('Devices', tvp).execute('UpsertDevices'));
    console.log(chalk.blue(`< Updated ${result.rowsAffected} devices`));
  }

  async syncDeviceDetails() {
    const deviceDetails = await this.milvusService.getDeviceDetails();
    for (const detail of deviceDetails) {
      const data = {
        clientVersion: detail.versao_client || "",
        domain: detail.dominio || "",
        imei1: detail.mobile_sim1_imei || "",
        imei2: detail.mobile_sim2_imei || "",
        ramal: detail.ramal || "",
        totalRam: detail.ram_total || "",
        totalStorage: detail.mobile_storage_interno_total || "",
        usedStorage: detail.mobile_storage_interno_utilizado || "",
        groupId: detail.grupo_dispositivo_id || null,
        businessUnitId: detail.unidade_negocio_id || null,
        purchaseDate: detail.data_compra ? new Date(detail.data_compra) : null,
        warrantyDate: detail.data_garantia ? new Date(detail.data_garantia) : null,
        deviceId: detail.id
      }
      try {
        await prisma.deviceDetail.upsert({
          where: { id: detail.id },
          update: data,
          create: { ...data, id: detail.id },
        });
      } catch (error) {
        console.error(
          chalk.bgRed(
            `Error on sync device detail: ${detail.id} Unit: ${detail.unidade_negocio_id} \n ${error}`,
          ),
        );
      }
    }
    return deviceDetails.length;
  }

  async deleteOldDevices() {
    const devices = await prisma.device.findMany({
      where: {
        updatedAt: {
          lt: new Date(Date.now() - this.THREE_HOURS_IN_MS),
        },
      },
    });
    console.log(`- Deleted ${devices.length} old devices`);
  }

  async syncCompanySecurityStatus() {
    const groups = await this.bitdefenderService.getCompaniesGroups();
    await this.syncStatusByGroup(groups);

    const subFolders = await this.bitdefenderService.getSubFolders(groups);
    await this.syncStatusByGroup(subFolders);
    return groups.length;
  }

  async syncNetworkSecurityStatus() {
    const groups = await this.bitdefenderService.getNetworkGroups();
    await this.syncStatusByGroup(groups);

    const subFolders = await this.bitdefenderService.getSubFolders(groups);
    await this.syncStatusByGroup(subFolders);
    return groups.length;
  }

  private async syncStatusByGroup(groups: SecurityGroup[]) {
    for (const group of groups) {
      if (!group.id || !group.name) continue;
      const statusList = await this.bitdefenderService.getStausByGroup(
        group.id,
      );
      await this.upsertStatusList(statusList, group.name);
      console.log(
        chalk.yellow(
          `< Updated ${statusList.length} status from ${group.name}`,
        ),
      );
    }
  }

  private async upsertStatusList(
    statusList: SecurityStatus[],
    groupName: string,
  ) {
    const tvp = statusToTVP(statusList, groupName);
    const result = await pool
      .request()
      .input("StatusList", tvp)
      .execute("UpsertStatus");
    console.log(chalk.blue(`< Updated ${result.rowsAffected} status`));
  }

  async syncSecurityEvents() {
    prisma.securityEvent.deleteMany({});
    const events = (await this.bitdefenderService.getSecurityEvents()) || [];
    await this.saveSecurityEvents(events);
    console.log(chalk.magenta(`< Updated ${events.length} security events`));
    return events.length;
  }

  private async saveSecurityEvents(CSVEvents: Record<string, string>[]) {
    const mountedEvents = [];
    const filteredEvents = CSVEvents.filter((event) =>
      this.bitdefenderService.isEventValid(event),
    );

    for (const event of filteredEvents) {
      const device = await prisma.device.findFirst({
        where: {
          OR: [{ mac: event.MAC }, { name: event["Nome do Endpoint"] }],
        },
      });
      mountedEvents.push({
        deviceName: event["Nome do Endpoint"],
        module: event.Módulo,
        companyName: event["Nome da Empresa"],
        endpoint: event["FQDN do Endpoint"],
        occurrences: Number.parseInt(event["Ocorrências"]),
        type: event["Tipo de Evento"],
        username: event.Usuário,
        lastOccurrence: new Date(event["Ultima ocorrência"]),
        deviceId: device?.id || null,
      });
    }
    const insertedRows = await prisma.securityEvent.createMany({
      data: mountedEvents,
    });
    return insertedRows.count;
  }

  async cleanupDevices() {
    const devices = await prisma.device.findMany({
      where: {
        updatedAt: {
          lt: new Date(Date.now() - this.THREE_HOURS_IN_MS),
        },
      },
    });
    console.log(`Found ${devices.length} devices to delete`);
    const deletedDevices = await prisma.device.deleteMany({
      where: {
        id: { in: devices.map((device) => device.id) },
      },
    });
    return deletedDevices.count;
  }
}

export default SourceFacade;
