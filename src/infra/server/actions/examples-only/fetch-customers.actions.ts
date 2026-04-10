// 'use server'

// import { fetchCustomers } from '@/http/services/example-only/fetch-customers.service'

// import type {
//   CustomersDTOOutput,
//   FetchCustomersParams,
// } from '@http/generated/models'

// export interface FetchCustomersResultProps extends CustomersDTOOutput {
//   success: boolean
//   error?: string
//   status?: number
//   nextCursor?: string | null
// }

// export const fetchCustomersAction = async ({
//   cursor,
//   limit = 20,
//   query,
// }: FetchCustomersParams): Promise<FetchCustomersResultProps> => {
//   const reply = await fetchCustomers({ cursor, limit: limit + 1, query })

//   if (reply.isLeft()) {
//     return {
//       success: false,
//       customers: [],
//       hasMore: false,
//       nextCursor: null,
//       status: reply.value.statusCode,
//       error: reply.value.errorMessage,
//     }
//   }

//   const hasMore = reply.value.customers.length > limit

//   const customers = hasMore
//     ? reply.value.customers.slice(0, limit)
//     : reply.value.customers

//   const nextCursor = hasMore ? customers[customers.length - 1].id : null

//   return {
//     hasMore,
//     customers,
//     nextCursor,
//     success: true,
//   }
// }
