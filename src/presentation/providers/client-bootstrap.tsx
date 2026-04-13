'use client'

import { useEffect, useState } from 'react'

import { SplashScreen } from '@features/splash/components/splash-screen'

import { initClientInstrumentation } from '@/instrumentation-client'

type Props = {
  enableMsw: boolean
  children: React.ReactNode
}

export function ClientBootstrap({ children, enableMsw }: Props) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    async function init() {
      initClientInstrumentation()
      if (enableMsw) {
        const { startBrowserMocks } = await import('@/mocks/browser')
        await startBrowserMocks()
      }

      setReady(true)
    }

    init()
  }, [enableMsw])

  if (!ready) return <SplashScreen />

  return children
}
