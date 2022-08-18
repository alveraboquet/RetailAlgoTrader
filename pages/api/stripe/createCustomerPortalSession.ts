import { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import Stripe from 'stripe';
import { authOptions } from '../auth/[...nextauth]';

// Loads Stripe package for Node environment
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-08-01',
});

/**
 *
 * @param req - POST req to redirect user to account interface handled by Stripe
 * @param res - 405 if not POST req, 302 if successful redirect to Stripe portal, 500 if error, 401 if non-signed in user
 */
export default async function createCustomerPortalSession(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return res
      .status(401)
      .end('You must be signed-in to view the protected content on this page');
  }

  if (req.method === 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const stripeSession = await stripe.billingPortal.sessions.create({
      customer: session.user.stripeCustomerId,
      return_url: 'http://localhost:3000/app/accountManagement',
    });
    res.writeHead(302, { Location: stripeSession.url }).end();
  } catch (err) {
    console.log(err);
    res.status(500).end('Unable to open Stripe customer portal session');
  }
}
