import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PROTECTED_PREFIXES = ["/admin", "/dashboard"];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const shouldProtect = PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  if (!shouldProtect) {
    return NextResponse.next();
  }

  const authToken = request.cookies.get("portfolio_session")?.value;

  if (authToken) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/contact", request.url);
  loginUrl.searchParams.set("auth", "required");
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
};
