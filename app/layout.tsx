import type { Metadata } from 'next'
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google'
import './globals.css'
import { Navbar }       from '@/components/layout/Navbar'
import { Footer }       from '@/components/layout/Footer'
import { CookieBanner } from '@/components/layout/CookieBanner'
import { Analytics }    from '@/components/layout/Analytics'
import { site }         from '@/lib/content'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})

const instrument = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default:  `${site.name} — Software Consultancy`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    siteName: site.name,
    images:   [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo-mark.svg`,
  description: site.description,
  contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: site.email },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${instrument.variable}`}>
      <body className="font-sans text-graphite bg-field">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <CookieBanner />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Analytics domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN} />
        )}
      </body>
    </html>
  )
}
