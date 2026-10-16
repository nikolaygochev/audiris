import { whyAudiris } from '@/lib/content'

export function WhyAudiris() {
  return (
    <section className="py-24 bg-pupil">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          <h2 className="font-display text-3xl md:text-[2.75rem] md:leading-[1.1] font-semibold tracking-tight text-field">
            {whyAudiris.sectionTitle}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {whyAudiris.items.map(item => (
              <div key={item.title} className="border-t border-field/15 pt-6">
                <h3 className="font-display text-xl font-semibold text-field">{item.title}</h3>
                <p className="mt-3 text-haze leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
