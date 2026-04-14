import { Card, CardContent, CardHeader, CardTitle } from '@shadcn/card'
import { TabsContent } from '@shadcn/tabs'

import type { OnboardingMessages } from '@features/onboarding/i18n'

import { TypographyMuted } from '@ui/typography/basic/muted'
import { TypographyH1 } from '@ui/typography/hx/h1'

type OnboardingTab3Props = {
  messages: OnboardingMessages
}

export function OnboardingTab3({ messages }: OnboardingTab3Props) {
  return (
    <section className="w-full space-y-4">
      <TabsContent value="3">
        <Card className="ring-0">
          <CardHeader>
            <CardTitle>
              <TypographyH1 className="text-center">
                {messages['onboarding.title3']}
              </TypographyH1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TypographyMuted className="text-center">
              {messages['onboarding.description3']}
            </TypographyMuted>
          </CardContent>
        </Card>
      </TabsContent>
    </section>
  )
}
