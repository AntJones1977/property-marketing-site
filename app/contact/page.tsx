'use client'

import { useState } from 'react'
import { Mail, Send, Building2 } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Simple mailto fallback — replace with Formspree endpoint when ready
    const subject = encodeURIComponent(data.get('subject') as string)
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`,
    )
    window.location.href = `mailto:contact@marpropertyinvestments.co.uk?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get in touch</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Have a question about PropertyApp? Want to schedule a demo? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="rounded-xl border border-border p-8 text-center">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <Send className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">Message sent</h2>
                  <p className="text-sm text-muted-foreground">
                    Your email client should have opened with the message. We&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors gap-2"
                  >
                    <Send className="h-4 w-4" /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              <div className="rounded-xl border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">MAR Property Investments Ltd</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Registered in England & Wales
                </p>
              </div>

              <div className="rounded-xl border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">Email</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  contact@marpropertyinvestments.co.uk
                </p>
              </div>

              <div className="rounded-xl border border-border p-6">
                <h3 className="font-semibold mb-2">Response time</h3>
                <p className="text-sm text-muted-foreground">
                  We aim to respond to all enquiries within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
