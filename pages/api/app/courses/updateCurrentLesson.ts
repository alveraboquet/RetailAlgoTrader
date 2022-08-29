import type { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import pool from '../../../../dbConfig';
import { validateAlphaNumericData } from '../../../../lib/validateData';
import { authOptions } from '../../auth/[...nextauth]';
import coursesData from '../../../../components/landingPages/coursesData';

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

    const courseId = coursesData[lessonData.course].id;

    // Generate SQL statement
    const statement = `UPDATE "User_Course"
                            SET current_lesson = $1, current_chapter = $2
                            WHERE user_id = $3 AND course_id = $4`;
    const values = [
      validatedNextLesson,
      validatedNextChapter,
      user.id,
      courseId,
    ];

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
};

export default updateCurrentLesson;
