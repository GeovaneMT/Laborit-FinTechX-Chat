'use client'

import { cn } from '@utils/cn'
import React from 'react'

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
  color?: string
  className?: string
}

export const Spinner = ({
  size = 16,
  color,
  className,
  ...props
}: SpinnerProps) => {
  const bars = Array.from({ length: 12 })
  const translateDistance = size * 0.25

  return (
    <div
      className={cn(`relative w-[${size}px] h-[${size}px]`, className)}
      role="status"
      aria-label="Loading"
      {...props}
    >
      {bars.map((_, i) => (
        <div
          key={i}
          className={`absolute bg-${color ?? 'white'} animate-sonnerspin top-1/2 left-1/2 origin-left -translate-x-1/2 -translate-y-1/2 rounded-full`}
          style={{
            width: size * 0.24,
            height: size * 0.08,
            transform: `rotate(${i * 30}deg) translateX(${translateDistance}px)`,
            animationDelay: `${-1.2 + i * 0.1}s`,
          }}
        />
      ))}
    </div>
  )
}
