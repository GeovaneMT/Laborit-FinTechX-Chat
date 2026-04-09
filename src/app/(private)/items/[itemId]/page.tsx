"use client";

import { useParams } from "next/navigation";
import { ItemDetail } from "@features/items/components/item-detail";

export default function ItemDetailPage() {
  const params = useParams<{ itemId: string }>();
  const itemId = typeof params?.itemId === "string" ? params.itemId : "";

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Item</h1>
      {itemId ? <ItemDetail itemId={itemId} /> : null}
    </div>
  );
}
