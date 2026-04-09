import { cn } from "@presentation/lib/utils";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function DataGridFooter({ children, className }: Props) {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-t border-(--color-border) px-2 py-2 text-xs text-(--color-muted-foreground)",
        className,
      )}
    >
      {children}
    </div>
  );
}
