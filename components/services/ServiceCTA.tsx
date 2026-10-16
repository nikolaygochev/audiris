import { Button } from '@/components/ui/Button'
import type { ServiceData } from '@/lib/services'

export function ServiceCTA({ service }: { service: ServiceData }) {
  return (
    <section className="py-20 bg-ink">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl font-semibold text-paper mb-8">{service.cta.headline}</h2>
        <Button href="/contact" size="lg">
          {service.cta.buttonLabel}
        </Button>
      </div>
    </section>
  )
}
