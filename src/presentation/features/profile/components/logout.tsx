'use client'

import { Label } from '@shadcn/label'
import { LogOutIcon } from 'lucide-react'

import type { ProfileMessages } from '@features/profile/i18n'

import { Button } from '@ui/shadcn/button'

type LogoutProps = {
  onLogout: () => void
  messages: ProfileMessages
}

export function Logout({ onLogout, messages }: LogoutProps) {
  return (
    <div className="flex w-full space-x-2">
      <LogOutIcon size={32} />
      <Button
        variant="link"
        className="flex items-center space-x-4"
        onClick={onLogout}
      >
        <Label htmlFor="dark-mode">{messages['profile.logout']}</Label>
      </Button>
    </div>
  )
}
