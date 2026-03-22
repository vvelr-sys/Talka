import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    if (token && token.is_setup === false && path !== "/auth/setup") {
      return NextResponse.redirect(new URL("/auth/setup", req.url));
    }
  },
  {
    pages: {
      signIn: "/auth/login",
    },
  }
);

export const config = {
  matcher: [
    "/chat/:path*",
    "/dashboard/:path*",
    "/admin/:path*",
    "/account/:path*",
    "/auth/setup",
  ],
};