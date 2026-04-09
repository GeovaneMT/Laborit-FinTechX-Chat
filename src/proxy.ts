import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const SESSION_COOKIE = "session";

function hasSession(request: NextRequest) {
  return Boolean(request.cookies.get(SESSION_COOKIE)?.value);
}

export function applyProxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPrivate = pathname.startsWith("/dashboard") || pathname.startsWith("/items") || pathname.startsWith("/settings");
  const isAuth = pathname === "/login" || pathname === "/register";

  if (isPrivate && !hasSession(request)) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (isAuth && hasSession(request)) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
