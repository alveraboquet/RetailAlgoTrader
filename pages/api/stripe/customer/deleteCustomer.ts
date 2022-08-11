import { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import Stripe from 'stripe';
import { authOptions } from '../../auth/[...nextauth]';

// Loads Stripe package for Node environment
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-08-01',
});

/**
 *
 * @param req - DELETE request from account info page
 * @param res - 405 if not DELETE req, 204 if successful delete, 500 if error, 401 if not signed-in user
 * https://stripe.com/docs/api/customers/delete?lang=node
 */
const deleteCustomer = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions);

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
};

export default deleteCustomer;
