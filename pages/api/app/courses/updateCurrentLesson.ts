import type { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import pool from '../../../../db/index';
import { validateAlphaNumericData } from '../../../../lib/validateData';
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
    if (req.method === 'PUT') {
      try {
        const { user } = session;
        const lessonData = JSON.parse(req.body);

        // Validate data
        const validatedNextLesson = validateAlphaNumericData(
          lessonData.nextLesson,
          1,
          255
        );
        const validatedNextChapter = validateAlphaNumericData(
          lessonData.nextChapter,
          1,
          255
        );
        if (!validatedNextLesson || !validatedNextChapter) {
          return res.status(400).send('Request failed validation');
        }

        // Generate SQL statement
        const statement = `UPDATE "User_Course"
                            SET current_lesson = $1, current_chapter = $2
                            WHERE user_id = $3`;
        const values = [validatedNextLesson, validatedNextChapter, user.id];

        const statement2 = `UPDATE "User_Lesson"
                              SET completed = true
                              WHERE lesson_id = $1`;
        const values2 = [lessonData.currentLessonId];

        // Execute SQL statement
        const result1 = await pool.query(statement, values);
        const result2 = await pool.query(statement2, values2);

        if (result1 && result2) {
          res.status(200).json({ success: 'Current Lesson Updated' });
          return;
        }

        throw new Error('No result returned from DB');
      } catch (err) {
        console.log(err);
        res.status(500).end('Failed to update current lesson');
      }
    } else {
      res.setHeader('Allow', 'PUT');
      res.status(405).end('Method Not Allowed');
    }
  } else {
    res
      .status(401)
      .end('You must be signed-in to view the protected content on this page');
  }
};

export default updateCurrentLesson;
