import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { Button }        from '@/components/ui/Button'
import { caseStudiesPage } from '@/lib/content'

export const metadata: Metadata = buildMetadata({
  title: 'Case Studies',
  description:
    "Real results from real engagements. Audiris case studies coming soon — documenting the outcomes we've delivered for our clients.",
  path: '/case-studies',
})

export default function CaseStudiesPage() {
  return (
    <section className="min-h-[70vh] flex items-center py-24 bg-field">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="font-display text-[2.75rem] sm:text-6xl font-semibold text-graphite tracking-[-0.03em] leading-[1.05]">
            {caseStudiesPage.title}
          </h1>
          <p className="mt-6 text-xl text-graphite leading-relaxed">{caseStudiesPage.subtitle}</p>
          <p className="mt-4 text-lg text-dim leading-relaxed">{caseStudiesPage.body}</p>
          <div className="mt-10">
            <Button href={caseStudiesPage.cta.href} size="lg">
              {caseStudiesPage.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
