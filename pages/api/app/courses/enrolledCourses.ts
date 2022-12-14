import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../../db/index';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]';

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
    const statement = `SELECT course_id, enrolled, current_chapter, current_lesson
                             FROM "User_Course"
                             WHERE user_id = $1`;
    const values = [user.id];

    // Execute SQL statement
    const result = await pool.query(statement, values);

    if (result.rows?.length) {
      res.status(200).json(result.rows);
      return;
    }

    throw new Error('No results returned from table');
  } catch (err) {
    console.log(err);
    res.status(500).end('Failed to retrieve enrolled courses data');
  }
};

export default findEnrolledCoursesByUser;
