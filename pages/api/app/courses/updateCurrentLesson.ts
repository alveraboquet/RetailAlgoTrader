import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../../db/index';
import { getSession } from 'next-auth/react';

/**
 *
 * @param req - PUT req from footerLesson to update current lesson
 * @param res - 405 if not PUT req, 200 if successful,
 */
const updateCurrentLesson = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getSession({ req });
  if (session) {
    if (req.method !== 'PUT') {
      res.status(405).send({ message: 'Only PUT requests allowed' });
    }
    try {
      const { user } = session;
      const lessonData = JSON.parse(req.body);
      // Generate SQL statement
      const statement = `UPDATE "User_Course"
                          SET current_lesson = $1, current_chapter = $2
                          WHERE user_id = $3`;
      const values = [lessonData.nextLesson, lessonData.nextChapter, user.id];

      // Execute SQL statement
      const result = await pool.query(statement, values);

      if (result) {
        res.status(200).json({ success: 'Current Lesson Updated' });
      }

      throw new Error('No result returned from DB');
    } catch (err) {
      console.log(err);
      res.status(500).send('Failed to update current lesson');
    }
  } else {
    res
      .status(401)
      .send('You must be signed-in to view the protected content on this page');
  }
};

export default updateCurrentLesson;
