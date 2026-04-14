'use client'

import type { ChangePasswordMessages } from '@features/change-password/i18n'

import { TypographyH1 } from '@/presentation/ui/typography/hx/h1'

import { useChangePasswordScreen } from '@/presentation/features/change-password/view-models/use-change-password-screen'

type ChangePasswordScreenProps = {
  messages: ChangePasswordMessages
}

export function ChangePasswordScreen({ messages }: ChangePasswordScreenProps) {
  const {} = useChangePasswordScreen()

  return (
    <section>
      <TypographyH1 className="text-center">
        {messages['changePassword.title']}
      </TypographyH1>
    </section>
  )
}
