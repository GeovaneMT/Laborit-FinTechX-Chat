'use client'

import { useRouter } from 'next/navigation'

import { ChevronLeftIcon } from 'lucide-react'

import type { ProfileMessages } from '@features/profile/i18n'
import { useProfileViewModel } from '@features/profile/view-models/profile.view-model'

import { LoadingMessage } from '@/presentation/ui/loading-message'
import { TypographyH2 } from '@/presentation/ui/typography/hx/h2'
import { Button } from '@ui/shadcn/button'
import { Card, CardContent, CardHeader, CardTitle } from '@shadcn/card'

type ProfileScreenProps = {
  messages: ProfileMessages
}

export function ProfileScreen({ messages }: ProfileScreenProps) {
  const router = useRouter()
  const { profile, isLoading } = useProfileViewModel()

  if (isLoading) {
    return <LoadingMessage />
  }

  if (!profile) {
    throw new Error('Profile data is required')
  }

  return (
    <section className="w-full">
      <Card className="w-full">
        <CardHeader className="mb-8 flex items-center">
          <Button size="icon-lg" variant="secondary" onClick={router.back}>
            <ChevronLeftIcon />
          </Button>
          <CardTitle className="flex-1">
            <TypographyH2 className="text-center">
              {messages['profile.title']}
            </TypographyH2>
          </CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </section>
  )
}
