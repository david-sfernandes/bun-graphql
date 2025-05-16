import FREE_SKU_TO_IGNORE from "@/constant/freeSkuToIgnore";
import prisma from "@/db/prisma";
import type { PrismaClient } from "@prisma/client";

class MicrosoftService {
  private async upsertAccount(
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

  async upsertAccounts(value: ReqMSAccount[], clientId: number) {
    let failed = 0;
    for (const account of value) {
      try {
        const filteredLicenses = account.assignedLicenses.filter((a) => !FREE_SKU_TO_IGNORE.has(a.skuId));
        account.assignedLicenses = filteredLicenses;
        await this.upsertAccount(prisma, account, +clientId);
      } catch (error) {
        failed++;
        console.error(`Error updating account ${account.id}:`, error);
      }
    }
    console.log(
      `Finished upserting accounts for client ${clientId}. ${failed} accounts failed to update.`,
    );
  }

  private async upsertSubscribedSku(
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

  async upsertSubscribedSkus(
    value: ReqMSSubscribedSku[],
    clientId: number,
  ) {
    let failed = 0;
    for (const sku of value) {
      if (FREE_SKU_TO_IGNORE.has(sku.skuId)) {
        continue;
      }
      try {
        await this.upsertSubscribedSku(
          prisma,
          sku,
          +clientId,
        );
      } catch (error) {
        failed++;
        console.error(error);
      }
    }
    console.log(
      `Finished upserting subscribed SKUs for client ${clientId}. ${failed} SKUs failed to update.`,
    );
  }
}

export default MicrosoftService;
