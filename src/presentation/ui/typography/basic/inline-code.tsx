import { cn } from '@utils/cn'

interface TypographyInlineCodeProps extends React.ComponentProps<'code'> {
  uppercase?: boolean
}

export function TypographyInlineCode({
  uppercase,
  className,
  ...props
}: TypographyInlineCodeProps) {
  return (
    <code
      className={cn(
        'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        uppercase && 'uppercase',
        className,
      )}
      {...props}
    />
  )
}
