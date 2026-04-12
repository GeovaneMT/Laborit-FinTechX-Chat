import { z } from 'zod/v4'

import type { Item } from '@core/entities/item'
import { itemIdSchema } from '@core/value-objects/item-id'

export const itemSchema = z.object({
  id: itemIdSchema,
  title: z.string().min(1),
  updatedAt: z.string().datetime(),
})

export type ItemInput = z.infer<typeof itemSchema>

export function parseItem(value: unknown): Item {
  return itemSchema.parse(value)
}

export function safeParseItem(value: unknown) {
  return itemSchema.safeParse(value)
}
