import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../../db/index';
import { getSession } from 'next-auth/react';

const changeAccountDetails = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getSession({ req });
  if (session) {
    if (req.method !== 'PUT') {
      res.status(405).send({ message: 'Only PUT requests allowed' });
    }
    try {
      const { user } = session;
      const reqData = JSON.parse(req.body);
      // Generate SQL statement
      const statement = `UPDATE "User"
                           SET name = $1, email = $2
                           WHERE "User".id = $3`;
      const values = [reqData.newName, reqData.newEmail, user.id];

      // Execute SQL statement
      const result = await pool.query(statement, values);

      if (result) {
        res.status(200).json({ success: 'Account settings updated' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send('Unable to update account settings');
    }
  } else {
    res
      .status(401)
      .send('You must be signed-in to view the protected content on this page');
  }
};

export default changeAccountDetails;
