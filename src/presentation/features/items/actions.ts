"use server";

import { revalidatePath, revalidateTag, updateTag } from "next/cache";
import { getJson } from "@http/http-resource";
import { cacheTags } from "@infra/cache-tags";
import { itemFromDto } from "@core/mappers/item-mapper";
import type { Item } from "@core/entities/item";

type ItemDto = { id: string; title: string; updatedAt: string };

export async function listItemsAction(): Promise<Item[]> {
  const rows = await getJson<ItemDto[]>("/api/v1/items", {
    tags: [cacheTags.itemsList()],
  });
  return rows.map(itemFromDto);
}

export async function getItemAction(id: string): Promise<Item> {
  const dto = await getJson<ItemDto>(`/api/v1/items/${id}`, {
    tags: [cacheTags.itemDetail(id)],
  });
  return itemFromDto(dto);
}

export async function touchItemAction(id: string) {
  updateTag(cacheTags.itemDetail(id));
  revalidateTag(cacheTags.itemsList(), "max");
  revalidatePath("/items");
  revalidatePath(`/items/${id}`);
}
