import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { IrisDiagram } from '@/components/ui/Iris'
import { hero } from '@/lib/content'

export function Hero() {
  return (
    <section className="bg-field">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-8 items-center">
          <div>
            <h1 className="font-display text-[2.75rem] sm:text-6xl lg:text-[4.5rem] font-semibold text-graphite tracking-[-0.03em] leading-[1.02] whitespace-pre-line">
              {hero.headline}
            </h1>
            <p className="mt-7 text-lg sm:text-xl text-dim leading-relaxed max-w-xl">
              {hero.subheadline}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <Button href={hero.primaryCta.href} size="lg">
                {hero.primaryCta.label}
              </Button>
              <Link
                href={hero.secondaryCta.href}
                className="text-base font-semibold text-graphite underline decoration-graphite/25 underline-offset-[6px] hover:text-iris-500 hover:decoration-iris-500 transition-colors"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <IrisDiagram animate className="w-full max-w-[640px] mx-auto lg:mx-0" />
        </div>
      </div>
    </section>
  )
}
