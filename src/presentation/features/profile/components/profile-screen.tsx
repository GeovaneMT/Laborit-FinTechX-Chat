import type { ProfileMessages } from '@features/profile/i18n'
import { Button } from '@ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@ui/shadcn/card'
import Link from 'next/link'

type ProfileScreenProps = {
  messages: ProfileMessages
}

export function ProfileScreen({ messages }: ProfileScreenProps) {
  const profile = {
    name: 'João Silva',
    email: 'joao@example.com',
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
            <p>{profile.name}</p>
          </div>
          <div>
            <label className="text-sm font-medium">
              {messages['profile.email']}
            </label>
            <p>{profile.email}</p>
          </div>
          <Link href="/edit-information">
            <Button variant="outline">
              {messages['profile.editInformation']}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
