// zod/mini: same validation as full zod, ~11 kB smaller on the /contact page.
import * as z from 'zod/mini'
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
  name:     z.string().check(z.trim(), z.minLength(2, 'Please enter your full name'), z.maxLength(100, tooLong(100))),
  company:  z.optional(z.string().check(z.trim(), z.maxLength(100, tooLong(100)))),
  email:    z.email('Please enter a valid email address').check(z.maxLength(254, tooLong(254))),
  service:  z.string().check(z.refine(isServiceValue, 'Please select a service')),
  message:  z.string().check(
    z.trim(),
    z.minLength(10, 'Please tell us a bit more (at least 10 characters)'),
    z.maxLength(5000, tooLong(5000)),
  ),
  // Honeypot: any value is accepted here; the API discards filled submissions silently.
  _website: z.optional(z.string()),
})

export type ContactValues = z.infer<typeof contactSchema>
