import { ShieldCheck, MessageSquare, TrendingUp, Handshake } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading }  from '@/components/ui/SectionHeading'
import { values }          from '@/lib/content'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  MessageSquare,
  TrendingUp,
  Handshake,
}

export function Values() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="What we believe"
            subtitle="These aren't posters on a wall — they're the lens through which we make every decision."
            align="center"
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => {
            const Icon = iconMap[value.icon]
            return (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 h-full shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
                  {Icon && (
                    <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-brand-500" />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{value.description}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
