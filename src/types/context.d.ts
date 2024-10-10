import type { PrismaClient } from "@prisma/client"

type GraphQLContext = {
  prisma: PrismaClient
}