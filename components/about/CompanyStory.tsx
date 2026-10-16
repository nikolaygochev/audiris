import { IrisDiagram }  from '@/components/ui/Iris'
import { companyStory } from '@/lib/content'

export function CompanyStory() {
  return (
    <section className="py-24 bg-field">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-graphite mb-4">
                {companyStory.whereWeStarted.title}
              </h2>
              <p className="text-lg text-dim leading-relaxed">{companyStory.whereWeStarted.body}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-graphite mb-4">
                {companyStory.whereWeAreNow.title}
              </h2>
              <p className="text-lg text-dim leading-relaxed">{companyStory.whereWeAreNow.body}</p>
            </div>
          </div>

          <IrisDiagram className="w-full max-w-[560px] mx-auto" />
        </div>

        <blockquote className="mt-24 pt-12 border-t border-graphite/10">
          <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] text-graphite max-w-4xl">
            {companyStory.pullQuote}
          </p>
        </blockquote>
      </div>
    </section>
  )
}
