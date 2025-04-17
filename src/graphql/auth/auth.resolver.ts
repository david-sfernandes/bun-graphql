import canSavePassword from "@/utils/auth/canSavePassword";
import hashPassword from "@/utils/auth/hashPassword";
import validatePassword from "@/utils/auth/validatePassword";
import SECRET from "@/constant/secret";
import type { GraphQLContext } from "@/types/context";
import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";
import { v1 as uuidv1 } from "uuid";

const resolvers = {
  Query: {
    async users(_: unknown, __: unknown, ctx: GraphQLContext) {
      return await ctx.prisma.user.findMany();
    },
    async invites(_: unknown, __: unknown, ctx: GraphQLContext) {
      return await ctx.prisma.invite.findMany();
    },
    async login(
      _: unknown,
      { email, password }: { email: string; password: string },
      ctx: GraphQLContext,
    ) {
      const user = await ctx.prisma.user.findUnique({
        where: { email },
        include: { clients: true },
      });
      const isPasswordValid = await validatePassword(user, password);
      if (!isPasswordValid || !user?.isActive)
        return new Error("Invalid password.");

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
      _: unknown,
      {
        email,
        name,
        password,
      }: { email: string; name: string; password: string },
      ctx: GraphQLContext,
    ) {
      const hash = await hashPassword(password);
      return await ctx.prisma.user.create({
        data: {
          email,
          name,
          password: hash,
          role: "ADMIN",
        },
      });
    },
    async createInvite(
      _: unknown,
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
      _: unknown,
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

      const isPasswordValid = await canSavePassword(password);
      if (!isPasswordValid) {
        throw new GraphQLError(
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character.",
        );
      }
      const hash = await hashPassword(password);

      const user = await ctx.prisma.user.create({
        data: {
          email,
          name,
          password: hash,
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
      _: unknown,
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

      const hash = await hashPassword(newPassword);
      return await ctx.prisma.user.update({
        where: { email },
        data: { password: hash },
      });
    },
    async deleteInvite(
      _: unknown,
      { id }: { id: string },
      ctx: GraphQLContext,
    ) {
      const invite = await ctx.prisma.invite.findUnique({ where: { id } });
      if (!invite) throw new GraphQLError("Invite not found!");
      if (invite.usedAt) throw new GraphQLError("Invite already used!");

      return await ctx.prisma.invite.delete({ where: { id } });
    },
    async blockUser(
      _: unknown,
      { email }: { email: string },
      ctx: GraphQLContext,
    ) {
      const user = await ctx.prisma.user.findUnique({ where: { email } });
      if (!user) throw new GraphQLError("User not found!");
      if (user.role === "ADMIN")
        throw new GraphQLError("Cannot block an admin!");

      return await ctx.prisma.user.update({
        where: { email },
        data: { isActive: false },
      });
    },
  },
};

export default resolvers;
