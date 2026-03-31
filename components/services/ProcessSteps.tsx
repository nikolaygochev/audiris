import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading }  from '@/components/ui/SectionHeading'
import type { ServiceData } from '@/lib/services'

export function ProcessSteps({ service }: { service: ServiceData }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading title={service.process.title} />
        </AnimatedSection>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:flex items-start gap-0">
          {service.process.steps.map((step, i) => (
            <div key={step.number} className="flex-1 flex flex-col items-center text-center relative">
              {/* Connector line */}
              {i < service.process.steps.length - 1 && (
                <div className="absolute top-5 left-1/2 right-0 h-0.5 bg-brand-100" aria-hidden="true" />
              )}
              {/* Number circle */}
              <div className="relative z-10 w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                {step.number}
              </div>
              <div className="mt-4 px-3">
                <h3 className="font-semibold text-slate-900 text-sm">{step.title}</h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="md:hidden flex flex-col gap-6">
          {service.process.steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.08} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {step.number}
                </div>
                {i < service.process.steps.length - 1 && (
                  <div className="flex-1 w-0.5 bg-brand-100 mt-2" />
                )}
              </div>
              <div className="pb-6">
                <h3 className="font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
