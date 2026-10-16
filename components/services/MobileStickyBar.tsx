'use client'

import { useState, useEffect, useCallback } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function MobileStickyBar() {
  const [visible,    setVisible]    = useState(false)
  const [dismissed,  setDismissed]  = useState(false)

  const checkScroll = useCallback(() => {
    if (dismissed) return
    const scrolled  = window.scrollY
    const total     = document.documentElement.scrollHeight - window.innerHeight
    if (total > 0 && scrolled / total > 0.5) {
      setVisible(true)
    }
  }, [dismissed])

  useEffect(() => {
    window.addEventListener('scroll', checkScroll, { passive: true })
    return () => window.removeEventListener('scroll', checkScroll)
  }, [checkScroll])

  if (!visible || dismissed) return null

  return (
    // Only shown on mobile — hidden on md+ via Tailwind
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-field/95 backdrop-blur-md border-t border-graphite/10 flex items-center gap-3">
      <Button href="/contact" size="md" className="flex-1">
        Talk to us
      </Button>
      <button
        onClick={() => { setDismissed(true); setVisible(false) }}
        className="p-2 rounded-full text-dim hover:text-graphite hover:bg-graphite/5 transition-colors"
        aria-label="Dismiss"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  )
}
