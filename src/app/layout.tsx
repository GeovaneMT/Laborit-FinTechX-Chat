import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import '@/presentation/styles/globals.css'
import { APP_NAME } from '@core/constants'
import { getMessages, resolveLocale } from '@infra/i18n'
import { ClientBootstrap } from '@/presentation/providers/client-bootstrap'
import { QueryProvider } from '@/presentation/providers/query-provider'
import { Toaster } from '@ui/shadcn/sonner'
import { TooltipProvider } from '@ui/shadcn/tooltip'
import { Geist } from 'next/font/google'
import { cn } from '@utils/cn'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: APP_NAME,
  description: 'Neutral SPA blueprint',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const locale = resolveLocale(cookieStore.get('locale')?.value)
  const messages = getMessages(locale)

  const enableMsw = process.env.NEXT_PUBLIC_ENABLE_MSW === 'true'

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn('font-sans', geist.variable)}
    >
      <body className="min-h-screen antialiased">
        <TooltipProvider>
          <QueryProvider>
            <ClientBootstrap enableMsw={enableMsw} />
            <div
              data-locale={locale}
              data-msgs={JSON.stringify(messages)}
              className="contents"
            >
              {children}
            </div>
            <Toaster />
          </QueryProvider>
        </TooltipProvider>
      </body>
    </html>
  )
}
