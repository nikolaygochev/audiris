import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { privacyPolicy }  from '@/lib/content'

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'Audiris privacy policy — how we collect, use, and protect your personal data.',
  path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 bg-paper">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-semibold text-ink mb-3">Privacy Policy</h1>
        <p className="text-sm text-muted mb-10">Last updated: {privacyPolicy.lastUpdated}</p>

        <p className="text-lg text-muted leading-relaxed mb-12">{privacyPolicy.intro}</p>

        <div className="space-y-10">
          {privacyPolicy.sections.map((section) => (
            <div key={section.title} className="border-t border-rule pt-8 first:border-t-0 first:pt-0">
              <h2 className="text-xl font-semibold text-ink mb-3">{section.title}</h2>
              <p className="text-muted leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
