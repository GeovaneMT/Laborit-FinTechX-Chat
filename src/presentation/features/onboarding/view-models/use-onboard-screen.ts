'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'

import { paths } from '@/core/utils/paths'

type Steps = '1' | '2' | '3'

const stepsOrder: Steps[] = ['1', '2', '3']

export function useOnboardingScreen() {
  const [tab, setTab] = useState<Steps>('1')
  const { theme } = useTheme()
  const router = useRouter()

  const isStep = (value: string): value is Steps => {
    return stepsOrder.includes(value as Steps)
  }

  const currentIndex = stepsOrder.indexOf(tab)

  const nextStep = () => {
    if (currentIndex < stepsOrder.length - 1) {
      setTab(stepsOrder[currentIndex + 1])
      return
    }

    router.push(paths.chat)
  }

  const prevStep = () => {
    if (currentIndex > 0) {
      setTab(stepsOrder[currentIndex - 1])
    }
  }

  return {
    tab,
    theme,
    isStep,
    setTab,
    nextStep,
    prevStep,
    isFirstStep: currentIndex === 0,
    isLastStep: currentIndex === stepsOrder.length - 1,
  }
}
