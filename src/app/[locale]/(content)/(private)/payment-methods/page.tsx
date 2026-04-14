import { PaymentMethodsScreen } from '@features/payment-methods/components/payment-methods-screen'
import { PaymentMethodsMessages } from '@features/payment-methods/i18n'

import { getLocalMessages, resolveLocale } from '@infra/i18n'

interface PaymentMethodsPageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function PaymentMethodsPage({
  params,
}: PaymentMethodsPageProps) {
  const { locale: localeParam } = await params

  const locale = resolveLocale(localeParam)
  const messages = getLocalMessages<PaymentMethodsMessages>({
    locale,
    messages: PaymentMethodsMessages,
  })

  return <PaymentMethodsScreen messages={messages} />
}
