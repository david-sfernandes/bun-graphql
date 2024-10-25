import chalk from "chalk";
import BitdefenderService from "../services/bitdefender.service";
import prisma from "../db/prisma";
import MilvusService from "../services/milvus.service";
import cleanNumericString from "../utils/cleanNumericString";

class SourceFacade {
  private readonly milvusKey: string;
  private readonly bitdefenderKey: string;
  private readonly securityReportId: string;
  private milvusService;
  private bitdefenderService;
  private readonly ONE_HOUR_IN_MS = 60 * 60 * 1000;

  constructor() {
    this.milvusKey = Bun.env.MILVUS_KEY_TERABYTE || "";
    this.bitdefenderKey = Bun.env.BITDEFENDER_KEY_TERABYTE || "";
    this.securityReportId = Bun.env.BITDEFENDER_SEC_REPORT_ID || "";

    this.bitdefenderService = new BitdefenderService(
      this.bitdefenderKey,
      this.securityReportId
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
    let errQty = 0;

    for (const device of devices) {
      try {
        await prisma.device.upsert({
          where: { id: device.id },
          update: {
            name: device.hostname || "",
            nickname: device.apelido || "",
            mac: device.macaddres || "",
            brand: device.marca || "",
            os: device.sistema_operacional || "",
            processor: device.processador || "",
            username: device.usuario_logado || "",
            serial: device.numero_serial || "",
            model: device.modelo_notebook || "",
            type: device.tipo_dispositivo_text,
            isActive: device.is_ativo,
          },
          create: {
            id: device.id,
            name: device.hostname || "",
            nickname: device.apelido || "",
            mac: device.macaddres || "",
            brand: device.marca || "",
            os: device.sistema_operacional || "",
            processor: device.processador || "",
            username: device.usuario_logado || "",
            serial: device.numero_serial || "",
            model: device.modelo_notebook || "",
            type: device.tipo_dispositivo_text,
            isActive: device.is_ativo,
            client: {
              connect: {
                id: (
                  await prisma.client.findFirstOrThrow({
                    where: {
                      name: {
                        contains: device.nome_fantasia,
                      },
                    },
                  })
                ).id,
              },
            },
          },
        });
      } catch (error) {
        errQty++;
      }
    }

    if (errQty > 0) console.error(`Error on sync ${errQty} devices`);

    return devices.length - errQty;
  }

  async syncDeviceDetails() {
    const deviceDetails = await this.milvusService.getDeviceDetails();
    for (const detail of deviceDetails) {
      try {
        await prisma.deviceDetail.upsert({
          where: { id: detail.id },
          update: {
            clientVersion: detail.versao_client || "",
            domain: detail.dominio || "",
            imei1: detail.mobile_sim1_imei || "",
            imei2: detail.mobile_sim2_imei || "",
            ramal: detail.ramal || "",
            totalRam: detail.ram_total || "",
            totalStorage: detail.mobile_storage_interno_total || "",
            usedStorage: detail.mobile_storage_interno_utilizado || "",
            ...(detail.unidade_negocio_id && {
              businessUnitId: detail.unidade_negocio_id,
            }),
            ...(detail.data_compra && { purchaseDate: detail.data_compra }),
            ...(detail.data_garantia && { warrantyDate: detail.data_garantia }),
            ...(detail.grupo_dispositivo_id && {
              groupId: detail.grupo_dispositivo_id,
            }),
          },
          create: {
            id: detail.id,
            clientVersion: detail.versao_client || "",
            domain: detail.dominio || "",
            imei1: detail.mobile_sim1_imei || "",
            imei2: detail.mobile_sim2_imei || "",
            ramal: detail.ramal || "",
            totalRam: detail.ram_total || "",
            totalStorage: detail.mobile_storage_interno_total || "",
            usedStorage: detail.mobile_storage_interno_utilizado || "",
            ...(detail.unidade_negocio_id && {
              businessUnitId: detail.unidade_negocio_id,
            }),
            ...(detail.data_compra && { purchaseDate: detail.data_compra }),
            ...(detail.data_garantia && { warrantyDate: detail.data_garantia }),
            ...(detail.grupo_dispositivo_id && {
              groupId: detail.grupo_dispositivo_id,
            }),
          },
        });
      } catch (error) {
        console.error(
          chalk.bgRed(
            `Error on sync device detail: ${detail.id} Unit: ${detail.unidade_negocio_id}`
          )
        );
      }
    }
    return deviceDetails.length;
  }

  async deleteOldDevices() {
    const devices = await prisma.device.findMany({
      where: {
        updatedAt: {
          lt: new Date(Date.now() - this.ONE_HOUR_IN_MS),
        },
      },
    });
    console.log(`- Deleted ${devices.length} old devices`);
  }

  async syncCompanySecurityStatus() {
    let groups = await this.bitdefenderService.getCompaniesGroups();
    await this.syncStatusByGroup(groups);

    const subFolders = await this.bitdefenderService.getSubFolders(groups);
    await this.syncStatusByGroup(subFolders);
    return groups.length;
  }

  async syncNetworkSecurityStatus() {
    let groups = await this.bitdefenderService.getNetworkGroups();
    await this.syncStatusByGroup(groups);

    const subFolders = await this.bitdefenderService.getSubFolders(groups);
    await this.syncStatusByGroup(subFolders);
    return groups.length;
  }

  private async syncStatusByGroup(groups: SecurityGroup[]) {
    for (const group of groups) {
      if (!group.id || !group.name) continue;
      const statusList = await this.bitdefenderService.getStausByGroup(
        group.id
      );
      await this.upsertStatusList(statusList, group.name);
      console.log(
        chalk.yellow(`< Updated ${statusList.length} status from ${group.name}`)
      );
    }
  }

  private async upsertStatusList(
    statusList: SecurityStatus[],
    groupName: string
  ) {
    for (const status of statusList) {
      const device = await prisma.device.findFirst({
        where: {
          OR: [{ mac: status.macs[0] }, { name: status.name }],
        },
      });
      await prisma.securityStatus.upsert({
        where: { id: status.id },
        update: {
          group: groupName,
          id: status.id,
          isManaged: status.isManaged,
          isManagedWithBest: status.managedWithBest || status.managedRelay,
          mac: status.macs[0],
          name: status.name,
          syncedAt: new Date(),
        },
        create: {
          group: groupName,
          id: status.id,
          isManaged: status.isManaged,
          isManagedWithBest:
            status?.managedWithBest || status?.managedRelay || false,
          mac: status.macs[0],
          name: status.name,
          syncedAt: new Date(),
          ...(device && {
            device: {
              connect: {
                id: device.id,
              },
            },
          }),
        },
      });
    }
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
    CSVEvents = CSVEvents.filter((event) =>
      this.bitdefenderService.isEventValid(event)
    );

    for (const event of CSVEvents) {
      const device = await prisma.device.findFirst({
        where: {
          OR: [{ mac: event["MAC"] }, { name: event["Nome do Endpoint"] }],
        },
      });
      mountedEvents.push({
        deviceName: event["Nome do Endpoint"],
        module: event["Módulo"],
        companyName: event["Nome da Empresa"],
        endpoint: event["FQDN do Endpoint"],
        occurrences: parseInt(event["Ocorrências"]),
        type: event["Tipo de Evento"],
        username: event["Usuário"],
        lastOccurrence: new Date(event["Ultima ocorrência"]),
        deviceId: device?.id || null,
      });
    }
    const insertedRows = await prisma.securityEvent.createMany({
      data: mountedEvents,
    });
    return insertedRows.count;
  }
}

export default SourceFacade;
