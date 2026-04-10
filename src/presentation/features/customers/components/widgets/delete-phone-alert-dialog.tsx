'use client'

import { Trash2Icon } from 'lucide-react'

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

interface DeletePhoneAlertDialogprops {
  children: React.ReactNode
  phoneNumbers: string
  onSubmit: () => void
}

export const DeletePhoneAlertDialog = ({
  children,
  onSubmit,
  phoneNumbers,
}: DeletePhoneAlertDialogprops) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle className="uppercase">
            Deletar telefones?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Os telefones em {phoneNumbers} serão deletados permanentemente. Esta
            ação não pode ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="uppercase" variant="outline">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onSubmit}
            variant="destructive"
            className="uppercase"
          >
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
