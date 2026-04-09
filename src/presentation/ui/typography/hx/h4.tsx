import { cn } from '@utils/cn'

interface TypographyH4Props extends React.ComponentProps<'h4'> {
  uppercase?: boolean
}

export function TypographyH4({
  uppercase,
  className,
  ...props
}: TypographyH4Props) {
  return (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        uppercase && 'uppercase',
        className,
      )}
      {...props}
    />
  )
}
