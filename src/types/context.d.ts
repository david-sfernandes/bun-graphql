import type { PrismaClient } from "@prisma/client";

type GraphQLContext = {
  prisma: PrismaClient;
  request: Request;
  jwt?: {
    payload: JwtPayload;
  };
};
