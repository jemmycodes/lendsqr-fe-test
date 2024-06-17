import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  const isUserLoggedIn = cookies().get("isLoggedIn");

  if (request.nextUrl.pathname === "/" && isUserLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard/users", request.url));
  }

  if (request.nextUrl.pathname.includes("/dashboard") && !isUserLoggedIn) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
