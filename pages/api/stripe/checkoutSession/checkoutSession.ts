import { NextApiRequest, NextApiResponse } from 'next';
import { MONTHLY_AMOUNT, ANNUAL_AMOUNT } from '../../../../stripe.config';
import Stripe from 'stripe';
import { getSession } from 'next-auth/react';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2020-08-27',
});

/**
 * Next API path to connect with Stripe API
 * @param req
 * @param res
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (session) {
    if (req.method === 'POST') {
      const amount: number = req.body.amount;
      try {
        let subscriptionType;
        // Validate the amount that was passed from the client.
        if (amount === MONTHLY_AMOUNT)
          subscriptionType = process.env.STRIPE_MONTHLY_SUBSCRIPTION;
        else if (amount === ANNUAL_AMOUNT)
          subscriptionType = process.env.STRIPE_ANNUAL_SUBSCRIPTION;
        else throw new Error();
        // Create Checkout Sessions from body params.
        const params: Stripe.Checkout.SessionCreateParams = {
          mode: 'subscription',
          customer: session.user.stripeCustomerId,
          payment_method_types: ['card'],
          line_items: [
            {
              price: subscriptionType, // Product API Key from Stripe
              quantity: 1,
            },
          ],
          success_url: `${req.headers.origin}/app/result?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/app/proSignup`,
          subscription_data: {
            metadata: {
              // Adds note on Stripe so we can manually check if a user is Pro member
              payingUserId: session.user.id,
            },
          },
        };
        const checkoutSession: Stripe.Checkout.Session =
          await stripe.checkout.sessions.create(params);
        res.status(200).json(checkoutSession);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Internal server error';
        res.status(500).json({ statusCode: 500, message: errorMessage });
      }
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  } else {
    res
      .status(401)
      .send('You must be signed-in to view the protected content on this page');
  }
}
