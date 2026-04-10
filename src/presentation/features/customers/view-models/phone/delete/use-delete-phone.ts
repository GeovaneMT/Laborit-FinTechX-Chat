'use client'

import { useDelete } from '@pattern/hooks/use-delete'

import {
  deletePhoneAction,
  type DeletePhoneActionProps,
} from '@actions/delete-phone.action'

interface useDeletePhoneProps {
  id: string
  userId: string
  userEmail: string
}

export const useDeletePhone = ({
  id,
  userId,
  userEmail,
}: useDeletePhoneProps) =>
  useDelete<DeletePhoneActionProps, null>({
    subjectWhat: 'Phone',
    actionFn: deletePhoneAction,
    subjectData: { id, userId, userEmail },
  })
