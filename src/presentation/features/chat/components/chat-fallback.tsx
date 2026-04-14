'use client'

import { Card, CardContent } from '@shadcn/card'

import { TypographyH3 } from '@ui/typography/hx/h3'

const capabilities = [
  'Remembers what user said earlier in the conversation',
  'Allows user to provide follow-up corrections with AI',
  'Limited knowledge of world and events after 2021',
  'May occasionally generate incorrect information',
  'May occasionally produce harmful instructions or biased content',
]

export function ChatFallback() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-8">
      <div className="text-center">
        <TypographyH3>BrainBox</TypographyH3>
      </div>

      <div className="w-max space-y-3">
        {capabilities.map((capability, index) => (
          <Card
            key={index}
            className="border-border bg-muted/50 max-w-2xl rounded-lg border p-4"
          >
            <CardContent className="m-0 p-0">
              <p className="text-muted-foreground text-sm">{capability}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
