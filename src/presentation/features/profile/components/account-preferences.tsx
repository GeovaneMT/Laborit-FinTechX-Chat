'use client'

import Link from 'next/link'

import { Label } from '@shadcn/label'
import { ChevronRightIcon, SettingsIcon } from 'lucide-react'

import type { ProfileMessages } from '@features/profile/i18n'

import { Button } from '@ui/button'

import { paths } from '@/core/utils/paths'

type AccountPreferencesProps = {
  messages: ProfileMessages
}

export function AccountPreferences({ messages }: AccountPreferencesProps) {
  return (
    <div className="w-full">
      <Link href={paths.preferences} className="flex items-center space-x-4">
        <SettingsIcon size={32} />
        <Label htmlFor="dark-mode">{messages['profile.preferences']}</Label>
        <div className="flex flex-1 justify-end">
          <Button
            variant="link"
            effect="spinIcon"
            icon={<ChevronRightIcon />}
          />
        </div>
      </Link>
    </div>
  )
}
