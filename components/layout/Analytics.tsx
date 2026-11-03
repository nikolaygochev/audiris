'use client'

import Script from 'next/script'
import { useConsent } from '@/lib/consent'

// Loads Plausible only after the visitor accepts the cookie banner, as the privacy policy promises.
export function Analytics({ domain }: { domain: string }) {
  if (useConsent() !== 'accepted') return null

  return <Script defer data-domain={domain} src="https://plausible.io/js/script.js" strategy="afterInteractive" />
}
