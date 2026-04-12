import { InviteScreen } from '@features/invite/components/invite-screen'
import { InviteMessages } from '@features/invite/i18n'

import { getLocalMessages, resolveLocale } from '@infra/i18n'

export { generateStaticParams } from '@infra/i18n'

interface InvitePageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function InvitePage({ params }: InvitePageProps) {
  const { locale: localeParam } = await params

  const locale = resolveLocale(localeParam)
  const messages = getLocalMessages<InviteMessages>({
    locale,
    messages: InviteMessages,
  })

  return <InviteScreen messages={messages} />
}
