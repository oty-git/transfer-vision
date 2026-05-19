import { NextResponse, type NextRequest } from 'next/server';

// TEMP: redirect all app routes to landing page — remove when auth is implemented
const APP_ROUTES = ['/dashboard', '/players', '/scouting'];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (APP_ROUTES.some(route => pathname === route || pathname.startsWith(route + '/'))) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/players/:path*', '/scouting/:path*'],
};
