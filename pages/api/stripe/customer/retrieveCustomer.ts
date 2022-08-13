import { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import Stripe from 'stripe';
import { SubscriptionWithPlan } from '../../../../types/stripe';
import { authOptions } from '../../auth/[...nextauth]';

// Loads Stripe package for Node environment
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-08-01',
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
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    if (req.method === 'GET') {
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
        let lastFour: string | undefined;
        const defaultPaymentMethod =
          customer.subscriptions.data[0].default_payment_method;
        if (typeof defaultPaymentMethod === 'string') {
          lastFour = (
            await stripe.paymentMethods.retrieve(defaultPaymentMethod)
          ).card?.last4;
          if (typeof lastFour === 'undefined')
            throw new Error('Last four cannot be undefined');
        } else {
          throw new Error('Failed to retrieve last four of payment method');
        }

        // retrieve Stripe product object
        // https://stripe.com/docs/api/products?lang=node
        const subscription = customer.subscriptions
          .data[0] as SubscriptionWithPlan;
        const subscriptionProduct = subscription.plan.product;
        const productObject = await stripe.products.retrieve(
          subscriptionProduct
        );

        // retrieve Stripe price object
        // https://stripe.com/docs/api/prices?lang=node
        let price: number | null;
        if (typeof productObject.default_price === 'string') {
          price = (await stripe.prices.retrieve(productObject.default_price))
            .unit_amount;
          if (typeof price === null) throw new Error('price cannot be null');
        } else {
          throw new Error('default_price of product object must be string');
        }
        res.status(200).json({
          lastFour: lastFour,
          subscription: productObject.name,
          price: price,
        });
        return;
      } catch (err) {
        console.log(err);
        const errorMessage =
          err instanceof Error ? err.message : 'Internal server error';
        res.status(500).json({ statusCode: 500, message: errorMessage });
      }
    } else {
      res.setHeader('Allow', 'GET');
      res.status(405).end('Method Not Allowed');
    }
  } else {
    res
      .status(401)
      .end('You must be signed-in to view the protected content on this page');
  }
}
