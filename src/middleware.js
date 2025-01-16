import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const publicPaths = ["/", "/signup"];
  const currentPath = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value || "";

  if (publicPaths.includes(currentPath) && token) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  if (!publicPaths.includes(currentPath) && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/signup", "/home", "/profile", "/users"],
};
