import { contactPage, site } from '@/lib/content'

export function BookingSection() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL
  const linkClass =
    'inline-flex items-center justify-center w-full rounded-full bg-field text-pupil font-semibold py-3 px-6 hover:bg-iris-50 transition-colors duration-200'

  return (
    <div className="bg-pupil rounded-sm p-8">
      <h2 className="font-display text-2xl font-semibold text-field">{contactPage.bookingTitle}</h2>
      <p className="mt-3 text-haze leading-relaxed">{contactPage.bookingSubtitle}</p>

      <div className="mt-7">
        {calendlyUrl ? (
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
            Book a call
          </a>
        ) : (
          <a href={`mailto:${site.email}?subject=Discovery call request`} className={linkClass}>
            {contactPage.bookingFallback}
          </a>
        )}
      </div>
    </div>
  )
}
