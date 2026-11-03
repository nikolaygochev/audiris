import { z } from 'zod'
import { contactPage } from './content'

const serviceValues = contactPage.serviceOptions.map(o => o.value)

export function serviceLabel(value: string) {
  return contactPage.serviceOptions.find(o => o.value === value)?.label ?? value
}

export function isServiceValue(value: string | null): value is string {
  return value !== null && serviceValues.includes(value)
}

const tooLong = (max: number) => `Please keep this under ${max} characters`

// Shared by the form (client) and /api/contact (server) so the rules can't drift.
export const contactSchema = z.object({
  name:     z.string().trim().min(2, 'Please enter your full name').max(100, tooLong(100)),
  company:  z.string().trim().max(100, tooLong(100)).optional(),
  email:    z.string().trim().max(254, tooLong(254)).email('Please enter a valid email address'),
  service:  z.string().refine(isServiceValue, 'Please select a service'),
  message:  z.string().trim().min(10, 'Please tell us a bit more (at least 10 characters)').max(5000, tooLong(5000)),
  // Honeypot: any value is accepted here; the API discards filled submissions silently.
  _website: z.string().optional(),
})

export type ContactValues = z.infer<typeof contactSchema>
