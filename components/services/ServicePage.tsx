import { Check } from 'lucide-react'
import { ServiceHero }      from './ServiceHero'
import { ProblemStatement } from './ProblemStatement'
import { ProcessSteps }     from './ProcessSteps'
import { ToolsGrid }        from './ToolsGrid'
import { RelatedServices }  from './RelatedServices'
import { ServiceCTA }       from './ServiceCTA'
import { MobileStickyBar }  from './MobileStickyBar'
import type { ServiceData } from '@/lib/services'

export function ServicePage({ service }: { service: ServiceData }) {
  return (
    <>
      <ServiceHero service={service} />
      <ProblemStatement service={service} />

      <section className="py-20 bg-field">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-16">
            <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-graphite">
              {service.solution.title}
            </h2>
            <div className="max-w-2xl">
              <p className="text-lg text-dim leading-relaxed">{service.solution.body}</p>
              {service.solution.outcomes.length > 0 && (
                <ul className="mt-8 space-y-4">
                  {service.solution.outcomes.map(o => (
                    <li key={o} className="flex items-start gap-4">
                      <span className="mt-0.5 h-6 w-6 rounded-full bg-iris-500 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3.5 w-3.5 text-field" strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className="text-graphite text-lg leading-snug">{o}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps    service={service} />
      <ToolsGrid       service={service} />
      <RelatedServices service={service} />
      <ServiceCTA      service={service} />
      <MobileStickyBar />
    </>
  )
}
