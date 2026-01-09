import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const roleBasedRoutes = {
  user: ["/userRoute"],
  admin: ["/adminRoute"],
};

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  const pathname = request.nextUrl.pathname;

  

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  //   Step1: if no token, redirect to login
  if (!token) {
    // /api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F
    const loginUrl = new URL("/api/auth/signin", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  //   Step2: if no role or invalid role, redirect to login
  if (!token?.role || !roleBasedRoutes[token.role]) {
    const loginUrl = new URL("/api/auth/signin", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  //   Step3: check if the user has access to the route
  const allowedRoutes = roleBasedRoutes[token.role];

  //   step4: if has no access, redirect to login
  const hasAccess = allowedRoutes.some((route) => pathname.startsWith(route));

  if (!hasAccess) {
    const loginUrl = new URL("/api/auth/signin", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/adminRoute", "/userRoute"],
};