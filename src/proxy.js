import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default async function proxy(req) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;
  const isBuyer = token?.role?.toLowerCase() === "buyer";
  const isAdmin = token?.role?.toLowerCase() === "admin";
  const isWorker = token?.role?.toLowerCase() === "worker";
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }
  if (pathname.startsWith("/admin")) {
    if (!token && !isAdmin) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  if (pathname.startsWith("/buyer")) {
    if (!token && !isBuyer) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  if (pathname.startsWith("/worker")) {
    if (!token && !isWorker) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    "/buyer/:path*",
    "/worker/:path*",
  ],
};
