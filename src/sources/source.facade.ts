import pool from "@/db/pool";
import prisma from "@/db/prisma";
import BitdefenderService from "@/services/bitdefender.service";
import MilvusService from "@/services/milvus.service";
import cleanNumericString from "@/utils/cleanNumericString";
import detailsToTVP from "@/utils/sql/DetailsToTVP";
import devicesToTVP from "@/utils/sql/DevicesToTVP";
import eventsToTVP from "@/utils/sql/EventsToTVP";
import statusToTVP from "@/utils/sql/StatusToTVP";
import chalk from "chalk";

class SourceFacade {
  private readonly milvusKey: string;
  private readonly bitdefenderKey: string;
  private readonly securityReportId: string;
  private milvusService;
  private bitdefenderService;
  private readonly THREE_HOURS_IN_MS = 60 * 60 * 1000 * 3;
  private bitdefenderCompanyId: string | undefined;

  constructor(bitdefenderKey?: string, bitdefenderCompanyId?: string) {
    this.milvusKey = Bun.env.MILVUS_KEY_TERABYTE || "";
    this.bitdefenderKey = Bun.env.BITDEFENDER_KEY_TERABYTE || "";
    if (bitdefenderKey) this.bitdefenderKey = bitdefenderKey;
    this.securityReportId = Bun.env.BITDEFENDER_SEC_REPORT_ID || "";
    this.bitdefenderCompanyId = bitdefenderCompanyId || undefined

    this.bitdefenderService = new BitdefenderService(
      this.bitdefenderKey,
      this.securityReportId,
      this.bitdefenderCompanyId
    );
    this.milvusService = new MilvusService(this.milvusKey);
  }

  async syncClients() {
    const clients = await this.milvusService.getClients();
    const upserts = clients.map(client => prisma.client.upsert({
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
    }))

    await prisma.$transaction(upserts)
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
    const tvp = detailsToTVP(deviceDetails);
    await pool
      .request()
      .input("DetailsList", tvp)
      .execute("UpsertDetails");
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
    const res = await this.saveSecurityEvents(events);
    console.log(chalk.magenta(`< Updated ${res} security events`));
    return res;
  }

  private async saveSecurityEvents(CSVEvents: Record<string, string>[]) {
    const filteredEvents = CSVEvents.filter((event) =>
      this.bitdefenderService.isEventValid(event),
    );

    const tvp = eventsToTVP(filteredEvents);
    await pool
      .request()
      .input("Events", tvp)
      .execute("UpsertEvents");

    console.log(chalk.blue(`< Updated ${filteredEvents.length} events`));
    return filteredEvents.length;
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
