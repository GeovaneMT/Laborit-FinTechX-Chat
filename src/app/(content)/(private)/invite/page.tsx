import { cookies } from 'next/headers'

import { InviteScreen } from '@features/invite/components/invite-screen'
import { getMessages, resolveLocale } from '@features/invite/i18n'

export default async function InvitePage() {
  const locale = resolveLocale((await cookies()).get('locale')?.value)
  const messages = getMessages(locale)

  return <InviteScreen messages={messages} />
}
