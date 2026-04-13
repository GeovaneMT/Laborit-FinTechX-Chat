'use client'

import Link from 'next/link'

import { ChevronRightIcon, KeyIcon } from 'lucide-react'

import type { PreferencesMessages } from '@features/preferences/i18n'

import { Button } from '@/presentation/ui/button'
import { TypographyMuted } from '@/presentation/ui/typography/basic/muted'
import { Label } from '@ui/shadcn/label'

import { paths } from '@/core/utils/paths'

type ChangePasswordSettingsProps = {
  messages: PreferencesMessages
  theme: string | undefined
}

export function ChangePasswordSettings({
  theme,
  messages,
}: ChangePasswordSettingsProps) {
  return (
    <Link href={paths.changePassword} className="flex items-center space-x-4">
      <KeyIcon fill={theme === 'dark' ? 'white' : 'black'} size={32} />
      <div className="space-y-1">
        <Label htmlFor="dark-mode">
          {messages['preferences.changePassword']}
        </Label>
        <TypographyMuted>
          {messages['preferences.changePassword.sub']}
        </TypographyMuted>
      </div>
      <div className="flex flex-1 justify-end">
        <Button variant="link" effect="spinIcon" icon={<ChevronRightIcon />} />
      </div>
    </Link>
  )
}
