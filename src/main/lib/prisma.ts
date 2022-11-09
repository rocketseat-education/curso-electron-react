import * as Prisma from '../generated/prisma/index'
import { resolve } from 'path'

let prisma: Prisma.PrismaClient = {} as Prisma.PrismaClient

export async function getPrismaInstance() {
  const { PrismaClient } = (await import(resolve(__dirname, 'index'))) as {
    PrismaClient: typeof Prisma.PrismaClient
  }

  if (!prisma?.$connect) {
    prisma = new PrismaClient({
      log: ['query'],
    })
  }

  return prisma
}
