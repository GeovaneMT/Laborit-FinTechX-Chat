import { HealthInstructionsScreen } from '@features/health-instructions/components/health-instructions-screen'
import { HealthInstructionsMessages } from '@features/health-instructions/i18n'

import { getLocalMessages, resolveLocale } from '@infra/i18n'

interface HealthInstructionsPageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function HealthInstructionsPage({
  params,
}: HealthInstructionsPageProps) {
  const { locale: localeParam } = await params

  const locale = resolveLocale(localeParam)
  const messages = getLocalMessages<HealthInstructionsMessages>({
    locale,
    messages: HealthInstructionsMessages,
  })

  return <HealthInstructionsScreen messages={messages} />
}
