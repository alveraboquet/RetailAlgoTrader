import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { getSession } from 'next-auth/react';

//https://billing.stripe.com/session/test_YWNjdF8xTDVaaHZHeE5RM3dJd0FmLF9McUFERDFvbUh5cFJVTUNacTJjQlpRUXRhOG1YbUh40100nES7JTaX
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2020-08-27',
});

/**
 * Next API path to delete a customer from Stripe and the DB
 * @param req
 * @param res
 */
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
