'use client'

import { Card, CardContent, CardHeader } from '@shadcn/card'

import type { EditInformationMessages } from '@features/edit-information/i18n'
import { useEditInformationScreen } from '@features/edit-information/view-models/use-edit-information-screen'

import { CardHeaderContent } from '@pattern/card-header-content'

import { Button } from '@ui/button'
import { Input } from '@shadcn/input'
import { Label } from '@shadcn/label'

type EditInformationScreenProps = {
  messages: EditInformationMessages
}

export function EditInformationScreen({
  messages,
}: EditInformationScreenProps) {
  const { name, email, setName, setEmail, handleSubmit } =
    useEditInformationScreen()

  return (
    <section className="w-full">
      <Card>
        <CardHeader className="mb-8 flex items-center">
          <CardHeaderContent
            title={messages['editInformation.updateProfile']}
          />
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(event) =>
              handleSubmit(event, () =>
                alert(messages['editInformation.savedAlert']),
              )
            }
            className="space-y-4"
          >
            <div>
              <Label htmlFor="name">{messages['editInformation.name']}</Label>
              <Input
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">{messages['editInformation.email']}</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="flex gap-2">
              <Button type="submit">{messages['editInformation.save']}</Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => window.history.back()}
              >
                {messages['editInformation.cancel']}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
