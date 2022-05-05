import { NextRequest, NextResponse } from 'next/server';

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
