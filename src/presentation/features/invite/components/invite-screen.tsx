'use client'

import { Card, CardContent, CardHeader } from '@shadcn/card'

import { CopyInput } from '@features/invite/components/copy-input'
import { InviteBanner } from '@features/invite/components/invite-banner'
import type { InviteMessages } from '@features/invite/i18n'
import { useInviteScreen } from '@features/invite/view-models/use-invite-screen'

import { CardHeaderContent } from '@/presentation/pattern/card-header-content'

type InviteScreenProps = {
  messages: InviteMessages
}

export function InviteScreen({ messages }: InviteScreenProps) {
  const vm = useInviteScreen(messages)

  return (
    <section className="w-full">
      <Card className="w-full">
        <CardHeader>
          <CardHeaderContent title={messages['invite.title']} />
        </CardHeader>
        <CardContent className="space-y-20">
          <InviteBanner messages={messages} />
          <CopyInput {...vm} />
        </CardContent>
      </Card>
    </section>
  )
}
