'use client'

import { useSelectedLayoutSegments } from 'next/navigation'

import { motion } from 'motion/react'

import { useParentSize } from '@/presentation/pattern/hooks/use-parent-size'

interface TemplateProps {
  children: React.ReactNode
}

const Template = ({ children }: TemplateProps) => {
  const segments = useSelectedLayoutSegments()
  const pathname = '/' + segments.join('/')

  const { width, height } = useParentSize()

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center p-10"
      transition={{ duration: 0.6, ease: 'backInOut' }}
      style={{ minHeight: height, minWidth: width }}
    >
      {children}
    </motion.div>
  )
}

export default Template
