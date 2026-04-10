import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ headline: 'Overview', count: 3 })
}
