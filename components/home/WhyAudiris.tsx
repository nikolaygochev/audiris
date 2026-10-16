import { ShieldCheck, Zap, LineChart, Rocket } from 'lucide-react'
import { SectionHeading }  from '@/components/ui/SectionHeading'
import { whyAudiris } from '@/lib/content'

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="h-7 w-7 text-verify-200" aria-hidden="true" />,
  Zap:         <Zap         className="h-7 w-7 text-verify-200" aria-hidden="true" />,
  LineChart:   <LineChart   className="h-7 w-7 text-verify-200" aria-hidden="true" />,
  Rocket:      <Rocket      className="h-7 w-7 text-verify-200" aria-hidden="true" />,
}

export function WhyAudiris() {
  return (
    <section className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={whyAudiris.sectionTitle} light />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyAudiris.items.map(item => (
            <div key={item.title} className="flex flex-col gap-3 border-t border-muted/30 pt-5">
              {iconMap[item.icon]}
              <h3 className="text-lg font-semibold text-paper">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
