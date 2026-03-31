import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Card }            from '@/components/ui/Card'
import { services }        from '@/lib/services'
import type { ServiceData } from '@/lib/services'

export function RelatedServices({ service }: { service: ServiceData }) {
  const related = service.relatedIds.map(id => services[id])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">You may also be interested in</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {related.map((rel, i) => (
            <AnimatedSection key={rel.id} delay={i * 0.1}>
              <Card hover>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{rel.name}</h3>
                <p className="text-sm text-slate-600 mb-4">{rel.shortDescription}</p>
                <Link
                  href={rel.slug}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 group"
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
