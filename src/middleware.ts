import { NextRequest, NextResponse } from 'next/server';

import { getServerCookies } from './lib/serverCookies';
import { api } from './services/api';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = await getServerCookies();
  const signInPath = new URL('/', request.url);
  const dashboardPath = new URL('/dashboard', request.url);

  if (pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(signInPath);
  } else if (pathname === '/' && token && !(await validateToken(token))) {
    return NextResponse.redirect(signInPath);
  } else if (pathname === '/' && token && (await validateToken(token))) {
    return NextResponse.redirect(dashboardPath);
  }

  return NextResponse.next();
}

async function validateToken(token: string) {
  if (!token) return false;

  try {
    const response = await api.get('/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.status === 200;
  } catch (error) {
    console.error(error);
    return false;
  }
}
