import { PrismaClient } from '@prisma/client'
import type { GraphQLContext } from './types/context'
 
const prisma = new PrismaClient()
 
export function createContext(): GraphQLContext {
  return { prisma }
}