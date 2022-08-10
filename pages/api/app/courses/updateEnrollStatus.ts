import type { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import pool from '../../../../db/index';
import { validateNumericData } from '../../../../lib/validateData';
import { authOptions } from '../../auth/[...nextauth]';

/**
 *
 * @param req - PUT req from footerLesson to update current lesson
 * @param res - 405 if not PUT req, 200 if successful,
 */
const updateCurrentLesson = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    if (req.method !== 'PUT') {
      res.status(405).send({ message: 'Only PUT requests allowed' });
    }
    try {
      const { user } = session;
      const reqData = JSON.parse(req.body);

      // Validate data
      const validatedCourseId = validateNumericData(reqData.courseId, 1, 3);
      if (!validatedCourseId) {
        return res.status(400).send('Request failed validation');
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
      res.status(500).send('Failed to update course enroll status');
    }
  } else {
    res
      .status(401)
      .send('You must be signed-in to view the protected content on this page');
  }
};

export default updateCurrentLesson;
