'use client'

import Link from 'next/link'

import { Label } from '@shadcn/label'
import { ChevronRightIcon, UserIcon } from 'lucide-react'

import type { PreferencesMessages } from '@features/preferences/i18n'

import { Button } from '@ui/button'
import { TypographyMuted } from '@ui/typography/basic/muted'

import { paths } from '@/core/utils/paths'

type EditInfoSettingsProps = {
  theme: string | undefined
  messages: PreferencesMessages
}

export function EditInfoSettings({ theme, messages }: EditInfoSettingsProps) {
  return (
    <Link href={paths.editInformation} className="flex items-center space-x-4">
      <UserIcon fill={theme === 'dark' ? 'white' : 'black'} size={32} />
      <div className="space-y-1">
        <Label htmlFor="dark-mode">{messages['preferences.accountInfo']}</Label>
        <TypographyMuted>
          {messages['preferences.accountInfo.sub']}
        </TypographyMuted>
      </div>
      <div className="flex flex-1 justify-end">
        <Button variant="link" effect="spinIcon" icon={<ChevronRightIcon />} />
      </div>
    </Link>
  )
}
