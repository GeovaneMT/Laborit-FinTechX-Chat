import Link from 'next/link'

import type { HomeMessages } from '@features/home/i18n'

import { Button } from '@ui/button'
import { TypographyH1 } from '@ui/typography/hx/h1'

import { paths } from '@/core/utils/paths'

type HomeScreenProps = {
  messages: HomeMessages
}

export function HomeScreen({ messages }: HomeScreenProps) {
  return (
    <>
      <TypographyH1>{messages['home.title']}</TypographyH1>

      <Button asChild>
        <Link href={paths.chat}>{messages['home.chat']}</Link>
      </Button>

      <Button asChild>
        <Link href={paths.dashboard}>{messages['home.dashboard']}</Link>
      </Button>

      <Button asChild>
        <Link href={paths.editInformation}>
          {messages['home.editInformation']}
        </Link>
      </Button>

      <Button asChild>
        <Link href={paths.healthInstructions}>
          {messages['home.healthInstructions']}
        </Link>
      </Button>

      <Button asChild>
        <Link href={paths.invite}>{messages['home.invite']}</Link>
      </Button>

      <Button asChild>
        <Link href={paths.onboarding}>{messages['home.onboarding']}</Link>
      </Button>

      <Button asChild>
        <Link href={paths.preferences}>{messages['home.preferences']}</Link>
      </Button>

      <Button asChild>
        <Link href={paths.profile}>{messages['home.profile']}</Link>
      </Button>
    </>
  )
}
