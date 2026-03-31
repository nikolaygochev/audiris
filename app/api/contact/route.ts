import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name:     z.string().min(2),
  company:  z.string().optional(),
  email:    z.string().email(),
  service:  z.string().min(1),
  message:  z.string().min(10),
  _website: z.string().max(0).optional(), // honeypot
})

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', issues: parsed.error.issues }, { status: 400 })
  }

  const { name, company, email, service, message, _website } = parsed.data

  // Honeypot check — bots fill this field, humans don't
  if (_website && _website.length > 0) {
    // Return 200 to not signal detection
    return NextResponse.json({ ok: true })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_EMAIL ?? 'hello@audiris.com'

  if (!apiKey) {
    console.error('RESEND_API_KEY not configured')
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  const resend = new Resend(apiKey)

  try {
    await resend.emails.send({
      from: 'Audiris Website <noreply@audiris.com>',
      to:   toEmail,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ''}`,
      text: [
        `Name: ${name}`,
        company ? `Company: ${company}` : '',
        `Email: ${email}`,
        `Service: ${service}`,
        '',
        `Message:`,
        message,
      ].filter(Boolean).join('\n'),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
