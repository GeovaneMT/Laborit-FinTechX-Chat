import { z } from 'zod'

export const profileSchema = z.object({
  displayName: z.string().min(1, 'Display name is required'),
  email: z.string().email('Invalid email address'),
})

export type ProfileFormData = z.infer<typeof profileSchema>
