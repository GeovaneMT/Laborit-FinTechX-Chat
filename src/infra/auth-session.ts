import { cookies } from "next/headers";

const SESSION_COOKIE = "session";

export type SessionPayload = {
  userId: string;
  email: string;
};

export async function readSessionFromCookies(): Promise<SessionPayload | null> {
  const jar = await cookies();
  const raw = jar.get(SESSION_COOKIE)?.value;
  if (!raw) return null;
  try {
    return JSON.parse(Buffer.from(raw, "base64url").toString("utf8")) as SessionPayload;
  } catch {
    return null;
  }
}

export async function writeSessionCookie(payload: SessionPayload) {
  const jar = await cookies();
  const value = Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");
  jar.set(SESSION_COOKIE, value, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearSessionCookie() {
  const jar = await cookies();
  jar.delete(SESSION_COOKIE);
}
