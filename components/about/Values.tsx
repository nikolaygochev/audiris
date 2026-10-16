import { SectionHeading } from '@/components/ui/SectionHeading'
import { values }         from '@/lib/content'

export function Values() {
  return (
    <section className="py-24 bg-white border-y border-graphite/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What we believe"
          subtitle="These aren't posters on a wall — they're the lens through which we make every decision."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {values.map(value => (
            <div key={value.title} className="border-t border-graphite/10 pt-6">
              <h3 className="font-display text-xl font-semibold text-graphite">{value.title}</h3>
              <p className="mt-3 text-dim leading-relaxed max-w-lg">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
