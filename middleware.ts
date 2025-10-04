import { ROUTES } from "@/shared/lib/consts";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const sessionId = request.cookies.get("sessionId");

  console.log("sessionId", sessionId);
  console.log(12312312);

  if (sessionId !== undefined) {
    const { pathname } = request.nextUrl;

    if (
      pathname.startsWith(ROUTES.signUp) ||
      pathname.startsWith(ROUTES.login)
    ) {
      return NextResponse.redirect(new URL(ROUTES.home, request.url));
    }
  }

  if (
    request.nextUrl.pathname.startsWith("/403") &&
    !request.headers.get("x-middleware-auth")
  ) {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
