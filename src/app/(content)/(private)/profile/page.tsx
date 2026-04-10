import { cookies } from 'next/headers'

import { ProfileScreen } from '@features/profile/components/profile-screen'
import { getMessages, resolveLocale } from '@features/profile/i18n'

export default async function ProfilePage() {
  const locale = resolveLocale((await cookies()).get('locale')?.value)
  const messages = getMessages(locale)

  return <ProfileScreen messages={messages} />
}
