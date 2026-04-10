import { InviteScreen } from '@features/invite/components/invite-screen'
import { getMessages, resolveLocale } from '@features/invite/i18n'
import { cookies } from 'next/headers'

export default async function InvitePage() {
  const locale = resolveLocale((await cookies()).get('locale')?.value)
  const messages = getMessages(locale)

  return <InviteScreen messages={messages} />
}
