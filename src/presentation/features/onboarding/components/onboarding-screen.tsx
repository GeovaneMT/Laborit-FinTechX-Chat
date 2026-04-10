import type { OnboardingMessages } from '@features/onboarding/i18n'
import { Button } from '@ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@ui/shadcn/card'
import Link from 'next/link'

type OnboardingScreenProps = {
  messages: OnboardingMessages
}

export function OnboardingScreen({ messages }: OnboardingScreenProps) {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">
            {messages['onboarding.welcomeTitle']}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
            <p>{messages['onboarding.description']}</p>
            <ul className="list-inside list-disc space-y-2">
              <li>{messages['onboarding.bullet1']}</li>
              <li>{messages['onboarding.bullet2']}</li>
              <li>{messages['onboarding.bullet3']}</li>
            </ul>
          </div>
          <Link href="/chat" className="block">
            <Button className="w-full">{messages['onboarding.button']}</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
