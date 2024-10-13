type PayloadAgs = {
  parentId?: string;
  perPage?: number;
  page?: number;
  reportId?: string;
};

type SecurityGroup = {
  id: string;
  name: string;
};

type BitdefenderGroupResp = {
  id: string;
  jsonrpc: string;
  result: SecurityGroup[];
};

type CompaniesGroups = {
  total: number;
  page: number;
  perPage: number;
  pagesCount: number;
  items: SecurityGroup[];
};

type CompaniesGroupsResp = {
  result: CompaniesGroups;
};

type SecurityStatus = {
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
  managedWithBest?: boolean;
  managedRelay?: boolean;
};

type EndpointListResults = {
  total: number;
  page: number;
  perPage: number;
  pagesCount: number;
  items: SecurityStatus[];
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
