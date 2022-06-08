import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../../db/index';
import { getSession } from 'next-auth/react';

const findCompletedChaptersByUser = async (
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
      const statement = `SELECT "User_Chapter".chapter_id, "User_Chapter".completed, "Course_Chapter".course_id
                           FROM "User_Chapter"
                           INNER JOIN "Course_Chapter"
                           ON "User_Chapter".chapter_id = "Course_Chapter".chapter_id
                           WHERE "User_Chapter".user_id = $1
                           ORDER BY "Course_Chapter".course_id DESC`;
      const values = [user.id];

      // Execute SQL statement
      const result = await pool.query(statement, values);

      if (result.rows?.length) {
        res.status(200).json(result.rows);
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

export default findCompletedChaptersByUser;
