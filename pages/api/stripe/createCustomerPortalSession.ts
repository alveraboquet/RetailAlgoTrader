import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { getSession } from 'next-auth/react';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2020-08-27',
});

// Redirects user to account interface handled by Stripe
export default async function createCustomerPortalSession(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (session) {
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' });
    }
    try {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: session.user.stripeCustomerId,
        return_url: 'http://localhost:3000/app/accountManagement',
      });
      res.writeHead(302, { Location: stripeSession.url }).end();
    } catch (err) {
      console.log(err);
      res.status(500).send('Unable to open Stripe customer portal session');
    }
  } else {
    res
      .status(401)
      .send('You must be signed-in to view the protected content on this page');
  }
}
