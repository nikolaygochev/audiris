import { socialProof } from '@/lib/content'

export function SocialProof() {
  return (
    <section className="bg-white border-y border-graphite/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 border-b border-graphite/10">
          <h2 className="font-display text-3xl md:text-[2.75rem] md:leading-[1.1] font-semibold tracking-tight text-graphite">
            {socialProof.label}
          </h2>
          <ul className="mt-8 flex flex-wrap items-center gap-x-12 gap-y-6">
            {socialProof.partners.map(partner => (
              <li key={partner.href}>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 font-display text-2xl font-semibold text-graphite opacity-90 hover:opacity-100 transition-opacity"
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
        <div className="grid grid-cols-3 divide-x divide-graphite/10">
          {socialProof.stats.map(stat => (
            <div key={stat.label} className="py-8 px-4 sm:px-8 first:pl-0">
              <p className="font-display text-4xl sm:text-5xl font-semibold text-iris-500 tracking-tight">{stat.value}</p>
              <p className="mt-2 text-sm text-dim">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
