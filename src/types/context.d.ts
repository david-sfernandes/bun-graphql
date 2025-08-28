import type { PrismaClient } from "@prisma/client";

export type GraphQLContext = {
  prisma: PrismaClient;
  request: Request;
  jwt?: {
    payload: JwtPayload;
  };
};
