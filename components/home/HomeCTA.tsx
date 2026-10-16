import { Button } from '@/components/ui/Button'
import { homeCTA } from '@/lib/content'

export function HomeCTA() {
  return (
    <section className="py-20 bg-iris-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-[2.75rem] md:leading-[1.1] font-semibold tracking-tight text-field">
            {homeCTA.headline}
          </h2>
          <p className="mt-4 text-lg text-iris-100">{homeCTA.subtext}</p>
        </div>
        <Button href={homeCTA.cta.href} variant="white" size="lg" className="self-start lg:self-auto">
          {homeCTA.cta.label}
        </Button>
      </div>
    </section>
  )
}
