import { socialProof } from '@/lib/content'

export function SocialProof() {
  return (
    <section className="border-b border-rule bg-paper py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col sm:flex-row items-center sm:items-baseline gap-3 sm:gap-8">
          <p className="text-sm font-medium text-muted">{socialProof.label}</p>
          <ul className="flex items-baseline gap-8">
            {socialProof.partners.map(partner => (
              <li key={partner.href}>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xl font-semibold text-ink hover:text-blueprint-500 transition-colors"
                >
                  {partner.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {socialProof.stats.map(stat => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="font-mono text-3xl font-medium text-ink">{stat.value}</div>
              <div className="mt-1 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
