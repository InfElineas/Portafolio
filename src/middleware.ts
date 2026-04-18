import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin/login") {
    const session = request.cookies.get("portfolio_session")?.value;
    const password = process.env.ADMIN_PASSWORD ?? "admin1234";
    if (session === password) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return NextResponse.next();
  }

  const session = request.cookies.get("portfolio_session")?.value;
  const password = process.env.ADMIN_PASSWORD ?? "admin1234";

  if (!session || session !== password) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
};
