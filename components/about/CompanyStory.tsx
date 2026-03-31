import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { companyStory }    from '@/lib/content'

export function CompanyStory() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{companyStory.whereWeStarted.title}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{companyStory.whereWeStarted.body}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{companyStory.whereWeAreNow.title}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{companyStory.whereWeAreNow.body}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <blockquote className="relative pl-8 border-l-4 border-brand-500">
              <span className="absolute -top-4 -left-2 text-7xl text-brand-200 font-serif leading-none select-none" aria-hidden="true">&ldquo;</span>
              <p className="text-2xl font-semibold text-slate-800 leading-relaxed italic">
                {companyStory.pullQuote}
              </p>
            </blockquote>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
