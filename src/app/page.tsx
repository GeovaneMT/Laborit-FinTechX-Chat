import { redirect } from "next/navigation";
import { readSessionFromCookies } from "@infra/auth-session";

export default async function HomePage() {
  const session = await readSessionFromCookies();
  redirect(session ? "/dashboard" : "/login");
}
