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
    const subFolders = [];
    for (const group of companyGroups) {
      const groups = await this.getNetworkGroups(group.id);
      subFolders.push(
        ...groups.filter((g) => g.name !== "Computadores e Grupos")
      );
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
    return null;
  }

  async getEventsFromCSV() {
    return null;
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
