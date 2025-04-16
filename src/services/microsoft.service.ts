import type { PrismaClient } from "@prisma/client";

class MicrosoftService {
  async upsertAccount(
    prisma: PrismaClient,
    account: ReqMSAccount,
    clientId: number,
  ) {
    await prisma.microsoftAccount.upsert({
      where: { id: account.id },
      update: {
        displayName: account.displayName,
        email: account.mail ? account.mail : account.userPrincipalName,
        microsoftSkus: {
          connect: account.assignedLicenses.map((sku) => ({
            id: sku.skuId,
          })),
        },
      },
      create: {
        id: account.id,
        displayName: account.displayName,
        email: account.mail ? account.mail : account.userPrincipalName,
        client: { connect: { id: clientId } },
        microsoftSkus: {
          connect: account.assignedLicenses.map((sku) => ({
            id: sku.skuId,
          })),
        },
      },
    });
  }

  async upsertSubscribedSku(
    prisma: PrismaClient,
    subscribedSku: ReqMSSubscribedSku,
    clientId: number,
  ) {
    await prisma.microsoftSubscribedSku.upsert({
      where: {
        skuClient: {
          skuId: subscribedSku.skuId,
          clientId: clientId,
        },
      },
      update: {
        qty: subscribedSku.prepaidUnits.enabled,
        used: subscribedSku.consumedUnits,
      },
      create: {
        skuId: subscribedSku.skuId,
        clientId: clientId,
        qty: subscribedSku.prepaidUnits.enabled,
        used: subscribedSku.consumedUnits,
      },
    });
  }
}

export default MicrosoftService;
