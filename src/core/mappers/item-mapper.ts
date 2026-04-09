import type { Item } from "@core/entities/item";
import type { ItemId } from "@core/value-objects/item-id";
import { parseItemId } from "@core/value-objects/item-id";

type ItemDto = {
  id: string;
  title: string;
  updatedAt: string;
};

export function itemFromDto(dto: ItemDto): Item {
  const id = parseItemId(dto.id) as ItemId;
  return {
    id,
    title: dto.title,
    updatedAt: dto.updatedAt,
  };
}
