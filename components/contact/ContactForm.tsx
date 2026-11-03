'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useRef, useState } from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { contactPage, site } from '@/lib/content'
import { contactSchema, isServiceValue, type ContactValues } from '@/lib/contact'

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void
  }
}

const fieldClass =
  'w-full rounded-sm border border-graphite/15 bg-white px-4 py-3 text-graphite placeholder:text-haze focus:outline-none focus:ring-2 focus:ring-focus-500 focus:border-transparent transition aria-[invalid=true]:border-red-700'
const labelClass = 'block text-sm font-medium text-graphite mb-1.5'
const errorClass = 'mt-1.5 text-sm text-red-700'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const successRef = useRef<HTMLDivElement>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { service: '' },
  })

  // Service pages link to /contact?service=<id>; read it after mount so the page stays static.
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('service')
    if (isServiceValue(requested)) setValue('service', requested)
  }, [setValue])

  useEffect(() => {
    if (status === 'success') successRef.current?.focus()
  }, [status])

  async function onSubmit(data: ContactValues) {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Request failed')
      window.plausible?.('Contact Form Submitted', { props: { service: data.service } })
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="flex flex-col items-start py-16 outline-none">
        <CheckCircle className="w-12 h-12 text-iris-500 mb-4" aria-hidden="true" />
        <p className="font-display text-2xl font-semibold text-graphite">{contactPage.formSuccess}</p>
      </div>
    )
  }

  const a11y = (field: keyof ContactValues) => ({
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': errors[field] ? `${field}-error` : undefined,
  })

  const fieldError = (field: keyof ContactValues) =>
    errors[field] ? <p id={`${field}-error`} className={errorClass}>{errors[field]?.message}</p> : null

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Honeypot — hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="_website">Leave this empty</label>
        <input id="_website" type="text" tabIndex={-1} autoComplete="off" {...register('_website')} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name <span className="text-red-700" aria-hidden="true">*</span>
          </label>
          <input id="name" type="text" autoComplete="name" required maxLength={100} className={fieldClass} placeholder="Jane Smith" {...a11y('name')} {...register('name')} />
          {fieldError('name')}
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Company <span className="text-dim font-normal">(optional)</span>
          </label>
          <input id="company" type="text" autoComplete="organization" maxLength={100} className={fieldClass} placeholder="Acme Corp" {...a11y('company')} {...register('company')} />
          {fieldError('company')}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className={labelClass}>
            Work email <span className="text-red-700" aria-hidden="true">*</span>
          </label>
          <input id="email" type="email" autoComplete="email" required maxLength={254} className={fieldClass} placeholder="jane@acme.com" {...a11y('email')} {...register('email')} />
          {fieldError('email')}
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>
            Service interested in <span className="text-red-700" aria-hidden="true">*</span>
          </label>
          <select id="service" required className={fieldClass} {...a11y('service')} {...register('service')}>
            <option value="" disabled>Select a service…</option>
            {contactPage.serviceOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          {fieldError('service')}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about your project <span className="text-red-700" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          required
          maxLength={5000}
          className={`${fieldClass} resize-none`}
          placeholder="What are you working on? What's the challenge?"
          {...a11y('message')}
          {...register('message')}
        />
        {fieldError('message')}
      </div>

      {status === 'error' && (
        <div role="alert" className="flex items-start gap-3 rounded-sm bg-red-50 border border-red-200 p-4">
          <AlertCircle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-red-800">
            {contactPage.formError}{' '}
            <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-2">{site.email}</a>
          </p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-full bg-iris-500 hover:bg-iris-600 text-field font-semibold py-3.5 px-8 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-500 focus-visible:ring-offset-2"
        >
          {status === 'loading' ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Sending…
            </>
          ) : (
            'Send message'
          )}
        </button>
        <p className="text-sm text-dim">{site.responseTime} No spam, ever.</p>
      </div>
    </form>
  )
}
