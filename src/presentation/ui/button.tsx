'use client'

import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'
import { cn } from '@utils/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'group/button inline-flex shrink-0 items-start justify-start rounded-lg border border-transparent ' +
    'bg-clip-padding cursor-pointer text-sm font-medium whitespace-nowrap outline-none select-none ' +
    'focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 ' +
    'active:translate-y-px disabled:pointer-events-none disabled:opacity-50 ' +
    'aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 ' +
    ' dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 ' +
    " [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',

        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',

        destructive:
          'bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40',

        passiveDestructive:
          'bg-primary text-primary-foreground hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40',

        ghostDestructive:
          'hover:bg-destructive/20 hover:text-destructive aria-expanded:bg-destructive aria-expanded:text-destructive dark:hover:bg-destructive/50 ',

        outline:
          'border-foreground/50 transition-all text-foreground/70 hover:text-foreground hover:border-foreground',

        ghost:
          'hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50',

        ghostSmooth:
          'hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50',

        camouflaged:
          'transition-opacity duration-300 ease-in-out group-hover:opacity-100 sm:opacity-0 ',

        link: 'underline-offset-4 ' + 'hover:underline',
      },

      effect: {
        none: '',

        spinIcon:
          '[&_svg]:transition-transform [&_svg]:duration-500 [&_svg]:ease-in-out group-hover/button:[&_svg]:rotate-180',

        expandIcon: 'group',

        expandText: 'group',

        shine:
          'before:animate-shine-effect relative overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-no-repeat background-position_0s_ease',

        shineHover:
          'relative overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] before:duration-1000',

        ringHover:
          'duration-300 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2',

        gooeyRight:
          'relative z-0 overflow-hidden duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-gradient-to-r before:from-white/40 before:transition-transform before:duration-800  hover:before:translate-x-[0%] hover:before:translate-y-[0%]',

        gooeyLeft:
          'relative z-0 overflow-hidden duration-500 after:absolute after:inset-0 after:-z-10 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l after:from-white/40 after:transition-transform after:duration-800  hover:after:translate-x-[0%] hover:after:translate-y-[0%]',

        underline:
          'relative after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-muted after:scale-x-100 hover:after:scale-x-0 after:transition-transform',

        hoverUnderline: 'group !no-underline',

        hoverUnderlineExpandText: 'group !no-underline',

        hoverUnderlineExpandIcon: 'group !no-underline',

        gradientSlideShow:
          'bg-[size:400%] bg-[linear-gradient(-45deg,var(--color-lime),var(--color-ocean),var(--color-wine),var(--color-rust))] animate-gradient-flow',
      },

      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'default',
      effect: 'none',
    },
  },
)

type IconPlacement = 'left' | 'right'

export interface ButtonProps
  extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: React.ReactNode
  iconPlacement?: IconPlacement
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      effect,
      size,
      icon: Icon,
      iconPlacement = 'left',
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'

    const renderIcon = (placement: IconPlacement) => {
      if (!Icon || placement !== iconPlacement) return null

      const baseClass = cn(
        effect === 'spinIcon' &&
          'transition-transform duration-500 ease-in-out group-hover/button:rotate-180',
      )

      if (effect === 'expandIcon' || effect === 'hoverUnderlineExpandIcon') {
        return (
          <span
            className={cn(
              'w-0 overflow-hidden opacity-0 duration-200 group-hover/button:w-5 group-hover/button:opacity-100',
              baseClass,
            )}
          >
            {Icon}
          </span>
        )
      }

      return <span className={baseClass}>{Icon}</span>
    }

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, effect, size }), className)}
        {...props}
      >
        <span className="contents space-x-2">
          {renderIcon('left')}

          <span
            className={cn(
              (effect === 'hoverUnderline' ||
                effect === 'hoverUnderlineExpandIcon' ||
                effect === 'hoverUnderlineExpandText') &&
                "after:bg-muted-foreground relative inline-block h-min after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:content-[''] group-hover:after:origin-bottom-left group-hover:after:scale-x-100",
            )}
          >
            <span
              className={cn(
                effect === 'expandText' &&
                  'block max-w-0 overflow-hidden whitespace-nowrap opacity-0 duration-300 group-hover:max-w-50 group-hover:opacity-100',

                effect === 'hoverUnderlineExpandText' &&
                  'block max-w-0 overflow-hidden whitespace-nowrap opacity-0 duration-300 group-hover:max-w-50 group-hover:opacity-100',
              )}
            >
              {children}
            </span>
          </span>

          {renderIcon('right')}
        </span>
      </Comp>
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
