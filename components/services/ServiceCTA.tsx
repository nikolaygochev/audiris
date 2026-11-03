import { Button } from '@/components/ui/Button'
import type { ServiceData } from '@/lib/services'

export function ServiceCTA({ service }: { service: ServiceData }) {
  return (
    <section className="py-20 bg-iris-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <h2 className="font-display text-3xl md:text-[2.5rem] md:leading-[1.1] font-semibold tracking-tight text-field max-w-2xl">
          {service.cta.headline}
        </h2>
        <Button href={`/contact?service=${service.id}`} variant="white" size="lg" className="self-start lg:self-auto">
          {service.cta.buttonLabel}
        </Button>
      </div>
    </section>
  )
}
