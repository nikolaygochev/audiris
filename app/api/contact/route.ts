import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactSchema, serviceLabel } from '@/lib/contact'

const oneLine = (value: string) => value.replace(/[\r\n]+/g, ' ')

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', issues: parsed.error.issues }, { status: 400 })
  }

  const { name, company, email, service, message, _website } = parsed.data

  // Honeypot check — bots fill this field, humans don't
  if (_website && _website.length > 0) {
    // Return 200 to not signal detection
    return NextResponse.json({ ok: true })
  }

  const apiKey    = process.env.RESEND_API_KEY
  const toEmail   = process.env.CONTACT_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? 'Audiris Website <noreply@audiris.io>'

  if (!apiKey || !toEmail) {
    console.error('Contact form not configured: RESEND_API_KEY and CONTACT_EMAIL are required')
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  const resend = new Resend(apiKey)
  const safeName    = oneLine(name)
  const safeCompany = company ? oneLine(company) : ''

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to:   toEmail,
      replyTo: email,
      subject: `New enquiry from ${safeName}${safeCompany ? ` (${safeCompany})` : ''}`,
      text: [
        `Name: ${safeName}`,
        safeCompany ? `Company: ${safeCompany}` : '',
        `Email: ${email}`,
        `Service: ${serviceLabel(service)}`,
        '',
        `Message:`,
        message,
      ].filter(Boolean).join('\n'),
    })
    if (error) throw error

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
