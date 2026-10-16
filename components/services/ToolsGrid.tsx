import { SectionHeading } from '@/components/ui/SectionHeading'
import { ToolChip }       from '@/components/ui/ToolChip'
import type { ServiceData } from '@/lib/services'

export function ToolsGrid({ service }: { service: ServiceData }) {
  return (
    <section className="py-20 bg-field">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-16">
          <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-graphite">
            {service.tools.title}
          </h2>
          <div className="flex flex-wrap gap-2">
            {service.tools.items.map(tool => (
              <ToolChip key={tool} name={tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
