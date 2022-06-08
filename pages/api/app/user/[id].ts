import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../../db/index';
import { getSession } from 'next-auth/react';

const findUserById = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (session) {
    if (req.method !== 'GET') {
      res.status(405).send({ message: 'Only GET requests allowed' });
    }
    try {
      const {
        query: { id },
      } = req;
      // Generate SQL statement
      const statement = `SELECT name
                           FROM "User"
                           WHERE id = $1`;
      const values = [id];

      // Execute SQL statement
      const result = await pool.query(statement, values);

      if (result.rows?.length) {
        res.status(200).json(result.rows[0]);
      }

      return null;
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
