import { rest } from 'msw';

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
];

export default handlers;
