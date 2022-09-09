import { rest } from 'msw';

// mock handlers for testing
const handlers = [
  rest.get('/api/app/courses/enrolledCourses', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          course_id: 1,
          enrolled: true,
        },
        {
          course_id: 2,
          enrolled: false,
        },
        {
          course_id: 5,
          enrolled: true,
        },
      ])
    );
  }),
  rest.get('/api/app/lessons/getCompletedLessonsByCourse', (req, res, ctx) => {
    // should return lessons ordered in DESC order by course_id
    return res(
      ctx.json([
        {
          user_id: 'cl7p17vyz0280eq0a5sls3a03',
          lesson_id: 11,
          completed: true,
          chapter_id: 4,
          course_id: 5,
        },
        {
          user_id: 'cl7p17vyz0280eq0a5sls3a03',
          lesson_id: 12,
          completed: true,
          chapter_id: 4,
          course_id: 5,
        },
        {
          user_id: 'cl7p17vyz0280eq0a5sls3a03',
          lesson_id: 13,
          completed: true,
          chapter_id: 4,
          course_id: 5,
        },
        {
          user_id: 'cl7p17vyz0280eq0a5sls3a03',
          lesson_id: 14,
          completed: true,
          chapter_id: 4,
          course_id: 5,
        },
        {
          user_id: 'cl7p17vyz0280eq0a5sls3a03',
          lesson_id: 15,
          completed: true,
          chapter_id: 4,
          course_id: 5,
        },
        {
          user_id: 'cl7p17vyz0280eq0a5sls3a03',
          lesson_id: 16,
          completed: false,
          chapter_id: 4,
          course_id: 5,
        },
        {
          user_id: 'cl7p17vyz0280eq0a5sls3a03',
          lesson_id: 17,
          completed: false,
          chapter_id: 5,
          course_id: 5,
        },
        {
          user_id: 'cl7p17vyz0280eq0a5sls3a03',
          lesson_id: 18,
          completed: false,
          chapter_id: 6,
          course_id: 5,
        },
        {
          user_id: 'cl7p17vyz0280eq0a5sls3a03',
          lesson_id: 19,
          completed: false,
          chapter_id: 6,
          course_id: 5,
        },
        {
          user_id: 'cl7p17vyz0280eq0a5sls3a03',
          lesson_id: 20,
          completed: false,
          chapter_id: 6,
          course_id: 5,
        },
        {
          user_id: 'cl7p17vyz0280eq0a5sls3a03',
          lesson_id: 1,
          completed: true,
          chapter_id: 1,
          course_id: 1,
        },
        {
          user_id: 'cl7p17vyz0280eq0a5sls3a03',
          lesson_id: 2,
          completed: true,
          chapter_id: 1,
          course_id: 1,
        },
        {
          user_id: 'cl7p17vyz0280eq0a5sls3a03',
          lesson_id: 3,
          completed: true,
          chapter_id: 1,
          course_id: 1,
        },
        {
          user_id: 'cl7p17vyz0280eq0a5sls3a03',
          lesson_id: 4,
          completed: false,
          chapter_id: 1,
          course_id: 1,
        },
        {
          user_id: 'cl7p17vyz0280eq0a5sls3a03',
          lesson_id: 5,
          completed: false,
          chapter_id: 2,
          course_id: 1,
        },
        {
          user_id: 'cl7p17vyz0280eq0a5sls3a03',
          lesson_id: 6,
          completed: false,
          chapter_id: 2,
          course_id: 1,
        },
        {
          user_id: 'cl7p17vyz0280eq0a5sls3a03',
          lesson_id: 7,
          completed: false,
          chapter_id: 2,
          course_id: 1,
        },
        {
          user_id: 'cl7p17vyz0280eq0a5sls3a03',
          lesson_id: 8,
          completed: false,
          chapter_id: 2,
          course_id: 1,
        },
        {
          user_id: 'cl7p17vyz0280eq0a5sls3a03',
          lesson_id: 9,
          completed: false,
          chapter_id: 3,
          course_id: 1,
        },
        {
          user_id: 'cl7p17vyz0280eq0a5sls3a03',
          lesson_id: 10,
          completed: false,
          chapter_id: 3,
          course_id: 1,
        },
      ])
    );
  }),
  rest.get('/api/app/user/retrieveAccountDetails', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ name: 'testUser', email: 'testUser@email.com' })
    );
  }),
  rest.get('/api/stripe/customer/retrieveCustomer', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        lastFour: 1234,
        subscription: 'Pro Subscription - Monthly',
        price: 1000,
      })
    );
  }),
  rest.post('/api/stripe/checkoutSession/checkoutSession', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(['to stripe checkoutsession']));
  }),
  rest.put('/api/app/user/changeAccountDetails', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ name: 'updatedTestUser', email: 'updatedTestUser@email.com' })
    );
  }),
  rest.get('/api/app/lessons/getCompletedLessons', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 1,
          completed: true,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 2,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 3,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 4,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 5,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 6,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 7,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 8,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 9,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 10,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 11,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 12,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 13,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 14,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 15,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 16,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 17,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 18,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 19,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 20,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 21,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 22,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 23,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 24,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 25,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 26,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 27,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 28,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 29,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 30,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 31,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 32,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 33,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 34,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 35,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 36,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 37,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 38,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 39,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 40,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 41,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 42,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 43,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 44,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 45,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 46,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 47,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 48,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 49,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 50,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 51,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 52,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 53,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 54,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 55,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 56,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 57,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 58,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 59,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 60,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 61,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 62,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 63,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 64,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 65,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 66,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 67,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 68,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 69,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 70,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 71,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 72,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 73,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 74,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 75,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 76,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 77,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 78,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 79,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 80,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 81,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 82,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 83,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 84,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 85,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 86,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 87,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 88,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 89,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 90,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 91,
          completed: false,
        },
        {
          user_id: 'cl7i2ll473610kb0aqng6uz0r',
          lesson_id: 92,
          completed: false,
        },
      ])
    );
  }),
];

export default handlers;
