"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { readProfileJson } from "@infra/queries";
import { cacheTags } from "@infra/cache-tags";

export async function readProfileAction() {
  return readProfileJson();
}

export async function refreshProfileAction() {
  revalidateTag(cacheTags.profile, "max");
  revalidatePath("/settings");
}
