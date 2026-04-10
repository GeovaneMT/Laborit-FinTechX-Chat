'use client'

import { Button } from '@ui/button'
import { NameUpdateForm } from '@features/customers/components/forms/name-update.form'

import { useCustomerName } from '@zustand/customer-name.store'
import { useCustomerSheets } from '@zustand/customer-sheets.store'

import type { CustomerDetailsDTOOutput } from '@http/generated'

import { SheetLayout, SheetLayoutFooter } from '@ui/SheetLayout'

interface EditNameSheetProps {
  customer: CustomerDetailsDTOOutput
}

const EditNameSubmitButton = () => {
  const { isSubmitNameButtonDisabled } = useCustomerName()

  return (
    <Button
      type="submit"
      variant="secondary"
      form="nameUpdateForm"
      className="w-full transition-all duration-300 ease-in-out"
      disabled={isSubmitNameButtonDisabled}
    >
      salvar
    </Button>
  )
}

export const EditNameSheet = (data: EditNameSheetProps) => {
  const { closeSheet, openedSheet } = useCustomerSheets()
  const shouldOpen = openedSheet === 'EDIT-NAME'

  return (
    <SheetLayout
      title="Editar nome"
      description="Edite o nome do cliente"
      closeSheet={closeSheet}
      shouldOpen={shouldOpen}
    >
      <NameUpdateForm {...data} />

      <SheetLayoutFooter>
        <EditNameSubmitButton />
      </SheetLayoutFooter>
    </SheetLayout>
  )
}
