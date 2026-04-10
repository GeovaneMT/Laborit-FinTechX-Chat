import { Separator } from '@ui/separator'
import { cn } from '@utils/cn'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'

const buttonGroupVariants = cva(
  "flex w-fit items-stretch *:focus-visible:relative *:focus-visible:z-10 has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-lg [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
  {
    variants: {
      orientation: {
        responsive:
          // Mobile vertical
          'flex-col ' +
          '[&>*:first-child]:rounded-tl-lg [&>*:first-child]:rounded-tr-lg [&>*:first-child]:rounded-bl-none [&>*:first-child]:rounded-br-none ' +
          '[&>*:last-child]:rounded-tl-none [&>*:last-child]:rounded-tr-none [&>*:last-child]:rounded-bl-lg [&>*:last-child]:rounded-br-lg ' +
          '[&>*:not(:first-child):not(:last-child)]:rounded-none ' +
          // Desktop horizontal
          'sm:flex-row ' +
          '[&>*:first-child]:sm:rounded-tl-lg [&>*:first-child]:sm:rounded-tr-none [&>*:first-child]:sm:rounded-bl-lg [&>*:first-child]:sm:rounded-br-none ' +
          '[&>*:last-child]:sm:rounded-tl-none [&>*:last-child]:sm:rounded-tr-lg [&>*:last-child]:sm:rounded-bl-none [&>*:last-child]:sm:rounded-br-lg ' +
          '[&>*:not(:first-child):not(:last-child)]:sm:rounded-none',

        horizontal:
          'flex-row ' +
          '[&>*:first-child]:rounded-tl-lg [&>*:first-child]:rounded-tr-none [&>*:first-child]:rounded-bl-lg [&>*:first-child]:rounded-br-none ' +
          '[&>*:last-child]:rounded-tl-none [&>*:last-child]:rounded-tr-lg [&>*:last-child]:rounded-bl-none [&>*:last-child]:rounded-br-lg ' +
          '[&>*:not(:first-child):not(:last-child)]:rounded-none ' +
          '[&>*:not(:first-child)]:border-l-0',

        vertical:
          'flex-col ' +
          '[&>*:first-child]:rounded-tl-lg [&>*:first-child]:rounded-tr-lg [&>*:first-child]:rounded-bl-none [&>*:first-child]:rounded-br-none ' +
          '[&>*:last-child]:rounded-tl-none [&>*:last-child]:rounded-tr-none [&>*:last-child]:rounded-bl-lg [&>*:last-child]:rounded-br-lg ' +
          '[&>*:not(:first-child):not(:last-child)]:rounded-none ' +
          '[&>*:not(:first-child)]:border-t-0',
      },
      styles: {
        outlined:
          'border p-1 rounded-xl hover:border-foreground transition-all duration-800 ease-in-out',
      },
    },
    defaultVariants: {
      orientation: 'responsive',
    },
  },
)

function ButtonGroup({
  styles,
  className,
  orientation,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof buttonGroupVariants>) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ styles, orientation }), className)}
      {...props}
    />
  )
}

function ButtonGroupText({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'div'> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot.Root : 'div'

  return (
    <Comp
      className={cn(
        "bg-muted flex items-center gap-2 rounded-lg border px-2.5 text-sm font-medium [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function ButtonGroupSeparator({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        'bg-input relative self-stretch data-horizontal:mx-px data-horizontal:w-auto data-vertical:my-px data-vertical:h-auto',
        className,
      )}
      {...props}
    />
  )
}

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
}
