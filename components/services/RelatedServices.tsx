import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card }        from '@/components/ui/Card'
import { services }    from '@/lib/services'
import type { ServiceData } from '@/lib/services'

export function RelatedServices({ service }: { service: ServiceData }) {
  const related = service.relatedIds.map(id => services[id])

  return (
    <section className="py-20 bg-paper border-t border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold text-ink mb-8">You may also be interested in</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {related.map(rel => (
            <Card key={rel.id} hover>
              <h3 className="text-lg font-semibold text-ink mb-2">{rel.name}</h3>
              <p className="text-sm text-muted mb-4">{rel.shortDescription}</p>
              <Link
                href={rel.slug}
                className="inline-flex items-center gap-1 text-sm font-semibold text-blueprint-500 hover:text-blueprint-600 group"
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
