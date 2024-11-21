import type { GraphQLContext } from "@/types/context";

const resolvers = {
  Mutation: {
    async createRecomendation(
      _: any,
      { text, clientId }: { text: string; clientId: number },
      ctx: GraphQLContext,
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
      ctx: GraphQLContext,
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
      ctx: GraphQLContext,
    ) {
      return await ctx.prisma.recomendation.update({
        where: { id },
        data: { text },
      });
    },
    async updateDisclaimer(
      _: any,
      { id, text }: { id: number; text: string },
      ctx: GraphQLContext,
    ) {
      return await ctx.prisma.disclaimer.update({
        where: { id },
        data: { text },
      });
    },
    async deleteRecomendation(
      _: any,
      { id }: { id: number },
      ctx: GraphQLContext,
    ) {
      return await ctx.prisma.recomendation.delete({
        where: { id },
      });
    },
    async deleteDisclaimer(
      _: any,
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
