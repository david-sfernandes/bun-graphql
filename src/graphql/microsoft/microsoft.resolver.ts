import MicrosoftService from "@/services/microsoft.service";
import type { GraphQLContext } from "@/types/context";

const microsoftService = new MicrosoftService();

const resolvers = {
  MicrosoftSubscribedSku: {
    sku: async (parent: { skuId: string }, _: unknown, ctx: GraphQLContext) => {
      return await ctx.prisma.microsoftSku.findFirst({
        where: { id: parent.skuId },
      });
    },
  },
  MicrosoftAccount: {
    microsoftSkus: async (parent: { id: string }, _: unknown, ctx: GraphQLContext) => {
      return await ctx.prisma.microsoftSku.findMany({
        where: { microsoftAccounts: { some: { id: parent.id } } },
      });
    },
  },
  Query: {
    async microsoftAccount(
      _: unknown,
      { clientId }: { clientId: number },
      ctx: GraphQLContext
    ) {
      return await ctx.prisma.microsoftAccount.findMany({
        where: { clientId },
      });
    },
    async microsoftSubscribedSku(
      _: unknown,
      { clientId }: { clientId: number },
      ctx: GraphQLContext
    ) {
      return await ctx.prisma.microsoftSubscribedSku.findMany({
        where: { clientId },
      });
    },
  },
  Mutation: {
    async updateMSAccounts(
      _: unknown,
      { value }: { value: ReqMSAccount[] },
      ctx: GraphQLContext
    ) {
      let failed = 0;
      const clientId = ctx.request.headers.get("clients") || 0;

      for (const account of value) {
        try {
          await microsoftService.upsertAccount(ctx.prisma, account, +clientId);
        } catch (error) {
          failed++;
          console.error(error);
        }
      }
      if (failed > 0) console.error(`Failed to update ${failed} accounts`);
      return { success: value.length - failed, failed };
    },
    async updateMSSubscribedSkus(
      _: unknown,
      { value }: { value: ReqMSSubscribedSku[] },
      ctx: GraphQLContext
    ) {
      let failed = 0;
      const clientId = ctx.request.headers.get("clients") || 0;

      for (const sku of value) {
        try {
          await microsoftService.upsertSubscribedSku(
            ctx.prisma,
            sku,
            +clientId
          );
        } catch (error) {
          failed++;
          console.error(error);
        }
      }

      if (failed > 0) console.error(`Failed to update ${failed} skus`);
      return { success: value.length - failed, failed };
    },
  },
};

export default resolvers;
