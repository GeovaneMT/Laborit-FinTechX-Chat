"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { readDashboardSummaryJson } from "@infra/queries";
import { cacheTags } from "@infra/cache-tags";

export async function readDashboardSummaryAction() {
  return readDashboardSummaryJson();
}

export async function refreshDashboardAction() {
  revalidateTag(cacheTags.dashboard, "max");
  revalidatePath("/dashboard");
}
