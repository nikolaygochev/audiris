'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const STORAGE_KEY = 'audiris-cookie-consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
    // Plausible fires automatically once the script is loaded.
    // For GA4 you would push to dataLayer here.
  }

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
    >
      <div className="max-w-3xl mx-auto bg-pupil text-field rounded-sm border border-field/10 shadow-[0_16px_40px_-16px_rgba(15,20,51,0.5)] p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="flex-1 text-sm text-haze">
          We use cookies to understand how visitors use our site.{' '}
          <Link href="/privacy-policy" className="text-focus-300 underline underline-offset-2 hover:text-field">
            Privacy policy
          </Link>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm font-medium text-haze hover:text-field transition-colors"
          >
            Decline
          </button>
          <Button size="sm" variant="white" onClick={accept}>Accept</Button>
        </div>
      </div>
    </div>
  )
}
