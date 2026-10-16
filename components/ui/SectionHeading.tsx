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
        className={`font-display text-3xl md:text-[2.75rem] md:leading-[1.1] font-semibold tracking-tight ${
          light ? 'text-field' : 'text-graphite'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${
            light ? 'text-haze' : 'text-dim'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
