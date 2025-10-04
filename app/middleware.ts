import { ROUTES } from "@/shared/lib/consts";
import { NextRequest, NextResponse } from "next/server";

// TODO: not wirking with 403 and login routes
export async function middleware(request: NextRequest) {
  const sessionId = request.cookies.get("sessionId");

  console.log(sessionId);

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
  matcher: ["/"],
};
