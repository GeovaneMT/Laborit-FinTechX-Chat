/**
 * Types for customer-related server actions. Callables live in `@actions/*` with `'use server'`
 * so client components keep a valid server boundary (do not re-export actions from here).
 */
export type { FetchCustomersResultProps } from '@actions/fetch-customers.action'
export type { deleteCustomerActionProps } from '@actions/delete-customer.action'
