"use client";

import { useQuery } from "@tanstack/react-query";
import { queryKeyRegistry } from "@infra/query-keys";
import { readDashboardSummaryAction } from "@features/dashboard/actions";

export function useDashboardSummary() {
  return useQuery({
    queryKey: queryKeyRegistry.dashboard.summary,
    queryFn: () => readDashboardSummaryAction(),
  });
}
