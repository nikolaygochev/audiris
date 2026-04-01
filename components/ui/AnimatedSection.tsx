'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { type ReactNode } from 'react'

interface AnimatedSectionProps {
  delay?: number
  children: ReactNode
  className?: string
}

export function AnimatedSection({ delay = 0, children, className = '' }: AnimatedSectionProps) {
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
