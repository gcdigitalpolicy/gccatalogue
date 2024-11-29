import { NextResponse } from 'next/server';

// List of supported locales
const locales = ['en-ca', 'fr-ca'];

// Get the preferred locale from the accept-language header
function getPreferredLocale(acceptLanguage) {
  // Default to English if no accept-language header
  if (!acceptLanguage) return 'en-ca';

  // Check if the accept-language header contains French
  const prefersFrench = acceptLanguage.toLowerCase().includes('fr');
  return prefersFrench ? 'fr-ca' : 'en-ca';
}

export function middleware(request) {
  // Get the pathname from the URL
  const { pathname } = request.nextUrl;

  // Skip if the request is for an asset or API route
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // If we are at the root path, redirect based on browser language
  if (pathname === '/') {
    const acceptLanguage = request.headers.get('accept-language');
    const preferredLocale = getPreferredLocale(acceptLanguage);
    
    // Create the redirect URL with the preferred locale
    const url = new URL(`/${preferredLocale}/home`, request.url);
    if (preferredLocale === 'fr-ca') {
      url.pathname = `/${preferredLocale}/accueil`;
    }
    
    return NextResponse.redirect(url);
  }

  // Check if the URL already has a valid locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    // Get the preferred locale from the accept-language header
    const acceptLanguage = request.headers.get('accept-language');
    const preferredLocale = getPreferredLocale(acceptLanguage);
    
    // Create new URL with the preferred locale
    const url = new URL(`/${preferredLocale}${pathname}`, request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  // Only run the middleware on the root and pages that don't have a locale
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: Skip all API routes
    '/((?!api).*)',
  ],
};
