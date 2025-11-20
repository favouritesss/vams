import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const session = req.cookies.get("session_user")?.value;

  const protectedRoutes = [
    "/admin/dashboard",
    "/volunteer/dashboard"
  ];

  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (!session) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  return NextResponse.next();
}
