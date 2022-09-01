import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../../db/index';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]';

/**
 *
 * @param req - GET req to retrieve a user's completed chapters
 * @param res - 405 if not GET req, 200 if successful, 500 if error, 401 if non-signed in user
 */
const getCompletedLessonsByCourse = async (
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
    const statement = `SELECT "User_Lesson".*, "Lesson".chapter_id, "Chapter".course_id
                            FROM "User_Lesson"
                            INNER JOIN "Lesson"
                            ON "User_Lesson".lesson_id = "Lesson".id
                            INNER JOIN "Chapter"
                            ON "Lesson".chapter_id = "Chapter".id
                            WHERE "User_Lesson".user_id = $1
                            ORDER BY "Chapter".course_id DESC`;
    const values = [user.id];

    // Execute SQL statement
    const result = await pool.query(statement, values);

    if (result.rows?.length) {
      return res.status(200).json(result.rows);
    }

    throw new Error('No results returned from table');
  } catch (err) {
    console.log(err);
    return res.status(500).end('Failed to retrieve completed chapters data');
  }
};

export default getCompletedLessonsByCourse;
