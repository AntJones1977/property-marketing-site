import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Defaults are baked in so the form works as soon as RESEND_API_KEY is set.
// Both are overridable via env without a code change.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'Marpropertyinvestmentsltd@mail.com'
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? 'PropertyApp <contact@marpropertyinvestments.co.uk>'

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>
  try {
    payload = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 })
  }

  const name = String(payload.name ?? '').trim()
  const email = String(payload.email ?? '').trim()
  const subject = String(payload.subject ?? '').trim()
  const message = String(payload.message ?? '').trim()
  const honeypot = String(payload.company ?? '').trim()

  // Honeypot: bots fill the hidden "company" field; humans never see it.
  // Pretend success so the bot has no signal to retry.
  if (honeypot) {
    return NextResponse.json({ ok: true })
  }

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { ok: false, error: 'Please fill in every field.' },
      { status: 400 },
    )
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: 'Please enter a valid email address.' },
      { status: 400 },
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('Contact form: RESEND_API_KEY is not set.')
    return NextResponse.json(
      { ok: false, error: 'Email is not configured yet — please email us directly for now.' },
      { status: 500 },
    )
  }

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `[Website enquiry] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
<hr />
<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
  })

  if (error) {
    console.error('Contact form: Resend send failed.', error)
    return NextResponse.json(
      { ok: false, error: 'Could not send your message right now. Please try again shortly.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
