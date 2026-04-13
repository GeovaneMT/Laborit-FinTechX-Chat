'use client'

import { useContext } from 'react'

import {
  ScrollContext,
  type ScrollRef,
} from '@contexts/scroll-virtualization-context'

export const useScrollVirtualizationParent = (): ScrollRef => {
  const context = useContext(ScrollContext)
  if (!context) throw new Error('Missing ScrollContextProvider')
  return context
}
