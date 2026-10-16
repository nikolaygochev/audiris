import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RingMarker }     from '@/components/ui/Iris'
import { servicesOverview } from '@/lib/content'
import { serviceList } from '@/lib/services'

export function ServicesOverview() {
  return (
    <section id="services" className="py-24 bg-field scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={servicesOverview.sectionTitle}
          subtitle={servicesOverview.sectionSubtitle}
        />

        <ul className="border-b border-graphite/10">
          {serviceList.map((service, i) => (
            <li key={service.id} className="border-t border-graphite/10">
              <Link
                href={service.slug}
                className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_minmax(0,18rem)_1fr_auto] items-center gap-x-6 gap-y-2 py-7 px-2 -mx-2 transition-colors hover:bg-white"
              >
                <RingMarker index={i} className="col-start-1 row-start-1 h-10 w-10" />
                <h3 className="col-start-2 row-start-1 font-display text-2xl font-semibold text-graphite tracking-tight group-hover:text-iris-500 transition-colors">
                  {service.name}
                </h3>
                <p className="col-start-2 row-start-2 md:col-start-3 md:row-start-1 text-dim leading-relaxed max-w-xl">
                  {service.shortDescription}
                </p>
                <ArrowUpRight
                  className="col-start-3 row-start-1 md:col-start-4 h-6 w-6 text-haze group-hover:text-iris-500 transition-colors"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
