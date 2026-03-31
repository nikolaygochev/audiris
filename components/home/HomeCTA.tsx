import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'
import { homeCTA } from '@/lib/content'

export function HomeCTA() {
  return (
    <section className="py-24 bg-brand-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-white">{homeCTA.headline}</h2>
          <p className="mt-4 text-lg text-brand-100">{homeCTA.subtext}</p>
          <div className="mt-10">
            <Button href={homeCTA.cta.href} variant="white" size="lg">
              {homeCTA.cta.label}
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
