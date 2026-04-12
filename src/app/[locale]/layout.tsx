import React, { Suspense } from 'react'
import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Merriweather, Montserrat } from 'next/font/google'

import { geistMono, geistSans } from '@styles/fonts'
import { cn } from '@utils/cn'

import { ClientBootstrap } from '@/presentation/providers/client-bootstrap'

import { APP_NAME } from '@core/constants'

import { Providers } from '@/infra/providers'
import { LayoutMessages, getLocalMessages, resolveLocale } from '@infra/i18n'

import '@styles/globals.css'

export { generateStaticParams } from '@infra/i18n'

const fontSans = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontSerif = Merriweather({
  subsets: ['latin'],
  variable: '--font-serif',
})

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const viewport: Viewport = {
  width: 'device-width',
  themeColor: 'black',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    template: `%s | FinTechX-${APP_NAME}`,
    default: `FinTechX-${APP_NAME}`,
  },
  description: `FinTechX SPA ${APP_NAME}`,
  openGraph: {
    title: `FinTechX-Chat`,
    description: `FinTechX SPA ${APP_NAME}`,
    type: 'website',
    locale: 'en_US',
    siteName: `FinTechX-${APP_NAME}`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `FinTechX-${APP_NAME}`,
    description: `FinTechX SPA ${APP_NAME}`,
  },
}

interface LocaleParams {
  params: Promise<{
    locale: string
  }>
}

interface RootLayoutProps extends LocaleParams {
  children: React.ReactNode
}

export default async function RootLayout({
  params,
  children,
}: RootLayoutProps) {
  const { locale: localeParam } = await params

  const locale = resolveLocale(localeParam)
  const messages = getLocalMessages<LayoutMessages>({
    locale,
    messages: LayoutMessages,
  })
  const enableMsw = process.env.NEXT_PUBLIC_ENABLE_MSW === 'true'

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn(
        'font-sans',
        fontSans.variable,
        fontSerif.variable,
        fontMono.variable,
      )}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-all duration-200 ease-in-out`}
      >
        <Suspense fallback={<div>Loading translations...</div>}>
          <Providers>
            <ClientBootstrap enableMsw={enableMsw} />
            <div
              data-locale={locale}
              data-msgs={JSON.stringify(messages)}
              className="contents"
            >
              {children}
            </div>
          </Providers>
        </Suspense>
      </body>
    </html>
  )
}
