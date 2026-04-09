import { cn } from "@presentation/lib/utils";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function DataGridHeader({ children, className }: Props) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-2 border-b border-(--color-border) px-2 py-2",
        className,
      )}
    >
      {children}
    </div>
  );
}
