import { setupServer } from 'msw/node';
import handlers from './handlers';

// mock server for testing
const server = setupServer(...handlers);

export default server;
