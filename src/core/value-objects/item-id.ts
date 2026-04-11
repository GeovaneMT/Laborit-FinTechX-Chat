import { z } from 'zod/v4'

export const itemIdSchema = z
  .string()
  .min(1, 'Invalid item ID format. Must be a non-empty string.')

export type ItemId = z.infer<typeof itemIdSchema>

export function parseItemId(value: unknown): ItemId {
  return itemIdSchema.parse(value)
}
