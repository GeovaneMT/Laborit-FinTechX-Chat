import { z } from "zod";

export const itemIdSchema = z.string().min(1);

export type ItemId = z.infer<typeof itemIdSchema>;

export function parseItemId(value: unknown): ItemId {
  return itemIdSchema.parse(value);
}
