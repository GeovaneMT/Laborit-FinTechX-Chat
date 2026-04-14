'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@shadcn/button'
import { CardTitle } from '@shadcn/card'
import { ChevronLeftIcon } from 'lucide-react'

import { TypographyH2 } from '@ui/typography/hx/h2'

type CardHeaderContentProps = {
  title: string
}

export function CardHeaderContent({ title }: CardHeaderContentProps) {
  const router = useRouter()

  return (
    <div className="relative h-full w-full">
      <Button
        size="icon-lg"
        variant="secondary"
        onClick={router.back}
        className="botom-0 absolute top-0 left-0"
      >
        <ChevronLeftIcon />
      </Button>
      <CardTitle className="flex-1">
        <TypographyH2 className="text-center">{title}</TypographyH2>
      </CardTitle>
    </div>
  )
}
