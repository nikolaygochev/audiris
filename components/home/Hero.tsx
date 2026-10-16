import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { TestRunPanel } from './TestRunPanel'
import { hero } from '@/lib/content'

export function Hero() {
  return (
    <section className="bg-paper border-b border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink tracking-tight leading-[1.1] whitespace-pre-line">
              {hero.headline}
            </h1>
            <p className="mt-6 text-xl text-muted leading-relaxed max-w-xl">
              {hero.subheadline}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href={hero.primaryCta.href} size="lg">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="outline" size="lg">
                {hero.secondaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <TestRunPanel />
        </div>
      </div>
    </section>
  )
}
