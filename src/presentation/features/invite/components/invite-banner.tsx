'use client'

import Image from 'next/image'

import type { InviteMessages } from '@features/invite/i18n'

import { TypographyMuted } from '@ui/typography/basic/muted'
import { TypographyH4 } from '@ui/typography/hx/h4'

type InviteBannerProps = {
  messages: InviteMessages
}

export const InviteBanner = ({ messages }: InviteBannerProps) => (
  <div className="place-items-center space-y-2 place-self-center">
    <Image
      src="/images/invite-cube.svg"
      alt="Logo"
      width={120}
      height={120}
      className="m-14"
    />
    <TypographyH4>{messages['invite.shareTitle']}</TypographyH4>
    <TypographyMuted className="text-center">
      {messages['invite.description']}
    </TypographyMuted>
  </div>
)
