import type { ReactNode } from 'react'

import { cn } from '@utils/cn'

type Props = {
  children: ReactNode
  className?: string
}

export function DataGridHeader({ children, className }: Props) {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-2 border-b border-(--color-border) px-2 py-2',
        className,
      )}
    >
      {children}
    </div>
  )
}
