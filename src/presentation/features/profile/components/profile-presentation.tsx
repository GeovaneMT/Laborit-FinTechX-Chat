'use client'

import Image from 'next/image'

import { CircleIcon } from 'lucide-react'

import { TypographyMuted } from '@ui/typography/basic/muted'
import { TypographyH2 } from '@ui/typography/hx/h2'

import type { Profile } from '@/core/entities/profile'

type ProfilePresentationProps = {
  profile: Profile
}

export function ProfilePresentation({ profile }: ProfilePresentationProps) {
  return (
    <div>
      <div className="relative mx-auto w-max">
        <Image
          src={profile.avatarUrl}
          alt="Profile avatar"
          width={120}
          height={120}
        />
        <CircleIcon fill="green" className="absolute right-2 bottom-2" />
      </div>
      <TypographyH2 className="text-center">{profile.displayName}</TypographyH2>
      <TypographyMuted className="text-center">{profile.email}</TypographyMuted>
    </div>
  )
}
