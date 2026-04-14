'use client'

import type { PaymentMethodsMessages } from '@features/payment-methods/i18n'

import { TypographyH1 } from '@/presentation/ui/typography/hx/h1'

import { usePaymentMethodsScreen } from '@/presentation/features/payment-methods/view-models/use-payment-methods-screen'

type PaymentMethodsScreenProps = {
  messages: PaymentMethodsMessages
}

export function PaymentMethodsScreen({ messages }: PaymentMethodsScreenProps) {
  const {} = usePaymentMethodsScreen()

  return (
    <section>
      <TypographyH1 className="text-center">
        {messages['paymentMethods.title']}
      </TypographyH1>
    </section>
  )
}
