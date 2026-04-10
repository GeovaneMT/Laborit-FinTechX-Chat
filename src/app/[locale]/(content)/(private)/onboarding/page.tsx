import { getLocalMessages, resolveLocale } from '@infra/i18n'

import { OnboardingScreen } from '@features/onboarding/components/onboarding-screen'
import { OnboardingMessages } from '@features/onboarding/i18n'

export { generateStaticParams } from '@infra/i18n'

interface OnboardingPageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function OnboardingPage({ params }: OnboardingPageProps) {
  const { locale: localeParam } = await params

  const locale = resolveLocale(localeParam)
  const messages = getLocalMessages<OnboardingMessages>({
    locale,
    messages: OnboardingMessages,
  })

  return <OnboardingScreen messages={messages} />
}
