import type { ItemId } from "@core/value-objects/item-id";

export type Item = {
  id: ItemId;
  title: string;
  updatedAt: string;
};
