'use client'

import { Button } from '@shadcn/button'
import { PencilIcon, UserIcon } from 'lucide-react'

interface UserMessageActionProps {
  messageId: string
  onEdit?: (messageId: string) => void
}

function Avatar({ messageId: _messageId }: { messageId: string }) {
  return (
    <div className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full">
      <UserIcon size={16} />
    </div>
  )
}

function EditButton({ messageId, onEdit }: UserMessageActionProps) {
  const handleEdit = () => {
    onEdit?.(messageId)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleEdit}
      className="h-8 w-8 p-0"
      title="Edit message"
    >
      <PencilIcon size={16} />
    </Button>
  )
}

export const UserMessageActions = {
  Avatar,
  EditButton,
}
