import { z } from 'zod/v4'

export const validatePhoneInputSchema = z.object({
  number: z.string().min(1, 'Phone number is required'),
})

export type ValidatePhoneInput = z.infer<typeof validatePhoneInputSchema>

export function parseValidatePhoneInput(value: unknown): ValidatePhoneInput {
  return validatePhoneInputSchema.parse(value)
}

export function safeParseValidatePhoneInput(value: unknown) {
  return validatePhoneInputSchema.safeParse(value)
}
