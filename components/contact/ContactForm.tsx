'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { contactPage } from '@/lib/content'

const schema = z.object({
  name:     z.string().min(2, 'Please enter your full name'),
  company:  z.string().optional(),
  email:    z.string().email('Please enter a valid email address'),
  service:  z.string().min(1, 'Please select a service'),
  message:  z.string().min(10, 'Please tell us a bit more (at least 10 characters)'),
  // Honeypot — must remain empty
  _website: z.string().max(0).optional(),
})

type FormValues = z.infer<typeof schema>

const fieldClass =
  'w-full rounded-sm border border-graphite/15 bg-white px-4 py-3 text-graphite placeholder:text-haze focus:outline-none focus:ring-2 focus:ring-focus-500 focus:border-transparent transition'
const labelClass = 'block text-sm font-medium text-graphite mb-1.5'
const errorClass = 'mt-1.5 text-sm text-red-700'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  async function onSubmit(data: FormValues) {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start py-16">
        <CheckCircle className="w-12 h-12 text-iris-500 mb-4" />
        <p className="font-display text-2xl font-semibold text-graphite">{contactPage.formSuccess}</p>
      </div>
    )
  }

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
            Full name <span className="text-red-700">*</span>
          </label>
          <input id="name" type="text" autoComplete="name" className={fieldClass} placeholder="Jane Smith" {...register('name')} />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Company <span className="text-dim font-normal">(optional)</span>
          </label>
          <input id="company" type="text" autoComplete="organization" className={fieldClass} placeholder="Acme Corp" {...register('company')} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className={labelClass}>
            Work email <span className="text-red-700">*</span>
          </label>
          <input id="email" type="email" autoComplete="email" className={fieldClass} placeholder="jane@acme.com" {...register('email')} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>
            Service interested in <span className="text-red-700">*</span>
          </label>
          <select id="service" className={fieldClass} defaultValue="" {...register('service')}>
            <option value="" disabled>Select a service…</option>
            {contactPage.serviceOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          {errors.service && <p className={errorClass}>{errors.service.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about your project <span className="text-red-700">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className={`${fieldClass} resize-none`}
          placeholder="What are you working on? What's the challenge?"
          {...register('message')}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-3 rounded-sm bg-red-50 border border-red-200 p-4">
          <AlertCircle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">{contactPage.formError}</p>
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
        <p className="text-sm text-dim">We respond within 1 business day. No spam, ever.</p>
      </div>
    </form>
  )
}
