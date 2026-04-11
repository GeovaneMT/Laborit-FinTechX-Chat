'use client'

import Link from 'next/link'
import type { ProfileMessages } from '@features/profile/i18n'
import { Button } from '@ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@ui/shadcn/card'
import { useProfileViewModel } from '@features/profile/view-models/profile.view-model'
import { LoadingMessage } from '@/presentation/ui/loading-message'

type ProfileScreenProps = {
  messages: ProfileMessages
}

export function ProfileScreen({ messages }: ProfileScreenProps) {
  const { profile, isLoading, submitForm, isSubmitting } = useProfileViewModel()

  if (!profile) {
    throw new Error('Profile data is required')
  }

  if (isLoading || isSubmitting) {
    return <LoadingMessage />
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{messages['profile.title']}</h1>
      <Card>
        <CardHeader>
          <CardTitle>{messages['profile.personalInformation']}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-600 dark:text-gray-300">
          <div>
            <label className="text-sm font-medium">
              {messages['profile.name']}
            </label>
            <p>{profile.displayName}</p>
          </div>
          <div>
            <label className="text-sm font-medium">
              {messages['profile.email']}
            </label>
            <p>{profile.email}</p>
          </div>
          <Link href="/edit-information">
            <Button onClick={() => submitForm({})} variant="outline">
              {messages['profile.editInformation']}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
