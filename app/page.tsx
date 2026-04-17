import {
  Building2,
  BarChart3,
  Shield,
  Users,
  Receipt,
  PenTool,
  ClipboardList,
  FileText,
  FileSpreadsheet,
  ArrowRight,
  CheckCircle2,
  Lock,
  Bell,
  Upload,
  Zap,
  Scale,
  Landmark,
  Home,
  TrendingUp,
  Database,
  UserCheck,
} from 'lucide-react'
import Link from 'next/link'
import { FeatureCard } from '@/components/feature-card'

const APP_URL = 'https://property-app-pi-fawn.vercel.app'

const FEATURES = [
  {
    icon: Landmark,
    title: 'SA105 + CT600 Under One Roof',
    description:
      'The only UK landlord tool that covers both Personal (SA105) and Limited Company (CT600) tax returns, including S455 director loans, ATED alerts, and Companies House deadlines.',
  },
  {
    icon: Home,
    title: 'HMO End-to-End Compliance',
    description:
      'Licence tracker across 30+ UK councils, statutory room-size checker (6.51m² / 10.22m²), amenity-ratio calculator, fire risk assessments, and a portfolio-wide compliance matrix.',
  },
  {
    icon: Scale,
    title: 'Section 42 Leasehold Extensions',
    description:
      'Full statutory workflow from notice to counter-notice to tribunal to completion, with an 80-year cliff-edge warning and built-in legal reference. No competitor covers residential leasehold extensions.',
  },
  {
    icon: Shield,
    title: 'Renters\u2019 Rights Act 2025 Ready',
    description:
      'Information Sheet PDF for tenants, dashboard alerts for the 31 May 2026 deadline, MTD income threshold checker. Built in, not bolted on.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Making Tax Digital (MTD)',
    description:
      'Quarterly SA105 submissions direct to HMRC via Government Gateway. Pre-submission integrity checks, fraud prevention headers, Final Declaration workflow, and full audit trail.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Plan Snapshots',
    description:
      'Portfolio-trajectory diffing shows value, equity, income, and yield changes between any two points in time. Spot equity-extraction opportunities before they pass.',
  },
  {
    icon: Database,
    title: 'Reference Data Architecture',
    description:
      'Pick-once-reuse-everywhere library for Limited Companies, Solicitors, Mortgage Brokers, and Standard Fees. Manage CRN, UTR, year-end, directors, SIC code, and ATED status in one place.',
  },
  {
    icon: UserCheck,
    title: 'Tenant Screening',
    description:
      'Order a reference before approving a tenancy via Experian Rental Exchange / TransUnion Rent Bureau, plus Rogue Landlord Database lookup to protect against banned-tenant risk.',
  },
  {
    icon: Receipt,
    title: 'AI Receipt Scanning',
    description:
      'Snap a photo of a receipt and AI extracts vendor, amount, VAT, date, and HMRC SA105 category automatically. Works with photos and PDFs from mobile.',
  },
  {
    icon: PenTool,
    title: 'E-Signatures',
    description:
      'Send tenancy agreements for legally binding digital signing via DocuSeal. Automated lifecycle from send to signed-copy storage. Valid under UK eIDAS.',
  },
  {
    icon: Users,
    title: 'Tenant Portal',
    description:
      'Self-service portal for tenants to view documents, submit maintenance requests, and communicate with you. Included on every tier including Free.',
  },
  {
    icon: Lock,
    title: 'Audit Log, GDPR & Self-Host',
    description:
      'AES-256-GCM encryption, per-account isolated database, full audit logging, GDPR export and erasure, plus a self-hosted option for privacy-sensitive portfolios.',
  },
]

