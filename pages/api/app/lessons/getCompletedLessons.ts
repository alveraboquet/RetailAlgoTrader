import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '../../../../prisma/sharedClient';

/**
 *
 * @param req - GET req to retrieve a user's completed lessons
 * @param res - 405 if not GET req, 200 if successful, 500 if error, 401 if non-signed in user
 * @returns - nothing
 */
const getCompletedLessons = async (
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
      const result = await prisma.user_Lesson.findMany({
        where: { user_id: user.id },
      });

      if (result.length) {
        res.status(200).json(result);
        return;
      }

      throw new Error('No results returned from table');
    } catch (err) {
      console.log(err);
      res.status(500).send('Failed to retrieve course data');
    }
  } else {
    res
      .status(401)
      .send('You must be signed-in to view the protected content on this page');
  }
};

export default getCompletedLessons;
