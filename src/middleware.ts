import { NextResponse } from 'next/server';

import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';
import { APP_ROUTES } from './constants/routes';

export default withAuth(
  async function middleware(request: NextRequestWithAuth) {
    const isAuthenticated = !!request.nextauth.token;
    const pathname = request.nextUrl.pathname;

    if (!isAuthenticated) {
      if (
        pathname === APP_ROUTES.public.sign_in ||
        pathname === APP_ROUTES.public.reset_password ||
        pathname === APP_ROUTES.public.password_reset
      ) {
        return NextResponse.next();
      }

      return NextResponse.redirect(
        new URL(APP_ROUTES.public.sign_in, request.nextUrl)
      );
    }

    if (
      pathname === APP_ROUTES.public.root ||
      pathname === APP_ROUTES.public.sign_in ||
      pathname === APP_ROUTES.public.reset_password ||
      pathname === APP_ROUTES.public.password_reset
    ) {
      return NextResponse.redirect(
        new URL(APP_ROUTES.private.dashboard, request.nextUrl)
      );
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return token?.user !== null;
      },
    },
  }
);

export const config = {
  matcher: [
    /* Private routes */
    `/profile`,
    `/dashboard`,
    `/select-hero`,
    `/profile/:id*`,

    /* Public routes */
    `/`,
    `/sign-in`,
    `/reset-password`,
    `/password-reset`,
  ],
};
