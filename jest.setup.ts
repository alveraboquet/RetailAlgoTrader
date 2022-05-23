// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// Required for testing chart.js and react-chartjs-2
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Enable TextEncoder and TextDecoder globally for DomPurify
import { TextEncoder, TextDecoder } from 'util';
(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;

// Polyfill "window.fetch" used in the React component.
import 'whatwg-fetch';

// Setup mock server
import server from './mocks/server';
// Establish API mocking before all tests
beforeAll(() => server.listen());
// Reset any request handlets that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished
afterAll(() => server.close());
