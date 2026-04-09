import { cn } from '@utils/cn'

interface TypographyPProps extends React.ComponentProps<'p'> {
  notFirst?: boolean
  uppercase?: boolean
}

export function TypographyP({
  notFirst,
  uppercase,
  className,
  ...props
}: TypographyPProps) {
  return (
    <p
      className={cn(
        `${notFirst && 'not-first:mt-6'} leading-7`,
        uppercase && 'uppercase',
        className,
      )}
      {...props}
    />
  )
}
