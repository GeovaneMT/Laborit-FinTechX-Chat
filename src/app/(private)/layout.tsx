import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { readSessionFromCookies } from "@infra/auth-session";
import { getMessages, resolveLocale } from "@infra/i18n";
import { PrivateLayout } from "@layouts/private-layout";
import { LoadingMessage } from "@ui/loading-message";

export default function PrivateRouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[40vh] items-center justify-center">
          <LoadingMessage />
        </div>
      }
    >
      <PrivateRouteShell>{children}</PrivateRouteShell>
    </Suspense>
  );
}

async function PrivateRouteShell({ children }: { children: React.ReactNode }) {
  const session = await readSessionFromCookies();
  if (!session) {
    redirect("/login");
  }

  const cookieStore = await cookies();
  const locale = resolveLocale(cookieStore.get("locale")?.value);
  const messages = getMessages(locale);

  const nav = [
    { href: "/splash", label: "Splash" },
    { href: "/onboarding", label: "Onboarding" },
    { href: "/chat", label: "Chat" },
    { href: "/profile", label: "Profile" },
    { href: "/edit-information", label: "Edit Info" },
    { href: "/health-instructions", label: "Health" },
    { href: "/invite", label: "Invite" },
    { href: "/preferences", label: "Preferences" },
  ];

  return (
    <PrivateLayout nav={nav}>
      <Suspense
        fallback={
          <div className="flex min-h-[30vh] items-center justify-center">
            <LoadingMessage />
          </div>
        }
      >
        {children}
      </Suspense>
    </PrivateLayout>
  );
}
