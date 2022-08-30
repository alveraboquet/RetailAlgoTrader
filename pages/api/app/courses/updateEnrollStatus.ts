import type { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import pool from '../../../../db/index';
import { validateNumericData } from '../../../../lib/validateData';
import { authOptions } from '../../auth/[...nextauth]';

/**
 *
 * @param req - PUT req from dashboard to update enroll status of course
 * @param res - 405 if not PUT req, 200 if successful,
 */
const updateEnrollStatus = async (
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

    // Validate data
    const validatedCourseId = validateNumericData(reqData.courseId, 1, 3);
    if (!validatedCourseId) {
      return res.status(400).end('Request failed validation');
    }

    // Generate SQL statement
    const statement = `UPDATE "User_Course"
                            SET enrolled = true
                            WHERE course_id = $1 AND user_id = $2`;
    const values = [validatedCourseId, user.id];

    // Execute SQL statement
    const result = await pool.query(statement, values);

    if (result) {
      res.status(200).json({ success: 'Course enroll status updated' });
      return;
    }

    throw new Error('No result returned from DB');
  } catch (err) {
    console.log(err);
    res.status(500).end('Failed to update course enroll status');
  }
};

export default updateEnrollStatus;
