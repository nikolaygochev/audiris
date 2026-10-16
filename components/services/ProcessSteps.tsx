import { SectionHeading } from '@/components/ui/SectionHeading'
import type { ServiceData } from '@/lib/services'

export function ProcessSteps({ service }: { service: ServiceData }) {
  return (
    <section className="py-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={service.process.title} />

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:flex items-start gap-0">
          {service.process.steps.map((step, i) => (
            <div key={step.number} className="flex-1 flex flex-col items-center text-center relative">
              {/* Connector line */}
              {i < service.process.steps.length - 1 && (
                <div className="absolute top-5 left-1/2 right-0 h-px bg-rule" aria-hidden="true" />
              )}
              {/* Number circle */}
              <div className="relative z-10 w-10 h-10 rounded-full bg-ink text-paper flex items-center justify-center font-mono text-sm flex-shrink-0">
                {step.number}
              </div>
              <div className="mt-4 px-3">
                <h3 className="font-semibold text-ink text-sm">{step.title}</h3>
                <p className="mt-2 text-xs text-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="md:hidden flex flex-col gap-6">
          {service.process.steps.map((step, i) => (
            <div key={step.number} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-ink text-paper flex items-center justify-center font-mono text-sm flex-shrink-0">
                  {step.number}
                </div>
                {i < service.process.steps.length - 1 && (
                  <div className="flex-1 w-px bg-rule mt-2" />
                )}
              </div>
              <div className="pb-6">
                <h3 className="font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
