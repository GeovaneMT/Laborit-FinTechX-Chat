import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function PublicLayout({ children }: Props) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-4 py-12">
      {children}
    </div>
  );
}
