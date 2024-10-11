import { GraphQLError } from "graphql";
import SECRET from "../constant/secret";
import type { GraphQLContext } from "../types/context";
import jwt from "jsonwebtoken";

const resolvers = {
  Client: {
    devices: async (parent: any, _: any, ctx: GraphQLContext) => {
      return await ctx.prisma.device.findMany({
        where: { clientId: parent.id },
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
      return await ctx.prisma.client.findMany();
    },
    async client(_: any, { id }: { id: number }, ctx: GraphQLContext) {
      const client = await ctx.prisma.client.findUnique({
        where: { id },
      });
      return client;
    },
    async devices(_: any, __: any, ctx: GraphQLContext) {
      return await ctx.prisma.device.findMany();
    },
    async device(_: any, { id }: { id: number }, ctx: GraphQLContext) {
      const device = await ctx.prisma.device.findUnique({
        where: { id },
      });
      return device;
    },
    async login(
      _: any,
      { email, password }: { email: string; password: string },
      ctx: GraphQLContext
    ) {
      const user = await ctx.prisma.user.findUnique({
        where: { email },
      });
      if (!user || user?.password !== password)
        throw new GraphQLError("Unauthorized");

      const token = jwt.sign(
        {
          sub: user.id,
          name: user.name,
          scope: user.role,
        },
        SECRET,
        { expiresIn: "1d" }
      );

      return token;
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
      return await ctx.prisma.user.create({
        data: {
          email,
          name,
          password,
        },
      });
    },
  },
};

export default resolvers;
