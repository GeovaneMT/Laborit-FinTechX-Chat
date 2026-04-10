'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useTheme } from 'next-themes'

import { useCallback, useRef } from 'react'
import { Moon, Sun } from 'lucide-react'
import { flushSync } from 'react-dom'

import { cn } from '@utils/cn'

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<'button'> {
  duration?: number
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const { theme, setTheme } = useTheme()

  const isDark = theme === 'dark'

  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return

    await document.startViewTransition(() => {
      flushSync(() => {
        const toggle = isDark ? 'light' : 'dark'
        setTheme(toggle)
        document.documentElement.classList.toggle('dark')
        localStorage.setItem('theme', toggle)
      })
    }).ready

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top),
    )

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      },
    )
  }, [duration, setTheme, isDark])

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn('cursor-pointer', className)}
      {...props}
    >
      <div className="relative h-4 w-4">
        <AnimatePresence>
          {!isDark && (
            <motion.div
              key="SUN"
              initial={{ opacity: 0, scale: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0, x: 20, y: 10 }}
              className="absolute"
              transition={{ duration: 0.6, ease: 'backInOut' }}
            >
              <Sun size={16} />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isDark && (
            <motion.div
              key="MOON"
              initial={{ opacity: 0, scale: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0, x: 20, y: 10 }}
              className="absolute"
              transition={{ duration: 0.6, ease: 'backInOut' }}
            >
              <Moon size={16} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
