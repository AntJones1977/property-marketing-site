import { PricingCard } from '@/components/pricing-card'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

const APP_URL = 'https://property-app-pi-fawn.vercel.app'

export const metadata: Metadata = {
  title: 'Pricing — PropertyApp',
  description: 'Simple, transparent pricing for UK landlords. Start free with 3 properties, upgrade as your portfolio grows.',
}

const TIERS = [
  {
    name: 'Free',
    price: '£0',
    period: 'month',
    description: 'Perfect for getting started with a small portfolio.',
    propertyLimit: 'Up to 3 properties',
    cta: 'Get Started Free',
    features: [
      { label: 'Portfolio dashboard', included: true },
      { label: 'Mortgage tracking', included: true },
      { label: 'Tenant portal', included: true },
      { label: 'Task management', included: true },
      { label: 'Compliance alerts', included: true },
      { label: 'CSV data import', included: true },
      { label: 'Receipt scanning', included: true, note: '5/mo' },
      { label: 'E-signatures', included: false },
      { label: 'MTD quarterly submissions', included: false },
      { label: 'PDF report export', included: false },
      { label: 'Multiple users', included: false },
    ],
  },
  {
    name: 'Starter',
    price: '£14.99',
    period: 'month',
    description: 'For growing landlords who need more capacity.',
    propertyLimit: 'Up to 10 properties',
    cta: 'Start Free Trial',
    features: [
      { label: 'Portfolio dashboard', included: true },
      { label: 'Mortgage tracking', included: true },
      { label: 'Tenant portal', included: true },
      { label: 'Task management', included: true },
      { label: 'Compliance alerts', included: true },
      { label: 'CSV data import', included: true },
      { label: 'Receipt scanning', included: true, note: '30/mo' },
      { label: 'E-signatures', included: true, note: '5/mo' },
      { label: 'MTD quarterly submissions', included: true, note: '4/yr' },
      { label: 'PDF report export', included: true },
      { label: 'Multiple users', included: true, note: 'Up to 3' },
    ],
  },
  {
    name: 'Pro',
    price: '£29.99',
    period: 'month',
    description: 'For professional landlords managing larger portfolios.',
    propertyLimit: 'Up to 25 properties',
    cta: 'Start Free Trial',
    popular: true,
    features: [
      { label: 'Portfolio dashboard', included: true },
      { label: 'Mortgage tracking', included: true },
      { label: 'Tenant portal', included: true },
      { label: 'Task management', included: true },
      { label: 'Compliance alerts', included: true },
      { label: 'CSV data import', included: true },
      { label: 'Receipt scanning', included: true, note: '100/mo' },
      { label: 'E-signatures', included: true, note: '20/mo' },
      { label: 'MTD quarterly submissions', included: true, note: 'Unlimited' },
      { label: 'PDF report export', included: true },
      { label: 'Multiple users', included: true, note: 'Unlimited' },
    ],
  },
  {
    name: 'Business',
    price: '£49.99',
    period: 'month',
    description: 'For portfolio landlords and property companies.',
    propertyLimit: 'Unlimited properties',
    cta: 'Start Free Trial',
    features: [
      { label: 'Portfolio dashboard', included: true },
      { label: 'Mortgage tracking', included: true },
      { label: 'Tenant portal', included: true },
      { label: 'Task management', included: true },
      { label: 'Compliance alerts', included: true },
      { label: 'CSV data import', included: true },
      { label: 'Receipt scanning', included: true, note: 'Unlimited' },
      { label: 'E-signatures', included: true, note: 'Unlimited' },
      { label: 'MTD quarterly submissions', included: true, note: 'Unlimited' },
      { label: 'PDF report export', included: true },
      { label: 'Multiple users', included: true, note: 'Unlimited' },
    ],
  },
]

const FAQ = [
  {
    q: 'Can I upgrade or downgrade at any time?',
    a: 'Yes. You can change your plan at any time from Settings. Upgrades take effect immediately, and downgrades apply at the end of your current billing period.',
  },
  {
    q: 'What happens if I exceed my property limit?',
    a: "Your existing properties remain unaffected. You simply won't be able to add new ones until you upgrade or remove a property.",
  },
  {
    q: 'Is my data secure?',
    a: "Yes. Every account gets its own isolated database. Sensitive financial data is encrypted with AES-256-GCM. We're fully GDPR/UK GDPR compliant with audit logging and data export/erasure support.",
  },
  {
    q: 'Do you support Making Tax Digital (MTD)?',
    a: 'MTD integration is on our roadmap. Currently the app maps all expenses to HMRC SA105 categories and generates tax-ready PDF reports.',
  },
  {
    q: 'What are receipt scans and e-signatures?',
    a: 'Receipt scanning uses AI to extract expense data from photos of receipts. E-signatures let you send tenancy agreements for digital signing. Both features use third-party APIs, so usage is metered per plan to keep pricing fair.',
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Simple, transparent pricing</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free with up to 3 properties. Upgrade as your portfolio grows. No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIERS.map((tier) => (
              <PricingCard key={tier.name} {...tier} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-8">Frequently asked questions</h2>
          <div className="space-y-6">
            {FAQ.map((item) => (
              <div key={item.q} className="rounded-xl border border-border bg-background p-6">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground">
            Start for free today
          </h2>
          <p className="mt-3 text-lg text-primary-foreground/80">
            No credit card required. Upgrade whenever you&apos;re ready.
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
