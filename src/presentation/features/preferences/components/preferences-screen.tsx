'use client'

import { Card, CardContent, CardHeader } from '@shadcn/card'

import { ChangePasswordSettings } from '@features/preferences/components/change-password-settings'
import { InviteSettings } from '@features/preferences/components/invite-settings'
import { LanguageSettings } from '@features/preferences/components/language-settings'
import { PaymentMethodsSettings } from '@features/preferences/components/payment-methods-settings'
import { ThemeSettings } from '@features/preferences/components/theme-settings'
import { UserInfoSettings } from '@features/preferences/components/user-info-settings'
import type { PreferencesMessages } from '@features/preferences/i18n'
import { usePreferencesScreen } from '@features/preferences/view-models/use-preferences-screen'

import { CardHeaderContent } from '@pattern/card-header-content'

import { Separator } from '@ui/separator'

import type { Locale } from '@/infra/i18n'

type PreferencesScreenProps = {
  locale: Locale
  messages: PreferencesMessages
}

export function PreferencesScreen({
  locale,
  messages,
}: PreferencesScreenProps) {
  const vm = usePreferencesScreen(locale)
  const { theme } = vm

  return (
    <section className="w-full">
      <Card className="w-full">
        <CardHeader className="mb-8 flex items-center">
          <CardHeaderContent title={messages['preferences.title']} />
        </CardHeader>
        <CardContent className="space-y-4">
          <ThemeSettings theme={theme} messages={messages} />
          <Separator />
          <UserInfoSettings theme={theme} messages={messages} />
          <Separator />
          <ChangePasswordSettings theme={theme} messages={messages} />
          <Separator />
          <PaymentMethodsSettings theme={theme} messages={messages} />
          <Separator />
          <InviteSettings theme={theme} messages={messages} />
          <Separator />
          <LanguageSettings messages={messages} {...vm} />
        </CardContent>
      </Card>
    </section>
  )
}
