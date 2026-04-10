import { cookies } from 'next/headers'

import { EditInformationScreen } from '@features/edit-information/components/edit-information-screen'
import { getMessages, resolveLocale } from '@features/edit-information/i18n'

export default async function EditInformationPage() {
  const locale = resolveLocale((await cookies()).get('locale')?.value)
  const messages = getMessages(locale)

  return <EditInformationScreen messages={messages} />
}
