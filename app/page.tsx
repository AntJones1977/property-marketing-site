import {
  Building2,
  BarChart3,
  Shield,
  Users,
  Receipt,
  PenTool,
  ClipboardList,
  FileText,
  ArrowRight,
  CheckCircle2,
  Lock,
  Bell,
  Upload,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import { FeatureCard } from '@/components/feature-card'

const APP_URL = 'https://property-app-pi-fawn.vercel.app'

const FEATURES = [
  {
    icon: Building2,
    title: 'Portfolio Management',
    description:
      'Track all your properties, mortgages, tenancies, and rental income in one place. Auto-calculated yields, LTV ratios, and net profit.',
  },
  {
    icon: BarChart3,
    title: 'Tax & Financial Reports',
    description:
      'SA105-ready tax reports, P&L statements, and portfolio summaries. Export to PDF for your accountant.',
  },
  {
    icon: Shield,
    title: 'Compliance Tracking',
    description:
      'Never miss a Gas Safety, EICR, or EPC renewal. Automatic expiry alerts and document storage.',
  },
  {
    icon: Users,
    title: 'Tenant Portal',
    description:
      'Self-service portal for tenants to view documents, submit maintenance requests, and communicate with you.',
  },
  {
    icon: Receipt,
    title: 'AI Receipt Scanning',
    description:
      'Snap a photo of a receipt and AI extracts the details, categorises it for HMRC, and adds it to your expenses.',
  },
  {
    icon: PenTool,
    title: 'E-Signatures',
    description:
      'Send tenancy agreements for digital signing. Track status and store signed copies automatically.',
  },
  {
    icon: ClipboardList,
    title: 'Task Management',
    description:
      'Track maintenance tasks, admin to-dos, and property improvements with status notes and activity logs.',
  },
  {
    icon: FileText,
    title: 'CSV Data Import',
    description:
      'Bulk import properties, contractors, tasks, and contacts from spreadsheets. Smart column auto-detection.',
  },
]

const TRUST_POINTS = [
  { icon: BarChart3, text: 'HMRC SA105 category mapping' },
  { icon: Lock, text: 'AES-256-GCM encryption' },
  { icon: Shield, text: 'GDPR / UK GDPR compliant' },
  { icon: Bell, text: 'Automatic compliance alerts' },
  { icon: Users, text: 'Tenant portal included free' },
  { icon: Zap, text: 'No setup fees, cancel anytime' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground mb-6">
            <Building2 className="h-4 w-4 text-primary" />
            Built for UK landlords
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
            Property portfolio management,{' '}
            <span className="text-primary">simplified</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Track properties, mortgages, tenants, compliance, and tax returns in one place.
            Purpose-built for UK buy-to-let landlords.
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
              <p className="text-2xl font-bold">4</p>
              <p className="text-sm text-muted-foreground">Pricing tiers</p>
            </div>
            <div>
              <p className="text-2xl font-bold">10+</p>
              <p className="text-sm text-muted-foreground">Core features</p>
            </div>
            <div>
              <p className="text-2xl font-bold">99.9%</p>
              <p className="text-sm text-muted-foreground">Uptime SLA</p>
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
            <h2 className="text-3xl font-bold tracking-tight">Everything you need to manage your portfolio</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              From tracking properties and mortgages to generating HMRC-ready tax reports, all in one secure platform.
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
                  'Import properties from CSV, add them manually, or explore with sample data to see how it works.',
              },
              {
                step: '3',
                icon: BarChart3,
                title: 'Manage Everything',
                description:
                  'Track income, expenses, compliance, and tenants. Generate tax reports when you need them.',
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            {[
              { name: 'Free', price: '£0' },
              { name: 'Starter', price: '£14.99' },
              { name: 'Pro', price: '£29.99' },
              { name: 'Business', price: '£49.99' },
            ].map((tier) => (
              <div key={tier.name} className="rounded-xl border border-border p-4">
                <p className="text-sm text-muted-foreground">{tier.name}</p>
                <p className="text-2xl font-bold mt-1">{tier.price}</p>
                <p className="text-xs text-muted-foreground">/month</p>
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
            Start managing your properties in minutes. Import your existing data or start fresh — it&apos;s free for up to 3 properties.
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
