"use client";

import { useItemsList } from "@features/items/hooks";

export function useItemsScreen(filters?: Record<string, string>) {
  const list = useItemsList(filters);
  return {
    items: list.data ?? [],
    isLoading: list.isLoading,
    error: list.error,
  };
}
