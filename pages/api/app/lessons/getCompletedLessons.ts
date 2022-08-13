import type { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import prisma from '../../../../prisma/sharedClient';
import { authOptions } from '../../auth/[...nextauth]';

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
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    if (req.method === 'GET') {
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
        res.status(500).send('Failed to retrieve completed lessons data');
      }
    } else {
      res.setHeader('Allow', 'GET');
      res.status(405).end('Method Not Allowed');
    }
  } else {
    res
      .status(401)
      .send('You must be signed-in to view the protected content on this page');
  }
};

export default getCompletedLessons;
