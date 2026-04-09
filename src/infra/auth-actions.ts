"use server";

import { redirect } from "next/navigation";
import { revalidatePath, updateTag } from "next/cache";
import { clearSessionCookie, writeSessionCookie } from "@infra/auth-session";
import { cacheTags } from "@infra/cache-tags";

function hashEmail(email: string) {
  let h = 0;
  for (let i = 0; i < email.length; i++) {
    h = (h * 31 + email.charCodeAt(i)) | 0;
  }
  return Math.abs(h).toString(16).slice(0, 8);
}

export async function signOutAction() {
  await clearSessionCookie();
  revalidatePath("/");
  redirect("/login");
}

export async function signInAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  if (!email) {
    throw new Error("Email required");
  }
  await writeSessionCookie({ userId: `user_${hashEmail(email)}`, email });
  updateTag(cacheTags.profile);
  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function registerAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  if (!email) {
    throw new Error("Email required");
  }
  await writeSessionCookie({ userId: `user_${hashEmail(email)}`, email });
  updateTag(cacheTags.profile);
  revalidatePath("/dashboard");
  redirect("/dashboard");
}
