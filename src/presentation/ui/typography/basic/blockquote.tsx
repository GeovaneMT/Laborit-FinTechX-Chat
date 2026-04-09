import { cn } from '@utils/cn'

interface TypographyBlockquoteProps extends React.ComponentProps<'blockquote'> {
  uppercase?: boolean
}

export function TypographyBlockquote({
  uppercase,
  className,
  ...props
}: TypographyBlockquoteProps) {
  return (
    <blockquote
      className={cn(
        'mt-6 border-l-2 pl-6 italic',
        uppercase && 'uppercase',
        className,
      )}
      {...props}
    />
  )
}
