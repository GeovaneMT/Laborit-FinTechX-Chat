import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { DEFAULT_LOCALE, PUBLIC_FILE } from '@core/constants'

import { hasLocalePrefix } from '@infra/i18n'

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}

export const proxy = (request: NextRequest) => {
  const { pathname } = request.nextUrl

  if (pathname === '/') {
    const url = request.nextUrl.clone()
    url.pathname = '/onboarding'
    return NextResponse.redirect(url)
  }

  if (hasLocalePrefix(pathname) && pathname.split('/').length === 2) {
    const url = request.nextUrl.clone()
    url.pathname = `${pathname}/onboarding`
    return NextResponse.redirect(url)
  }

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  if (hasLocalePrefix(pathname)) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = `/${DEFAULT_LOCALE}${pathname}`

  return NextResponse.redirect(url)
}
