import type { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import pool from '../../../../db/index';
import { validateAlphaNumericData } from '../../../../lib/validateData';
import { authOptions } from '../../auth/[...nextauth]';

// Not currently used
const findUserById = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    if (req.method !== 'GET') {
      res.status(405).send({ message: 'Only GET requests allowed' });
    }
    try {
      const {
        query: { id },
      } = req;
      if (typeof id === 'string') {
        // Validate user id
        const validatedUserId = validateAlphaNumericData(id, 1, 255);
        if (!validatedUserId) {
          return res.status(400).send('Request failed validation');
        }

        // Generate SQL statement
        const statement = `SELECT name
                              FROM "User"
                              WHERE id = $1`;
        const values = [validatedUserId];

        // Execute SQL statement
        const result = await pool.query(statement, values);

        if (result.rows?.length) {
          res.status(200).json(result.rows[0]);
        }

        return null;
      } else {
        res.status(400).send('id must be string');
      }
    } catch (err) {
      if (typeof err === 'string') {
        throw new Error(err);
      }
    }
  } else {
    res
      .status(401)
      .send('You must be signed-in to view the protected content on this page');
  }
};

export default findUserById;
