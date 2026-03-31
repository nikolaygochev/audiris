import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading }  from '@/components/ui/SectionHeading'
import { ToolChip }        from '@/components/ui/ToolChip'
import type { ServiceData } from '@/lib/services'

export function ToolsGrid({ service }: { service: ServiceData }) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading title={service.tools.title} />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {service.tools.items.map(tool => (
              <ToolChip key={tool} name={tool} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
