import Link from 'next/link'
import { ArrowRight, ShieldCheck, Zap, Code2, Users } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading }  from '@/components/ui/SectionHeading'
import { Card }            from '@/components/ui/Card'
import { servicesOverview } from '@/lib/content'
import { serviceList } from '@/lib/services'

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="h-6 w-6 text-brand-500" aria-hidden="true" />,
  Zap:         <Zap         className="h-6 w-6 text-brand-500" aria-hidden="true" />,
  Code2:       <Code2       className="h-6 w-6 text-brand-500" aria-hidden="true" />,
  Users:       <Users       className="h-6 w-6 text-brand-500" aria-hidden="true" />,
}

export function ServicesOverview() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title={servicesOverview.sectionTitle}
            subtitle={servicesOverview.sectionSubtitle}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceList.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.1}>
              <Card hover className="h-full flex flex-col">
                <div className="p-2 bg-brand-50 rounded-lg w-fit mb-4">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.name}</h3>
                <p className="text-slate-600 text-sm flex-1">{service.shortDescription}</p>
                <Link
                  href={service.slug}
                  className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors group"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
