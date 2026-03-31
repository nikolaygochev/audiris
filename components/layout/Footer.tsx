import Link from 'next/link'
import { Linkedin, Mail } from 'lucide-react'
import { site } from '@/lib/content'
import { serviceList } from '@/lib/services'

const companyLinks = [
  { label: 'About',         href: '/about' },
  { label: 'Case Studies',  href: '/case-studies' },
  { label: 'Contact',       href: '/contact' },
  { label: 'Privacy Policy',href: '/privacy-policy' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-dark.svg" alt="Audiris" className="h-8 w-auto mb-4" />
            <p className="text-sm leading-relaxed">{site.description}</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">Services</h3>
            <ul className="space-y-3">
              {serviceList.map(s => (
                <li key={s.id}>
                  <Link href={s.slug} className="text-sm hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <Linkedin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {year} {site.name}. All rights reserved.</p>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
