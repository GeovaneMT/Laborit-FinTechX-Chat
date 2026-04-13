'use client'

import { CopyInput } from '@features/invite/components/copy-input'
import type { InviteMessages } from '@features/invite/i18n'
import { useInviteScreen } from '@features/invite/view-models/use-invite-screen'

import { TypographyH2 } from '@/presentation/ui/typography/hx/h2'
import { Card, CardContent, CardHeader, CardTitle } from '@ui/shadcn/card'

import { InviteBanner } from './invite-banner'

type InviteScreenProps = {
  messages: InviteMessages
}

export function InviteScreen({ messages }: InviteScreenProps) {
  const vm = useInviteScreen(messages)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <TypographyH2>{messages['invite.title']}</TypographyH2>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-20">
        <InviteBanner messages={messages} />
        <CopyInput {...vm} />
      </CardContent>
    </Card>
  )
}
