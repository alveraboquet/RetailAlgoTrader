// with Nextjs 12.2.2 the below eslint rule no longer applies.
// https://nextjs.org/docs/messages/nested-middleware
import { NextRequest, NextResponse } from 'next/server';

/**
 *
 * @param req - Any req that hits the API paths covered by this middleware
 *              (any folders and files at or below this file's level in the folder structure)
 * @returns - 401 error code if customer header and origin not valid
 */
const middleware = (req: NextRequest) => {
  /**
   * False if Node env is not production. True if Node env is production
   */
  const isProd = process.env.NODE_ENV === 'production';

  if (
    req.nextUrl.pathname.startsWith('/api/app') ||
    req.nextUrl.pathname.startsWith('/api/stripe/customer')
  ) {
    const originHeader = req.headers.get('origin');
    const referrerHeader = req.headers.get('referrer');
    const xCustomHeader = req.headers.get('X-Custom-Header');
    const acceptedOrigin = isProd
      ? 'https://retailalgotrader.com'
      : 'http://localhost:3000';
    const acceptedReferrer = isProd
      ? 'https://retailalgotrader.com/'
      : 'http://localhost:3000/';

    if (
      xCustomHeader === 'lollipop' &&
      (originHeader === acceptedOrigin ||
        originHeader === 'https://staging.retailalgotrader.com' ||
        originHeader === null) &&
      (referrerHeader === acceptedReferrer ||
        referrerHeader === 'https://staging.retailalgotrader.com/' ||
        referrerHeader === null)
    ) {
      NextResponse.next();
    } else {
      return new Response(null, {
        status: 401,
      });
    }
  }
};

export default middleware;
