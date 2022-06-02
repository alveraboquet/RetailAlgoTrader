import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../../db/index';
import { getSession } from 'next-auth/react';

const updateCurrentLesson = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getSession({ req });
  if (session) {
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

export default updateCurrentLesson;
