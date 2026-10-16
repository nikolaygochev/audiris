import { SectionHeading } from '@/components/ui/SectionHeading'
import type { ServiceData } from '@/lib/services'

export function ProcessSteps({ service }: { service: ServiceData }) {
  const steps = service.process.steps

  return (
    <section className="py-20 bg-white border-y border-graphite/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={service.process.title} />

        <ol className="grid grid-cols-1 md:grid-cols-5 gap-0">
          {steps.map((step, i) => (
            <li key={step.number} className="relative flex md:flex-col gap-5 md:gap-0 pb-8 md:pb-0 md:pr-6">
              {i < steps.length - 1 && (
                <>
                  <span className="hidden md:block absolute top-5 left-10 right-0 h-px bg-graphite/15" aria-hidden="true" />
                  <span className="md:hidden absolute top-10 bottom-0 left-5 w-px bg-graphite/15" aria-hidden="true" />
                </>
              )}
              <span className="relative z-10 w-10 h-10 rounded-full border-2 border-iris-500 bg-white text-iris-500 flex items-center justify-center font-display font-semibold flex-shrink-0">
                {step.number}
              </span>
              <div className="md:mt-5">
                <h3 className="font-display text-lg font-semibold text-graphite">{step.title}</h3>
                <p className="mt-2 text-sm text-dim leading-relaxed">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
