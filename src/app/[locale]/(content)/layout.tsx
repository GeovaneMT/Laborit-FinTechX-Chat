import { ContentShell } from '@layouts/content-shell'

import { LayoutMessages } from '@infra/i18n'
import { getLocalMessages, resolveLocale } from '@infra/i18n'

interface ContentLayoutProps {
  children: React.ReactNode
  params: Promise<{
    locale: string
  }>
}

export default async function ContentLayout({
  params,
  children,
}: Readonly<ContentLayoutProps>) {
  const { locale: localeParam } = await params

  const locale = resolveLocale(localeParam)
  const messages = getLocalMessages<LayoutMessages>({
    locale,
    messages: LayoutMessages,
  })

  return <ContentShell messages={messages}>{children}</ContentShell>
}
