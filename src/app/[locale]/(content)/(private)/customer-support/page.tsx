import { CustomerSupportScreen } from '@features/customer-support/components/customer-support-screen'
import { CustomerSupportMessages } from '@features/customer-support/i18n'

import { getLocalMessages, resolveLocale } from '@infra/i18n'

interface CustomerSupportPageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function CustomerSupportPage({
  params,
}: CustomerSupportPageProps) {
  const { locale: localeParam } = await params

  const locale = resolveLocale(localeParam)
  const messages = getLocalMessages<CustomerSupportMessages>({
    locale,
    messages: CustomerSupportMessages,
  })

  return <CustomerSupportScreen messages={messages} />
}
