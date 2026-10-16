import { type HTMLAttributes } from 'react'

type Variant = 'iris' | 'focus' | 'haze'

const variants: Record<Variant, string> = {
  iris:  'bg-iris-50 text-iris-600',
  focus: 'bg-focus-300/25 text-pupil',
  haze:  'bg-graphite/5 text-dim',
}

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant
}

export function Badge({ variant = 'iris', className = '', children, ...props }: BadgeProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
