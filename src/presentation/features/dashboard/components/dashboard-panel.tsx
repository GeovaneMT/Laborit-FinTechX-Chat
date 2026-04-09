"use client";

import { useDashboardScreen } from "@features/dashboard/view-models/use-dashboard-screen";
import { Alert, AlertDescription, AlertTitle } from "@ui/alert";
import { Badge } from "@ui/badge";
import { Skeleton } from "@ui/skeleton";

export function DashboardPanel() {
  const vm = useDashboardScreen();

  if (vm.error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Unable to load</AlertTitle>
        <AlertDescription>{vm.error.message}</AlertDescription>
      </Alert>
    );
  }

  if (vm.isLoading) {
    return <Skeleton className="h-24 w-full" />;
  }

  return (
    <div className="space-y-2 rounded-lg border border-[var(--color-border)] p-4">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold">{vm.headline}</h2>
        <Badge>{vm.count} items</Badge>
      </div>
    </div>
  );
}
