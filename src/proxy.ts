import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { PUBLIC_FILE } from '@core/constants'

import { hasLocalePrefix } from '@infra/i18n'

const ONBOARDING_PATH = '/onboarding'

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}

export function Proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  if (pathname.includes(ONBOARDING_PATH)) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()

  const segments = pathname.split('/')
  const maybeLocale = segments[1]
  const hasLocale = hasLocalePrefix(pathname)

  /**
   * Build target path preserving locale when present
   */
  url.pathname = hasLocale
    ? `/${maybeLocale}${ONBOARDING_PATH}`
    : ONBOARDING_PATH

  return NextResponse.redirect(url)
}
