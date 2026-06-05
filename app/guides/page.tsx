import Link from 'next/link'
import type { Metadata } from 'next'
import type { LucideIcon } from 'lucide-react'
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
  PoundSterling,
  Zap,
  Lock,
  UserCheck,
  MapPin,
  Gift,
} from 'lucide-react'

const APP_URL = 'https://property-app-pi-fawn.vercel.app'

export const metadata: Metadata = {
  title: 'Guides for UK Landlords — Renters’ Rights Act, Tax & HMO | PropertyApp',
  description:
    'Practical, plain-English guides for UK landlords: Renters’ Rights Act 2026 compliance, SA105 / CT600 / SA900 tax, HMO licensing, Form 4A rent increases and Section 42 leasehold extensions.',
  alternates: { canonical: '/guides' },
  openGraph: {
    title: 'Guides for UK Landlords — Renters’ Rights Act, Tax & HMO',
    description:
      'Plain-English guides for UK landlords: Renters’ Rights Act 2026, SA105 / CT600 / SA900 tax, HMO licensing, Form 4A and leasehold.',
    url: 'https://www.marpropertyinvestments.co.uk/guides',
    siteName: 'PropertyApp',
    locale: 'en_GB',
    type: 'website',
  },
}

interface Guide {
  href: string
  icon: LucideIcon
  tag: string
  title: string
  description: string
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

const TAX_GUIDES: Guide[] = [
  {
    href: '/guides/sa105-landlord-tax',
    icon: Landmark,
    tag: 'Tax',
    title: 'SA105: the landlord’s guide to property income tax',
    description:
      'Who needs to file, what counts as income and allowable expenses, the Section 24 mortgage rules, and the deadlines.',
  },
  {
    href: '/guides/ct600-property-spv-tax',
    icon: Building2,
    tag: 'Tax',
    title: 'CT600 for property companies (SPVs)',
    description:
      'Company property tax, full mortgage-interest relief, capital allowances, director’s loans (S455) and ATED.',
  },
  {
    href: '/guides/sa900-estate-trust-tax',
    icon: Scroll,
    tag: 'Tax',
    title: 'SA900 & SA903: tax on inherited & trust property',
    description:
      'Estate and trust rental income, the Section 24 reducer, R185s to beneficiaries, and the deadlines.',
  },
  {
    href: '/guides/capital-gains-tax-rental-property',
    icon: PoundSterling,
    tag: 'Tax',
    title: 'Capital Gains Tax when you sell a rental',
    description:
      'How the gain is calculated, the rates and annual exemption, the 60-day rule, and the reliefs that cut the bill.',
  },
  {
    href: '/guides/inheritance-tax-property-portfolio',
    icon: Gift,
    tag: 'Tax',
    title: 'Inheritance tax & your property portfolio',
    description:
      'How IHT hits a portfolio, the nil-rate bands, the main reliefs, and planning ideas to discuss with an adviser.',
  },
]

const COMPLIANCE_GUIDES: Guide[] = [
  {
    href: '/guides/form-4a-rent-increase',
    icon: RefreshCw,
    tag: 'Tenancies',
    title: 'Form 4A: how to increase rent the legal way',
    description:
      'The Section 13 process, how much and how often you can raise rent, and the mistakes that make it invalid.',
  },
  {
    href: '/guides/hmo-licensing',
    icon: Home,
    tag: 'HMO',
    title: 'HMO licensing: getting it right',
    description:
      'What counts as an HMO, the three licence types, room-size and fire standards, Article 4 and the penalties.',
  },
  {
    href: '/guides/section-42-lease-extension',
    icon: Scale,
    tag: 'Leasehold',
    title: 'Section 42: extending a short residential lease',
    description:
      'The statutory route, the 80-year cliff edge, the notice process, and how leasehold reform changes things.',
  },
  {
    href: '/guides/epc-mees-energy-standards',
    icon: Zap,
    tag: 'Compliance',
    title: 'EPC & MEES: minimum energy standards',
    description:
      'The current EPC E minimum, the proposed move to EPC C, exemptions, penalties and how to improve a rating.',
  },
  {
    href: '/guides/tenancy-deposit-protection',
    icon: Lock,
    tag: 'Tenancies',
    title: 'Tenancy deposits: protection done right',
    description:
      'The 30-day rule, the three schemes, the deposit cap, penalties and end-of-tenancy disputes.',
  },
  {
    href: '/guides/right-to-rent-checks',
    icon: UserCheck,
    tag: 'Compliance',
    title: 'Right to Rent checks',
    description:
      'Who to check, how to do it (including online and IDVT checks), the penalties, and keeping a compliant record.',
  },
  {
    href: '/guides/selective-licensing',
    icon: MapPin,
    tag: 'Licensing',
    title: 'Selective licensing: is your area covered?',
    description:
      'Licensing for ordinary rentals in designated areas — how to check, what’s involved, and the penalties.',
  },
]

const COMING_SOON = [
  { icon: Scale, title: 'Section 8: grounds for possession explained', tag: 'Tenancies' },
  { icon: Shield, title: 'Rent guarantee & landlord insurance', tag: 'Money' },
  { icon: Building2, title: 'Buy-to-let mortgages: a primer', tag: 'Money' },
]

function GuideCard({ guide }: { guide: Guide }) {
  const Icon = guide.icon
  return (
    <Link
      href={guide.href}
      className="group rounded-xl border border-border p-6 bg-background hover:shadow-md hover:border-primary/40 transition-all flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <span className="text-xs font-medium text-muted-foreground rounded-full border border-border px-2 py-0.5">
          {guide.tag}
        </span>
      </div>
      <h3 className="text-base font-semibold leading-snug group-hover:text-primary transition-colors">
        {guide.title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{guide.description}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
        Read the guide <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
      </span>
    </Link>
  )
}

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

      {/* Tax guides */}
      <section className="pb-4">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-2">Landlord tax, explained</h2>
          <p className="text-muted-foreground mb-8">
            The only UK app that covers all three property-tax surfaces — here’s each one in plain English.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TAX_GUIDES.map((g) => (
              <GuideCard key={g.href} guide={g} />
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & tenancies guides */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-2">Compliance & tenancies</h2>
          <p className="text-muted-foreground mb-8">
            Rent increases, HMO licensing and leasehold extensions — the statutory stuff, demystified.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPLIANCE_GUIDES.map((g) => (
              <GuideCard key={g.href} guide={g} />
            ))}
          </div>
        </div>
      </section>

      {/* Checker CTA */}
      <section className="py-12">
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
            We’re always adding to the library. Here’s what’s next — want one sooner?{' '}
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
