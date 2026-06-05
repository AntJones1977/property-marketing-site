import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ArrowRight,
  Shield,
  Landmark,
  Building2,
  Scroll,
  Home,
  RefreshCw,
  Scale,
  Clock,
} from 'lucide-react'

const APP_URL = 'https://property-app-pi-fawn.vercel.app'

export const metadata: Metadata = {
  title: 'Guides for UK Landlords — Renters’ Rights Act, Tax & HMO | PropertyApp',
  description:
    'Practical, plain-English guides for UK landlords: Renters’ Rights Act 2026 compliance, SA105 / CT600 / SA900 tax, HMO licensing, Section 42 leasehold extensions and more.',
  alternates: { canonical: '/guides' },
  openGraph: {
    title: 'Guides for UK Landlords — Renters’ Rights Act, Tax & HMO',
    description:
      'Plain-English guides for UK landlords: Renters’ Rights Act 2026, SA105 / CT600 / SA900 tax, HMO licensing and leasehold.',
    url: 'https://www.marpropertyinvestments.co.uk/guides',
    siteName: 'PropertyApp',
    locale: 'en_GB',
    type: 'website',
  },
}

const FEATURED = {
  href: '/guides/renters-rights-act-2026',
  icon: Shield,
  eyebrow: 'Compliance · Updated June 2026',
  title: 'The Renters’ Rights Act 2026: A Complete Compliance Guide for UK Landlords',
  description:
    'Section 21 abolition, periodic tenancies, the new rent-increase process (Form 4A), the PRS database, the landlord Ombudsman, Decent Homes, Awaab’s Law, pets and penalties — what’s changing and exactly what you need to do.',
  readingTime: '14 min read',
}

const COMING_SOON = [
  { icon: Landmark, title: 'SA105: the landlord’s guide to property income tax', tag: 'Tax' },
  { icon: Building2, title: 'CT600 for property SPVs: company tax for landlords', tag: 'Tax' },
  { icon: Scroll, title: 'SA900 / SA903: tax on inherited & trust property', tag: 'Tax' },
  { icon: RefreshCw, title: 'Form 4A: how to increase rent the legal way', tag: 'Tenancies' },
  { icon: Home, title: 'HMO licensing: a council-by-council guide', tag: 'HMO' },
  { icon: Scale, title: 'Section 42: extending a short residential lease', tag: 'Leasehold' },
]

export default function GuidesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Guides for UK landlords</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Plain-English, practical guides on the things that actually keep UK landlords up at night —
            new legislation, tax returns, HMO licensing and leasehold. No jargon, no fluff.
          </p>
        </div>
      </section>

      {/* Featured guide */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href={FEATURED.href}
            className="group block rounded-2xl border border-border bg-background p-8 md:p-10 hover:shadow-lg hover:border-primary/40 transition-all"
          >
            <div className="flex items-start gap-5">
              <div className="hidden sm:flex h-14 w-14 shrink-0 rounded-xl bg-primary/10 items-center justify-center">
                <FEATURED.icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                  {FEATURED.eyebrow}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
                  {FEATURED.title}
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-3xl">
                  {FEATURED.description}
                </p>
                <div className="mt-5 flex items-center gap-4 text-sm">
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="h-4 w-4" /> {FEATURED.readingTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-medium text-primary">
                    Read the guide <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Checker CTA */}
      <section className="pb-4">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 md:p-8 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <div>
              <p className="text-lg font-semibold">Not sure if you’re compliant?</p>
              <p className="text-sm text-muted-foreground mt-1">
                Take the free 2-minute Renters’ Rights Act readiness check and get a personalised action
                plan emailed to you.
              </p>
            </div>
            <Link
              href="/rra-check"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors gap-2 shrink-0"
            >
              Take the free check <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section className="py-12 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-2">More guides on the way</h2>
          <p className="text-muted-foreground mb-8">
            We’re building out the library. Here’s what’s next — want one sooner?{' '}
            <Link href="/contact" className="text-primary hover:underline">Tell us</Link>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMING_SOON.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-dashed border-border p-6 bg-background/60"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                      <Icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground rounded-full border border-border px-2 py-0.5">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold leading-snug">{item.title}</h3>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Coming soon
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground">
            Stop reading about compliance. Start doing it.
          </h2>
          <p className="mt-3 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            PropertyApp turns these guides into workflows — Renters’ Rights Act dispatch, Form 4A rent
            reviews, HMO compliance and SA105 / CT600 / SA900 tax, all in one place.
          </p>
          <a
            href={`${APP_URL}/signup`}
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-background text-foreground px-6 py-3 text-sm font-medium hover:bg-background/90 transition-colors gap-2"
          >
            Get started free <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  )
}
