'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { type HTMLAttributes } from 'react'

interface AnimatedSectionProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number
}

export function AnimatedSection({ delay = 0, children, className = '', ...props }: AnimatedSectionProps) {
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
