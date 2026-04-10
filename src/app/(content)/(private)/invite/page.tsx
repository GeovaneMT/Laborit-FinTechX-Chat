import { cookies } from 'next/headers'
import { getMessages, resolveLocale } from '@infra/i18n'
import { InvitePageClient } from './client'

export default async function InvitePage() {
  const locale = resolveLocale((await cookies()).get('locale')?.value)
  const messages = getMessages(locale)

  return <InvitePageClient messages={messages} />
}
