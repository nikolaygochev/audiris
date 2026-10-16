import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { RingMarker }   from '@/components/ui/Iris'
import { services, serviceList } from '@/lib/services'
import type { ServiceData } from '@/lib/services'

export function RelatedServices({ service }: { service: ServiceData }) {
  const related = service.relatedIds.map(id => services[id])

  return (
    <section className="py-20 bg-field border-t border-graphite/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-graphite mb-8">
          You may also be interested in
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {related.map(rel => (
            <li key={rel.id}>
              <Link
                href={rel.slug}
                className="group flex items-start gap-5 h-full bg-white rounded-sm border border-graphite/10 p-6 transition-colors hover:border-iris-300"
              >
                <RingMarker index={serviceList.findIndex(s => s.id === rel.id)} className="h-10 w-10" />
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-graphite group-hover:text-iris-500 transition-colors">
                    {rel.name}
                  </h3>
                  <p className="mt-2 text-sm text-dim leading-relaxed">{rel.shortDescription}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-haze group-hover:text-iris-500 transition-colors" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
