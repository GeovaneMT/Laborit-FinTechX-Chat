import { cn } from '@utils/cn'

interface TypographyH3Props extends React.ComponentProps<'h3'> {
  uppercase?: boolean
}

export function TypographyH3({
  uppercase,
  className,
  ...props
}: TypographyH3Props) {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        uppercase && 'uppercase',
        className,
      )}
      {...props}
    />
  )
}
