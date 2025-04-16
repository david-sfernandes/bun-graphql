import type { GraphQLContext } from "@/types/context";

const resolvers = {
  Mutation: {
    async createRecomendation(
      _: unknown,
      { text, clientId }: { text: string; clientId: number },
      ctx: GraphQLContext,
    ) {
      return await ctx.prisma.recomendation.create({
        data: { text, clientId },
      });
    },
    async createDisclaimer(
      _: unknown,
      { text, clientId }: { text: string; clientId: number },
      ctx: GraphQLContext,
    ) {
      return await ctx.prisma.disclaimer.create({
        data: { text, clientId },
      });
    },
    async updateRecomendation(
      _: unknown,
      { id, text }: { id: number; text: string },
      ctx: GraphQLContext,
    ) {
      return await ctx.prisma.recomendation.update({
        where: { id },
        data: { text },
      });
    },
    async updateDisclaimer(
      _: unknown,
      { id, text }: { id: number; text: string },
      ctx: GraphQLContext,
    ) {
      return await ctx.prisma.disclaimer.update({
        where: { id },
        data: { text },
      });
    },
    async deleteRecomendation(
      _: unknown,
      { id }: { id: number },
      ctx: GraphQLContext,
    ) {
      return await ctx.prisma.recomendation.delete({
        where: { id },
      });
    },
    async deleteDisclaimer(
      _: unknown,
      { id }: { id: number },
      ctx: GraphQLContext,
    ) {
      return await ctx.prisma.disclaimer.delete({
        where: { id },
      });
    },
  },
};

export default resolvers;
