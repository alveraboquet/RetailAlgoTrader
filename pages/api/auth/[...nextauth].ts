import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import Auth0Provider from 'next-auth/providers/auth0';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../prisma/sharedClient';
import Stripe from 'stripe';
import { populateUserCourse } from '../../../lib/nextAuthHelpers';

// https://next-auth.js.org/getting-started/example
// https://dev.to/ajones_codes/how-to-add-user-accounts-and-paid-subscriptions-to-your-nextjs-website-585e
export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID || '',
      clientSecret: process.env.FACEBOOK_SECRET || '',
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_ID || '',
      clientSecret: process.env.AUTH0_SECRET || '',
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  // Custome signin page
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    // Adds userId, stripeCustomerId, and isPro boolean from DB to the default session values
    session: async ({ session, user }) => {
      if (typeof user.id === 'string') session.user.id = user.id;
      if (typeof user.stripeCustomerId === 'string') {
        session.user.stripeCustomerId = user.stripeCustomerId;
      }
      if (typeof user.isPro === 'boolean') session.user.isPro = user.isPro;
      return Promise.resolve(session);
    },
  },
  events: {
    // Creates a Stripe customer and populates database on signup
    createUser: async ({ user }) => {
      const userCourseRows = await populateUserCourse(user.id);
      console.log(userCourseRows);
      await prisma.user_Course.createMany({
        data: userCourseRows,
      });

      // Create stripe API client using the secret key env variable
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: '2020-08-27',
      });

      // Create a stripe customer for the user with their email address
      await stripe.customers
        .create({
          email: user.email!,
        })
        .then(async (customer) => {
          // Use the Prisma Client to update the user in the database with their new Stripe customer ID
          return prisma.user.update({
            where: { id: user.id },
            data: {
              stripeCustomerId: customer.id,
            },
          });
        });
    },
  },
});
