import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../../db/index';
import { getSession } from 'next-auth/react';

const findEnrolledCoursesByUser = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getSession({ req });
  if (session) {
    try {
      const { user } = session;
      // Generate SQL statement
      const statement = `SELECT course_id, enrolled, current_chapter, current_lesson
                           FROM "User_Course"
                           WHERE user_id = $1`;
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

export default findEnrolledCoursesByUser;
