import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { PUBLIC_FILE } from '@core/constants'

import {
  getLocaleFromPathname,
  hasLocalePrefix,
  resolveLocale,
} from '@infra/i18n'

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}

export const proxy = (request: NextRequest) => {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  if (hasLocalePrefix(pathname)) {
    const locale = getLocaleFromPathname(pathname)!
    const response = NextResponse.next()

    const currentCookie = request.cookies.get('locale')?.value

    if (currentCookie !== locale) {
      response.cookies.set('locale', locale, {
        path: '/',
        maxAge: 31536000,
        sameSite: 'lax',
      })
    }

    return response
  }

  const cookieLocale = request.cookies.get('locale')?.value
  const locale = resolveLocale(cookieLocale)

  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(url)
}
