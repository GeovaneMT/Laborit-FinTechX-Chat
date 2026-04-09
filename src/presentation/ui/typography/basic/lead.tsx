import { cn } from '@utils/cn'

interface TypographyLeadProps extends React.ComponentProps<'p'> {
  uppercase?: boolean
}

export function TypographyLead({
  uppercase,
  className,
  ...props
}: TypographyLeadProps) {
  return (
    <p
      className={cn(
        'text-foreground text-xl',
        uppercase && 'uppercase',
        className,
      )}
      {...props}
    />
  )
}
