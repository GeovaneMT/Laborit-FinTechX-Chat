import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    displayName: 'Demo user',
    email: 'demo@example.com',
    accountSecurity: 80,
    avatarUrl: '/images/user-avatar.svg',
  })
}
