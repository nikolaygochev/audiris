import { type ButtonHTMLAttributes, forwardRef } from 'react'
import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'outline' | 'white'
type Size    = 'sm' | 'md' | 'lg'

const variantStyles: Record<Variant, string> = {
  primary:   'bg-iris-500 hover:bg-iris-600 text-field',
  secondary: 'bg-pupil hover:bg-iris-600 text-field',
  outline:   'border border-graphite/25 text-graphite hover:border-iris-500 hover:text-iris-500',
  white:     'bg-field text-pupil hover:bg-iris-50',
}

const sizeStyles: Record<Size, string> = {
  sm:  'px-4 py-2 text-sm',
  md:  'px-6 py-3 text-base',
  lg:  'px-7 py-3.5 text-base',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  href?: string
  loading?: boolean
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, loading, children, className = '', ...props }, ref) => {
    const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} disabled={loading || props.disabled} {...props}>
        {loading && (
          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
