'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@ui/button'
import { Input } from '@ui/shadcn/input'
import { Label } from '@ui/shadcn/label'
import { Card, CardContent, CardHeader, CardTitle } from '@ui/shadcn/card'

type EditInformationPageClientProps = {
  messages: Record<string, string>
}

export function EditInformationPageClient({
  messages,
}: EditInformationPageClientProps) {
  const router = useRouter()
  const [name, setName] = useState('João Silva')
  const [email, setEmail] = useState('joao@example.com')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(messages['editInformation.savedAlert'])
    router.push('/profile')
  }

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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">{messages['editInformation.name']}</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">{messages['editInformation.email']}</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex gap-2">
              <Button type="submit">{messages['editInformation.save']}</Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
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
