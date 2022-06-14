import { rest } from 'msw';

const networkErrorHandlers = [
  rest.get('/api/app/user/retrieveAccountDetails', (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ name: 'Failed to Retrieve', email: 'Failed to Retrieve' })
    );
  }),
];

export default networkErrorHandlers;
