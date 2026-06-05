import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { QUESTIONS } from '@/lib/rra-questions'

// Mirrors the contact route's config so behaviour is consistent.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'Marpropertyinvestmentsltd@mail.com'
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? 'PropertyApp <contact@marpropertyinvestments.co.uk>'
const APP_URL = 'https://property-app-pi-fawn.vercel.app'
const GUIDE_URL = 'https://www.marpropertyinvestments.co.uk/guides/renters-rights-act-2026'

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

  const email = String(payload.email ?? '').trim()
  const honeypot = String(payload.company ?? '').trim()
  const answers = (payload.answers ?? {}) as Record<string, string>

  // Honeypot: bots fill the hidden field; pretend success so they get no signal.
  if (honeypot) {
    return NextResponse.json({ ok: true })
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: 'Please enter a valid email address.' },
      { status: 400 },
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RRA checker: RESEND_API_KEY is not set.')
    return NextResponse.json(
      { ok: false, error: 'Email is not configured yet — please try again later.' },
      { status: 500 },
    )
  }

  // Compute score + gaps server-side from the shared definitions (authoritative).
  const total = QUESTIONS.length
  const score = QUESTIONS.filter((q) => answers[q.id] === 'yes').length
  const gaps = QUESTIONS.filter((q) => answers[q.id] !== 'yes')

  const gapsText = gaps.length
    ? gaps.map((g) => `• ${g.question}\n  → ${g.action}`).join('\n\n')
    : 'No gaps — you’re in great shape. Keep your audit trail current.'

  const gapsHtml = gaps.length
    ? `<ul style="padding-left:18px">${gaps
        .map(
          (g) =>
            `<li style="margin-bottom:12px"><strong>${escapeHtml(g.question)}</strong><br/><span style="color:#555">${escapeHtml(g.action)}</span></li>`,
        )
        .join('')}</ul>`
    : '<p>No gaps — you’re in great shape. Keep your audit trail current.</p>'

  const resend = new Resend(apiKey)

  // 1. The lead's personalised action plan — this is the promised value, so it must send.
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    replyTo: TO_EMAIL,
    subject: `Your Renters’ Rights Act 2026 readiness: ${score}/${total}`,
    text: `Thanks for taking the Renters' Rights Act readiness check.

Your score: ${score}/${total}

Where to focus:

${gapsText}

PropertyApp turns every one of these into a workflow with a built-in audit trail — Information Sheet dispatch, Statement of Tenancy Terms, Form 4A rent reviews and an ASB evidence pack.

Get started free: ${APP_URL}/signup
Read the full guide: ${GUIDE_URL}

— The PropertyApp team`,
    html: `<div style="font-family:system-ui,Segoe UI,Arial,sans-serif;max-width:560px">
<p>Thanks for taking the Renters&rsquo; Rights Act readiness check.</p>
<p style="font-size:20px"><strong>Your score: ${score}/${total}</strong></p>
<h3 style="margin-bottom:6px">Where to focus</h3>
${gapsHtml}
<p>PropertyApp turns every one of these into a workflow with a built-in audit trail — Information Sheet dispatch, Statement of Tenancy Terms, Form 4A rent reviews and an ASB evidence pack.</p>
<p>
  <a href="${APP_URL}/signup" style="display:inline-block;background:#111;color:#fff;padding:10px 16px;border-radius:8px;text-decoration:none">Get started free</a>
  &nbsp; <a href="${GUIDE_URL}">Read the full guide</a>
</p>
<p style="color:#777;font-size:13px">General guidance, not legal advice.</p>
</div>`,
  })

  if (error) {
    console.error('RRA checker: lead email failed.', error)
    return NextResponse.json(
      { ok: false, error: 'Could not send your plan right now. Please try again shortly.' },
      { status: 502 },
    )
  }

  // 2. Lead notification to the business inbox — best-effort.
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New RRA-checker lead: ${email} (${score}/${total})`,
      text: `New lead from the RRA readiness checker.

Email: ${email}
Score: ${score}/${total}

Gaps:
${gapsText}`,
      html: `<div style="font-family:system-ui,Segoe UI,Arial,sans-serif">
<p><strong>New lead from the RRA readiness checker.</strong></p>
<p><strong>Email:</strong> ${escapeHtml(email)}<br/><strong>Score:</strong> ${score}/${total}</p>
<h4>Gaps</h4>
${gapsHtml}
</div>`,
    })
  } catch (err) {
    console.error('RRA checker: lead notification failed.', err)
  }

  return NextResponse.json({ ok: true })
}
