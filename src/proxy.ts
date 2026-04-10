// import { NextResponse } from 'next/server'
// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

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

export const proxy = () => {
  // This is a placeholder for any future proxy logic.
  // Currently, it does nothing and simply allows all requests to pass through.
}
