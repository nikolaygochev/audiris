import { companyStory } from '@/lib/content'

export function CompanyStory() {
  return (
    <section className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">{companyStory.whereWeStarted.title}</h2>
              <p className="text-lg text-muted leading-relaxed">{companyStory.whereWeStarted.body}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">{companyStory.whereWeAreNow.title}</h2>
              <p className="text-lg text-muted leading-relaxed">{companyStory.whereWeAreNow.body}</p>
            </div>
          </div>

          <blockquote className="border-l border-rule pl-8">
            <p className="font-display text-2xl font-medium text-ink leading-relaxed">
              {companyStory.pullQuote}
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
