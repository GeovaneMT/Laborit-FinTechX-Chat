import { z } from 'zod/v4'

export const createPhoneInputSchema = z.object({
  userId: z.string().min(1, 'User ID is required'),
  userEmail: z.string().email('Invalid email address'),
  number: z.string().min(1, 'Phone number is required'),
})

export type CreatePhoneInput = z.infer<typeof createPhoneInputSchema>

export function parseCreatePhoneInput(value: unknown): CreatePhoneInput {
  return createPhoneInputSchema.parse(value)
}

export function safeParseCreatePhoneInput(value: unknown) {
  return createPhoneInputSchema.safeParse(value)
}
