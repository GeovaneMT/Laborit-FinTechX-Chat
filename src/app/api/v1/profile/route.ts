import { NextResponse } from 'next/server'

import { safeParseProfileInput } from '@core/schemas/profile.schema'
import { getFirstZodErrorMessage } from '@core/validation/zod-errors'

export async function GET() {
  return NextResponse.json({
    displayName: 'Demo user',
    email: 'demo@example.com',
  })
}

export async function POST(request: Request) {
  const payload = await request.json()
  const parseResult = safeParseProfileInput(payload)

  if (!parseResult.success) {
    return NextResponse.json(
      {
        success: false,
        error: getFirstZodErrorMessage(parseResult.error),
      },
      { status: 400 },
    )
  }

  return NextResponse.json(
    {
      success: true,
      profile: parseResult.data,
    },
    { status: 201 },
  )
}
