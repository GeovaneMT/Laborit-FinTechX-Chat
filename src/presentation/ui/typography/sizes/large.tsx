import { cn } from '@utils/cn'

interface TypographyLargeProps extends React.ComponentProps<'p'> {
  uppercase?: boolean
}

export function TypographyLarge({
  uppercase,
  className,
  ...props
}: TypographyLargeProps) {
  return (
    <p
      className={cn(
        'text-lg font-semibold',
        uppercase && 'uppercase',
        className,
      )}
      {...props}
    />
  )
}
