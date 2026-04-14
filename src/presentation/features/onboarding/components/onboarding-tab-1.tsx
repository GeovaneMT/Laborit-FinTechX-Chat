import { Card, CardContent, CardHeader, CardTitle } from '@shadcn/card'
import { TabsContent } from '@shadcn/tabs'

import type { OnboardingMessages } from '@features/onboarding/i18n'

import { TypographyMuted } from '@ui/typography/basic/muted'
import { TypographyH1 } from '@ui/typography/hx/h1'

type OnboardingTab1Props = {
  messages: OnboardingMessages
}

export function OnboardingTab1({ messages }: OnboardingTab1Props) {
  return (
    <section className="w-full space-y-4">
      <TabsContent value="1">
        <Card className="ring-0">
          <CardHeader>
            <CardTitle>
              <TypographyH1 className="text-center">
                {messages['onboarding.title1']}
              </TypographyH1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TypographyMuted className="text-center">
              {messages['onboarding.description2']}
            </TypographyMuted>
          </CardContent>
        </Card>
      </TabsContent>
    </section>
  )
}
