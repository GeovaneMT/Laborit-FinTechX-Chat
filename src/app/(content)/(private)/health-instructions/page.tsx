import { cookies } from 'next/headers'

import { HealthInstructionsScreen } from '@features/health-instructions/components/health-instructions-screen'
import { getMessages, resolveLocale } from '@features/health-instructions/i18n'

export default async function HealthInstructionsPage() {
  const locale = resolveLocale((await cookies()).get('locale')?.value)
  const messages = getMessages(locale)

  return <HealthInstructionsScreen messages={messages} />
}
