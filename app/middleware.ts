import { ROUTES } from "@/shared/lib/consts";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const sessionId = request.cookies.get("sessionId");

  console.log(sessionId);
  console.log(12312312);

  if (sessionId && request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(ROUTES.home);
  }

  if (
    request.nextUrl.pathname.startsWith("/403") &&
    !request.headers.get("x-middleware-auth")
  ) {
    return NextResponse.json({ message: "not-found" }, { status: 404 });
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
