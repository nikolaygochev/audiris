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
    <section className="pt-14 pb-24 bg-field">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-graphite">Privacy policy</h1>
        <p className="mt-3 text-sm text-dim">Last updated: {privacyPolicy.lastUpdated}</p>

        <p className="mt-10 text-lg text-graphite leading-relaxed">{privacyPolicy.intro}</p>

        <div className="mt-12">
          {privacyPolicy.sections.map(section => (
            <div key={section.title} className="border-t border-graphite/10 py-8">
              <h2 className="font-display text-xl font-semibold text-graphite mb-3">{section.title}</h2>
              <p className="text-dim leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
