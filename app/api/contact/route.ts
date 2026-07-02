import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { CONTACT_TO_EMAIL as TO_EMAIL, CONTACT_FROM_EMAIL as FROM_EMAIL } from '@/lib/site'
import { checkRateLimit } from '@/lib/rate-limit'
import {
  EMAIL_RE,
  MAX_EMAIL,
  MAX_MESSAGE,
  MAX_NAME,
  MAX_SUBJECT,
  escapeHtml,
  field,
} from '@/lib/email'

export async function POST(request: Request) {
  if (!checkRateLimit(request, 'contact')) {
    return NextResponse.json(
      { ok: false, error: 'Too many messages — please try again in a few minutes.' },
      { status: 429 },
    )
  }

  let payload: Record<string, unknown>
  try {
    payload = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 })
  }

  const name = field(payload, 'name', MAX_NAME)
  const email = field(payload, 'email', MAX_EMAIL)
  const subject = field(payload, 'subject', MAX_SUBJECT)
  const message = field(payload, 'message', MAX_MESSAGE)
  const honeypot = field(payload, 'company', MAX_NAME)

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

  if (!EMAIL_RE.test(email)) {
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

  // 1. Notify the business inbox. This one must succeed.
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

  // 2. Auto-acknowledge the enquirer. Best-effort — never fail the request
  // just because the confirmation copy didn't go out.
  // Deliberately does NOT echo the message body: an acknowledgement that
  // repeats caller-supplied prose would let this endpoint be abused to send
  // arbitrary content to arbitrary addresses from our verified domain.
  try {
    const { error: ackError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      replyTo: TO_EMAIL,
      subject: 'Thanks — we’ve received your message',
      text: `Hi ${name},

Thanks for getting in touch with PropertyApp. We’ve received your message and a member of our team will get back to you within one business day.

If you didn’t contact us, you can safely ignore this email.

Best regards,
The PropertyApp team
MAR Property & Investments Ltd`,
      html: `<p>Hi ${escapeHtml(name)},</p>
<p>Thanks for getting in touch with PropertyApp. We&rsquo;ve received your message and a member of our team will get back to you within one business day.</p>
<p>If you didn&rsquo;t contact us, you can safely ignore this email.</p>
<hr />
<p>Best regards,<br />The PropertyApp team<br />MAR Property & Investments Ltd</p>`,
    })
    if (ackError) {
      console.error('Contact form: acknowledgement email failed.', ackError)
    }
  } catch (err) {
    console.error('Contact form: acknowledgement email threw.', err)
  }

  return NextResponse.json({ ok: true })
}
