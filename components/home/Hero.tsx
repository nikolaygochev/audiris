import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { hero } from '@/lib/content'

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-slate-50">
      {/* Geometric background pattern */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <svg className="absolute right-0 top-0 w-1/2 h-full opacity-[0.04]" viewBox="0 0 600 600" fill="none">
          <circle cx="400" cy="200" r="300" stroke="#059669" strokeWidth="80" />
          <circle cx="200" cy="450" r="180" stroke="#059669" strokeWidth="60" />
          <circle cx="550" cy="500" r="120" stroke="#059669" strokeWidth="40" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight whitespace-pre-line">
            {hero.headline}
          </h1>
          <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-2xl">
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
      </div>
    </section>
  )
}
