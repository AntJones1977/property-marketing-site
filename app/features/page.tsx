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
  Home,
  PoundSterling,
  FileCheck,
  MessageSquare,
  Wrench,
  Landmark,
  Scale,
  TrendingUp,
  Database,
  UserCheck,
  AlertTriangle,
  Flame,
  Ruler,
  Lock,
  Calendar,
  ClipboardCheck,
  Banknote,
  LineChart,
  RefreshCw,
} from 'lucide-react'
import type { Metadata } from 'next'

const APP_URL = 'https://property-app-pi-fawn.vercel.app'

export const metadata: Metadata = {
  title: 'Features — PropertyApp',
  description:
    'SA105 + CT600 tax returns, HMO compliance, Section 42 leasehold extensions, Renters\u2019 Rights Act 2025 Wave 1 + 2 dispatch, MTD quarterly submissions, Growth Plan snapshots, tenant referencing, and more \u2014 the only UK landlord software that covers personal, company and HMO portfolios end to end.',
}

const FEATURE_SECTIONS = [
  {
    category: 'UK Tax \u2014 Personal (SA105) & Company (CT600)',
    features: [
      {
        icon: BarChart3,
        title: 'SA105 Personal Tax Returns',
        description:
          'Generate HMRC SA105-ready reports mapping your income and expenses to the correct Self Assessment boxes. Covers SINGLE and JOINT ownership types.',
        bullets: [
          'SA105 box references for all fields',
          'Per-property and portfolio-level breakdowns',
          'Joint-ownership split between owners',
          'P&L financial statements',
          'One-click PDF export for your accountant',
        ],
      },
      {
        icon: Landmark,
        title: 'CT600 Company / SPV Returns',
        description:
          'The only UK landlord tool with native Limited Company tax support. 12 company-specific expense categories, capital allowances (AIA / WDA), S455 director-loan tracking, ATED alerts, and Companies House deadlines.',
        bullets: [
          'Mortgage interest full deduction (not Section 24 capped)',
          'Company operating expenses — accountancy, insurance, life assurance, director remuneration, legal, subscriptions, utilities, travel',
          'Capital allowances — AIA up to £1m, WDA 18% main pool / 6% special-rate, multi-period roll-forward',
          'Director salary, employer pension, S455 tracking',
          'ATED annual charge alerts',
          'Companies House auto-fill — fetch CRN, registered address, ARD, SIC, directors',
          'Companies House filing deadline reminders',
          'Grouped by linked companyId (Reference Data)',
          'Auto-detects wrong ownership type with warning banner',
        ],
      },
      {
        icon: FileSpreadsheet,
        title: 'Making Tax Digital (MTD)',
        description:
          'Submit quarterly income and expense updates directly to HMRC for MTD for Income Tax. Personal-only (SA105) \u2014 company properties report via CT600, not MTD ITSA.',
        bullets: [
          'Quarterly dashboard with deadline countdown',
          'Per-property HMRC field mapping (SA105 boxes)',
          'Pre-submission integrity checks and validation',
          'Secure OAuth2 connection to Government Gateway',
          'HMRC fraud prevention headers (mandatory)',
          'Final Declaration workflow with year-end adjustments',
          'Full submission audit trail with HMRC receipt references',
          'Reconciliation PDF reports for accountant review',
        ],
      },
      {
        icon: Receipt,
        title: 'AI Receipt Scanning',
        description:
          'Photograph a receipt and let AI extract vendor, amount, VAT, date, and HMRC expense category automatically. Works with photos and PDFs.',
        bullets: [
          'Claude AI vision extracts all fields',
          'Auto-categorises to HMRC SA105 categories',
          'Repairs, professional fees, running costs, and more',
          'Mobile camera capture support',
        ],
      },
      {
        icon: PoundSterling,
        title: 'Expense Management',
        description:
          'Track all property-related expenses with full HMRC category mapping. Separate category sets for SA105 (personal) and CT600 (company) ownership.',
        bullets: [
          'HMRC expense categories built in',
          'Per-property expense tracking',
          '12 company-specific CT600 categories',
          'Import expenses from scanned receipts',
          'Monthly and annual summaries',
        ],
      },
    ],
  },
  {
    category: 'Banking & Reconciliation',
    features: [
      {
        icon: Banknote,
        title: 'Open Banking + Auto-match',
        description:
          'Link UK banks via TrueLayer (AIS-only — read-only access). Multi-bank from day one with encrypted tokens, idempotent sync, and a deterministic match-rule engine that turns transactions into RentPayment / Expense records.',
        bullets: [
          'TrueLayer (sandbox today; production via FCA TrueLayer Agent route)',
          'Multi-bank: Pro = 2 connections, Business = unlimited',
          'BankMatchRule scoring: surname / amount / recurring counterparty',
          '≥0.85 auto-creates RentPayment / Expense; 0.6–0.85 goes to review queue',
          'Daily Vercel cron (03:00 UTC), idempotent re-runs',
          '90-day SCA consent banner — yellow at T-14, red at T-0',
          'Bulk-accept review queue + rules admin UI',
          'AES-256-GCM token encryption, Plaid + GoCardless BAD stubs ready',
        ],
      },
      {
        icon: RefreshCw,
        title: 'Mid-year Ownership Transfers',
        description:
          'Atomic, reversible, audit-logged transfers between SINGLE / JOINT / COMPANY / MANAGED ownership types — split a tax year cleanly between SA105 and CT600 when a property moves to your SPV part-way through.',
        bullets: [
          'Pre-flight diff: shows 2024-25 SA105 totals before and after — refuses to commit if they would change',
          'Atomic transfer route — closes one PropertyOwnership period and opens another',
          'Reversal flow restores prior state with audit trail',
          'Ownership history timeline on the property Overview tab',
          'Time-aware tax filtering — records dated D belong to whichever return covered ownership at D',
        ],
      },
    ],
  },
  {
    category: 'Leasehold & UK Legislation',
    features: [
      {
        icon: Scale,
        title: 'Section 42 Leasehold Extensions',
        description:
          'End-to-end statutory workflow for residential leasehold extensions. No other UK landlord tool covers this \u2014 Re-Leased handles commercial rent reviews, but leasehold extensions are ours alone.',
        bullets: [
          'Notice \u2192 counter-notice \u2192 tribunal \u2192 completion tracking',
          '80-year cliff-edge warning (marriage value threshold)',
          'Built-in legal reference for each step',
          'Statutory timeline calculator',
          'Link to associated property and solicitor (Reference Data)',
        ],
      },
      {
        icon: AlertTriangle,
        title: 'Renters\u2019 Rights Act 2025 \u2014 Wave 1 + 2',
        description:
          'End-to-end RRA compliance built before the 1 May 2026 commencement. Bulk Information Sheet dispatch with delivery + open evidence, plus the periodic-tenancy audit, Section 21 wind-down register, and Statement of Tenancy Terms dispatch. Competitors treat this as a blog post; we treat it as a product surface.',
        bullets: [
          'Wave 1 \u2014 bulk Info Sheet dispatch via Resend with delivery + open webhooks',
          'Postal-pack PDF fallback (per-tenant cover letter + Info Sheet)',
          'Tenant-portal "I have read this" \u2192 ACKNOWLEDGED (strongest evidence)',
          'Per-tenant evidence pack PDF for \u00a37,000-per-tenancy penalty defence',
          'Wave 2 \u2014 periodic-tenancy audit + "Mark as periodic" action',
          'Wave 2 \u2014 Section 21 wind-down register with permanent ABOLISHED banner',
          'Wave 2 \u2014 Statement of Tenancy Terms PDF dispatch',
          'Dashboard countdown, escalating from info \u2192 warning \u2192 danger',
          'MANAGED properties included (penalty applies regardless of tax treatment)',
        ],
      },
    ],
  },
  {
    category: 'HMO End-to-End Compliance',
    features: [
      {
        icon: Home,
        title: 'HMO Licence Tracker',
        description:
          'Council licensing data seeded for 30+ UK councils. Auto-detects whether a property needs mandatory, additional, or selective licensing based on location.',
        bullets: [
          'Mandatory / Additional / Selective scheme lookup',
          '30+ UK councils seeded and updatable',
          'Article 4 direction auto-check by postcode',
          'Licence expiry alerts',
          'Licence fee tracking via Reference Data',
        ],
      },
      {
        icon: Ruler,
        title: 'Statutory Room-Size Checker',
        description:
          'Automatic validation against the Licensing of HMOs (Mandatory Conditions of Licences) (England) Regulations 2018.',
        bullets: [
          'Single-adult minimum: 6.51m\u00b2',
          'Double-adult minimum: 10.22m\u00b2',
          'Per-room amenity ratio calculator',
          'Flags non-compliant rooms before inspection',
        ],
      },
      {
        icon: Flame,
        title: 'FRA, Fire Safety & ASB Evidence',
        description:
          'HMO-specific compliance tracking for fire alarm servicing, fire risk assessments, and emergency lighting — plus an ASB incident log that exports as a Section 8 Ground 14 evidence pack you can attach directly to a possession claim.',
        bullets: [
          'Fire Risk Assessment (FRA) log',
          'Fire alarm service + emergency lighting schedule',
          'Auto-calculated next-due dates',
          'Common areas log (kitchens, stairs, corridors)',
          'Anti-social behaviour (ASB) incident log per property',
          'Per-property ASB → Section 8 Ground 14 evidence-pack PDF export (under the RRA-amended Housing Act 1988)',
        ],
      },
      {
        icon: TrendingUp,
        title: 'HMO Yield & Utility Recharge Calculator',
        description:
          'Sum room rents vs whole-property income to show the HMO uplift. Split utilities by room size, equal share, or headcount.',
        bullets: [
          'HMO yield vs single-let comparison',
          'Utility recharge splits (size / equal / headcount)',
          'Occupancy tracker with per-room rent',
          'Feeds straight into expenses for SA105 / CT600',
        ],
      },
      {
        icon: UserCheck,
        title: 'Fit & Proper Person Register',
        description:
          'Maintain a per-council Fit & Proper Person record for every landlord and manager — the statutory test councils apply when granting an HMO licence. Linked to Reference Data so the register is the single source of truth for licence applications.',
        bullets: [
          'Per-council FPP entries with status and last-checked date',
          'Dropdown-backed fields on the HMO tab — pick once, reuse on every licence',
          'Surfaces ineligibility flags before you apply',
          'Linked to Reference Data → Companies and individuals',
        ],
      },
      {
        icon: ClipboardCheck,
        title: 'Portfolio-Wide Compliance Matrix',
        description:
          'The /compliance view pulls every property\u2019s compliance state into a single matrix. HMO-only rows (FRA, fire alarm service) auto-hide for non-HMO properties.',
        bullets: [
          'One screen for the whole portfolio',
          'Gas Safety, EICR, EPC, PAT, legionella',
          'HMO-specific: FRA, fire alarm, licence, room sizes',
          'Overdue / upcoming filter',
          'Export to PDF',
        ],
      },
    ],
  },
  {
    category: 'Compliance & Documents',
    features: [
      {
        icon: Shield,
        title: 'Compliance Tracking',
        description:
          'Stay on top of mandatory safety certificates. The system alerts you when Gas Safety, EICR, or EPC certificates are expiring across the portfolio. Per-property "all-electric" gating skips Gas Safety entirely on properties with no gas appliances.',
        bullets: [
          'Gas Safety, EICR, EPC, PAT, legionella',
          'Per-property hasGasAppliances flag — "Electric only" properties skip CP12 everywhere',
          'Dashboard alerts for upcoming and overdue renewals',
          'Document storage with expiry dates',
          'Per-property compliance status',
        ],
      },
      {
        icon: FileCheck,
        title: 'Document Management',
        description:
          'Upload and organise all property documents: tenancy agreements, certificates, land registry titles, leases, and more.',
        bullets: [
          '11 document types supported',
          'Secure cloud storage (Vercel Blob)',
          'Signed document download via secure URLs',
          'Per-property document organisation',
        ],
      },
      {
        icon: PenTool,
        title: 'E-Signatures (incl. Joint AST)',
        description:
          'Send tenancy agreements for legally binding digital signing via DocuSeal. Full lifecycle automated \u2014 from sending to storing the signed copy. Joint ASTs supported as a single envelope with parallel multi-signer flow.',
        bullets: [
          'Send documents for signing in one click',
          'Joint AST: one envelope, multiple submitters, parallel signing',
          'Per-submitter status, targeted resend, decline-kills-envelope safety',
          'Per-tenant portal slice \u2014 each joint tenant sees only their own row',
          'Plan-gate counts once per envelope (a 2-tenant AST = 1 signature)',
          'Real-time signing status tracking',
          'Signed PDFs downloaded and stored automatically',
          'Tenant can sign from portal or email link',
          'Landlord email notification on completion',
          'Compliance checklist auto-updates to Signed (or "Partially signed (1/2)" mid-flight)',
          'Legally valid under UK eIDAS and Electronic Communications Act 2000',
        ],
      },
    ],
  },
  {
    category: 'Tenants & Communication',
    features: [
      {
        icon: Users,
        title: 'Tenant Portal',
        description:
          'Give your tenants a self-service portal where they can view their documents, submit maintenance requests, and communicate with you. Includes the RRA Information Sheet acknowledgement banner and per-tenant joint-AST signing slice.',
        bullets: [
          'Separate tenant login with secure access',
          'View tenancy documents and signed agreements',
          'RRA 2025 Information Sheet banner — "I have read this" → ACKNOWLEDGED',
          'Joint-AST per-tenant slice — each named adult sees only their own row',
          'Submit and track maintenance requests',
          'GDPR consent management',
        ],
      },
      {
        icon: UserCheck,
        title: 'Tenant Referencing',
        description:
          'Order a reference before approving a tenancy via a pluggable referencing layer with GDPR consent capture, secure document storage, and a per-applicant decision workflow.',
        bullets: [
          'GDPR consent capture (signed link)',
          'Stripe one-off charge — £35/report default, per-request override',
          'Pluggable provider abstraction (partner integrations on the roadmap)',
          'Right-to-Rent check flow',
          'Attach references to the tenancy record',
        ],
      },
      {
        icon: MessageSquare,
        title: 'Messaging',
        description:
          'Built-in messaging between landlords and tenants. Keep all communication in one place, linked to properties.',
        bullets: [
          'Per-property message threads',
          'Linked to tenant portal',
          'Full message history',
        ],
      },
      {
        icon: Wrench,
        title: 'Maintenance Requests',
        description:
          'Tenants can submit maintenance requests through the portal. Track status, assign contractors, and log costs.',
        bullets: [
          'Tenant-initiated requests',
          'Status tracking (Open, In Progress, Completed)',
          'Contractor assignment',
          'Cost logging feeds into expenses',
        ],
      },
    ],
  },
  {
    category: 'Portfolio Intelligence & Data',
    features: [
      {
        icon: TrendingUp,
        title: 'Growth Plan Snapshot Changelog',
        description:
          'Portfolio-trajectory diffing. Compare any two snapshots to see what changed \u2014 value, equity, income, yield \u2014 across the portfolio. No other UK tool does this.',
        bullets: [
          'Snapshot portfolio state on demand',
          'Diff any two snapshots',
          'Surfaces equity-extraction opportunities',
          'Property-by-property change log',
          'Track progress against a growth target',
        ],
      },
      {
        icon: LineChart,
        title: 'Rent Review Insights',
        description:
          'Detect properties where the rent agreement is stale (12 months default \u2014 configurable) and surface a defensible suggested rent range from ONS Private Rental Index uplift + curated local comparables. The growth lever no other UK landlord tool exposes.',
        bullets: [
          'ONS Private Rental Index daily auto-pull (regional MoM% compounded onto medians)',
          'Confidence labels \u2014 HIGH (5+ comparables), MEDIUM (2+), LOW (index-only)',
          'RRA tribunal-risk warning when suggested rent exceeds market median by > 10%',
          'Apply updates Property.rentalIncome + Tenancy.rentAmount + writes review history',
          'Snooze (configurable duration) / Dismiss / Restore per row',
          'MANAGED properties: read-only badge, Apply suppressed',
          'Strategic rent-review outlook tile on Growth Plan',
        ],
      },
      {
        icon: Database,
        title: 'Reference Data Architecture',
        description:
          'Centralised, pick-once-reuse-everywhere library for companies, solicitors, mortgage brokers, and standard fees. Maintain each entity in one place \u2014 every property that links to it updates automatically.',
        bullets: [
          'Limited Companies: CRN, UTR, year-end, directors, SIC, ATED',
          'Solicitors and Mortgage Brokers with contact details',
          'Standard Fees library (survey, legal, mortgage, etc.)',
          'Link properties to companies for CT600 grouping',
          'Link leasehold extensions to solicitors',
        ],
      },
      {
        icon: Calendar,
        title: 'Compliance Calendar + Auto-tasks',
        description:
          'A single calendar view across all properties for certificates, HMO licence renewals, mortgage fixed-rate end dates, tenancy renewals, and MTD quarters. A daily Vercel cron turns every nextDueDate into a real Task before it bites — no quietly slipping certificates.',
        bullets: [
          'Portfolio-wide timeline',
          'Filter by property, type, or status',
          'Daily auto-task generation at 60 / 30 / 7-day windows with priority escalation',
          'Categories: HMO Licence, FRA, fire alarm, emergency lighting, PAT, fire doors, council inspections, legionella, pest control',
          'Auto-assigns to a linked contractor when configured',
          'Deduped via task notes JSON key — re-runs never spam the queue',
          'PDF export from the portfolio compliance matrix',
        ],
      },
      {
        icon: Building2,
        title: 'Property Portfolio Dashboard',
        description:
          'A complete overview at a glance. Track total value, equity, monthly income, profit, and yields across all properties \u2014 personal, joint, company and managed.',
        bullets: [
          'Auto-calculated net profit, yields, and LTV ratios',
          'Property status (Active, Buying, Selling, Issue)',
          'Mortgage renewal alerts with countdown',
          'Portfolio summary PDF export',
          'Four ownership types \u2014 SINGLE, JOINT, COMPANY, MANAGED',
          'MANAGED properties shown operationally but excluded from every tax surface',
        ],
      },
    ],
  },
  {
    category: 'Productivity & Security',
    features: [
      {
        icon: ClipboardList,
        title: 'Task Management',
        description:
          'Track maintenance tasks, admin to-dos, and property improvements. Add status notes and activity logs for long-running tasks.',
        bullets: [
          'Per-property task assignment',
          'Priority levels (Low, Medium, High)',
          'Activity log with timestamped notes',
          'Contractor assignment',
        ],
      },
      {
        icon: FileText,
        title: 'CSV Data Import',
        description:
          'Bulk import your existing data from spreadsheets. Smart column auto-detection maps your CSV columns to the right fields.',
        bullets: [
          '4 import types: Properties, Contractors, Tasks, Contacts',
          'Auto-detects Google Contacts & Outlook CSV formats',
          'Preview and validation before import',
          'Downloadable CSV templates with sample data',
        ],
      },
      {
        icon: Lock,
        title: 'Audit Log, GDPR & Self-Host',
        description:
          'Privacy, security and compliance built in \u2014 important for landlords handling tenant data under DPA / UK GDPR obligations.',
        bullets: [
          'AES-256-GCM encryption at rest',
          'Per-account isolated database',
          'Full audit log for every state change',
          'GDPR data export and erasure',
          'Self-hosted deployment option (Portfolio / Agent tier)',
          'Pre-push build validation on every release',
        ],
      },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Every feature a professional UK landlord needs
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Built for landlords running personal, joint and SPV portfolios with HMO and leasehold exposure.
            The only UK tool that combines SA105 + CT600, Section 42, Renters&rsquo; Rights Act 2025, and
            HMO end-to-end compliance in one product.
          </p>
        </div>
      </section>

      {/* Feature sections */}
      {FEATURE_SECTIONS.map((section) => (
        <section key={section.category} className="py-16 even:bg-muted/30">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-bold tracking-tight mb-8">{section.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="rounded-xl border border-border p-6 bg-background">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-1.5">
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1 shrink-0">&#8226;</span>
                          <span className="text-muted-foreground">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground">
            Ready to try it?
          </h2>
          <p className="mt-3 text-lg text-primary-foreground/80">
            Get started free with up to 3 properties. No credit card required.
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
