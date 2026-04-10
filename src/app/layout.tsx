import { Providers } from '@/infra/providers'
import { ClientBootstrap } from '@/presentation/providers/client-bootstrap'

import { APP_NAME } from '@core/constants'
import { getMessages, resolveLocale } from '@infra/i18n'

import '@styles/globals.css'

import { geistMono, geistSans } from '@styles/fonts'
import { cn } from '@utils/cn'
import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono,Merriweather, Montserrat } from 'next/font/google'
import { cookies } from 'next/headers'
import React from 'react'

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

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const cookieStore = await cookies()
  const locale = resolveLocale(cookieStore.get('locale')?.value)
  const messages = getMessages(locale)

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
      </body>
    </html>
  )
}
