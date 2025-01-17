import { NextResponse } from "next/server";
import { getUserRole } from "./app/helpers/getUserInfo";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const publicPaths = ["/", "/signup"];
  const adminPaths = ["/users"];

  const currentPath = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value || "";
  

  if (publicPaths.includes(currentPath) && token) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  if (!publicPaths.includes(currentPath) && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (adminPaths.includes(currentPath)) {
    try {
      const user = await getUserRole(request);
      if (user.error) {
        return new NextResponse("Authentication failed: " + userRole.error, { status: 403 });
      }
      if (user.role !== "admin") {
        return new NextResponse("You are not authorized to access this page.", { status: 403 });
      }
    } catch (error) {
      console.error("Invalid token:", error);
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/signup", "/home", "/profile", "/users"],
};
