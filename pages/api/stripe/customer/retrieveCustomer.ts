import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { getSession } from 'next-auth/react';

// Loads Stripe package for Node environment
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2020-08-27',
});

/**
 *
 * @param req - GET request for Stripe customer information
 * @param res - 405 if not GET request, 204 if no customer or subscription data, 200 if successful,
 *              500 if error, 401 if non-signed in user
 * @returns - response status code and message
 * https://stripe.com/docs/api/customers/retrieve?lang=node
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
          // adds subscription data to default stripe customer data object
          // https://stripe.com/docs/api/expanding_objects?lang=node
          // https://stripe.com/docs/api/subscriptions/object?lang=node
          expand: ['subscriptions'],
        }
      );
      // if customer has been deleted or there is no subscription data return 204 response
      if (
        customer.deleted === true ||
        customer.subscriptions === undefined ||
        customer.subscriptions.data.length === 0
      ) {
        res.status(204).send('');
        return;
      }
      // retrieve Stripe payment method object
      // https://stripe.com/docs/api/payment_methods?lang=node
      const paymentMethod = await stripe.paymentMethods.retrieve(
        customer.subscriptions.data[0].default_payment_method
      );
      // retrieve Stripe product object
      // https://stripe.com/docs/api/products?lang=node
      const subscription = await stripe.products.retrieve(
        customer.subscriptions.data[0].plan.product
      );
      // retrieve Stripe price object
      // https://stripe.com/docs/api/prices?lang=node
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
