'use client'

import { useCustomerDetailsByEmailQuery } from '@tanstack/react-query/queries/customer/use-customer-details-by-email.query'

import type { CustomerDetailsByEmailQueryKey } from '@infra/query-keys'

export const useCustomerDetails = (
  queryKey: CustomerDetailsByEmailQueryKey,
) => {
  const { data, error, refetch, isFetching } =
    useCustomerDetailsByEmailQuery(queryKey)

  const notFoundErrorStatus = data.status === 404

  const errorMessage =
    error && !notFoundErrorStatus
      ? error.message
      : 'Ocorreu um erro ao buscar o cliente'

  const errorTitle =
    error && !notFoundErrorStatus ? error.name : 'Nenhum cliente encontrado'

  const { customer } = data

  if (!customer)
    return {
      error,
      refetch,
      customer: null,
      hasPhones: false,
      isFetching,
      errorTitle,
      hasVehicles: false,
      errorMessage,
      hasMultiplePhones: false,
      hasMultipleVehicles: false,
    }

  const { phones, vehiclesDetails } = customer

  const hasPhones = phones.length > 0
  const hasMultiplePhones = phones.length > 1

  const hasVehicles = vehiclesDetails.length > 0
  const hasMultipleVehicles = vehiclesDetails.length > 1

  return {
    error,
    refetch,
    customer,
    hasPhones,
    isFetching,
    errorTitle,
    hasVehicles,
    errorMessage,
    hasMultiplePhones,
    hasMultipleVehicles,
  }
}
