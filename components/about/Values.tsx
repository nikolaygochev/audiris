import { ShieldCheck, MessageSquare, TrendingUp, Handshake } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card }           from '@/components/ui/Card'
import { values }         from '@/lib/content'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  MessageSquare,
  TrendingUp,
  Handshake,
}

export function Values() {
  return (
    <section className="py-24 bg-paper border-t border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What we believe"
          subtitle="These aren't posters on a wall — they're the lens through which we make every decision."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(value => {
            const Icon = iconMap[value.icon]
            return (
              <Card key={value.title} className="h-full">
                {Icon && (
                  <div className="w-10 h-10 rounded bg-verify-50 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-verify-500" />
                  </div>
                )}
                <h3 className="text-lg font-semibold text-ink mb-3">{value.title}</h3>
                <p className="text-muted leading-relaxed text-sm">{value.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
