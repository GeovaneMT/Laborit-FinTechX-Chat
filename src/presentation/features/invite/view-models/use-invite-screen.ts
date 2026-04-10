'use client'

import { useCallback, useState } from 'react'

const INVITE_CODE = 'LABORIT2024'

export function useInviteScreen() {
  const [copied, setCopied] = useState(false)

  const inviteCode = INVITE_CODE

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(inviteCode)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }, [inviteCode])

  return {
    inviteCode,
    copied,
    handleCopy,
  }
}
