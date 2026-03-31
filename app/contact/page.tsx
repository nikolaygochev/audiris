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
    <>
      {/* Hero */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{contactPage.title}</h1>
          <p className="text-xl text-slate-300 max-w-xl mx-auto">{contactPage.subtitle}</p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form — 2/3 width */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h2>
              <ContactForm />
            </div>

            {/* Sidebar — 1/3 width */}
            <div className="space-y-8">
              <BookingSection />

              <div className="pt-2">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
                  Other ways to reach us
                </h3>
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
