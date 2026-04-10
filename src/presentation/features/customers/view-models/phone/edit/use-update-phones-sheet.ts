'use client'

import { useEffect, useMemo } from 'react'

import { usePhones } from '@zustand/phone.store'
import { useCustomerSheets } from '@zustand/customer-sheets.store'

import type { CustomerDetailsDTOOutputPhonesItem } from '@http/generated'

export const useUpdatePhonesSheet = (
  persistedPhones: CustomerDetailsDTOOutputPhonesItem[],
) => {
  const { phones: storePhones, clearPhones, createPhones } = usePhones()

  const { openedSheet } = useCustomerSheets()

  /**
   * Sync persisted phones when sheet opens
   */
  useEffect(() => {
    if (openedSheet !== 'EDIT-PHONES') return

    clearPhones()
    createPhones(persistedPhones)
  }, [clearPhones, createPhones, persistedPhones, openedSheet])

  /**
   * Detect changes between persisted and store phones
   */
  const hasPhonesChanged = useMemo(() => {
    if (storePhones.length !== persistedPhones.length) return true

    const persistedMap = new Map(
      persistedPhones.map((phone) => [phone.id, phone.number]),
    )

    return storePhones.some((phone) => {
      if (!phone.id) return true
      return persistedMap.get(phone.id) !== phone.number
    })
  }, [storePhones, persistedPhones])

  return {
    hasPhonesChanged,
  }
}
