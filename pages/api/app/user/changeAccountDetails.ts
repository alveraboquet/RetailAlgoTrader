import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../../db/index';
import { getSession } from 'next-auth/react';
import validator from 'validator';

/**
 *
 * @param req - PUT req to modify name, email in DB
 * @param res - 405 if not PUT req, 400 if invalid input, 200 if successful, 500 if error, 401 if non-signed in user
 * @returns - res status code and message
 */
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
      let newName = reqData.newName;
      let newEmail = reqData.newEmail;
      // validate user input for name field
      if (
        validator.isLength(newName, { min: 1, max: 20 }) &&
        validator.isAlpha(newName)
      ) {
        newName = validator.trim(newName);
        newName = validator.escape(newName);
      } else {
        res.status(400).send('Invalid name input');
        return;
      }
      // validate user input for email field
      if (
        validator.isEmail(newEmail) &&
        validator.isLength(newEmail, { min: 1, max: 200 })
      ) {
        newEmail = validator.normalizeEmail(newEmail);
        newEmail = validator.trim(newEmail);
        newEmail = validator.escape(newEmail);
      } else {
        res.status(400).send('Invalid email input');
        return;
      }

      // Generate SQL statement
      const statement = `UPDATE "User"
                           SET name = $1, email = $2
                           WHERE "User".id = $3`;
      const values = [newName, newEmail, user.id];

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
