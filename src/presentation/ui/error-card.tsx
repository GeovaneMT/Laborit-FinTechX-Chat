'use client'

import { Alert, AlertDescription, AlertTitle } from '@shadcn/alert'
import { Button } from '@ui/button'
import { TypographyP } from '@ui/typography/p'
import { AlertCircleIcon, RefreshCcwIcon } from 'lucide-react'
import type { ReactNode } from 'react'

interface TipsProps {
  tips?: string[]
}

interface ErrorCardProps extends TipsProps {
  noTips?: boolean
  title?: string
  message?: string
  actionTitle?: string
  action?: () => void
  actionIcon?: ReactNode
}

const Tips = ({ tips }: TipsProps) => {
  return tips?.map((tip, index) => <li key={index}>{tip}</li>)
}

const defaultAction = () => location.reload()

export const ErrorCard = ({
  tips,
  noTips = false,
  actionIcon = <RefreshCcwIcon />,
  action = defaultAction,
  actionTitle = 'Recarregar',
  title = 'Erro desconhecido',
  message = 'Por favor, tente novamente mais tarde.',
}: ErrorCardProps) => {
  const defaultTips = [
    'Tente recarregar a página.',
    'Tente novamente mais tarde.',
  ]

  return (
    <Alert variant="destructive">
      <AlertCircleIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        <TypographyP>{message}</TypographyP>
        <ul className="list-inside list-disc text-sm">
          {!noTips && <Tips tips={tips ?? defaultTips} />}
        </ul>
        <Button
          variant="outline"
          effect="ringHover"
          size="sm"
          className="mt-4"
          onClick={action}
        >
          <div className="inline-flex items-center justify-center gap-2">
            {actionIcon}
            {actionTitle}
          </div>
        </Button>
      </AlertDescription>
    </Alert>
  )
}
