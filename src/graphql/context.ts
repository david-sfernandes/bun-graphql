import type { GraphQLContext } from "../types/context";
import prisma from "../db/prisma";

export function createContext(): GraphQLContext {
  return { prisma };
}
