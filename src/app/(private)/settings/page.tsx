import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { queryKeyRegistry } from "@infra/query-keys";
import { readProfileAction } from "@features/settings/actions";
import { SettingsPanel } from "@features/settings/components/settings-panel";

export default async function SettingsPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryKeyRegistry.profile.current,
    queryFn: () => readProfileAction(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <SettingsPanel />
      </div>
    </HydrationBoundary>
  );
}
