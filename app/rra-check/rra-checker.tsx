'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, AlertTriangle, Mail, Send, CheckCircle2 } from 'lucide-react'
import { QUESTIONS, type RraAnswer } from '@/lib/rra-questions'

const APP_URL = 'https://property-app-pi-fawn.vercel.app'

type Phase = 'quiz' | 'result' | 'done'

export function RraChecker() {
  const [phase, setPhase] = useState<Phase>('quiz')
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, RraAnswer>>({})
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const total = QUESTIONS.length
  const score = QUESTIONS.filter((q) => answers[q.id] === 'yes').length
  const gaps = QUESTIONS.filter((q) => answers[q.id] && answers[q.id] !== 'yes')

  function answer(value: RraAnswer) {
    const q = QUESTIONS[step]
    setAnswers({ ...answers, [q.id]: value })
    if (step + 1 < total) setStep(step + 1)
    else setPhase('result')
  }

  function back() {
    if (phase === 'result') {
      setPhase('quiz')
      setStep(total - 1)
      return
    }
    if (step > 0) setStep(step - 1)
  }

  async function submitEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setSending(true)
    setError('')
    try {
      const res = await fetch('/api/rra-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.get('email'),
          answers,
          company: data.get('company'), // honeypot
        }),
      })
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string }
      if (!res.ok || !json.ok) {
        setError(json.error ?? 'Something went wrong. Please try again.')
        setSending(false)
        return
      }
      setPhase('done')
    } catch {
      setError('Network error — please try again.')
      setSending(false)
    }
  }

  // --- Quiz ---
  if (phase === 'quiz') {
    const q = QUESTIONS[step]
    return (
      <div>
        <div className="mb-6">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            <span>Question {step + 1} of {total}</span>
            <span>{Math.round((step / total) * 100)}%</span>
          </div>
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <div className="h-full bg-primary transition-all" style={{ width: `${(step / total) * 100}%` }} />
          </div>
        </div>

        <div className="rounded-xl border border-border bg-background p-6 md:p-8">
          <h2 className="text-xl font-semibold leading-snug">{q.question}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{q.helper}</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => answer('yes')}
              className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 hover:bg-emerald-100 transition-colors"
            >
              Yes
            </button>
            <button
              onClick={() => answer('no')}
              className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 hover:bg-red-100 transition-colors"
            >
              No
            </button>
            <button
              onClick={() => answer('unsure')}
              className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium hover:bg-accent transition-colors"
            >
              Not sure
            </button>
          </div>
        </div>

        {step > 0 && (
          <button
            onClick={back}
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
        )}
      </div>
    )
  }

  // --- Done ---
  if (phase === 'done') {
    return (
      <div className="rounded-xl border border-border bg-background p-8 text-center">
        <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
          <Send className="h-6 w-6 text-emerald-600" />
        </div>
        <h2 className="text-xl font-semibold">Check your inbox</h2>
        <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
          Your personalised Renters&rsquo; Rights Act action plan is on its way. (Peek in spam the first
          time, just in case.)
        </p>
        <a
          href={`${APP_URL}/signup`}
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors gap-2"
        >
          Start handling it free <ArrowRight className="h-4 w-4" />
        </a>
        <div className="mt-3">
          <Link href="/guides/renters-rights-act-2026" className="text-sm text-primary hover:underline">
            Read the full RRA guide
          </Link>
        </div>
      </div>
    )
  }

  // --- Result ---
  const ratio = total ? score / total : 0
  const band =
    ratio >= 0.8
      ? { label: 'On track', box: 'border-emerald-200 bg-emerald-50', text: 'text-emerald-700' }
      : ratio >= 0.5
        ? { label: 'Some gaps to close', box: 'border-amber-200 bg-amber-50', text: 'text-amber-700' }
        : { label: 'Action needed', box: 'border-red-200 bg-red-50', text: 'text-red-700' }

  return (
    <div>
      <div className={`rounded-xl border p-6 text-center ${band.box}`}>
        <p className="text-sm font-medium text-muted-foreground">Your RRA 2026 readiness</p>
        <p className="text-4xl font-bold mt-1">{score}/{total}</p>
        <p className={`mt-2 font-semibold ${band.text}`}>{band.label}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-3">
          {gaps.length ? 'Where to focus' : 'You’re in great shape'}
        </h2>
        {gaps.length ? (
          <ul className="space-y-3">
            {gaps.map((g) => (
              <li key={g.id} className="rounded-lg border border-border bg-background p-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{g.question}</p>
                    <p className="text-sm text-muted-foreground mt-1">{g.action}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-lg border border-border bg-background p-4 flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground">
              Every box ticked — keep your audit trail current and you&rsquo;re set.
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-6">
        <h3 className="font-semibold flex items-center gap-2">
          <Mail className="h-5 w-5 text-primary" /> Get your personalised action plan
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          We&rsquo;ll email your results and the exact steps to close each gap.
        </p>

        {error && (
          <div
            role="alert"
            className="mt-3 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
          >
            <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={submitEmail} className="mt-4 flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            name="email"
            required
            disabled={sending}
            placeholder="you@example.com"
            className="flex-1 rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
          />
          <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden="true">
            <label htmlFor="company">Company (leave blank)</label>
            <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <Send className="h-4 w-4" /> {sending ? 'Sending…' : 'Email my plan'}
          </button>
        </form>
      </div>

      <button
        onClick={back}
        className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </button>
    </div>
  )
}
