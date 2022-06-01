import type { PrismaClient as PrismaClientType } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClientType;
}

export {};
