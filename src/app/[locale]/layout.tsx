import React, { Suspense } from 'react'
import type { Metadata, Viewport } from 'next'

import { fontPrimary, fontSecondary } from '@styles/fonts'
import { cn } from '@utils/cn'

import { ContentShell } from '@/presentation/layouts/content-shell'

import { ClientBootstrap } from '@/presentation/providers/client-bootstrap'

import { APP_NAME, BRAND_NAME } from '@core/constants'

import { Providers } from '@/infra/providers'
import { getLocalMessages, LayoutMessages, resolveLocale } from '@infra/i18n'

import '@styles/globals.css'

export { generateStaticParams } from '@infra/i18n'

export const viewport: Viewport = {
  width: 'device-width',
  themeColor: 'black',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}-${BRAND_NAME}`,
    default: `${APP_NAME}-${BRAND_NAME}`,
  },
  description: `${APP_NAME}-${BRAND_NAME}`,
  openGraph: {
    title: `FinTechX-Chat`,
    description: `${APP_NAME}-${BRAND_NAME}`,
    type: 'website',
    locale: 'en_US',
    siteName: `${APP_NAME}-${BRAND_NAME}`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_NAME}-${BRAND_NAME}`,
    description: `${APP_NAME}-${BRAND_NAME}`,
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
      className={cn('font-sans', fontPrimary.variable, fontSecondary.variable)}
    >
      <body className={`antialiased transition-all duration-200 ease-in-out`}>
        <Suspense fallback={<div>Loading translations...</div>}>
          <Providers>
            <div
              data-locale={locale}
              data-msgs={JSON.stringify(messages)}
              className="contents"
            >
              <ClientBootstrap enableMsw={enableMsw}>
                <ContentShell messages={messages}>{children}</ContentShell>
              </ClientBootstrap>
            </div>
          </Providers>
        </Suspense>
      </body>
    </html>
  )
}
