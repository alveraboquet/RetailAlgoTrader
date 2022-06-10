import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../../db/index';
import { getSession } from 'next-auth/react';

/**
 *
 * @param req - GET req to retrieve courses currently enrolled in
 * @param res - 405 if not GET req, 200 if successful, 500 if error, 401 if non-signed in user
 * @returns
 */
const findEnrolledCoursesByUser = async (
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
      const statement = `SELECT course_id, enrolled, current_chapter, current_lesson
                           FROM "User_Course"
                           WHERE user_id = $1`;
      const values = [user.id];

      // Execute SQL statement
      const result = await pool.query(statement, values);

      if (result.rows?.length) {
        res.status(200).json(result.rows);
      }

      throw new Error('No results returned from table');
    } catch (err) {
      console.log(err);
      res.status(500).send('Failed to retrieve completed courses data');
    }
  } else {
    res
      .status(401)
      .send('You must be signed-in to view the protected content on this page');
  }
};

export default findEnrolledCoursesByUser;
