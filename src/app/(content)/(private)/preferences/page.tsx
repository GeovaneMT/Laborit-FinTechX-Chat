import { PreferencesScreen } from '@features/preferences/components/preferences-screen'
import { getMessages, resolveLocale } from '@features/preferences/i18n'
import { cookies } from 'next/headers'

export default async function PreferencesPage() {
  const locale = resolveLocale((await cookies()).get('locale')?.value)
  const messages = getMessages(locale)

  return <PreferencesScreen locale={locale} messages={messages} />
}
