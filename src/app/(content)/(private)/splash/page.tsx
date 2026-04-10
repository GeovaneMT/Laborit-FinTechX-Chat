import { SplashScreen } from '@features/splash/components/splash-screen'
import { getMessages, resolveLocale } from '@features/splash/i18n'
import { cookies } from 'next/headers'

export default async function SplashPage() {
  const locale = resolveLocale((await cookies()).get('locale')?.value)
  const messages = getMessages(locale)

  return <SplashScreen messages={messages} />
}
