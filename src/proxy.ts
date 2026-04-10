// import { NextResponse } from 'next/server'
// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

import { DEFAULT_LOCALE, PUBLIC_FILE, SUPPORTED_LOCALES } from '@core/constants'

import { NextRequest, NextResponse } from 'next/server'

// const isPublicRoute = createRouteMatcher(['/', '/entrar(.*)'])

// export default clerkMiddleware(async (auth, req) => {
//   if (!isPublicRoute(req)) await auth.protect()

//   const isSignInRoute = req.nextUrl.pathname.startsWith(
//     process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL ?? '/entrar',
//   )

//   if (isSignInRoute) {
//     const session = await auth()

//     if (session.userId) {
//       return NextResponse.redirect(new URL('/', req.url))
//     }
//   }
// })

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
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

  const hasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  )

  if (hasLocale) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = `/${DEFAULT_LOCALE}${pathname}`

  return NextResponse.redirect(url)
}
