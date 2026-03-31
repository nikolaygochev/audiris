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
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Privacy Policy</h1>
        <p className="text-sm text-slate-400 mb-10">Last updated: {privacyPolicy.lastUpdated}</p>

        <p className="text-lg text-slate-600 leading-relaxed mb-12">{privacyPolicy.intro}</p>

        <div className="space-y-10">
          {privacyPolicy.sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">{section.title}</h2>
              <p className="text-slate-600 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
