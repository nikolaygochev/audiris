import Link from 'next/link'
import { Mail } from 'lucide-react'
import { site } from '@/lib/content'
import { serviceList } from '@/lib/services'

const companyLinks = [
  { label: 'About',          href: '/about' },
  { label: 'Case studies',   href: '/case-studies' },
  { label: 'Contact',        href: '/contact' },
  { label: 'Privacy policy', href: '/privacy-policy' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-pupil text-haze">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-dark.svg" alt="Audiris" className="h-8 w-auto mb-4" />
            <p className="text-sm leading-relaxed">{site.description}</p>
          </div>

          <div>
            <h3 className="font-display text-field text-base font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {serviceList.map(s => (
                <li key={s.id}>
                  <Link href={s.slug} className="text-sm hover:text-field transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-field text-base font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-field transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-field text-base font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 text-sm hover:text-field transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-field/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {year} {site.name}. All rights reserved.</p>
          <Link href="/privacy-policy" className="hover:text-field transition-colors">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
