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
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-400 font-medium mb-4 tracking-wide uppercase text-sm">Our story</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Born in QA. Built for everything that comes after.
          </h1>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {missionStatement}
          </p>
        </div>
      </section>

      <CompanyStory />
      <Values />
      <Team />

      {/* CTA */}
      <section className="py-20 bg-brand-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to work with us?
          </h2>
          <p className="text-brand-100 mb-8 text-lg">
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
