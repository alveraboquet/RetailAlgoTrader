import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../../db/index';
import { getSession } from 'next-auth/react';

/**
 *
 * @param req - GET request to retrieve account details from DB
 * @param res - 405 if not GET req, 200 if successful, 500 if error, 401 if non-signed in user
 * @returns - null if no user data returned from DB
 */
const retrieveAccountDetails = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getSession({ req });
  if (session) {
    if (req.method !== 'GET') {
      res.status(405).send({ message: 'Only GET requests allowed' });
    }
    try {
      const { user } = session;
      // Generate SQL statement
      const statement = `SELECT name, email, provider
                           FROM "User"
                           JOIN "Account" ON ("Account"."userId" = "User".id)
                           WHERE "User".id = $1`;
      const values = [user.id];

      // Execute SQL statement
      const result = await pool.query(statement, values);

      if (result.rows?.length) {
        res.status(200).json(result.rows[0]);
        return;
      }

      throw new Error('No result returned from DB');
    } catch (err) {
      console.log(err);
      res.status(500).send('Unable to retrieve account settings');
    }
  } else {
    res
      .status(401)
      .send('You must be signed-in to view the protected content on this page');
  }
};

export default retrieveAccountDetails;
