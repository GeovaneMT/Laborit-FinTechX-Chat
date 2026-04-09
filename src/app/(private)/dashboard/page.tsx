import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { queryKeyRegistry } from "@infra/query-keys";
import { readDashboardSummaryAction } from "@features/dashboard/actions";
import { DashboardPanel } from "@features/dashboard/components/dashboard-panel";

export default async function DashboardPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryKeyRegistry.dashboard.summary,
    queryFn: () => readDashboardSummaryAction(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <DashboardPanel />
      </div>
    </HydrationBoundary>
  );
}
