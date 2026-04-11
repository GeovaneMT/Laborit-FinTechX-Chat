import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const payload = await request.json()

  if (!payload.userId || !payload.number) {
    return NextResponse.json(
      {
        success: false,
        error: 'User ID and phone number are required',
      },
      { status: 400 },
    )
  }

  if (payload.number === '+55 11 91234-5678') {
    return NextResponse.json(
      {
        success: false,
        error: `A phone number ${payload.number} is already registered`,
      },
      { status: 409 },
    )
  }

  return NextResponse.json(
    {
      success: true,
      id: `phone_${Date.now()}`,
      userId: payload.userId,
      number: payload.number,
      createdAt: new Date().toISOString(),
    },
    { status: 201 },
  )
}
