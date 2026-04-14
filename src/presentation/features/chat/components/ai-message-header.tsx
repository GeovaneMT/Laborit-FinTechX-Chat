'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'

import { Button } from '@shadcn/button'
import { CheckIcon, CopyIcon, ShareIcon } from 'lucide-react'
import { toast } from 'sonner'

interface AIMessageHeaderProps {
  messageContent: string
}

export function AIMessageHeader({ messageContent }: AIMessageHeaderProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    const promise = navigator.clipboard.writeText(messageContent)

    toast.promise(promise, {
      loading: 'Copying...',
      success: () => {
        setCopied(true)
        window.setTimeout(() => setCopied(false), 2000)
        return 'Copied to clipboard!'
      },
      error: 'Failed to copy',
    })
  }, [messageContent])

  return (
    <div className="bg-muted/30 mb-2 flex items-center justify-between rounded-lg px-3 py-2">
      <div className="flex items-center">
        <Image
          src="/images/logo.svg"
          alt="BrainBox Logo"
          width={24}
          height={24}
        />
      </div>

      <div className="flex gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-8 w-8 p-0"
          title="Copy message"
        >
          {copied ? (
            <CheckIcon size={16} className="text-green-600" />
          ) : (
            <CopyIcon size={16} />
          )}
        </Button>

        <Button
          variant="ghost"
          size="sm"
          disabled
          className="h-8 w-8 p-0"
          title="Share (coming soon)"
        >
          <ShareIcon size={16} />
        </Button>
      </div>
    </div>
  )
}
