'use client'

import Link from 'next/link'

import { Label } from '@shadcn/label'
import { Progress } from '@shadcn/progress'
import { ChevronRightIcon, LockIcon } from 'lucide-react'

import type { ProfileMessages } from '@features/profile/i18n'

import { Button } from '@ui/button'
import { TypographyMuted } from '@ui/typography/basic/muted'

import type { Profile } from '@/core/entities/profile'

import { paths } from '@/core/utils/paths'

type AccountSecurityProps = {
  profile: Profile
  messages: ProfileMessages
  getProfileSecurityLabel(score: number): string
}

export function AccountSecurity({
  profile,
  messages,
  getProfileSecurityLabel,
}: AccountSecurityProps) {
  return (
    <div className="w-full">
      <Link href={paths.changePassword} className="flex items-center space-x-4">
        <LockIcon size={32} />
        <div className="w-full space-y-1">
          <Label htmlFor="dark-mode">
            {messages['profile.accountSecurity']}
          </Label>
          <Progress value={profile.accountSecurity} className="my-3" />
          <TypographyMuted>
            {getProfileSecurityLabel(profile.accountSecurity)}
          </TypographyMuted>
        </div>
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
