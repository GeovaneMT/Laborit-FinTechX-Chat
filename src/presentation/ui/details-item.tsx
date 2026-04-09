'use client'

import Link from 'next/link'
import { cn } from '@utils/cn'

import { ArrowRightIcon, AlertCircleIcon } from 'lucide-react'

import { Button } from '@ui/button'
import { Skeleton } from '@shadcn/skeleton'

import {
  Card,
  CardTitle,
  CardAction,
  CardContent,
  CardDescription,
} from '@shadcn/card'

interface DetailsItemSkeletonProps {
  className?: string
  bordered?: boolean
  noAction?: boolean
}

interface DetailsItemProps {
  images?: React.ReactNode
  children?: React.ReactNode
  className?: string

  warning?: boolean

  noBg?: boolean
  noBorder?: boolean
  noAction?: boolean
  noPadding?: boolean
  noHighlight?: boolean

  Icon?: React.ReactNode
  titleIcons?: React.ReactNode
  ActionIcon?: React.ReactNode

  title: string
  description?: string
  destinationUrl?: string
  handleButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const DetailsItem = ({
  images,
  children,
  className,

  warning,

  noBg,
  noBorder,
  noAction,
  noPadding,
  noHighlight,

  Icon,
  ActionIcon,

  title,
  titleIcons,
  description,
  destinationUrl,
  handleButtonClick,
}: DetailsItemProps) => {
  const actionIcon = ActionIcon ?? <ArrowRightIcon />

  const actionButton = (
    <Button
      size="icon"
      variant="ghost"
      effect="ringHover"
      onClick={!destinationUrl ? handleButtonClick : undefined}
      className={cn(
        'text-accent-foreground hover:bg-secondary hover:text-secondary-foreground dark:text-accent-foreground rounded-full',
        warning && 'text-primary-foreground',
      )}
    >
      {actionIcon}
    </Button>
  )

  return (
    <Card
      className={cn(
        'w-full border p-0 transition-colors duration-200',
        noBg && 'bg-transparent',
        noPadding && 'p-0',
        noBorder && 'border-none ring-0',

        warning && 'bg-warning text-secondary-foreground/70',

        !noHighlight && (warning ? 'hover:bg-warning/70' : 'hover:bg-accent'),

        className,
      )}
    >
      <CardContent
        className={cn('flex flex-1 items-center gap-2 px-2 sm:px-4')}
      >
        {warning && <AlertCircleIcon size={16} />}

        {Icon && <div className="shrink-0 p-2">{Icon}</div>}

        <div className="min-w-0 flex-1">
          <CardTitle className="flex items-center gap-1 truncate sm:text-lg">
            {titleIcons && (
              <div className="flex shrink-0 items-center">{titleIcons}</div>
            )}

            <span className="truncate">{title}</span>

            <div className="mx-2 flex flex-1 justify-center gap-2">
              {images}
            </div>
          </CardTitle>

          {description && (
            <CardDescription className="truncate">
              {description}
            </CardDescription>
          )}
        </div>

        {!noAction && (
          <CardAction className="flex shrink-0 items-center">
            {destinationUrl ? (
              <Link href={destinationUrl}>{actionButton}</Link>
            ) : (
              actionButton
            )}
            {children}
          </CardAction>
        )}
      </CardContent>
    </Card>
  )
}

DetailsItem.displayName = 'DetailsItem'

export const DetailsItemSkeleton = ({
  className,
  bordered,
  noAction,
}: DetailsItemSkeletonProps) => {
  return (
    <Card className={cn('mt-4 w-full', bordered && 'border', className)}>
      <CardContent className="flex items-center gap-3">
        <Skeleton className="h-5 w-5 rounded-md" />

        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>

        {!noAction && <Skeleton className="h-8 w-8 rounded-full" />}
      </CardContent>
    </Card>
  )
}

DetailsItemSkeleton.displayName = 'DetailsItemSkeleton'
