'use client'

import { Card, CardContent, CardHeader } from '@shadcn/card'
import { Separator } from '@shadcn/separator'

import { AccountPreferences } from '@features/profile/components/account-preferences'
import { AccountSecurity } from '@features/profile/components/account-scurity'
import { BottomNav } from '@features/profile/components/bottom-nav'
import { CustomerSupport } from '@features/profile/components/customer-support'
import { Logout } from '@features/profile/components/logout'
import { ProfilePresentation } from '@features/profile/components/profile-presentation'
import type { ProfileMessages } from '@features/profile/i18n'
import { useProfileViewModel } from '@features/profile/view-models/profile.view-model'

import { CardHeaderContent } from '@pattern/card-header-content'

import { ErrorCard } from '@ui/error-card'
import { LoadingMessage } from '@ui/loading-message'

type ProfileScreenProps = {
  messages: ProfileMessages
}

export function ProfileScreen({ messages }: ProfileScreenProps) {
  const vm = useProfileViewModel(messages)

  const { profile, isLoading, error, logoutAction } = vm

  if (isLoading) {
    return <LoadingMessage />
  }

  if (error) {
    return (
      <ErrorCard
        title="Ocorreu um erro ao carregar os dados:"
        message={error.message}
      />
    )
  }

  if (!profile) {
    throw new Error('Profile data is required.')
  }

  return (
    <section className="w-full">
      <Card className="w-full">
        <CardHeader className="mb-8 flex items-center">
          <CardHeaderContent title={messages['profile.title']} />
        </CardHeader>
        <CardContent className="place-items-center space-y-16">
          <ProfilePresentation profile={profile} />
          <Separator />
          <div className="w-full space-y-4">
            <AccountPreferences messages={messages} />
            <Separator />
            <AccountSecurity messages={messages} {...vm} />
            <Separator />
            <CustomerSupport messages={messages} />
            <Separator />
            <Logout messages={messages} onLogout={logoutAction} />
          </div>
        </CardContent>
      </Card>
      <BottomNav />
    </section>
  )
}
