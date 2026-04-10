import Link from 'next/link'
import { Button } from '@ui/button'
import { TypographyH1 } from '@ui/typography/hx/h1'
import type { HomeMessages } from '../i18n'

type HomeScreenProps = {
  messages: HomeMessages
}

export function HomeScreen({ messages }: HomeScreenProps) {
  return (
    <>
      <TypographyH1>{messages['home.title']}</TypographyH1>

      <Button asChild>
        <Link href="/chat">{messages['home.chat']}</Link>
      </Button>

      <Button asChild>
        <Link href="/dashboard">{messages['home.dashboard']}</Link>
      </Button>

      <Button asChild>
        <Link href="/edit-information">{messages['home.editInformation']}</Link>
      </Button>

      <Button asChild>
        <Link href="/health-instructions">
          {messages['home.healthInstructions']}
        </Link>
      </Button>

      <Button asChild>
        <Link href="/invite">{messages['home.invite']}</Link>
      </Button>

      <Button asChild>
        <Link href="/onboarding">{messages['home.onboarding']}</Link>
      </Button>

      <Button asChild>
        <Link href="/preferences">{messages['home.preferences']}</Link>
      </Button>

      <Button asChild>
        <Link href="/profile">{messages['home.profile']}</Link>
      </Button>

      <Button asChild>
        <Link href="/splash">{messages['home.splash']}</Link>
      </Button>
    </>
  )
}
