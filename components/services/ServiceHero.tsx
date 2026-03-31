import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import type { ServiceData } from '@/lib/services'

export function ServiceHero({ service }: { service: ServiceData }) {
  return (
    <section className="bg-white py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-slate-500 mb-8">
          <Link href="/"        className="hover:text-slate-700 transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <Link href="/#services" className="hover:text-slate-700 transition-colors">Services</Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="text-slate-900 font-medium">{service.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              {service.hero.title}
            </h1>
            <p className="mt-5 text-xl text-slate-600 leading-relaxed">
              {service.hero.subtitle}
            </p>
            <div className="mt-8">
              <Button href={service.hero.cta.href} size="lg">
                {service.hero.cta.label}
              </Button>
            </div>
          </div>

          {/* Decorative icon */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-brand-50 flex items-center justify-center">
              <div className="text-brand-500 w-24 h-24" aria-hidden="true">
                <svg viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <circle cx="48" cy="48" r="36" />
                  <path d="M32 48l12 12 20-24" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
