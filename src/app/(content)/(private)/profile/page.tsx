import Link from 'next/link'
import { cookies } from 'next/headers'
import { Button } from '@ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@ui/shadcn/card'
import { getMessages, resolveLocale } from '@infra/i18n'

export default async function ProfilePage() {
  const locale = resolveLocale((await cookies()).get('locale')?.value)
  const messages = getMessages(locale)

  // Mock data
  const profile = {
    name: 'João Silva',
    email: 'joao@example.com',
    avatar: null,
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{messages['profile.title']}</h1>
      <Card>
        <CardHeader>
          <CardTitle>{messages['profile.personalInformation']}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium">
              {messages['profile.name']}
            </label>
            <p className="text-gray-600 dark:text-gray-300">{profile.name}</p>
          </div>
          <div>
            <label className="text-sm font-medium">
              {messages['profile.email']}
            </label>
            <p className="text-gray-600 dark:text-gray-300">{profile.email}</p>
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
