import { parse } from "@std/csv/parse";
import AdmZip from "adm-zip";
import { readdir, rmdir } from "node:fs/promises";

class BitdefenderService {
  private readonly url =
    "https://cloud.gravityzone.bitdefender.com/api/v1.0/jsonrpc/network";
  private readonly urlReport =
    "https://cloud.gravityzone.bitdefender.com/api/v1.0/jsonrpc/reports";
  private readonly rootParentId = "55faa46e3a621503728b457c";
  private readonly rootCompanyId = "55faa46e3a621503728b457a";
  private securityReportId: string | null = null;
  private headers;

  constructor(key: string, securityReportId?: string) {
    this.securityReportId = securityReportId || null;
    const auth = Buffer.from(`${key}:`).toString("base64");
    this.headers = {
      "Content-Type": "application/json",
      Authorization: `Basic ${auth}`,
    };
  }

  async getNetworkGroups(parentId?: string) {
    const payload = this.buildPayload("getCustomGroupsList", {
      parentId: parentId || this.rootParentId,
    });
    const resp = await fetch(this.url, {
      method: "POST",
      headers: this.headers,
      body: payload,
    });
    const groups: BitdefenderGroupResp = await resp.json();
    return groups.result;
  }

  async getCompaniesGroups() {
    const payload = this.buildPayload("getNetworkInventoryItems", {
      parentId: this.rootCompanyId,
    });
    const resp = await fetch(this.url, {
      method: "POST",
      headers: this.headers,
      body: payload,
    });
    const groups: CompaniesGroupsResp = await resp.json();
    return groups.result.items;
  }

  async getSubFolders(companyGroups: SecurityGroup[]) {
    const ignoreGroups = new Set(["Excluídos"]);
    const subFolders = [];
    for (const group of companyGroups) {
      const firstLevel = await this.getNetworkGroups(group.id);
      if (!firstLevel) continue;
      for (const folder of firstLevel) {
        if (ignoreGroups.has(folder.name)) continue;
        const secondLevel = await this.getNetworkGroups(folder.id);
        subFolders.push(...secondLevel);
      }
    }
    return subFolders;
  }

  async getStausByGroup(groupId: string) {
    let payload = this.buildPayload("getEndpointsList", {
      parentId: groupId,
      perPage: 100,
    });

    const list = await fetch(this.url, {
      method: "POST",
      headers: this.headers,
      body: payload,
    });
    const endpoints: EndpointListResultsResp = await list.json();

    for (let page = 2; page <= endpoints.result.pagesCount; page++) {
      payload = this.buildPayload("getEndpointsList", {
        parentId: groupId,
        perPage: 100,
        page,
      });
      const resp = await fetch(this.url, {
        method: "POST",
        headers: this.headers,
        body: payload,
      });
      const newEndpoints = await resp.json();
      endpoints.result.items.push(...newEndpoints.result.items);
    }
    return endpoints.result.items;
  }

  async getReportUrl() {
    if (!this.securityReportId) return null;

    const payload = this.buildPayload("getDownloadLinks", {
      reportId: this.securityReportId,
    });
    const resp = await fetch(this.urlReport, {
      method: "POST",
      headers: this.headers,
      body: payload,
    });
    const report: DownloadLinksResp = await resp.json();
    if (!report.result.readyForDownload) return null;
    return report.result.lastInstanceUrl;
  }

  async getSecurityEvents() {
    const zipPath = "./temp/securityEvents.zip";

    const reportUrl = await this.getReportUrl();
    if (!reportUrl) {
      console.error("Security Events: Report not ready");
      return null;
    }
    const zipFile = await this.downloadZipFile(reportUrl);
    await Bun.write(zipPath, zipFile);
    await this.extractCSVFromZip(zipPath);
    const events = await this.extractEventsFromCSV();
    await rmdir("./temp", { recursive: true });
    return events;
  }

  async extractEventsFromCSV() {
    const files = await readdir("./temp");
    const csvFile = files.find((file) => file.endsWith(".csv"));
    const csvContent = await Bun.file(`./temp/${csvFile}`).text();
    const csvParsed = parse(csvContent, { skipFirstRow: true });
    return csvParsed;
  }

  isEventValid(event: Record<string, string>) {
    return (
      event["Nome do Endpoint"] &&
      event["Módulo"] !== "Controle de Dispositivos"
    );
  }

  private async extractCSVFromZip(filePath: string) {
    const zip = new AdmZip(filePath);
    zip.extractAllTo("./temp", true);
  }

  private async downloadZipFile(url: string) {
    const resp = await fetch(url, { headers: this.headers });
    const blob = await resp.blob();
    return blob;
  }

  private buildPayload(method: string, args: PayloadAgs = {}) {
    const payload = {
      jsonrpc: "2.0",
      method: method,
      params: args,
      id: 1,
    };
    return JSON.stringify(payload);
  }
}

export default BitdefenderService;
