import { getLocalMessages, resolveLocale } from '@infra/i18n'

import { EditInformationScreen } from '@features/edit-information/components/edit-information-screen'
import { EditInformationMessages } from '@features/edit-information/i18n'

export { generateStaticParams } from '@infra/i18n'

interface EditInformationPageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function EditInformationPage({
  params,
}: EditInformationPageProps) {
  const { locale: localeParam } = await params

  const locale = resolveLocale(localeParam)
  const messages = getLocalMessages<EditInformationMessages>({
    locale,
    messages: EditInformationMessages,
  })

  return <EditInformationScreen messages={messages} />
}
