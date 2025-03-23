import type { GraphQLContext } from "@/types/context";

const resolvers = {
  Query: {
    async securityEvents(
      _: unknown,
      { clientId }: { clientId: number },
      ctx: GraphQLContext,
    ) {
      return await ctx.prisma.securityEvent.findMany({
        where: { device: { clientId: clientId } },
      });
    },
  },
};

export default resolvers;
