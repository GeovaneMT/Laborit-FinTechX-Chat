"use client";

import { useSettingsScreen } from "@features/settings/view-models/use-settings-screen";
import { Alert, AlertDescription, AlertTitle } from "@ui/alert";
import { Skeleton } from "@ui/skeleton";

export function SettingsPanel() {
  const vm = useSettingsScreen();

  if (vm.error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Unable to load profile</AlertTitle>
        <AlertDescription>{vm.error.message}</AlertDescription>
      </Alert>
    );
  }

  if (vm.isLoading) {
    return <Skeleton className="h-24 w-full" />;
  }

  return (
    <div className="space-y-2 rounded-lg border border-[var(--color-border)] p-4">
      <p className="text-sm text-[var(--color-muted-foreground)]">Display name</p>
      <p className="text-lg font-medium">{vm.displayName}</p>
      <p className="text-sm text-[var(--color-muted-foreground)]">Email</p>
      <p className="text-lg font-medium">{vm.email}</p>
    </div>
  );
}
