import { ServiceHero }      from './ServiceHero'
import { ProblemStatement } from './ProblemStatement'
import { ProcessSteps }     from './ProcessSteps'
import { ToolsGrid }        from './ToolsGrid'
import { RelatedServices }  from './RelatedServices'
import { ServiceCTA }       from './ServiceCTA'
import { MobileStickyBar }  from './MobileStickyBar'
import { AnimatedSection }  from '@/components/ui/AnimatedSection'
import { SectionHeading }   from '@/components/ui/SectionHeading'
import type { ServiceData } from '@/lib/services'

export function ServicePage({ service }: { service: ServiceData }) {
  return (
    <>
      <ServiceHero service={service} />
      <ProblemStatement service={service} />

      {/* Solution narrative */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <SectionHeading title={service.solution.title} align="left" />
              <p className="text-lg text-slate-600 leading-relaxed">{service.solution.body}</p>
              {service.solution.outcomes.length > 0 && (
                <ul className="mt-6 space-y-3">
                  {service.solution.outcomes.map(o => (
                    <li key={o} className="flex items-start gap-3">
                      <span className="mt-1 h-5 w-5 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                        <svg className="h-3 w-3 text-brand-600" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                          <path d="M3.5 6.5L5.5 8.5L8.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                      </span>
                      <span className="text-slate-700">{o}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </AnimatedSection>
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
