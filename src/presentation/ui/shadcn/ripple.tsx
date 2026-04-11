'use client'

import { cn } from '@utils/cn'
import { type ComponentPropsWithoutRef, type CSSProperties, memo } from 'react'

interface RippleProps extends ComponentPropsWithoutRef<'div'> {
  mainCircleSize?: number
  mainCircleOpacity?: number
  numCircles?: number
  background?: string
  darkBackground?: string
}

export const Ripple = memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  background = 'foreground',
  darkBackground = 'foreground',
  className,
  ...props
}: RippleProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 m-0 mask-[radial-gradient(ellipse_closest-side_at_center,rgba(0,0,0,1),transparent)] select-none',
        className,
      )}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70
        const opacity = mainCircleOpacity - i * 0.03
        const animationDelay = `${i * 0.06}s`
        const borderStyle = 'solid'

        return (
          <div
            key={i}
            className={cn(
              background ?? 'bg-foreground/25',
              darkBackground ?? 'dark:bg-foreground/25',
              'animate-ripple absolute rounded-full border bg-cover shadow-xl',
            )}
            style={
              {
                '--i': i,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
                borderWidth: '1px',
                borderColor: `var(--foreground)`,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) scale(1)',
              } as CSSProperties
            }
          />
        )
      })}
    </div>
  )
})

Ripple.displayName = 'Ripple'

export type { RippleProps }
