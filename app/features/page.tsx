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
  Home,
  PoundSterling,
  FileCheck,
  MessageSquare,
  Wrench,
} from 'lucide-react'
import type { Metadata } from 'next'

const APP_URL = 'https://property-app-pi-fawn.vercel.app'

export const metadata: Metadata = {
  title: 'Features — PropertyApp',
  description: 'Explore all features of PropertyApp: portfolio management, tax reports, compliance tracking, tenant portal, AI receipt scanning, and more.',
}

const FEATURE_SECTIONS = [
  {
    category: 'Portfolio Management',
    features: [
      {
        icon: Building2,
        title: 'Property Portfolio Dashboard',
        description: 'Get a complete overview of your entire portfolio at a glance. Track total value, equity, monthly income, profit, and yields across all properties.',
        bullets: [
          'Auto-calculated net profit, yields, and LTV ratios',
          'Property status tracking (Active, Buying, Selling, Issue)',
          'Mortgage renewal alerts with countdown',
          'Portfolio summary PDF export',
        ],
      },
      {
        icon: Home,
        title: 'Mortgage & Tenancy Tracking',
        description: 'Track mortgages, fixed rate periods, rental income, and tenancy details for every property. See at-a-glance when mortgages need renewal.',
        bullets: [
          'Mortgage lender, rate, amount, and end date',
          'Tenant details, lease dates, and deposit info',
          'Service charge, ground rent, and management fees',
          'Overpayment tracking',
        ],
      },
    ],
  },
  {
    category: 'Financial & Tax',
    features: [
      {
        icon: BarChart3,
        title: 'Tax & Financial Reports',
        description: 'Generate HMRC SA105-ready tax reports mapping your income and expenses to the correct Self Assessment boxes. Export professional PDFs for your accountant.',
        bullets: [
          'SA105 box references for all fields',
          'Per-property and portfolio-level breakdowns',
          'P&L financial statements',
          'One-click PDF export',
        ],
      },
      {
        icon: Receipt,
        title: 'AI Receipt Scanning',
        description: 'Photograph a receipt and let AI extract vendor, amount, VAT, date, and HMRC expense category automatically. Works with photos and PDFs.',
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
        description: 'Track all property-related expenses with full HMRC category mapping. Import from receipts or enter manually.',
        bullets: [
          'HMRC expense categories built in',
          'Per-property expense tracking',
          'Import expenses from scanned receipts',
          'Monthly and annual summaries',
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
        description: 'Stay on top of mandatory safety certificates. The system alerts you when Gas Safety, EICR, or EPC certificates are expiring.',
        bullets: [
          'Gas Safety, EICR, and EPC expiry tracking',
          'Dashboard alerts for upcoming and overdue renewals',
          'Document storage with expiry dates',
          'Per-property compliance status',
        ],
      },
      {
        icon: FileCheck,
        title: 'Document Management',
        description: 'Upload and organise all property documents: tenancy agreements, certificates, land registry titles, leases, and more.',
        bullets: [
          '11 document types supported',
          'Secure cloud storage (Vercel Blob)',
          'Signed document download via secure URLs',
          'Per-property document organisation',
        ],
      },
      {
        icon: PenTool,
        title: 'E-Signatures',
        description: 'Send tenancy agreements and other documents for digital signing via DocuSeal. Track signing status and store signed copies automatically.',
        bullets: [
          'Send documents for signing in one click',
          'Real-time signing status tracking',
          'Signed PDFs stored automatically',
          'Email notifications to tenants',
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
        description: 'Give your tenants a self-service portal where they can view their documents, submit maintenance requests, and communicate with you.',
        bullets: [
          'Separate tenant login with secure access',
          'View tenancy documents and signed agreements',
          'Submit and track maintenance requests',
          'GDPR consent management',
        ],
      },
      {
        icon: MessageSquare,
        title: 'Messaging',
        description: 'Built-in messaging between landlords and tenants. Keep all communication in one place, linked to properties.',
        bullets: [
          'Per-property message threads',
          'Linked to tenant portal',
          'Full message history',
        ],
      },
      {
        icon: Wrench,
        title: 'Maintenance Requests',
        description: 'Tenants can submit maintenance requests through the portal. Track status, assign contractors, and log costs.',
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
    category: 'Productivity Tools',
    features: [
      {
        icon: ClipboardList,
        title: 'Task Management',
        description: 'Track maintenance tasks, admin to-dos, and property improvements. Add status notes and activity logs for long-running tasks.',
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
        description: 'Bulk import your existing data from spreadsheets. Smart column auto-detection maps your CSV columns to the right fields.',
        bullets: [
          '4 import types: Properties, Contractors, Tasks, Contacts',
          'Auto-detects Google Contacts & Outlook CSV formats',
          'Preview and validation before import',
          'Downloadable CSV templates with sample data',
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
            Every feature a UK landlord needs
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From portfolio dashboards to HMRC-ready tax reports, PropertyApp covers every aspect of
            buy-to-let property management.
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
