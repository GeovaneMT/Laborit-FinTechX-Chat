import { z } from 'zod/v4'

export const sendMessageSchema = z.object({
  message: z
    .string()
    .min(1, 'Message cannot be empty')
    .max(1000, 'Message too long'),
})

export type SendMessageInput = z.infer<typeof sendMessageSchema>

export function parseSendMessageInput(value: unknown): SendMessageInput {
  return sendMessageSchema.parse(value)
}

export function safeParseSendMessageInput(value: unknown) {
  return sendMessageSchema.safeParse(value)
}
