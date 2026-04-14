import { ChangePasswordScreen } from '@features/change-password/components/change-password-screen'
import { ChangePasswordMessages } from '@features/change-password/i18n'

import { getLocalMessages, resolveLocale } from '@infra/i18n'

interface ChangePasswordPageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function ChangePasswordPage({
  params,
}: ChangePasswordPageProps) {
  const { locale: localeParam } = await params

  const locale = resolveLocale(localeParam)
  const messages = getLocalMessages<ChangePasswordMessages>({
    locale,
    messages: ChangePasswordMessages,
  })

  return <ChangePasswordScreen messages={messages} />
}
