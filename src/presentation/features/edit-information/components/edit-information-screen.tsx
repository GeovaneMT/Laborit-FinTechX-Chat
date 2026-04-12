'use client'

import type { EditInformationMessages } from '@features/edit-information/i18n'
import { useEditInformationScreen } from '@features/edit-information/view-models/use-edit-information-screen'

import { Button } from '@ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@ui/shadcn/card'
import { Input } from '@ui/shadcn/input'
import { Label } from '@ui/shadcn/label'

type EditInformationScreenProps = {
  messages: EditInformationMessages
}

export function EditInformationScreen({
  messages,
}: EditInformationScreenProps) {
  const { name, email, setName, setEmail, handleSubmit } =
    useEditInformationScreen()

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">
        {messages['editInformation.title']}
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>{messages['editInformation.updateProfile']}</CardTitle>
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
    </div>
  )
}
