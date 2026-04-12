import { SplashScreen } from '@features/splash/components/splash-screen'
import { SplashMessages } from '@features/splash/i18n'

import { getLocalMessages, resolveLocale } from '@infra/i18n'

interface SplashPageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function SplashPage({ params }: SplashPageProps) {
  const { locale: localeParam } = await params

  const locale = resolveLocale(localeParam)
  const messages = getLocalMessages<SplashMessages>({
    locale,
    messages: SplashMessages,
  })

  return <SplashScreen messages={messages} />
}
