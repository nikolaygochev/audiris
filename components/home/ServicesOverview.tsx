import Link from 'next/link'
import { ArrowRight, ShieldCheck, Zap, Code2, Users } from 'lucide-react'
import { SectionHeading }  from '@/components/ui/SectionHeading'
import { Card }            from '@/components/ui/Card'
import { servicesOverview } from '@/lib/content'
import { serviceList } from '@/lib/services'

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="h-6 w-6 text-verify-500" aria-hidden="true" />,
  Zap:         <Zap         className="h-6 w-6 text-verify-500" aria-hidden="true" />,
  Code2:       <Code2       className="h-6 w-6 text-verify-500" aria-hidden="true" />,
  Users:       <Users       className="h-6 w-6 text-verify-500" aria-hidden="true" />,
}

export function ServicesOverview() {
  return (
    <section id="services" className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={servicesOverview.sectionTitle}
          subtitle={servicesOverview.sectionSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceList.map(service => (
            <Card key={service.id} hover className="h-full flex flex-col">
              <div className="p-2 bg-verify-50 rounded w-fit mb-4">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-lg font-semibold text-ink mb-2">{service.name}</h3>
              <p className="text-muted text-sm flex-1">{service.shortDescription}</p>
              <Link
                href={service.slug}
                className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-blueprint-500 hover:text-blueprint-600 transition-colors group"
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
