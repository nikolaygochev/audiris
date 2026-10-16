import { type HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export function Card({ hover = false, className = '', children, ...props }: CardProps) {
  return (
    <div
      className={`bg-white rounded-sm border border-graphite/10 p-6 ${
        hover ? 'transition-colors duration-200 hover:border-iris-300' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
