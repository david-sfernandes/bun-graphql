import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";
import { v1 as uuidv1 } from "uuid";
import validatePassword from "../auth/validatePassword";
import SECRET from "../constant/secret";
import MilvusService from "../milvus/milvus.service";
import type { GraphQLContext } from "../types/context";

const milvusKey = Bun.env.MILVUS_KEY_TERABYTE || "";
const milvusService = new MilvusService(milvusKey);

const resolvers = {
  Client: {
    devices: async (parent: any, _: any, ctx: GraphQLContext) => {
      return await ctx.prisma.device.findMany({
        where: { clientId: parent.id },
      });
    },
  },
  Device: {
    securityEvents: async (parent: any, _: any, ctx: GraphQLContext) => {
      return await ctx.prisma.securityEvent.findMany({
        where: { deviceId: parent.id },
      });
    },
    securityStatus: async (parent: any, _: any, ctx: GraphQLContext) => {
      return await ctx.prisma.securityStatus.findMany({
        where: { deviceId: parent.id },
      });
    },
    deviceDetails: async (parent: any, _: any, ctx: GraphQLContext) => {
      return await ctx.prisma.device.findFirst({
        where: { id: parent.id },
      });
    },
  },
  DeviceDetail: {
    businessUnit: async (parent: any, _: any, ctx: GraphQLContext) => {
      return await ctx.prisma.businessUnit.findFirst({
        where: { id: parent.businessUnitId },
      });
    },
  },
  Query: {
    async user(_: any, { email }: { email: string }, ctx: GraphQLContext) {
      return await ctx.prisma.user.findUnique({
        where: { email },
      });
    },
    async users(_: any, __: any, ctx: GraphQLContext) {
      return await ctx.prisma.user.findMany();
    },
    async clients(_: any, __: any, ctx: GraphQLContext) {
      const role = ctx.jwt?.payload.scope;

      if (role === "CLIENT") {
        return await ctx.prisma.client.findMany({
          where: { id: { in: ctx.jwt?.payload.clients } },
        });
      }
      return await ctx.prisma.client.findMany();
    },
    async client(_: any, { id }: { id: number }, ctx: GraphQLContext) {
      const client = await ctx.prisma.client.findUnique({
        where: { id },
      });
      return client;
    },
    async devices(
      _: any,
      { clientId }: { clientId: number },
      ctx: GraphQLContext
    ) {
      const payload = ctx.jwt?.payload;
      if (payload?.scope === "CLIENT" && !payload?.clients.includes(clientId)) {
        return new Error("Not authorized to access this device.");
      }
      return await ctx.prisma.device.findMany({
        where: { clientId },
      });
    },
    async device(_: any, { id }: { id: number }, ctx: GraphQLContext) {
      return await ctx.prisma.device.findUnique({
        where: { id },
      });
    },
    async tickets(_: any, { clientId }: { clientId: number }) {
      const tickets = milvusService.getTickets(clientId);
      return tickets;
    },
    async securityEvents(
      _: any,
      { clientId }: { clientId: number },
      ctx: GraphQLContext
    ) {
      return await ctx.prisma.securityEvent.findMany({
        where: { device: { clientId: clientId } },
      });
    },
    async login(
      _: any,
      { email, password }: { email: string; password: string },
      ctx: GraphQLContext
    ) {
      const user = await ctx.prisma.user.findUnique({
        where: { email },
        include: { clients: true },
      });
      const isPasswordValid = await validatePassword(user, password);
      if (!isPasswordValid) return new Error("Invalid password.");

      const token = jwt.sign(
        {
          sub: user?.id,
          name: user?.name,
          scope: user?.role,
          clients: user?.clients.map((client) => client.id),
        },
        SECRET,
        { expiresIn: "1d" }
      );

      return { token, name: user?.name, role: user?.role };
    },
  },
  Mutation: {
    async createUser(
      _: any,
      {
        email,
        name,
        password,
      }: { email: string; name: string; password: string },
      ctx: GraphQLContext
    ) {
      const hashPassword = await Bun.password.hash(password, {
        algorithm: "bcrypt",
        cost: 4,
      });
      return await ctx.prisma.user.create({
        data: {
          email,
          name,
          password: hashPassword,
          role: "ADMIN",
        },
      });
    },
    async createInvite(
      _: any,
      {
        email,
        role,
        clients,
      }: { email: string; role: Role; clients: number[] },
      ctx: GraphQLContext
    ) {
      if (role === "ADMIN") {
        throw new GraphQLError("Cannot create an admin invite!");
      }
      const token = uuidv1().replace(/-/g, "");
      return await ctx.prisma.invite.create({
        data: {
          email,
          role,
          token,
          clients: {
            connect: clients.map((id) => ({ id })),
          },
        },
      });
    },
    async createUserWithInvite(
      _: any,
      {
        email,
        name,
        password,
        token,
      }: { email: string; name: string; password: string; token: string },
      ctx: GraphQLContext
    ) {
      const invite = await ctx.prisma.invite.findUnique({
        where: { token },
        include: { clients: true },
      });
      if (!invite || invite.email !== email) {
        throw new GraphQLError("Invalid token or email!");
      }
      const hashPassword = await Bun.password.hash(password, {
        algorithm: "bcrypt",
        cost: 4,
      });

      const user = await ctx.prisma.user.create({
        data: {
          email,
          name,
          password: hashPassword,
          role: invite.role,
          clients: {
            connect: invite.clients.map(({ id }) => ({ id })),
          },
        },
      });
      await ctx.prisma.invite.update({
        where: { token },
        data: { usedAt: new Date() },
      });
      return user;
    },
    async updatePassword(
      _: any,
      {
        email,
        password,
        newPassword,
      }: { email: string; password: string; newPassword: string },
      ctx: GraphQLContext
    ) {
      const user = await ctx.prisma.user.findUnique({ where: { email } });
      const isPasswordValid = await validatePassword(user, password);
      if (!isPasswordValid) throw new GraphQLError("Unauthorized");

      const hashPassword = await Bun.password.hash(newPassword, {
        algorithm: "bcrypt",
        cost: 4,
      });
      return await ctx.prisma.user.update({
        where: { email },
        data: {
          password: hashPassword,
        },
      });
    },
    async createRecomendation(
      _: any,
      { text, clientId }: { text: string; clientId: number },
      ctx: GraphQLContext
    ) {
      return await ctx.prisma.recomendation.create({
        data: {
          text,
          clientId,
        },
      });
    },
    async createDisclaimer(
      _: any,
      { text, clientId }: { text: string; clientId: number },
      ctx: GraphQLContext
    ) {
      return await ctx.prisma.disclaimer.create({
        data: {
          text,
          clientId,
        },
      });
    },
    async updateRecomendation(
      _: any,
      { id, text }: { id: number; text: string },
      ctx: GraphQLContext
    ) {
      return await ctx.prisma.recomendation.update({
        where: { id },
        data: { text },
      });
    },
    async updateDisclaimer(
      _: any,
      { id, text }: { id: number; text: string },
      ctx: GraphQLContext
    ) {
      return await ctx.prisma.disclaimer.update({
        where: { id },
        data: { text },
      });
    },
  },
};

export default resolvers;
