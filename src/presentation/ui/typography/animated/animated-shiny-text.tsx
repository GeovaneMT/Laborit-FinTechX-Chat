import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type FC,
} from 'react'

import { cn } from '@utils/cn'

export interface AnimatedShinyTextProps
  extends ComponentPropsWithoutRef<'span'> {
  shimmerWidth?: number
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      className={cn('text-foreground relative inline-block', className)}
      {...props}
    >
      {/* base text */}
      <span>{children}</span>

      {/* shimmer layer */}
      <span
        aria-hidden
        style={
          {
            '--shiny-width': `${shimmerWidth}px`,
          } as CSSProperties
        }
        className={cn(
          'pointer-events-none absolute inset-0',
          'animate-shiny-text',
          'bg-[linear-gradient(90deg,transparent,var(--accent),transparent)]',
          'bg-size-[var(--shiny-width)_100%] bg-no-repeat',
          'bg-clip-text text-transparent',
        )}
      >
        {children}
      </span>
    </span>
  )
}
