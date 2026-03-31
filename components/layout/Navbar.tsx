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
        scrolled ? 'bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-sm' : 'bg-transparent'
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
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname.startsWith('/services')
                  ? 'text-brand-600'
                  : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
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
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-10">
                {serviceList.map(s => (
                  <Link
                    key={s.id}
                    href={s.slug}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:text-brand-600 hover:bg-brand-50 transition-colors"
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
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors relative ${
                isActive(link.href)
                  ? 'text-brand-600 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-brand-500 after:rounded-full'
                  : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
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
          className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
          onClick={() => setMobileOpen(o => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white flex flex-col pt-16">
          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-2">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Services</p>
            {serviceList.map(s => (
              <Link
                key={s.id}
                href={s.slug}
                className="block px-3 py-3 text-slate-800 font-medium rounded-lg hover:bg-brand-50 hover:text-brand-600 transition-colors"
              >
                {s.name}
              </Link>
            ))}

            <hr className="my-4 border-slate-200" />

            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-3 text-slate-800 font-medium rounded-lg hover:bg-brand-50 hover:text-brand-600 transition-colors"
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
