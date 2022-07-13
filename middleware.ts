// with Nextjs 12.2.2 the below eslint rule no longer applies.
// https://nextjs.org/docs/messages/nested-middleware
// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextRequest, NextResponse } from 'next/server';

/**
 *
 * @param req - Any req that hits the API paths covered by this middleware
 *              (any folders and files at or below this file's level in the folder structure)
 * @returns - 401 error code if customer header and origin not valid
 */
const middleware = (req: NextRequest) => {
  if (
    req.nextUrl.pathname.startsWith('/api/app') ||
    req.nextUrl.pathname.startsWith('/api/stripe/customer')
  ) {
    const origin = req.headers.get('origin');
    const referrer = req.headers.get('referrer');
    const xCustomHeader = req.headers.get('X-Custom-Header');

    if (
      xCustomHeader === 'lollipop' &&
      (origin === 'http://localhost:3000' || // Will have to update these paths. Remove undefined if possible
        origin === null ||
        referrer === 'http://localhost:3000/' ||
        referrer === null)
    ) {
      NextResponse.next();
    } else {
      return new Response(null, { status: 401 });
    }
  }
};

export default middleware;
