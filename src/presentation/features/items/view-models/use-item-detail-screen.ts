"use client";

import { useItemDetail } from "@features/items/hooks";

export function useItemDetailScreen(id: string) {
  const detail = useItemDetail(id);
  return {
    item: detail.data,
    isLoading: detail.isLoading,
    error: detail.error,
  };
}
