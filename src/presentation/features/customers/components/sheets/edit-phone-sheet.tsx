'use client'

import { motion, AnimatePresence } from 'motion/react'

import { Button } from '@ui/button'

import { PhoneList } from '@features/customers/components/forms/phone-create-form/phone-list'
import { useUpdatePhones } from '@features/customers/view-models/phone/edit/use-update-phones'
import { DeletePhoneAlertDialog } from '@features/customers/components/widgets/delete-phone-alert-dialog'
import { PhoneCreateForm } from '@features/customers/components/forms/phone-create-form/phone-create.form'

import { useCustomerSheets } from '@zustand/customer-sheets.store'

import type {
  CustomerDetailsDTOOutput,
  CustomerDetailsDTOOutputPhonesItem,
} from '@http/generated'

import { SheetLayout, SheetLayoutFooter } from '@ui/SheetLayout'

interface EditPhonesSubmitButtonProps {
  phonesToDelete?: CustomerDetailsDTOOutputPhonesItem[]

  canSavePhones: boolean
  canCreateStorePhones: boolean

  onSubmit: () => Promise<void>
}

const EditPhonesSubmitButton = ({
  onSubmit,
  canSavePhones,
  phonesToDelete,
  canCreateStorePhones,
}: EditPhonesSubmitButtonProps) => (
  <AnimatePresence mode="wait">
    <motion.div
      className="w-full"
      key={canSavePhones ? 'save' : 'add'}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      {canSavePhones ? (
        phonesToDelete && phonesToDelete.length ? (
          <DeletePhoneAlertDialog
            onSubmit={onSubmit}
            phoneNumbers={phonesToDelete
              .map((phone) => phone.number)
              .join(', ')}
          >
            <Button
              variant="secondary"
              className="w-full transition-all duration-300 ease-in-out"
            >
              salvar
            </Button>
          </DeletePhoneAlertDialog>
        ) : (
          <Button
            variant="secondary"
            className="w-full transition-all duration-300 ease-in-out"
            onClick={onSubmit}
          >
            salvar
          </Button>
        )
      ) : (
        <Button
          type="submit"
          variant="secondary"
          form="phoneCreateForm"
          disabled={!canCreateStorePhones}
          className="w-full transition-all duration-300 ease-in-out"
        >
          adicionar
        </Button>
      )}
    </motion.div>
  </AnimatePresence>
)

const EditPhoneSheetContent = (customer: CustomerDetailsDTOOutput) => {
  const updatePhonesData = useUpdatePhones(customer)
  const { phoneStoreData } = updatePhonesData

  return (
    <>
      <PhoneCreateForm {...phoneStoreData} disableAccordion />
      <PhoneList noDescription />

      <SheetLayoutFooter>
        <EditPhonesSubmitButton {...updatePhonesData} />
      </SheetLayoutFooter>
    </>
  )
}

export const EditPhoneSheet = (customer: CustomerDetailsDTOOutput) => {
  const { closeSheet, openedSheet } = useCustomerSheets()
  const shouldOpen = openedSheet === 'EDIT-PHONES'

  return (
    <SheetLayout
      shouldOpen={shouldOpen}
      closeSheet={closeSheet}
      title="Editar telefones"
      description="Edite os telefones do cliente"
    >
      <EditPhoneSheetContent {...customer} />
    </SheetLayout>
  )
}
