import { cookies } from 'next/headers'
import { getMessages, resolveLocale } from '@infra/i18n'
import { PreferencesPageClient } from './client'

export default async function PreferencesPage() {
  const locale = resolveLocale((await cookies()).get('locale')?.value)
  const messages = getMessages(locale)

  return <PreferencesPageClient messages={messages} />
}
