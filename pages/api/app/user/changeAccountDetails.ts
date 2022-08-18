import type { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import pool from '../../../../db/index';
import {
  validateAlphaData,
  validateEmail,
  validateAlphaNumericData,
} from '../../../../lib/validateData';
import { authOptions } from '../../auth/[...nextauth]';

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
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return res
      .status(401)
      .end('You must be signed-in to view the protected content on this page');
  }

  if (req.method !== 'PUT') {
    res.setHeader('Allow', 'PUT');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { user } = session;
    const reqData = JSON.parse(req.body);
    const newName = reqData.newName;
    const newEmail = reqData.newEmail;

    const validatedUserId = validateAlphaNumericData(user.id, 1, 255);
    const validatedNewName = validateAlphaData(newName, 1, 255);
    const validatedNewEmail = validateEmail(newEmail, 1, 255);

    if (!validatedUserId || !validatedNewName || !validatedNewEmail) {
      return res.status(400).end('Invalid name input');
    }

    // Generate SQL statement
    const statement = `UPDATE "User"
                             SET name = $1, email = $2
                             WHERE "User".id = $3`;
    const values = [validatedNewName, validatedNewEmail, validatedUserId];

    // Execute SQL statement
    const result = await pool.query(statement, values);

    if (result) {
      res.status(200).json({ success: 'Account settings updated' });
      return;
    }

    throw new Error('No results returned from table');
  } catch (err) {
    console.log(err);
    res.status(500).end('Unable to update account settings');
  }
};

export default changeAccountDetails;
