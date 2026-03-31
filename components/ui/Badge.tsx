import { type HTMLAttributes } from 'react'

type Variant = 'brand' | 'slate' | 'amber'

const variants: Record<Variant, string> = {
  brand: 'bg-brand-100 text-brand-700',
  slate: 'bg-slate-100 text-slate-600',
  amber: 'bg-amber-100 text-amber-700',
}

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant
}

export function Badge({ variant = 'brand', className = '', children, ...props }: BadgeProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
