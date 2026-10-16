import { Calendar } from 'lucide-react'
import { contactPage, site } from '@/lib/content'

export function BookingSection() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL

  return (
    <div className="bg-paper rounded p-8 border border-rule">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded bg-verify-50 flex items-center justify-center">
          <Calendar className="w-5 h-5 text-verify-500" />
        </div>
        <h2 className="font-display text-xl font-semibold text-ink">{contactPage.bookingTitle}</h2>
      </div>
      <p className="text-muted mb-6 leading-relaxed">{contactPage.bookingSubtitle}</p>

      {calendlyUrl ? (
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full rounded border border-ink text-ink font-semibold py-3 px-6 hover:bg-ink hover:text-paper transition-colors duration-200"
        >
          Book a call
        </a>
      ) : (
        <a
          href={`mailto:${site.email}?subject=Discovery call request`}
          className="inline-flex items-center justify-center w-full rounded border border-ink text-ink font-semibold py-3 px-6 hover:bg-ink hover:text-paper transition-colors duration-200"
        >
          {contactPage.bookingFallback}
        </a>
      )}
    </div>
  )
}
