import { cn } from '@utils/cn'

interface TypographyH1Props extends React.ComponentProps<'h1'> {
  uppercase?: boolean
}

export function TypographyH1({
  uppercase,
  className,
  ...props
}: TypographyH1Props) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        uppercase && 'uppercase',
        className,
      )}
      {...props}
    />
  )
}
