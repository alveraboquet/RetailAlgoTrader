import { NextApiRequest, NextApiResponse } from 'next';
import {
  CURRENCY,
  MONTHLY_AMOUNT,
  ANNUAL_AMOUNT,
} from '../../../../stripe.config';
import { formatAmountForStripe } from '../../../../lib/stripeHelpers';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
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
  if (req.method === 'POST') {
    const amount: number = req.body.amount;
    try {
      // Validate the amount that was passed from the client.
      if (amount === MONTHLY_AMOUNT || amount === ANNUAL_AMOUNT) {
        // Create Checkout Sessions from body params.
        const params: Stripe.Checkout.SessionCreateParams = {
          submit_type: 'pay',
          payment_method_types: ['card'],
          line_items: [
            {
              name: 'Pay RetailAlgoTrader',
              amount: formatAmountForStripe(amount, CURRENCY),
              currency: CURRENCY,
              quantity: 1,
            },
          ],
          success_url: `${req.headers.origin}/app/result?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/app/proSignup`,
        };
        const checkoutSession: Stripe.Checkout.Session =
          await stripe.checkout.sessions.create(params);

        res.status(200).json(checkoutSession);
      } else {
        res
          .status(500)
          .json({ statusCode: 500, message: 'Unable to Complete Request' });
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Internal server error';
      res.status(500).json({ statusCode: 500, message: errorMessage });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
