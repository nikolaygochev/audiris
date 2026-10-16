import type { ServiceData } from '@/lib/services'

export function ProblemStatement({ service }: { service: ServiceData }) {
  return (
    <section className="py-16 bg-paper border-y border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl border-l border-blueprint-500 pl-8">
          <h2 className="font-display text-2xl font-semibold text-ink mb-4">{service.problem.title}</h2>
          <p className="text-lg text-muted leading-relaxed">{service.problem.body}</p>
        </div>
      </div>
    </section>
  )
}
