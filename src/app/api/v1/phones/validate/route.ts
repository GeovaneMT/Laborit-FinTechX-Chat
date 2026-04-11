import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const number = searchParams.get('number')

  if (!number) {
    return NextResponse.json(
      {
        success: false,
        error: 'Phone number is required',
      },
      { status: 400 },
    )
  }

  if (!number.match(/^\+?[0-9\s\-()]+$/)) {
    return NextResponse.json(
      {
        success: false,
        error: 'Invalid phone number format',
      },
      { status: 400 },
    )
  }

  if (number === '+55 11 91234-5678') {
    return NextResponse.json(
      {
        success: false,
        error: 'Phone number is already registered',
      },
      { status: 409 },
    )
  }

  return NextResponse.json({
    success: true,
    isValid: true,
    number,
    country: 'BR',
  })
}
