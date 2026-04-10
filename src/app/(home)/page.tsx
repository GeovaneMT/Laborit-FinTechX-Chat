import Link from 'next/link'

import { Button } from '@ui/button'
import { TypographyH1 } from '@ui/typography/hx/h1'

const HomePage = async () => (
  <>
    <TypographyH1>home</TypographyH1>

    <Button asChild>
      <Link href="/chat">Chat</Link>
    </Button>

    <Button asChild>
      <Link href="/dashboard">Dashboard</Link>
    </Button>

    <Button asChild>
      <Link href="/edit-information">Edit Information</Link>
    </Button>

    <Button asChild>
      <Link href="/health-instructions">Health Instructions</Link>
    </Button>

    <Button asChild>
      <Link href="/invite">Invite</Link>
    </Button>

    <Button asChild>
      <Link href="/onboarding">Onboarding</Link>
    </Button>

    <Button asChild>
      <Link href="/preferences">Preferences</Link>
    </Button>

    <Button asChild>
      <Link href="/profile">Profile</Link>
    </Button>

    <Button asChild>
      <Link href="/splash">Splash</Link>
    </Button>
  </>
)

export default HomePage
