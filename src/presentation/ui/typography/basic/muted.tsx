import { cn } from '@utils/cn'

interface TypographyMutedProps extends React.ComponentProps<'p'> {
  uppercase?: boolean
}

export function TypographyMuted({
  uppercase,
  className,
  ...props
}: TypographyMutedProps) {
  return (
    <p
      className={cn(
        'text-muted-foreground text-sm font-light',
        uppercase && 'uppercase',
        className,
      )}
      {...props}
    />
  )
}
