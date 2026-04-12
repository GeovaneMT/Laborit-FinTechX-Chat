import type { ReactNode } from 'react'

import { cn } from '@utils/cn'

type Props = {
  children: ReactNode
  className?: string
}

export function DataGridFooter({ children, className }: Props) {
  return (
    <div
      className={cn(
        'flex items-center justify-between border-t border-(--color-border) px-2 py-2 text-xs text-(--color-muted-foreground)',
        className,
      )}
    >
      {children}
    </div>
  )
}
