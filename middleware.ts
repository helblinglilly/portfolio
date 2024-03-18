import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// eslint-disable-next-line import/prefer-default-export
export function middleware(request: NextRequest) {
  if (request.url.endsWith('/blog/2022')) return NextResponse.rewrite(new URL('/blog', request.url));
  if (request.url.endsWith('/blog/2023')) return NextResponse.rewrite(new URL('/blog', request.url));

  return undefined;
}
