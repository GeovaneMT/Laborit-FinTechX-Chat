'use client'

import * as React from 'react'

import { useScrollVirtualizationParent } from '@pattern/hooks/use-scroll-virtualization-parent'

export const useParentSize = () => {
  const [size, setSize] = React.useState({ width: 0, height: 0 })

  const parentRef = useScrollVirtualizationParent()

  React.useEffect(() => {
    if (!parentRef.current) return

    const element = parentRef.current

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ width, height })
    })

    observer.observe(element)
    return () => observer.disconnect()
  }, [parentRef])

  return size
}
