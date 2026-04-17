import { PricingCard } from '@/components/pricing-card'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

const APP_URL = 'https://property-app-pi-fawn.vercel.app'

export const metadata: Metadata = {
  title: 'Pricing — PropertyApp',
  description:
    'Transparent pricing for UK landlords. Free for 3 properties, Starter £14.99, Pro £29.99, Business £59.99, Portfolio / Agent £99.99. CT600, HMO compliance, Section 42 and MTD included.',
}

const TIERS = [
  {
    name: 'Free',
    price: '£0',
    period: 'month',
    description: 'Get started with a small portfolio and try the core workflow.',
    propertyLimit: 'Up to 3 properties',
    cta: 'Get Started Free',
    features: [
      { label: 'Portfolio dashboard', included: true },
      { label: 'Mortgage & tenancy tracking', included: true },
      { label: 'Tenant portal', included: true },
      { label: 'Task management', included: true },
      { label: 'Compliance alerts (Gas / EICR / EPC)', included: true },
      { label: 'CSV data import', included: true },
      { label: 'Renters\u2019 Rights Act 2025 Info Sheet', included: true },
      { label: 'AI receipt scanning', included: true, note: '5/mo' },
      { label: 'SA105 tax report (view)', included: true },
      { label: 'Reference Data', included: true, note: '1 of each' },
      { label: 'Audit log + GDPR export', included: true },
      { label: 'E-signatures', included: false },
      { label: 'MTD quarterly submissions', included: false },
      { label: 'Tenant screening / Rogue Landlord lookup', included: false },
      { label: 'CT600 company returns', included: false },
      { label: 'Section 42 leasehold tracker', included: false },
      { label: 'HMO compliance module', included: false },
      { label: 'Growth Plan snapshots', included: false },
      { label: 'Self-hosted deployment', included: false },
    ],
  },
  {
    name: 'Starter',
    price: '£14.99',
    period: 'month',
    description: 'For small self-managing landlords ready to go paperless.',
    propertyLimit: 'Up to 10 properties',
    cta: 'Start Free Trial',
    features: [
      { label: 'Portfolio dashboard', included: true },
      { label: 'Mortgage & tenancy tracking', included: true },
      { label: 'Tenant portal', included: true },
      { label: 'Task management', included: true },
      { label: 'Compliance alerts (Gas / EICR / EPC)', included: true },
      { label: 'CSV data import', included: true },
      { label: 'Renters\u2019 Rights Act 2025 Info Sheet', included: true },
      { label: 'AI receipt scanning', included: true, note: '30/mo' },
      { label: 'SA105 tax report + PDF export', included: true },
      { label: 'Reference Data (full)', included: true },
      { label: 'Audit log + GDPR export', included: true },
      { label: 'E-signatures', included: true, note: '5/mo' },
      { label: 'MTD quarterly submissions', included: true, note: '4/yr' },
      { label: 'Tenant screening + Rogue Landlord lookup', included: true, note: 'Pay per report' },
      { label: 'Multiple users', included: true, note: 'Up to 3' },
      { label: 'CT600 company returns', included: false },
      { label: 'Section 42 leasehold tracker', included: false },
      { label: 'HMO compliance module', included: false },
      { label: 'Growth Plan snapshots', included: false },
      { label: 'Self-hosted deployment', included: false },
    ],
  },
  {
    name: 'Pro',
    price: '£29.99',
    period: 'month',
    description: 'For professional landlords running personal + joint portfolios with SPV exposure.',
    propertyLimit: 'Up to 25 properties',
    cta: 'Start Free Trial',
    popular: true,
    features: [
      { label: 'Everything in Starter', included: true },
      { label: 'AI receipt scanning', included: true, note: '100/mo' },
      { label: 'E-signatures', included: true, note: '20/mo' },
      { label: 'MTD quarterly submissions', included: true, note: 'Unlimited' },
      { label: 'Tenant screening + Rogue Landlord lookup', included: true, note: 'Pay per report' },
      { label: 'CT600 company / SPV returns', included: true },
      { label: 'S455 director loan tracking + ATED alerts', included: true },
      { label: 'Section 42 leasehold extension tracker', included: true },
      { label: 'Growth Plan snapshot changelog', included: true },
      { label: 'Article 4 postcode auto-check', included: true },
      { label: 'Compliance calendar (portfolio-wide)', included: true },
      { label: 'Multiple users', included: true, note: 'Unlimited' },
      { label: 'HMO compliance module', included: true, note: '1 HMO' },
      { label: 'Self-hosted deployment', included: false },
    ],
  },
  {
    name: 'Business',
    price: '£59.99',
    period: 'month',
    description: 'For serious portfolios running HMOs and multi-SPV structures.',
    propertyLimit: 'Up to 50 properties',
    cta: 'Start Free Trial',
    features: [
      { label: 'Everything in Pro', included: true },
      { label: 'AI receipt scanning', included: true, note: 'Unlimited' },
      { label: 'E-signatures', included: true, note: 'Unlimited' },
      { label: 'HMO compliance module', included: true, note: 'Unlimited HMOs' },
      { label: 'Statutory room-size checker', included: true },
      { label: 'HMO yield + utility recharge calculator', included: true },
      { label: 'Fire Risk Assessment + fire alarm log', included: true },
      { label: 'Council licensing data (30+ UK councils)', included: true },
      { label: 'Portfolio compliance matrix', included: true },
      { label: 'Companies House deadline reminders', included: true },
      { label: 'Priority email support', included: true },
      { label: 'Self-hosted deployment', included: false },
    ],
  },
  {
    name: 'Portfolio / Agent',
    price: '£99.99',
    period: 'month',
    description: 'For letting agents, 50+ property portfolios, and DPA-sensitive operators.',
    propertyLimit: 'Unlimited properties',
    cta: 'Start Free Trial',
    features: [
      { label: 'Everything in Business', included: true },
      { label: 'Unlimited properties & HMOs', included: true },
      { label: 'Multi-client / multi-company grouping', included: true },
      { label: 'Self-hosted deployment option', included: true },
      { label: 'Dedicated onboarding', included: true },
      { label: 'SLA-backed support', included: true },
      { label: 'Extended audit log retention', included: true },
      { label: 'Custom data exports', included: true },
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
    q: 'Do you support Making Tax Digital (MTD)?',
    a: 'Yes. MTD for Income Tax quarterly submissions are shipped and tested against the HMRC sandbox. Personal-only (SA105) — company properties report via CT600, not MTD ITSA. Starter tier includes 4 submissions/year (one per quarter); Pro and above include unlimited.',
  },
  {
    q: 'Can I file CT600 returns for my Limited Company / SPV?',
    a: 'Yes. PropertyApp is the only UK landlord tool with native Limited Company tax support. Pro and above include the CT600 preview flow with 12 company-specific expense categories, S455 director-loan tracking, ATED alerts, and Companies House deadline reminders. Company details live in Reference Data → Limited Companies.',
  },
  {
    q: 'What\u2019s in the HMO compliance module?',
    a: 'HMO licence tracker with data seeded from 30+ UK councils, Article 4 postcode auto-check, statutory room-size validation (6.51m² single / 10.22m² double), amenity-ratio calculator, Fire Risk Assessment and fire alarm service logs, common areas and ASB incident logs, HMO yield and utility recharge calculator, and the portfolio-wide /compliance matrix. Pro includes 1 HMO for trial purposes; Business and Portfolio/Agent include unlimited HMOs.',
  },
  {
    q: 'How does Section 42 leasehold extension tracking work?',
    a: 'Pro and above include the full statutory workflow — initial notice, counter-notice, tribunal reference, and completion — with an 80-year cliff-edge warning for the marriage-value threshold and built-in legal reference at each step. Link to your solicitor via Reference Data.',
  },
  {
    q: 'Can I self-host PropertyApp?',
    a: 'Yes, on the Portfolio / Agent tier. You get a self-hosted deployment option, extended audit log retention, and SLA-backed support — designed for DPA-sensitive landlords, accountants and agents.',
  },
  {
    q: 'How does tenant screening work?',
    a: 'Starter and above can order a tenant reference via Experian Rental Exchange / TransUnion Rent Bureau and cross-check against the Rogue Landlord Database. Reports are pay-per-use (pass-through pricing, typically £25–£50 per report) so we don\u2019t mark up what you\u2019d pay direct.',
  },
  {
    q: 'Is my data secure?',
    a: "Every account gets its own isolated database. Sensitive financial data is encrypted with AES-256-GCM. We're fully GDPR/UK GDPR compliant with audit logging and data export/erasure on every tier.",
  },
  {
    q: 'What are receipt scans and e-signatures?',
    a: 'Receipt scanning uses AI to extract expense data from photos of receipts. E-signatures let you send tenancy agreements for digital signing via DocuSeal. Both use third-party APIs, so usage is metered per plan to keep pricing fair.',
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
            HMO, CT600 and Section 42 included where it matters.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
