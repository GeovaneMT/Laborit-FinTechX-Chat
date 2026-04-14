import { QueryClient } from '@tanstack/react-query'
import ky from 'ky'

export const queryClient = new QueryClient()

export const api = ky.create({
  baseUrl: process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_BASE_URL,
  prefix: '/api/v1',
})
