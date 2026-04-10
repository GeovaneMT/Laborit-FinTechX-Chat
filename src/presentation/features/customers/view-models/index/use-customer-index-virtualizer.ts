'use client'
'use no memo'

import { toast } from 'sonner'
import { useVirtualizer } from '@tanstack/react-virtual'
import { useCallback, useEffect } from 'react'

import { useScrollVirtualizationParent } from '@pattern/hooks/use-scroll-virtualization-parent'

interface useCustomerIndexVirtualizerProps {
  customers: unknown[]
  isLoading: boolean
  hasNextPage: boolean
  isFetchingNextPage: boolean
  fetchNextPage: () => Promise<unknown>
}

export const useCustomerIndexVirtualizer = ({
  customers,
  isLoading,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
}: useCustomerIndexVirtualizerProps) => {
  const parentRef = useScrollVirtualizationParent()

  const handleScroll = useCallback(() => {
    if (!parentRef.current || isLoading || !hasNextPage || isFetchingNextPage)
      return

    const { scrollTop, scrollHeight, clientHeight } = parentRef.current
    const scrolledToBottom = scrollTop + clientHeight >= scrollHeight - 200 // 200px threshold

    if (scrolledToBottom) {
      toast.promise(fetchNextPage(), {
        loading: 'Carregando mais clientes...',
        success: 'Mais clientes carregados!',
        error: 'Erro ao carregar mais clientes',
      })
    }
  }, [parentRef, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage])

  useEffect(() => {
    const scrollElement = parentRef.current
    if (!scrollElement) return

    scrollElement.addEventListener('scroll', handleScroll)
    return () => scrollElement.removeEventListener('scroll', handleScroll)
  }, [parentRef, handleScroll])

  // eslint-disable-next-line react-hooks/incompatible-library
  const rowVirtualizer = useVirtualizer({
    count: customers.length + (isFetchingNextPage ? 3 : 0), // reserve space for skeletons
    getScrollElement: () => parentRef.current,
    estimateSize: () => 88, // average row height in pixels — tune this!
    overscan: 5,
    onChange: handleScroll,
  })

  useEffect(() => {
    if (parentRef.current) {
      rowVirtualizer.measure()
    }
  }, [customers.length, parentRef, rowVirtualizer])

  return {
    parentRef,
    rowVirtualizer,
  }
}
