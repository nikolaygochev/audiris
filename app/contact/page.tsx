import type { Metadata }    from 'next'
import { buildMetadata }    from '@/lib/metadata'
import { ContactForm }      from '@/components/contact/ContactForm'
import { BookingSection }   from '@/components/contact/BookingSection'
import { ContactInfo }      from '@/components/contact/ContactInfo'
import { contactPage }      from '@/lib/content'

export const metadata: Metadata = buildMetadata({
  title: 'Contact Audiris',
  description:
    'Get in touch with the Audiris team. Tell us about your project and we\'ll respond within 1 business day.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <section className="pt-14 pb-24 bg-field">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-[2.75rem] sm:text-6xl font-semibold text-graphite tracking-[-0.03em] leading-[1.05]">
          {contactPage.title}
        </h1>
        <p className="mt-5 text-xl text-dim max-w-xl leading-relaxed">{contactPage.subtitle}</p>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16">
          <div className="bg-white rounded-sm border border-graphite/10 p-6 sm:p-10">
            <h2 className="font-display text-2xl font-semibold text-graphite mb-8">Send us a message</h2>
            <ContactForm />
          </div>

          <div className="space-y-10">
            <BookingSection />
            <div>
              <h3 className="font-display text-lg font-semibold text-graphite mb-6">Other ways to reach us</h3>
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
