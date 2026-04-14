'use client'

import type { CustomerSupportMessages } from '@features/customer-support/i18n'

import { TypographyH1 } from '@/presentation/ui/typography/hx/h1'

import { useCustomerSupportScreen } from '@/presentation/features/customer-support/view-models/use-customer-support-screen'

type CustomerSupportScreenProps = {
  messages: CustomerSupportMessages
}

export function CustomerSupportScreen({
  messages,
}: CustomerSupportScreenProps) {
  const {} = useCustomerSupportScreen()

  return (
    <section>
      <TypographyH1 className="text-center">
        {messages['customerSupport.title']}
      </TypographyH1>
    </section>
  )
}
