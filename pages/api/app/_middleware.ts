import { NextRequest, NextResponse } from 'next/server';

/**
 *
 * @param req - Any req that hits the API paths covered by this middleware
 *              (any folders and files at or below this file's level in the folder structure)
 * @returns - 401 error code if customer header and origin not valid
 */
export const middleware = (req: NextRequest) => {
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
};