const TRUST_POINTS = [
  { icon: Landmark, text: 'Personal + Company (SA105 + CT600)' },
  { icon: Home, text: '30+ UK councils HMO licensing data' },
  { icon: Scale, text: 'Section 42 statutory workflow' },
  { icon: BarChart3, text: 'HMRC MTD-ready (sandbox)' },
  { icon: Bell, text: 'Renters\u2019 Rights Act 2025 alerts' },
  { icon: Lock, text: 'AES-256-GCM + GDPR + audit log' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground mb-6">
            <Building2 className="h-4 w-4 text-primary" />
            Built for UK landlords with 5&ndash;50 properties
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
            Personal, company and HMO portfolios,{' '}
            <span className="text-primary">one platform</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            The only UK landlord software that covers SA105 and CT600, Section 42 leasehold extensions,
            Renters&rsquo; Rights Act 2025, and end-to-end HMO compliance. Built for landlords running
            personal, joint and SPV portfolios.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors gap-2"
            >
              Get Started Free <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
            >
              View Pricing
            </Link>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Free for up to 3 properties. No credit card required.
          </p>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="border-y border-border bg-background py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-2xl font-bold">SA105 + CT600</p>
              <p className="text-sm text-muted-foreground">Personal & company tax</p>
            </div>
            <div>
              <p className="text-2xl font-bold">30+</p>
              <p className="text-sm text-muted-foreground">UK councils HMO data</p>
            </div>
            <div>
              <p className="text-2xl font-bold">5</p>
              <p className="text-sm text-muted-foreground">Pricing tiers</p>
            </div>
            <div>
              <p className="text-2xl font-bold">UK</p>
              <p className="text-sm text-muted-foreground">Focused & compliant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Everything a professional UK landlord needs</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              From CT600 company returns and HMO compliance to Section 42 leasehold extensions &mdash; features
              no other tool in the UK brings together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Get started in minutes</h2>
            <p className="mt-3 text-lg text-muted-foreground">Three simple steps to take control of your portfolio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                icon: Users,
                title: 'Sign Up Free',
                description: 'Create your account in seconds. No credit card needed, no commitment.',
              },
              {
                step: '2',
                icon: Upload,
                title: 'Import Your Data',
                description:
                  'CSV import for properties, contractors, tasks and contacts. Add Reference Data for your companies, solicitors and brokers.',
              },
              {
                step: '3',
                icon: BarChart3,
                title: 'Manage Everything',
                description:
                  'Track income, expenses, HMO compliance, leaseholds, and SA105 + CT600 tax returns. Generate reports when you need them.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots placeholder */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">See it in action</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              A clean, intuitive interface designed for landlords, not accountants
            </p>
          </div>

          <div className="rounded-xl border border-border bg-muted/30 p-8 md:p-16 text-center">
            <div className="rounded-lg border border-border bg-background shadow-lg p-8 max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="text-xs text-muted-foreground ml-2">PropertyApp Dashboard</span>
              </div>
              <div className="grid grid-cols-4 gap-4 mb-6">
                {['Portfolio Value', 'Total Equity', 'Monthly Income', 'Monthly Profit'].map((label) => (
                  <div key={label} className="rounded-lg border border-border p-4 text-left">
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-lg font-bold mt-1">--</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-lg border border-border p-4 h-24 bg-muted/20" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Why UK landlords choose PropertyApp</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              The combination of Personal + Company tax, residential leasehold extensions, HMO compliance,
              and Reference Data isn&rsquo;t available anywhere else.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRUST_POINTS.map((point) => (
              <div key={point.text} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-medium">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-lg text-muted-foreground mb-8">Start free. Upgrade as your portfolio grows.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mb-8">
            {[
              { name: 'Free', price: '£0', limit: '3 props' },
              { name: 'Starter', price: '£14.99', limit: '10 props' },
              { name: 'Pro', price: '£29.99', limit: '25 props' },
              { name: 'Business', price: '£59.99', limit: '50 props' },
              { name: 'Portfolio', price: '£99.99', limit: 'Unlimited' },
            ].map((tier) => (
              <div key={tier.name} className="rounded-xl border border-border p-4">
                <p className="text-sm text-muted-foreground">{tier.name}</p>
                <p className="text-2xl font-bold mt-1">{tier.price}</p>
                <p className="text-xs text-muted-foreground">/month</p>
                <p className="text-xs text-muted-foreground mt-2">{tier.limit}</p>
              </div>
            ))}
          </div>

          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View full pricing details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground">
            Ready to simplify your portfolio?
          </h2>
          <p className="mt-3 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Start managing your properties in minutes. Import your existing data or start fresh &mdash; it&apos;s free for up to 3 properties.
          </p>
          <a
            href={`${APP_URL}/signup`}
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-background text-foreground px-6 py-3 text-sm font-medium hover:bg-background/90 transition-colors gap-2"
          >
            Create Your Free Account <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  )
}
