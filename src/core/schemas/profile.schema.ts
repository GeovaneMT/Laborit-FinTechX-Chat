import { z } from 'zod/v4'
import type { Profile } from '@core/entities/profile'

export const profileSchema = z.object({
  displayName: z.string().min(1, 'Display name is required'),
  email: z.email('Invalid email address'),
})

export type ProfileInput = z.infer<typeof profileSchema>

export function parseProfileInput(value: unknown): ProfileInput {
  return profileSchema.parse(value)
}

export function safeParseProfileInput(value: unknown) {
  return profileSchema.safeParse(value)
}

export function safeParseProfileEmail(email: string) {
  const emailSchema = z.email()
  return emailSchema.safeParse(email)
}

export function toProfile(input: ProfileInput): Profile {
  return {
    displayName: input.displayName.trim(),
    email: input.email.toLowerCase(),
  }
}
