"use client";

import { useQuery } from "@tanstack/react-query";
import { queryKeyRegistry } from "@infra/query-keys";
import { readProfileAction } from "@features/settings/actions";

export function useProfile() {
  return useQuery({
    queryKey: queryKeyRegistry.profile.current,
    queryFn: () => readProfileAction(),
  });
}
