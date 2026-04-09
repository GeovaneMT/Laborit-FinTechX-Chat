'use client'

import * as React from 'react'
import { Separator as SeparatorPrimitive } from 'radix-ui'

import { cn } from '@utils/cn'

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  'data-muted': dataMuted,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root> & {
  'data-muted'?: boolean
}) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      data-muted={dataMuted ? true : undefined}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch',
        dataMuted && 'bg-border/25',
        className,
      )}
      {...props}
    />
  )
}

export { Separator }
