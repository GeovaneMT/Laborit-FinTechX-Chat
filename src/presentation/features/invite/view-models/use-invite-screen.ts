'use client'

import { useCallback, useState } from 'react'

import { toast } from 'sonner'

import type { InviteMessages } from '@features/invite/i18n'

const INVITE_CODE = 'BrainAiPartnerMR'

export function useInviteScreen(messages: InviteMessages) {
  const [copied, setCopied] = useState(false)
  const [inviteCode, setInviteCode] = useState(INVITE_CODE)

  const handleCopy = useCallback(async () => {
    const promise = navigator.clipboard.writeText(inviteCode)

    toast.promise(promise, {
      loading: messages['loading'],
      success: () => {
        setCopied(true)
        window.setTimeout(() => setCopied(false), 2000)
        return messages['invite.codeCopied']
      },
      error: () => 'Error',
    })
  }, [inviteCode, messages])

  return {
    copied,
    inviteCode,
    handleCopy,
    setInviteCode,
  }
}
