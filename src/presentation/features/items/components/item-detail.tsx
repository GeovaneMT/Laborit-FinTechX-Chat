"use client";

import { useItemDetailScreen } from "@features/items/view-models/use-item-detail-screen";
import { Alert, AlertDescription, AlertTitle } from "@ui/shadcn/alert";
import { Skeleton } from "@ui/shadcn/skeleton";

type Props = {
  itemId: string;
};

export function ItemDetail({ itemId }: Props) {
  const vm = useItemDetailScreen(itemId);

  if (vm.error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Unable to load item</AlertTitle>
        <AlertDescription>{vm.error.message}</AlertDescription>
      </Alert>
    );
  }

  if (vm.isLoading || !vm.item) {
    return <Skeleton className="h-32 w-full" />;
  }

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">{vm.item.title}</h2>
      <p className="text-sm text-(--color-muted-foreground)">Updated {vm.item.updatedAt}</p>
    </div>
  );
}
