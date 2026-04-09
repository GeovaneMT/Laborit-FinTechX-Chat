"use client";

import { useMemo, useState } from "react";
import { AuthContext, type AuthContextValue } from "@infra/auth-context";
import { signOutAction } from "@infra/auth-actions";

type Props = {
  initialUserId: string | null;
  initialEmail: string | null;
  children: React.ReactNode;
};

export function AuthProvider({ initialUserId, initialEmail, children }: Props) {
  const [userId, setUserId] = useState<string | null>(initialUserId);
  const [email, setEmail] = useState<string | null>(initialEmail);

  const value = useMemo<AuthContextValue>(
    () => ({
      userId,
      email,
      signOut: async () => {
        await signOutAction();
        setUserId(null);
        setEmail(null);
      },
    }),
    [userId, email],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
