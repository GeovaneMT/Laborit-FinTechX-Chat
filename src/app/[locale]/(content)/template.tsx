'use client'

import { useSelectedLayoutSegments } from 'next/navigation'

import { motion } from 'motion/react'

interface TemplateProps {
  children: React.ReactNode
}

const Template = ({ children }: TemplateProps) => {
  const segments = useSelectedLayoutSegments()
  const pathname = '/' + segments.join('/')

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full"
      transition={{ duration: 0.6, ease: 'backInOut' }}
    >
      {children}
    </motion.div>
  )
}

export default Template
