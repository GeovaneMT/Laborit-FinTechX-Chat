import { cookies } from 'next/headers'
import { getMessages, resolveLocale } from '@infra/i18n'
import { EditInformationPageClient } from './client'

export default async function EditInformationPage() {
  const locale = resolveLocale((await cookies()).get('locale')?.value)
  const messages = getMessages(locale)

  return <EditInformationPageClient messages={messages} />
}
