import { cookies } from 'next/headers'
import { Card, CardContent, CardHeader, CardTitle } from '@ui/shadcn/card'
import { getMessages, resolveLocale } from '@infra/i18n'

export default async function HealthInstructionsPage() {
  const locale = resolveLocale((await cookies()).get('locale')?.value)
  const messages = getMessages(locale)

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">
        {messages['healthInstructions.title']}
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>
            {messages['healthInstructions.assistantLimits']}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-600 dark:text-gray-300">
          <p>{messages['healthInstructions.descriptionStart']}</p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>{messages['healthInstructions.notMedicalLabel']}:</strong>{' '}
              {messages['healthInstructions.notMedicalText']}
            </li>
            <li>{messages['healthInstructions.consultSpecialists']}</li>
            <li>{messages['healthInstructions.generalInfo']}</li>
            <li>{messages['healthInstructions.privacy']}</li>
          </ul>
          <p>{messages['healthInstructions.descriptionEnd']}</p>
        </CardContent>
      </Card>
    </div>
  )
}
