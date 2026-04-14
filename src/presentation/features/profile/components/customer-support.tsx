'use client'

import Link from 'next/link'

import { Label } from '@shadcn/label'
import { ChevronRightIcon, CircleQuestionMarkIcon } from 'lucide-react'

import type { ProfileMessages } from '@features/profile/i18n'

import { Button } from '@ui/button'

import { paths } from '@/core/utils/paths'

type CustomerSupportProps = {
  messages: ProfileMessages
}

export function CustomerSupport({ messages }: CustomerSupportProps) {
  return (
    <div className="w-full">
      <Link
        href={paths.customerSupport}
        className="flex items-center space-x-4"
      >
        <CircleQuestionMarkIcon size={32} />
        <Label htmlFor="dark-mode">{messages['profile.customerSupport']}</Label>
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
