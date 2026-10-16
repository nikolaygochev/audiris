import type { ServiceData } from '@/lib/services'

export function ProblemStatement({ service }: { service: ServiceData }) {
  return (
    <section className="py-20 bg-white border-y border-graphite/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-16">
          <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-graphite">
            {service.problem.title}
          </h2>
          <p className="text-lg text-dim leading-relaxed max-w-2xl">{service.problem.body}</p>
        </div>
      </div>
    </section>
  )
}
