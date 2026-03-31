import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { socialProof } from '@/lib/content'

export function SocialProof() {
  return (
    <section className="border-y border-slate-200 bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-slate-500 mb-8 text-center sm:text-left">
          {socialProof.label}
        </p>
        <div className="grid grid-cols-3 gap-8">
          {socialProof.stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <div className="text-3xl font-bold text-brand-600">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
