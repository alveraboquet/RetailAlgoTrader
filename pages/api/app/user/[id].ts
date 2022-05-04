import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../../db/index';

const findUserById = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      query: { id },
    } = req;
    // Generate SQL statement
    const statement = `SELECT first_name
                         FROM member
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
};

export default findUserById;
