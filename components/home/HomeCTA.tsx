import { Button } from '@/components/ui/Button'
import { homeCTA } from '@/lib/content'

export function HomeCTA() {
  return (
    <section className="py-24 bg-ink">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper">{homeCTA.headline}</h2>
        <p className="mt-4 text-lg text-muted">{homeCTA.subtext}</p>
        <div className="mt-10">
          <Button href={homeCTA.cta.href} variant="white" size="lg">
            {homeCTA.cta.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
