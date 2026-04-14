'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@shadcn/card'
import { ChevronLeftIcon } from 'lucide-react'

import { ChangePasswordSettings } from '@features/preferences/components/change-password-settings'
import { InviteSettings } from '@features/preferences/components/invite-settings'
import { LanguageSettings } from '@features/preferences/components/language-settings'
import { PaymentMethodsSettings } from '@features/preferences/components/payment-methods-settings'
import { ThemeSettings } from '@features/preferences/components/theme-settings'
import { UserInfoSettings } from '@features/preferences/components/user-info-settings'
import type { PreferencesMessages } from '@features/preferences/i18n'
import { usePreferencesScreen } from '@features/preferences/view-models/use-preferences-screen'

import { Separator } from '@/presentation/ui/separator'
import { Button } from '@/presentation/ui/shadcn/button'
import { TypographyH2 } from '@/presentation/ui/typography/hx/h2'

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
  const { router, theme } = vm

  return (
    <section className="w-full">
      <Card className="w-full">
        <CardHeader className="mb-8 flex items-center">
          <Button size="icon-lg" variant="secondary" onClick={router.back}>
            <ChevronLeftIcon />
          </Button>
          <CardTitle className="flex-1">
            <TypographyH2 className="text-center">
              {messages['preferences.title']}
            </TypographyH2>
          </CardTitle>
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
