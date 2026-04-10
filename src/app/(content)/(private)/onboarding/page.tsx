import Link from 'next/link'
import { cookies } from 'next/headers'
import { Button } from '@ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@ui/shadcn/card'
import { getMessages, resolveLocale } from '@infra/i18n'

export default async function OnboardingPage() {
  const locale = resolveLocale((await cookies()).get('locale')?.value)
  const messages = getMessages(locale)

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
