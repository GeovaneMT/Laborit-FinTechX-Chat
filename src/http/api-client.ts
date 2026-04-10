import ky from 'ky'
import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const api = ky.create({
  baseUrl: process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_BASE_URL,
})

export { queryClient }
