'use client'

import type { InviteMessages } from '@features/invite/i18n'
import { useInviteScreen } from '@features/invite/view-models/use-invite-screen'
import { Button } from '@ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@ui/shadcn/card'
import { Input } from '@ui/shadcn/input'
import { Check, Copy } from 'lucide-react'

type InviteScreenProps = {
  messages: InviteMessages
}

export function InviteScreen({ messages }: InviteScreenProps) {
  const { copied, handleCopy, inviteCode } = useInviteScreen()

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{messages['invite.title']}</h1>
      <Card>
        <CardHeader>
          <CardTitle>{messages['invite.shareTitle']}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            {messages['invite.description']}
          </p>
          <div className="flex gap-2">
            <Input readOnly value={inviteCode} className="flex-1" />
            <Button onClick={handleCopy} variant="outline">
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
          {copied && (
            <p className="text-sm text-green-600">
              {messages['invite.codeCopied']}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
