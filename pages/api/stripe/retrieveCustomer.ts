import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { getSession } from 'next-auth/react';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2020-08-27',
});

/**
 * Next API path to retrieve a customer's data from Stripe
 * @param req
 * @param res
 */
export default async function retrieveCustomer(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (session) {
    if (req.method !== 'GET') {
      res.status(405).send({ message: 'Only GET requests allowed' });
    }
    try {
      const customer = await stripe.customers.retrieve(
        session.user.stripeCustomerId,
        {
          expand: ['subscriptions'],
        }
      );
      if (
        customer.deleted === true ||
        customer.subscriptions === undefined ||
        customer.subscriptions.data.length === 0
      ) {
        res.status(204).send('');
        return;
      }
      const paymentMethod = await stripe.paymentMethods.retrieve(
        customer.subscriptions.data[0].default_payment_method
      );
      const subscription = await stripe.products.retrieve(
        customer.subscriptions.data[0].plan.product
      );
      const subscriptionPrice = await stripe.prices.retrieve(
        subscription.default_price
      );
      res.status(200).json({
        lastFour: paymentMethod.card?.last4,
        subscription: subscription.name,
        price: subscriptionPrice.unit_amount,
      });
      return;
    } catch (err) {
      console.log(err);
      const errorMessage =
        err instanceof Error ? err.message : 'Internal server error';
      res.status(500).json({ statusCode: 500, message: errorMessage });
    }
  } else {
    res
      .status(401)
      .send('You must be signed-in to view the protected content on this page');
  }
}
