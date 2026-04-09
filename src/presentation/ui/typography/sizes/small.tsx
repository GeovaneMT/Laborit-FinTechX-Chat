import { cn } from '@utils/cn'

interface TypographySmallProps extends React.ComponentProps<'small'> {
  uppercase?: boolean
}

export function TypographySmall({
  uppercase,
  className,
  ...props
}: TypographySmallProps) {
  return (
    <small
      className={cn(
        'text-xs leading-none font-medium',
        uppercase && 'uppercase',
        className,
      )}
      {...props}
    />
  )
}
