import { z } from 'zod/v4'

import type { Profile } from '@core/entities/profile'

export const profileSchema = z.object({
  displayName: z.string().min(1, 'Display name is required'),
  email: z.email('Invalid email address'),
  accountSecurity: z.coerce.number().min(0, 'Account security is required'),
  avatarUrl: z.string('Invalid avatar URL'),
})

export type ProfileInput = z.infer<typeof profileSchema>

/**
 * Schema for user name fields (first, last, username).
 */
export const UpdateProfileValidationSchema = z
  .object({
    displayName: z
      .string()
      .min(3, { message: 'The name must have at least 3 characters.' })
      .meta({
        title: 'displayName',
        description: 'The user name',
        example: 'João',
      }),

    email: z.email().meta({
      title: 'Email',
      description: 'User email',
      example: 'joaosilva@example.com',
    }),
  })
  .meta({
    id: 'UpdateProfileValidationSchema',
    title: 'Name Validation Schema',
    description:
      'Schema for name validation, first name, last name, and user name',
    example: [
      {
        displayName: 'João',
        email: 'joaosilva@example.com',
      },
    ],
  })

export type ZodNameValidate = z.infer<typeof UpdateProfileValidationSchema>

export function parseProfileInput(value: unknown): ProfileInput {
  return profileSchema.parse(value)
}

export function safeParseProfileInput(value: Profile) {
  return profileSchema.safeParse(value)
}

export function safeParseUpdateProfileInput(value: unknown) {
  return profileSchema
    .omit({ accountSecurity: true, avatarUrl: true })
    .parse(value)
}

export function safeParseProfileEmail(email: string) {
  const emailSchema = z.email()
  return emailSchema.safeParse(email)
}

export function toProfile(input: ProfileInput): Profile {
  return {
    displayName: input.displayName.trim(),
    email: input.email.toLowerCase(),
    accountSecurity: input.accountSecurity,
    avatarUrl: input.avatarUrl,
  }
}
