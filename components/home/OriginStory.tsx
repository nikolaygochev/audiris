import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { originStory } from '@/lib/content'
import { serviceList }  from '@/lib/services'

export function OriginStory() {
  return (
    <section className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Text */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink whitespace-pre-line">
              {originStory.headline}
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">{originStory.body}</p>
            <Link
              href={originStory.cta.href}
              className="inline-flex items-center gap-2 mt-8 text-base font-semibold text-blueprint-500 hover:text-blueprint-600 transition-colors group"
            >
              {originStory.cta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          {/* Real expansion timeline: the order services were added */}
          <div className="border-l border-rule pl-8">
            {serviceList.map((s, i) => (
              <div key={s.id} className="relative pb-8 last:pb-0">
                <span
                  className="absolute -left-[33px] top-1 h-2.5 w-2.5 rounded-full bg-verify-500"
                  aria-hidden="true"
                />
                <p className="font-mono text-xs text-muted">
                  {i === 0 ? 'Where we started' : i === serviceList.length - 1 ? 'Where we are now' : `Stage ${i + 1}`}
                </p>
                <p className="mt-1 text-ink font-medium">{s.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
