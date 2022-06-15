import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { getSession } from 'next-auth/react';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2020-08-27',
});

export default async function deleteCustomer(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (session) {
    if (req.method !== 'DELETE') {
      res.status(405).send({ message: 'Only DELETE requests allowed' });
    }
    try {
      await stripe.customers.del(session.user.stripeCustomerId);
      res.status(204).send('');
    } catch (err) {
      console.log(err);
      res.status(500).send('Unable to delete Stripe customer');
    }
  } else {
    res
      .status(401)
      .send('You must be signed-in to view the protected content on this page');
  }
}
