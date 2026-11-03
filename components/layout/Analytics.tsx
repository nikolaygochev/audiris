'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { STORAGE_KEY, CONSENT_EVENT } from './CookieBanner'

// Loads Plausible only after the visitor accepts the cookie banner, as the privacy policy promises.
export function Analytics({ domain }: { domain: string }) {
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    const check = () => setConsented(localStorage.getItem(STORAGE_KEY) === 'accepted')
    check()
    window.addEventListener(CONSENT_EVENT, check)
    return () => window.removeEventListener(CONSENT_EVENT, check)
  }, [])

  if (!consented) return null

  return <Script defer data-domain={domain} src="https://plausible.io/js/script.js" strategy="afterInteractive" />
}
