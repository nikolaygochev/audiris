import type { Metadata }   from 'next'
import { buildMetadata }   from '@/lib/metadata'
import { CompanyStory }    from '@/components/about/CompanyStory'
import { Values }          from '@/components/about/Values'
import { Team }            from '@/components/about/Team'
import { missionStatement, site } from '@/lib/content'
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
      <section className="pt-20 pb-24 bg-pupil">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-[2.5rem] sm:text-6xl font-semibold text-field tracking-[-0.03em] leading-[1.05] max-w-4xl">
            {site.tagline}
          </h1>
          <p className="mt-8 text-xl text-haze max-w-2xl leading-relaxed">
            {missionStatement}
          </p>
        </div>
      </section>

      <CompanyStory />
      <Values />
      <Team />

      <section className="py-20 bg-iris-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-[2.75rem] md:leading-[1.1] font-semibold tracking-tight text-field">
              Ready to work with us?
            </h2>
            <p className="mt-4 text-lg text-iris-100">
              Let&apos;s talk about your project — no obligation, just an honest conversation.
            </p>
          </div>
          <Button href="/contact" variant="white" size="lg" className="self-start lg:self-auto">
            Get in touch
          </Button>
        </div>
      </section>
    </>
  )
}
