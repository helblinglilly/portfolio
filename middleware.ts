import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	if (request.url.endsWith("/blog/2022"))
		return NextResponse.rewrite(new URL("/blog", request.url));
	else if (request.url.endsWith("/blog/2023"))
		return NextResponse.rewrite(new URL("/blog", request.url));
}
