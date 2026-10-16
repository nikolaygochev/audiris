import { SectionHeading } from '@/components/ui/SectionHeading'
import { teamSection }    from '@/lib/content'

const placeholderMembers = Array.from({ length: 3 })

export function Team() {
  return (
    <section className="py-24 bg-field">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={teamSection.title} />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {placeholderMembers.map((_, i) => (
            <div key={i} className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-full bg-iris-50 ring-1 ring-iris-100 ring-offset-4 ring-offset-field flex-shrink-0" aria-hidden="true" />
              <div className="flex-1" aria-hidden="true">
                <div className="h-4 w-32 bg-graphite/10 rounded-sm mb-2" />
                <div className="h-3 w-24 bg-graphite/5 rounded-sm" />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-dim text-sm">{teamSection.placeholder}</p>
      </div>
    </section>
  )
}
