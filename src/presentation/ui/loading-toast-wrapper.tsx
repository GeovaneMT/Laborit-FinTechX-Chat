'use client'

import { useEffect } from 'react'
import { toast } from 'sonner'

export const LoadingFallback = () => {
  useEffect(() => {
    const id = toast.loading('Carregando...')

    return () => {
      toast.dismiss(id)
    }
  }, [])

  return null
}
