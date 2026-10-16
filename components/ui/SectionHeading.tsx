interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  title,
  subtitle,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
      <h2
        className={`font-display text-3xl md:text-4xl font-semibold tracking-tight ${
          light ? 'text-paper' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${
            light ? 'text-rule' : 'text-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
