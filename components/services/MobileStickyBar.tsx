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
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-white border-t border-slate-200 shadow-xl flex items-center gap-3">
      <Button href="/contact" size="md" className="flex-1 justify-center">
        Get in touch
      </Button>
      <button
        onClick={() => { setDismissed(true); setVisible(false) }}
        className="p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        aria-label="Dismiss"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  )
}
