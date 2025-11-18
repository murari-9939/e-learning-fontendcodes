
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// // Define which paths need protection
// const protectedPaths = [
//   '/UserDashboard',
//   '/AdminDashboard',
//   '/SuperAdminDashboard'
// ];

// export function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;

//   // Only protect specific routes
//   if (protectedPaths.some(path => pathname.startsWith(path))) {
//     // Get cookie from request
//     const token = req.cookies.get('access_token')?.value;

//     if (!token) {
//       // Redirect to login if no token
//       return NextResponse.redirect(new URL('/login', req.url));
//     }

//     // Optional: Decode token to check role
//     try {
//       // Using JWT library on server (you need to install jwt-decode or jsonwebtoken)
//       const jwt = require('jsonwebtoken');
//       const payload = jwt.decode(token);

//       if (!payload) {
//         return NextResponse.redirect(new URL('/login', req.url));
//       }

//       // Example: check role access (optional)
//       // if (pathname.startsWith('/AdminDashboard') && payload.role !== 'Admin') {
//       //   return NextResponse.redirect(new URL('/login', req.url));
//       // }

//     } catch (err) {
//       return NextResponse.redirect(new URL('/login', req.url));
//     }
//   }

//   return NextResponse.next();
// }

// // Apply middleware only to these routes
// export const config = {
//   matcher: ['/UserDashboard/:path*', '/AdminDashboard/:path*', '/SuperAdminDashboard/:path*'],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define which paths need protection
const protectedPaths = [
  '/UserDashboard',
  '/AdminDashboard',
  '/SuperAdminDashboard'
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (protectedPaths.some(path => pathname.startsWith(path))) {
    const token = req.cookies.get('access_token')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    try {
      const jwt = require('jsonwebtoken');
      const payload = jwt.decode(token);

      if (!payload) {
        return NextResponse.redirect(new URL('/login', req.url));
      }

      // Role-based restriction example
      if (pathname.startsWith('/AdminDashboard') && payload.role !== 'Admin') {
        return NextResponse.redirect(new URL('/login', req.url));
      }
      if (pathname.startsWith('/SuperAdminDashboard') && payload.role !== 'SuperAdmin') {
        return NextResponse.redirect(new URL('/login', req.url));
      }
      if (pathname.startsWith('/UserDashboard') && payload.role !== 'User') {
        return NextResponse.redirect(new URL('/login', req.url));
      }

    } catch (err) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/UserDashboard/:path*', '/AdminDashboard/:path*', '/SuperAdminDashboard/:path*'],
};
