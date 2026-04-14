import { NextResponse } from 'next/server'

import type { Profile } from '@/core/entities/profile'

import { UpdateProfileValidationSchema } from '@/core/schemas/profile.schema'

import type { ProfileDto } from '@/http/generated/models'

type User = Omit<Profile, 'accountSecurity' | 'avatarUrl'>

let user: User = {
  displayName: 'John Doe',
  email: 'john@example.com',
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json()

    const parsed = UpdateProfileValidationSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: parsed.error.message,
          issues: parsed.error.cause,
        },
        { status: 400 },
      )
    }

    const { displayName, email } = parsed.data

    if (!displayName && !email) {
      return NextResponse.json(
        { message: 'At least one field (name or email) must be provided' },
        { status: 400 },
      )
    }

    user = {
      ...user,
      ...(displayName && { displayName }),
      ...(email && { email }),
    }

    const profile: ProfileDto = {
      ...user,
      accountSecurity: 80,
      avatarUrl: '/images/user-avatar.svg',
    }

    return NextResponse.json({
      profile,
    })
  } catch (error) {
    return NextResponse.json(
      { message: 'Invalid request body', error: String(error) },
      { status: 400 },
    )
  }
}
