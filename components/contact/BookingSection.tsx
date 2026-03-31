import { Calendar } from 'lucide-react'
import { contactPage, site } from '@/lib/content'

export function BookingSection() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL

  return (
    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
          <Calendar className="w-5 h-5 text-brand-500" />
        </div>
        <h2 className="text-xl font-bold text-slate-900">{contactPage.bookingTitle}</h2>
      </div>
      <p className="text-slate-600 mb-6 leading-relaxed">{contactPage.bookingSubtitle}</p>

      {calendlyUrl ? (
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full rounded-lg border-2 border-brand-500 text-brand-600 font-semibold py-3 px-6 hover:bg-brand-50 transition-colors duration-200"
        >
          Book a call
        </a>
      ) : (
        <a
          href={`mailto:${site.email}?subject=Discovery call request`}
          className="inline-flex items-center justify-center w-full rounded-lg border-2 border-brand-500 text-brand-600 font-semibold py-3 px-6 hover:bg-brand-50 transition-colors duration-200"
        >
          {contactPage.bookingFallback}
        </a>
      )}
    </div>
  )
}
