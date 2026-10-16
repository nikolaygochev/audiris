import type { Metadata }   from 'next'
import { buildMetadata }   from '@/lib/metadata'
import { CompanyStory }    from '@/components/about/CompanyStory'
import { Values }          from '@/components/about/Values'
import { Team }            from '@/components/about/Team'
import { missionStatement } from '@/lib/content'
import { Button }          from '@/components/ui/Button'

export const metadata: Metadata = buildMetadata({
  title: 'About Audiris',
  description:
    'Audiris started in QA and grew into a full-service software consultancy. Learn our story, values, and the team behind our quality-first approach.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-paper leading-tight max-w-3xl mx-auto">
            Born in QA. Built for everything that comes after.
          </h1>
          <p className="mt-6 text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            {missionStatement}
          </p>
        </div>
      </section>

      <CompanyStory />
      <Values />
      <Team />

      {/* CTA */}
      <section className="py-20 bg-ink border-t border-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-semibold text-paper mb-4">
            Ready to work with us?
          </h2>
          <p className="text-muted mb-8 text-lg">
            Let's talk about your project — no obligation, just an honest conversation.
          </p>
          <Button href="/contact" variant="white" size="lg">
            Get in touch
          </Button>
        </div>
      </section>
    </>
  )
}
