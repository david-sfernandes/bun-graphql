import validatePassword from "@/auth/validatePassword";
import SECRET from "@/constant/secret";
import type { GraphQLContext } from "@/types/context";
import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";
import { v1 as uuidv1 } from "uuid";

const resolvers = {
  Query: {
    async user(_: any, { email }: { email: string }, ctx: GraphQLContext) {
      return await ctx.prisma.user.findUnique({
        where: { email },
      });
    },
    async login(
      _: any,
      { email, password }: { email: string; password: string },
      ctx: GraphQLContext,
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
        { expiresIn: "1d" },
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
      ctx: GraphQLContext,
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
      ctx: GraphQLContext,
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
      ctx: GraphQLContext,
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
      ctx: GraphQLContext,
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
  },
};

export default resolvers;
