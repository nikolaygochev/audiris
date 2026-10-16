'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { RingMarker } from '@/components/ui/Iris'
import { serviceList } from '@/lib/services'

const navLinks = [
  { label: 'About',        href: '/about' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'Contact',      href: '/contact' },
]

const activeDot =
  'after:absolute after:-bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:h-1.5 after:w-1.5 after:rounded-full after:bg-iris-500'

export function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile nav on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled ? 'bg-field/90 backdrop-blur-md border-b border-graphite/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Main navigation">

        <Link href="/" className="flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Audiris" className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">

          <div className="relative">
            <button
              className={`relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                pathname.startsWith('/services')
                  ? `text-iris-500 ${activeDot}`
                  : 'text-graphite hover:text-iris-500'
              }`}
              onClick={() => setServicesOpen(o => !o)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-sm border border-graphite/10 shadow-[0_12px_32px_-12px_rgba(15,20,51,0.25)] py-2 z-10">
                {serviceList.map((s, i) => (
                  <Link
                    key={s.id}
                    href={s.slug}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-graphite hover:text-iris-500 hover:bg-iris-50 transition-colors"
                  >
                    <RingMarker index={i} className="h-5 w-5" />
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                isActive(link.href) ? `text-iris-500 ${activeDot}` : 'text-graphite hover:text-iris-500'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="ml-4">
            <Button href="/contact" size="sm">Talk to us</Button>
          </div>
        </div>

        <button
          className="md:hidden p-2 rounded-full text-graphite hover:bg-graphite/5 transition-colors"
          onClick={() => setMobileOpen(o => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-field flex flex-col pt-16">
          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1">
            <p className="text-sm text-dim mb-2">Services</p>
            {serviceList.map((s, i) => (
              <Link
                key={s.id}
                href={s.slug}
                className="flex items-center gap-3 px-1 py-3 text-lg font-display font-medium text-graphite hover:text-iris-500 transition-colors"
              >
                <RingMarker index={i} />
                {s.name}
              </Link>
            ))}

            <hr className="my-4 border-graphite/10" />

            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-1 py-3 text-lg font-display font-medium text-graphite hover:text-iris-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-6">
              <Button href="/contact" size="lg" className="w-full">
                Talk to us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
