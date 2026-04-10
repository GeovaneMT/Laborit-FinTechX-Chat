'use client'

import { Trash2Icon } from 'lucide-react'

import { Button } from '@ui/button'

import { useDeleteCustomer } from '@features/customers/view-models/delete/use-delete-customer'

import type { CustomersQueryKey } from '@infra/query-keys'
import type { CustomersDTOOutputCustomersItem } from '@http/generated/models'
import type { FetchCustomersResultProps } from '@features/customers/actions'

import type {
  InfiniteData,
  RefetchOptions,
  QueryObserverResult,
} from '@tanstack/react-query'

import {
  AlertDialog,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogDescription,
} from '@shadcn/alert-dialog'

interface DeleteCustomerAlertDialogProps {
  queryKey: CustomersQueryKey
  customer: CustomersDTOOutputCustomersItem

  refetch: (
    options?: RefetchOptions,
  ) => Promise<
    QueryObserverResult<InfiniteData<FetchCustomersResultProps, unknown>, Error>
  >
}

export const DeleteCustomerAlertDialog = (
  props: DeleteCustomerAlertDialogProps,
) => {
  const { customer } = props
  const { onSubmit, isDeleting: isDeletingCustomer } = useDeleteCustomer({
    ...props,
    customerId: customer.id.toString(),
    customerEmail: customer.email,
  })

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          size="icon"
          className="rounded-full"
          variant="ghostDestructive"
          disabled={isDeletingCustomer}
        >
          <Trash2Icon size={16} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle className="uppercase">
            Deletar cliente {customer.firstName}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            O cliente em {customer.firstName} e todos os seus telefones,
            veículos e avarias serão deletados permanentemente. Esta ação não
            pode ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={onSubmit} variant="destructive">
            Deletar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
