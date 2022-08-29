import type { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import pool from '../../../../db/index';
import { authOptions } from '../../auth/[...nextauth]';

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
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return res
      .status(401)
      .end('You must be signed-in to view the protected content on this page');
  }

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { user } = session;
    // Generate SQL statement
    const statement = `SELECT name, email
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
    res.status(500).end('Unable to retrieve account settings');
  }
};

export default retrieveAccountDetails;
