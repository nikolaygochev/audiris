import { SectionHeading } from '@/components/ui/SectionHeading'
import { teamSection }     from '@/lib/content'

const placeholderMembers = Array.from({ length: 3 })

export function Team() {
  return (
    <section className="py-24 bg-paper border-t border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={teamSection.title} align="center" />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {placeholderMembers.map((_, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {/* Avatar placeholder */}
              <div className="w-28 h-28 rounded-full bg-rule/40 flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-rule"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-5.33 0-8 2.67-8 4v1h16v-1c0-1.33-2.67-4-8-4z" />
                </svg>
              </div>
              <div className="h-4 w-32 bg-rule/40 rounded mb-2" aria-hidden="true" />
              <div className="h-3 w-24 bg-rule/40 rounded" aria-hidden="true" />
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-muted text-sm">{teamSection.placeholder}</p>
      </div>
    </section>
  )
}
