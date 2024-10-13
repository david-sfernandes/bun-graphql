type PayloadAgs = {
  parentId?: string;
  perPage?: number;
  page?: number;
  reportId?: string;
};

type SecurityGroups = {
  id: string;
  name: string;
};

type BitdefenderGroupResp = {
  id: string;
  jsonrpc: string;
  result: SecurityGroups[];
};

type CompaniesGroups = {
  total: number;
  page: number;
  perPage: number;
  pagesCount: number;
  items: SecurityGroups[];
};

type CompaniesGroupsResp = {
  result: CompaniesGroups;
};

type EndpointListResults = {
  total: number;
  page: number;
  perPage: number;
  pagesCount: number;
  items: {
    id: string;
    name: string;
    label: string;
    fqdn: string;
    groupId: string;
    isManaged: boolean;
    machineType: string;
    operatingSystemVersion: string;
    ip: string;
    macs: string[];
    ssid: string;
    managedWithBest: boolean;
    managedRelay: boolean;
  }[];
};

type EndpointListResultsResp = {
  result: EndpointListResults;
};

type DownloadLinks = {
  readyForDownload: boolean;
  lastInstanceUrl: string;
  allInstancesUrl: string;
};

type DownloadLinksResp = {
  result: DownloadLinks;
};
