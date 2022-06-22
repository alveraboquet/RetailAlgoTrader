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
  rest.get('/api/app/chapters/completedChapters', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          chapter_id: 3,
          completed: true,
          course_id: 5,
        },
        {
          chapter_id: 4,
          completed: false,
          course_id: 5,
        },
        {
          chapter_id: 5,
          completed: false,
          course_id: 5,
        },
        {
          chapter_id: 6,
          completed: false,
          course_id: 5,
        },
        {
          chapter_id: 1,
          completed: true,
          course_id: 1,
        },
        {
          chapter_id: 2,
          completed: false,
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
          user_id: 'testUserId',
          lesson_id: 1,
          completed: true,
        },
        {
          user_id: 'testUserId',
          lesson_id: 2,
          completed: false,
        },
      ])
    );
  }),
];

export default handlers;
