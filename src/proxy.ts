import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { DEFAULT_LOCALE, PUBLIC_FILE } from '@core/constants'

import { hasLocalePrefix } from '@infra/i18n'

const ONBOARDING_PATH = '/onboarding'

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}

export const proxy = (request: NextRequest) => {
  const { pathname } = request.nextUrl

  // skip internal + static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  const isOnboardingRoute = pathname.includes(ONBOARDING_PATH)

  if (!isOnboardingRoute) {
    const url = request.nextUrl.clone()

    const hasLocale = hasLocalePrefix(pathname)

    url.pathname = hasLocale
      ? `/${DEFAULT_LOCALE}${ONBOARDING_PATH}`
      : ONBOARDING_PATH

    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
