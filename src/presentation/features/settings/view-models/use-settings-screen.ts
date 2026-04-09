"use client";

import { useProfile } from "@features/settings/hooks";

export function useSettingsScreen() {
  const profile = useProfile();
  return {
    displayName: profile.data?.displayName ?? "—",
    email: profile.data?.email ?? "—",
    isLoading: profile.isLoading,
    error: profile.error,
  };
}
