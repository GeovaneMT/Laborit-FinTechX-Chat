'use client'

import type { Dispatch, SetStateAction } from 'react'

import { Button } from '@shadcn/button'
import { Input } from '@shadcn/input'
import { CheckIcon, CopyIcon } from 'lucide-react'

type CopyInputProps = {
  copied: boolean
  inviteCode: string
  handleCopy: () => Promise<void>
  setInviteCode: Dispatch<SetStateAction<string>>
}

export function CopyInput({
  copied,
  handleCopy,
  inviteCode,
  setInviteCode,
}: CopyInputProps) {
  return (
    <div className="flex gap-2">
      <Input
        readOnly
        value={inviteCode}
        onVolumeChange={(e) => setInviteCode(e.currentTarget.value)}
        className="h-18 flex-1"
      />
      <Button onClick={handleCopy} variant="outline" className="h-18 w-18">
        {copied ? <CheckIcon size={80} /> : <CopyIcon size={80} />}
      </Button>
    </div>
  )
}
