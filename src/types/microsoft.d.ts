type microsoftSku = {
  id: string;
  name: string;
};

type ReqMSAccount = {
  id: string;
  displayName: string;
  mail: string;
  userPrincipalName: string;
  assignedLicenses: ReqMSAccountSku[];
};

type ReqMSAccountSku = {
  skuId: string;
};
