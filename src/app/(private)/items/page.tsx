import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { queryKeyRegistry } from "@infra/query-keys";
import { listItemsAction } from "@features/items/actions";
import { ItemsTable } from "@features/items/components/items-table";

export default async function ItemsPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryKeyRegistry.items.list(),
    queryFn: () => listItemsAction(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Items</h1>
        <ItemsTable />
      </div>
    </HydrationBoundary>
  );
}
