import { type HTMLAttributes } from 'react'

type Variant = 'verify' | 'muted' | 'blueprint'

const variants: Record<Variant, string> = {
  verify:    'bg-verify-50 text-verify-600',
  muted:     'bg-rule/60 text-muted',
  blueprint: 'bg-blueprint-50 text-blueprint-600',
}

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant
}

export function Badge({ variant = 'verify', className = '', children, ...props }: BadgeProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
