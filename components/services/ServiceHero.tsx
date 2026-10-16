import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { IrisDiagram } from '@/components/ui/Iris'
import type { ServiceData } from '@/lib/services'

export function ServiceHero({ service }: { service: ServiceData }) {
  return (
    <section className="bg-field pt-10 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-dim mb-10">
          <Link href="/"          className="hover:text-iris-500 transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4 text-haze" aria-hidden="true" />
          <Link href="/#services" className="hover:text-iris-500 transition-colors">Services</Link>
          <ChevronRight className="h-4 w-4 text-haze" aria-hidden="true" />
          <span className="text-graphite font-medium" aria-current="page">{service.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
          <div>
            <h1 className="font-display text-[2.75rem] md:text-6xl font-semibold text-graphite tracking-[-0.03em] leading-[1.05]">
              {service.hero.title}
            </h1>
            <p className="mt-6 text-xl text-dim leading-relaxed max-w-xl">
              {service.hero.subtitle}
            </p>
            <div className="mt-9">
              <Button href={service.hero.cta.href} size="lg">
                {service.hero.cta.label}
              </Button>
            </div>
          </div>

          <IrisDiagram highlight={service.id} className="w-full max-w-[560px] mx-auto lg:mx-0" />
        </div>
      </div>
    </section>
  )
}
