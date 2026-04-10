import { OnboardingScreen } from '@features/onboarding/components/onboarding-screen'
import { getMessages, resolveLocale } from '@features/onboarding/i18n'
import { cookies } from 'next/headers'

export default async function OnboardingPage() {
  const locale = resolveLocale((await cookies()).get('locale')?.value)
  const messages = getMessages(locale)

  return <OnboardingScreen messages={messages} />
}
