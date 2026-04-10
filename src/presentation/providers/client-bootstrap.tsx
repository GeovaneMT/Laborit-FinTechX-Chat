'use client'

import { initClientInstrumentation } from '@/instrumentation-client'

import { useEffect } from 'react'

type Props = {
  enableMsw: boolean
}

export function ClientBootstrap({ enableMsw }: Props) {
  useEffect(() => {
    initClientInstrumentation()
    if (!enableMsw) return
    void import('@mocks/browser').then(({ startBrowserMocks }) =>
      startBrowserMocks(),
    )
  }, [enableMsw])

  return null
}
