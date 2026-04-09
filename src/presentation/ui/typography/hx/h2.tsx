import { cn } from '@utils/cn'
import { Separator } from '@ui/separator'

interface TypographyH2Props extends React.ComponentProps<'h2'> {
  noSeparator?: boolean
}

export function TypographyH2({
  noSeparator,
  className,
  ...props
}: TypographyH2Props) {
  return (
    <div className="mb-6 space-y-4">
      <h2
        className={cn(
          'scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0',
          className,
        )}
        {...props}
      />
      {!noSeparator && <Separator />}
    </div>
  )
}
