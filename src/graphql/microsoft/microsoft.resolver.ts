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
    microsoftSkus: async (
      parent: { id: string },
      _: unknown,
      ctx: GraphQLContext,
    ) => {
      return await ctx.prisma.microsoftSku.findMany({
        where: { microsoftAccounts: { some: { id: parent.id } } },
      });
    },
  },
  Query: {
    async microsoftAccount(
      _: unknown,
      { clientId }: { clientId: number },
      ctx: GraphQLContext,
    ) {
      return await ctx.prisma.microsoftAccount.findMany({
        where: { clientId },
      });
    },
    async microsoftSubscribedSku(
      _: unknown,
      { clientId }: { clientId: number },
      ctx: GraphQLContext,
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
      ctx: GraphQLContext,
    ) {
      const clientId = ctx.request.headers.get("clients") || 0;
      if (clientId === 0) {
        return { error: "Client ID not found in headers", message: null };
      }
      microsoftService.upsertAccounts(value, +clientId);
      return { error: null, message: `Accounts received from ${clientId} successfully!` };
    },
    async updateMSSubscribedSkus(
      _: unknown,
      { value }: { value: ReqMSSubscribedSku[] },
      ctx: GraphQLContext,
    ) {
      const clientId = ctx.request.headers.get("clients") || 0;
      if (clientId === 0) {
        return { error: "Client ID not found in headers", message: null };
      }

      microsoftService.upsertSubscribedSkus(value, +clientId);
      return { error: null, message: `Subscribed Skus received from ${clientId} successfully!` };
    },
  },
};

export default resolvers;
