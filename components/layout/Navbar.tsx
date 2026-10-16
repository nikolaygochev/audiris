'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { serviceList } from '@/lib/services'

const navLinks = [
  { label: 'About',        href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact',      href: '/contact' },
]

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-paper/95 backdrop-blur-sm border-b border-rule' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Main navigation">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Audiris" className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">

          {/* Services dropdown */}
          <div className="relative">
            <button
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded transition-colors ${
                pathname.startsWith('/services')
                  ? 'text-blueprint-500'
                  : 'text-ink hover:text-blueprint-500'
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
              <div className="absolute top-full left-0 mt-1 w-56 bg-paper rounded border border-rule py-2 z-10">
                {serviceList.map(s => (
                  <Link
                    key={s.id}
                    href={s.slug}
                    className="block px-4 py-2.5 text-sm text-ink hover:text-blueprint-500 transition-colors"
                  >
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
              className={`px-3 py-2 text-sm font-medium rounded transition-colors relative ${
                isActive(link.href)
                  ? 'text-blueprint-500 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px after:bg-blueprint-500'
                  : 'text-ink hover:text-blueprint-500'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="ml-4">
            <Button href="/contact" size="sm">Get in touch</Button>
          </div>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded text-ink hover:bg-rule/60 transition-colors"
          onClick={() => setMobileOpen(o => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-paper flex flex-col pt-16">
          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-2">
            <p className="text-sm font-medium text-muted mb-2">Services</p>
            {serviceList.map(s => (
              <Link
                key={s.id}
                href={s.slug}
                className="block px-3 py-3 text-ink font-medium rounded hover:text-blueprint-500 transition-colors"
              >
                {s.name}
              </Link>
            ))}

            <hr className="my-4 border-rule" />

            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-3 text-ink font-medium rounded hover:text-blueprint-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-6">
              <Button href="/contact" size="lg" className="w-full justify-center">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
