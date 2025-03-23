import MilvusService from "@/services/milvus.service";
import type { GraphQLContext } from "@/types/context";
import type { Client } from "@prisma/client";

const milvusKey = Bun.env.MILVUS_KEY_TERABYTE || "";
const milvusService = new MilvusService(milvusKey);

const resolvers = {
  Client: {
    devices: async (parent: WithId, _: unknown, ctx: GraphQLContext) => {
      return await ctx.prisma.device.findMany({
        where: { clientId: parent.id },
      });
    },
    microsoftAccounts: async (parent: WithId, _: unknown, ctx: GraphQLContext) => {
      return await ctx.prisma.microsoftAccount.findMany({
        where: { clientId: parent.id },
      });
    },
    microsoftSubscribedSkus: async (
      parent: WithId,
      _: unknown,
      ctx: GraphQLContext
    ) => {
      return await ctx.prisma.microsoftSubscribedSku.findMany({
        where: { clientId: parent.id },
      });
    },
    recomendations: async (parent: WithId, _: unknown, ctx: GraphQLContext) => {
      return await ctx.prisma.recomendation.findMany({
        where: { clientId: parent.id },
      });
    },
    disclaimers: async (parent: WithId, _: unknown, ctx: GraphQLContext) => {
      return await ctx.prisma.disclaimer.findMany({
        where: { clientId: parent.id },
      });
    },
  },
  Device: {
    securityEvents: async (parent: WithId, _: unknown, ctx: GraphQLContext) => {
      return await ctx.prisma.securityEvent.findMany({
        where: { deviceId: parent.id },
      });
    },
    securityStatus: async (parent: WithId, _: unknown, ctx: GraphQLContext) => {
      return await ctx.prisma.securityStatus.findMany({
        where: { deviceId: parent.id },
      });
    },
    deviceDetails: async (parent: WithId, _: unknown, ctx: GraphQLContext) => {
      return await ctx.prisma.device.findFirst({
        where: { id: parent.id },
      });
    },
  },
  DeviceDetail: {
    businessUnit: async (parent: WithId, _: unknown, ctx: GraphQLContext) => {
      return await ctx.prisma.businessUnit.findFirst({
        where: { deviceDetails: { some: { id: parent.id } } },
      });
    },
  },
  Query: {
    async clients(_: unknown, __: unknown, ctx: GraphQLContext) {
      const role = ctx.jwt?.payload.scope;

      if (role === "CLIENT") {
        return await ctx.prisma.client.findMany({
          where: { id: { in: ctx.jwt?.payload.clients } },
          orderBy: { category: "asc" },
        });
      }
      return await ctx.prisma.client.findMany();
    },
    async client(_: unknown, { id }: { id: number }, ctx: GraphQLContext) {
      const client = await ctx.prisma.client.findUnique({
        where: { id },
      });
      return client;
    },
    async devices(
      _: unknown,
      { clientId, typeFilter }: { clientId: number; typeFilter?: string[] },
      ctx: GraphQLContext
    ) {
      const payload = ctx.jwt?.payload;
      const where =
        typeFilter && typeFilter.length > 0 ? { type: { in: typeFilter } } : {};

      if (payload?.scope === "CLIENT" && !payload?.clients.includes(clientId)) {
        return new Error("Not authorized to access this device.");
      }
      return await ctx.prisma.device.findMany({
        where: { clientId, ...where },
      });
    },
    async device(_: unknown, { id }: { id: number }, ctx: GraphQLContext) {
      return await ctx.prisma.device.findUnique({
        where: { id },
      });
    },
    async tickets(_: unknown, { clientId }: { clientId: number }) {
      const tickets: Ticket[] = await milvusService.getTickets(clientId);
      return tickets;
    },
  },
  Mutation: {
    async updateClient(
      _: unknown,
      { client }: { client: Client },
      ctx: GraphQLContext
    ) {
      return await ctx.prisma.client.update({
        where: { id: client.id },
        data: client,
      });
    },
  },
};

export default resolvers;
