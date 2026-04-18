'use client'

import { UpdateProfileForm } from '@presentation/features/edit-information/components/forms/profile-update.form'
import { Card, CardContent, CardHeader } from '@shadcn/card'

import type { EditInformationMessages } from '@features/edit-information/i18n'

import { CardHeaderContent } from '@pattern/card-header-content'

type EditInformationScreenProps = {
  messages: EditInformationMessages
}

export function EditInformationScreen({
  messages,
}: EditInformationScreenProps) {
  return (
    <section className="w-full">
      <Card>
        <CardHeader className="mb-8 flex items-center">
          <CardHeaderContent
            title={messages['editInformation.updateProfile']}
          />
        </CardHeader>
        <CardContent>
          <UpdateProfileForm messages={messages} />
        </CardContent>
      </Card>
    </section>
  )
}
