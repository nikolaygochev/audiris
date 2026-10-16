import Link from 'next/link'
import { originStory } from '@/lib/content'

export function OriginStory() {
  return (
    <section className="py-24 bg-field">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <h2 className="font-display text-3xl md:text-[2.75rem] md:leading-[1.1] font-semibold tracking-tight text-graphite whitespace-pre-line">
            {originStory.headline}
          </h2>
          <div>
            <p className="text-lg text-dim leading-relaxed max-w-xl">{originStory.body}</p>
            <Link
              href={originStory.cta.href}
              className="inline-block mt-8 text-base font-semibold text-graphite underline decoration-graphite/25 underline-offset-[6px] hover:text-iris-500 hover:decoration-iris-500 transition-colors"
            >
              {originStory.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
