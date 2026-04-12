import { PreferencesScreen } from '@features/preferences/components/preferences-screen'
import { PreferencesMessages } from '@features/preferences/i18n'

import { getLocalMessages, resolveLocale } from '@infra/i18n'

export { generateStaticParams } from '@infra/i18n'

interface PreferencesPageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function PreferencesPage({
  params,
}: PreferencesPageProps) {
  const { locale: localeParam } = await params

  const locale = resolveLocale(localeParam)
  const messages = getLocalMessages<PreferencesMessages>({
    locale,
    messages: PreferencesMessages,
  })

  return <PreferencesScreen locale={locale} messages={messages} />
}
