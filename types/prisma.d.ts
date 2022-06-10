import type { PrismaClient as PrismaClientType } from '@prisma/client';

declare global {
  // supports global prisma client for use in development in sharedClient file
  // let and const cause errors to be thrown in the Prisma sharedClient file
  // eslint-disable-next-line no-var
  var prisma: PrismaClientType;
}

declare namespace Prisma {
  interface UserUpdateArgs {
    stripeCustomerId: string;
  }
}

export {};
