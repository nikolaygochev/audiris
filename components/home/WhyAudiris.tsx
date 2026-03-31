import { ShieldCheck, Zap, LineChart, Rocket } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading }  from '@/components/ui/SectionHeading'
import { whyAudiris } from '@/lib/content'

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="h-7 w-7 text-brand-400" aria-hidden="true" />,
  Zap:         <Zap         className="h-7 w-7 text-brand-400" aria-hidden="true" />,
  LineChart:   <LineChart   className="h-7 w-7 text-brand-400" aria-hidden="true" />,
  Rocket:      <Rocket      className="h-7 w-7 text-brand-400" aria-hidden="true" />,
}

export function WhyAudiris() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading title={whyAudiris.sectionTitle} light />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyAudiris.items.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="flex flex-col gap-3">
                {iconMap[item.icon]}
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
