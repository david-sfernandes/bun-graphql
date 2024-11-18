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

type ReqMSSubscribedSku = {
  accountName: string;
  accountId: string;
  appliesTo: string;
  capabilityStatus: string;
  consumedUnits: number;
  id: string;
  skuId: string;
  skuPartNumber: string;
  subscriptionIds: string[];
  prepaidUnits: {
    enabled: number;
    suspended: number;
    warning: number;
    lockedOut: number;
  };
  servicePlans: {
    servicePlanId: string;
    servicePlanName: string;
    provisioningStatus: string;
    appliesTo: string;
  }[];
}
