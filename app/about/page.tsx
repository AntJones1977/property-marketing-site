import { Building2, Shield, Zap, Target, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

const APP_URL = 'https://property-app-pi-fawn.vercel.app'

export const metadata: Metadata = {
  title: 'About — PropertyApp',
  description: 'Learn about MAR Property Investments Ltd and the team behind PropertyApp.',
}

const VALUES = [
  {
    icon: Shield,
    title: 'Security First',
    description:
      'Every customer gets an isolated database. Sensitive data is encrypted with AES-256-GCM. We comply with GDPR and UK GDPR requirements including audit logging, data export, and erasure \u2014 on every tier, including Free.',
  },
  {
    icon: Zap,
    title: 'Simplicity',
    description:
      'We build for busy landlords, not accountants. Every feature is designed to save you time with clean interfaces, smart defaults, and automation where it matters.',
  },
  {
    icon: Target,
    title: 'UK-Focused, End-to-End',
    description:
      'The only UK tool that covers SA105 + CT600 + SA900/SA903 (personal, company and estate/trust returns, with AIA + WDA capital allowances on the company side), Section 42 leasehold extensions, Renters\u2019 Rights Act 2025 Wave 1 + 2 dispatch, Open Banking auto-match, ONS-driven Rent Review Insights, and HMO end-to-end \u2014 with Reference Data for the companies, solicitors and brokers behind the portfolio.',
  },
  {
    icon: Building2,
    title: 'Built by Landlords',
    description:
      'PropertyApp was built by a landlord running personal, joint and SPV properties with HMO exposure. Every feature exists because we needed it ourselves \u2014 from the 80-year leasehold cliff-edge warning to the HMO compliance matrix.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Built by landlords, for landlords
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              PropertyApp is a product of MAR Property Investments Ltd. We built it because we needed
              it ourselves &mdash; a straightforward tool to manage a growing personal, joint and SPV
              portfolio with HMO and leasehold exposure, without the overhead of enterprise software
              or the limitations of spreadsheets.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Our story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Managing a buy-to-let portfolio in the UK means juggling properties, mortgages, tenants,
              compliance certificates, SA105, CT600 and SA900/SA903 returns, HMO licences, leasehold extensions, and
              maintenance &mdash; often across disconnected spreadsheets, email threads, and filing cabinets.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We looked at the existing tools and found them either too expensive, too agent-centric, or
              missing the things that actually matter to a portfolio landlord: CT600 for the SPV,
              SA900/SA903 for the inherited estate, Section 42 for the flat with a shrinking lease,
              HMO licence data by council, and the
              Renters&rsquo; Rights Act 2025 deadline on the dashboard. So we built PropertyApp.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, PropertyApp is the only UK product that brings SA105 + CT600 + SA900/SA903 under
              one roof (personal, company and estate/trust &mdash; with full company capital allowances,
              AIA + WDA), tracks Section 42 leasehold extensions,
              ships Renters&rsquo; Rights Act 2025 Wave 1 + 2 dispatch out of the box, links UK banks
              via Open Banking with a deterministic auto-match engine, and surfaces Rent Review Insights
              from the ONS Private Rental Index. HMO end-to-end &mdash; licence, rooms, FRA, amenity
              ratios, ASB log with Section 8 Ground 14 evidence-pack export, Fit &amp; Proper Person
              register, and the portfolio compliance matrix. Built for UK landlords running personal,
              joint, company and managed portfolios at any scale.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">What we stand for</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="rounded-xl border border-border bg-background p-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company details */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Company details</h2>
            <div className="rounded-xl border border-border p-6 space-y-2">
              <p className="text-sm"><span className="font-medium">Company:</span> <span className="text-muted-foreground">MAR Property Investments Ltd</span></p>
              <p className="text-sm"><span className="font-medium">Registered:</span> <span className="text-muted-foreground">England & Wales</span></p>
              <p className="text-sm"><span className="font-medium">Product:</span> <span className="text-muted-foreground">PropertyApp — Property Portfolio Management Software</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground">
            Try PropertyApp free
          </h2>
          <p className="mt-3 text-lg text-primary-foreground/80">
            See for yourself how simple property management can be.
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
