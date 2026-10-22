import { socialProof } from '@/lib/content'

export function SocialProof() {
  return (
    <section className="border-b border-rule bg-paper py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink">
            {socialProof.label}
          </h2>
          <ul className="mt-8 flex flex-wrap items-center gap-x-12 gap-y-6">
            {socialProof.partners.map(partner => (
              <li key={partner.href}>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 font-display text-2xl font-semibold text-ink opacity-90 hover:opacity-100 transition-opacity"
                >
                  {/* multiply blends the JPG's white background into the page colour */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.logo}
                    width={partner.width}
                    height={partner.height}
                    alt={partner.showName ? '' : partner.name}
                    className="mix-blend-multiply"
                  />
                  {partner.showName && partner.name}
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
