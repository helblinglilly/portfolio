import { NextResponse, NextRequest } from "next/server";
export async function middleware(req, ev) {
	const { pathname } = req.nextUrl;

	if (pathname == "/blog/2022") return NextResponse.redirect("/blog");

	return NextResponse.next();
}
