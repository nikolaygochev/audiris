import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading }  from '@/components/ui/SectionHeading'
import { teamSection }     from '@/lib/content'

const placeholderMembers = Array.from({ length: 3 })

export function Team() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title={teamSection.title}
            align="center"
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {placeholderMembers.map((_, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center">
                {/* Avatar placeholder */}
                <div className="w-28 h-28 rounded-full bg-slate-100 flex items-center justify-center mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-slate-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-5.33 0-8 2.67-8 4v1h16v-1c0-1.33-2.67-4-8-4z" />
                  </svg>
                </div>
                <div className="h-4 w-32 bg-slate-100 rounded mb-2" aria-hidden="true" />
                <div className="h-3 w-24 bg-slate-100 rounded" aria-hidden="true" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <p className="mt-12 text-center text-slate-500 text-sm">{teamSection.placeholder}</p>
        </AnimatedSection>
      </div>
    </section>
  )
}
