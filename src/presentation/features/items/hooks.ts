"use client";

import { useQuery } from "@tanstack/react-query";
import { queryKeyRegistry } from "@infra/query-keys";
import { getItemAction, listItemsAction } from "@features/items/actions";

export function useItemsList(filters?: Record<string, string>) {
  return useQuery({
    queryKey: queryKeyRegistry.items.list(filters),
    queryFn: () => listItemsAction(),
  });
}

export function useItemDetail(id: string) {
  return useQuery({
    queryKey: queryKeyRegistry.items.detail(id),
    queryFn: () => getItemAction(id),
    enabled: Boolean(id),
  });
}
