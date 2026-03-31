import { AnimatedSection } from '@/components/ui/AnimatedSection'
import type { ServiceData } from '@/lib/services'

export function ProblemStatement({ service }: { service: ServiceData }) {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl border-l-4 border-brand-500 pl-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{service.problem.title}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{service.problem.body}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
