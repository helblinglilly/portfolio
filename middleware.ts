import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// eslint-disable-next-line import/prefer-default-export
export function middleware(request: NextRequest) {
  if (request.url.endsWith('/blog/2022')) return NextResponse.rewrite(new URL('/blog', request.url));
  if (request.url.endsWith('/blog/2023')) return NextResponse.rewrite(new URL('/blog', request.url));

  // Redirects for old blog posts
  if (request.url.endsWith('/blog/2023/cloudflare')) return NextResponse.rewrite(new URL('/blog/2023-cloudflare', request.url));
  if (request.url.endsWith('/blog/2023/pokemon')) return NextResponse.rewrite(new URL('/blog/2023-pokewiki', request.url));
  if (request.url.endsWith('/blog/2022/vercel')) return NextResponse.rewrite(new URL('/blog/2022-vercel', request.url));
  if (request.url.endsWith('/blog/2022/homeserver-pi')) return NextResponse.rewrite(new URL('/blog/2022-homeserver', request.url));
  if (request.url.endsWith('/blog/2022/aws-summit')) return NextResponse.rewrite(new URL('/blog/2022-aws-summit', request.url));
  if (request.url.endsWith('/blog/2022/r-has-a-problem')) return NextResponse.rewrite(new URL('/blog/2022-r-rant', request.url));

  return NextResponse.next();
}
