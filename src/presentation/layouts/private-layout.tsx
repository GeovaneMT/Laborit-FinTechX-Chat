import Link from "next/link";
import type { ReactNode } from "react";
import { signOutAction } from "@infra/auth-actions";
import { Header } from "@ui/header";
import { Button } from "@ui/button";

type Props = {
  children: ReactNode;
  nav: { href: string; label: string }[];
};

export function PrivateLayout({ children, nav }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header className="gap-4">
        <nav className="flex flex-1 items-center gap-3 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <form action={signOutAction}>
          <Button type="submit" variant="ghost" size="sm">
            Sign out
          </Button>
        </form>
      </Header>
      <main className="flex-1 px-4 py-6">{children}</main>
    </div>
  );
}
