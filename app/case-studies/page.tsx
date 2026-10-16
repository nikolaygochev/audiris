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
    <section className="min-h-[70vh] flex items-center py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink leading-tight mb-6">
            {caseStudiesPage.title}
          </h1>
          <p className="text-xl text-muted mb-4 leading-relaxed">{caseStudiesPage.subtitle}</p>
          <p className="text-lg text-muted leading-relaxed mb-10">{caseStudiesPage.body}</p>
          <Button href={caseStudiesPage.cta.href} variant="primary" size="lg">
            {caseStudiesPage.cta.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
