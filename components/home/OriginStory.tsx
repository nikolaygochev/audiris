import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { originStory } from '@/lib/content'

export function OriginStory() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 whitespace-pre-line">
              {originStory.headline}
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">{originStory.body}</p>
            <Link
              href={originStory.cta.href}
              className="inline-flex items-center gap-2 mt-8 text-base font-semibold text-brand-600 hover:text-brand-700 transition-colors group"
            >
              {originStory.cta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </AnimatedSection>

          {/* Abstract visual */}
          <AnimatedSection delay={0.15}>
            <div className="relative h-72 lg:h-80 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 400 300" fill="none" className="absolute inset-0 w-full h-full opacity-30" aria-hidden="true">
                <circle cx="200" cy="150" r="120" stroke="#059669" strokeWidth="2" strokeDasharray="8 6" />
                <circle cx="200" cy="150" r="80"  stroke="#059669" strokeWidth="2" strokeDasharray="6 8" />
                <circle cx="200" cy="150" r="40"  fill="#059669" fillOpacity="0.2" />
              </svg>
              <div className="relative z-10 text-center px-8">
                <div className="text-5xl font-black text-brand-600 leading-none">10+</div>
                <div className="mt-2 text-sm font-semibold text-brand-700 uppercase tracking-widest">Years of QA expertise</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
