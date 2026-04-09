import type { Item } from "@core/entities/item";

export function sortItemsByUpdatedAt(items: Item[]): Item[] {
  return [...items].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  );
}
