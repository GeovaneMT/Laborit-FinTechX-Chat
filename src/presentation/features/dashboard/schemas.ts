import { z } from 'zod'

export const dashboardFilterSchema = z.object({
  q: z.string().optional(),
})
