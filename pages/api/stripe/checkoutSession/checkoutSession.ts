import { NextApiRequest, NextApiResponse } from 'next';
import { MONTHLY_AMOUNT, ANNUAL_AMOUNT } from '../../../../stripe.config';
import Stripe from 'stripe';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]';

// Load Stripe package for Node environment
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-08-01',
});

/**
 * Next API path to connect with Stripe API
 * @param req - POST request to create checkout session with Stripe API
 * @param res - 200 if successful, 500 if error, 405 if not POST req, 401 if non-signed in user
 * https://vercel.com/guides/getting-started-with-nextjs-typescript-stripe
 * https://stripe.com/docs/api/checkout/sessions?lang=node
 * https://dev.to/ajones_codes/how-to-add-user-accounts-and-paid-subscriptions-to-your-nextjs-website-585e
 */
export default async function handler(
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
    const amount: number = req.body.amount;
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
      success_url: `${req.headers.origin}/app/proConfirmation`,
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
}
