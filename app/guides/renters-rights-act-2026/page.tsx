import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ArrowRight,
  ChevronRight,
  Clock,
  CheckCircle2,
  Info,
  Gavel,
  RefreshCw,
  PoundSterling,
  MessageSquare,
  Database,
  Home,
  Droplets,
  PawPrint,
  UserX,
  ShieldAlert,
  ClipboardCheck,
  Zap,
  HelpCircle,
} from 'lucide-react'

const APP_URL = 'https://property-app-pi-fawn.vercel.app'
const CANONICAL = 'https://www.marpropertyinvestments.co.uk/guides/renters-rights-act-2026'
const TITLE = 'The Renters’ Rights Act 2026: A Complete Compliance Guide for UK Landlords'
const DESCRIPTION =
  'What the Renters’ Rights Act means for UK landlords: Section 21 abolition, periodic tenancies, the new Form 4A rent-increase process, the PRS database, the Ombudsman, Decent Homes, Awaab’s Law, pets and penalties — plus a compliance checklist.'

export const metadata: Metadata = {
  title: `${TITLE} | PropertyApp`,
  description: DESCRIPTION,
  keywords: [
    'Renters Rights Act 2026',
    'Renters Rights Act landlord guide',
    'Section 21 abolition',
    'Form 4A rent increase',
    'periodic tenancies',
    'landlord compliance UK',
    'PRS database',
    'landlord ombudsman',
    'Decent Homes Standard private rented',
    'Awaab’s Law landlords',
  ],
  alternates: { canonical: '/guides/renters-rights-act-2026' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PropertyApp',
    locale: 'en_GB',
    type: 'article',
  },
}

const REFORMS = [
  {
    id: 'section-21',
    icon: Gavel,
    title: 'Section 21 “no-fault” evictions are abolished',
    what:
      'You can no longer end a tenancy with a Section 21 notice. To take possession you must rely on a valid Section 8 ground — such as rent arrears, anti-social behaviour, or wanting to sell or move in — and be able to evidence it.',
    todo: [
      'Stop relying on Section 21 notices entirely.',
      'Learn the Section 8 grounds and the notice period each one carries.',
      'Keep dated records (arrears, breaches, ASB) so a ground is properly evidenced.',
    ],
  },
  {
    id: 'periodic-tenancies',
    icon: RefreshCw,
    title: 'All tenancies become periodic',
    what:
      'Fixed-term assured shorthold tenancies are replaced by periodic tenancies that roll month to month. Tenants can leave with two months’ notice, and you can no longer lock them into a fixed term.',
    todo: [
      'Update your tenancy agreement templates to the periodic model.',
      'Plan cash-flow for more flexible tenant exits.',
      'Track each tenancy’s current rent and terms by period — not as one fixed contract.',
    ],
  },
  {
    id: 'rent-increases',
    icon: PoundSterling,
    title: 'A single, formal way to raise rent (Form 4A / Section 13)',
    what:
      'Rent can be increased once a year only, via a statutory Section 13 notice (Form 4A) with the correct notice period. Rent-review clauses and rental bidding wars are out, and a tenant can challenge an increase at the First-tier Tribunal.',
    todo: [
      'Use the statutory Section 13 / Form 4A process — not a clause in the agreement.',
      'Increase no more than once in any 12-month period, with proper notice.',
      'Be ready to justify the new rent against market evidence if it’s challenged.',
    ],
  },
  {
    id: 'ombudsman',
    icon: MessageSquare,
    title: 'A mandatory landlord Ombudsman',
    what:
      'Every private landlord must join a government-approved redress scheme (Ombudsman) that can investigate tenant complaints and order remedies, including compensation and apologies.',
    todo: [
      'Register with the approved landlord redress scheme once it opens.',
      'Put a clear, written complaints process in place for tenants.',
    ],
  },
  {
    id: 'prs-database',
    icon: Database,
    title: 'The Private Rented Sector database',
    what:
      'Landlords and their properties must be registered on a new national PRS database. Some enforcement steps and possession actions depend on you being registered.',
    todo: [
      'Register yourself and every property once the database goes live.',
      'Keep your entries accurate and up to date.',
    ],
  },
  {
    id: 'decent-homes',
    icon: Home,
    title: 'The Decent Homes Standard applies to private rentals',
    what:
      'The Decent Homes Standard — long applied to social housing — now extends to the private rented sector. Properties must be free of serious hazards and kept in a reasonable state of repair.',
    todo: [
      'Audit each property against the standard.',
      'Budget for and schedule any remedial works.',
      'Keep certificates and repair records on file.',
    ],
  },
  {
    id: 'awaabs-law',
    icon: Droplets,
    title: 'Awaab’s Law: strict timescales for hazards',
    what:
      'Fixed timescales to investigate and fix dangerous hazards such as damp and mould now apply to private landlords. A slow response becomes an enforceable breach, not just a complaint.',
    todo: [
      'Have a fast hazard-reporting and response process.',
      'Log every report and your response, with dates.',
      'Act within the statutory timescales — don’t let issues drift.',
    ],
  },
  {
    id: 'pets',
    icon: PawPrint,
    title: 'Tenants’ strengthened right to a pet',
    what:
      'A tenant can request to keep a pet and you can’t unreasonably refuse. You can, however, require the tenant to hold pet damage insurance.',
    todo: [
      'Set up a written pet-request and decision process.',
      'Only refuse with a genuine, defensible reason.',
      'Require pet damage insurance where appropriate.',
    ],
  },
  {
    id: 'discrimination',
    icon: UserX,
    title: 'An end to rental discrimination',
    what:
      'Blanket bans on tenants who receive benefits (“No DSS”) or who have children are outlawed — in adverts and in practice.',
    todo: [
      'Remove any “No DSS” or “No children” wording from listings and policies.',
      'Assess every applicant on individual merit.',
    ],
  },
  {
    id: 'penalties',
    icon: ShieldAlert,
    title: 'Stronger enforcement and bigger penalties',
    what:
      'Councils gain stronger enforcement powers, with civil penalties up to £7,000 for many breaches and up to £40,000 (or criminal prosecution) for serious or repeat offences. Rent Repayment Orders are extended.',
    todo: [
      'Treat compliance as financial risk management.',
      'Keep an audit trail for every statutory duty.',
      'Fix breaches quickly — repeat offences escalate fast.',
    ],
  },
]

const CHECKLIST = [
  'Stop using Section 21 — move to evidenced Section 8 grounds.',
  'Switch your tenancies to the new periodic model.',
  'Use the Section 13 / Form 4A process for any rent increase (once a year).',
  'Join the approved landlord Ombudsman / redress scheme.',
  'Register yourself and every property on the PRS database.',
  'Give every tenant up-to-date written terms and the required information.',
  'Audit each property against the Decent Homes Standard.',
  'Put a fast damp / mould (Awaab’s Law) response process in place.',
  'Adopt a fair pet-request process and remove discriminatory wording.',
  'Keep a dated audit trail for every duty — it’s your defence if challenged.',
]

const HELPS = [
  {
    feature: 'Information Sheet dispatch',
    desc: 'Bulk-send required tenant information with delivery and open evidence, plus a per-tenant “I have read this” acknowledgement — your proof against the penalty.',
  },
  {
    feature: 'Statement of Tenancy Terms',
    desc: 'Generate and send written terms, with an automatic “re-send needed” badge the moment rent, deposit or lease type changes.',
  },
  {
    feature: 'Form 4A rent-increase workflow',
    desc: 'Propose → landlord pre-sign → tenant accepts, declines or refers to tribunal → renewal drafted → the new rent flows to every tax and tenant surface. The whole Section 13 process, end to end.',
  },
  {
    feature: 'Section 8 Ground 14 ASB log',
    desc: 'Log anti-social behaviour per property and export an evidence pack you can attach to a possession claim.',
  },
  {
    feature: 'Compliance calendar + document store',
    desc: 'Track Decent Homes and safety certificates, store the evidence, and get reminders before anything lapses.',
  },
  {
    feature: 'Full audit trail',
    desc: 'Every action dated and logged — exactly what a council or the Ombudsman will ask to see.',
  },
]

const FAQS = [
  {
    q: 'When does the Renters’ Rights Act come into force?',
    a: 'The Act received Royal Assent and its reforms are being introduced in phases across 2025–2026, with the major tenancy changes applying to both new and existing tenancies. Because commencement is staged, always check GOV.UK for the date that applies to each specific provision.',
  },
  {
    q: 'Is Section 21 really being abolished?',
    a: 'Yes. Section 21 “no-fault” evictions are abolished. To take possession you must rely on a valid Section 8 ground and be able to evidence it.',
  },
  {
    q: 'How do I increase the rent under the new rules?',
    a: 'Once a year, using a statutory Section 13 notice (Form 4A) with the correct notice period — not a rent-review clause. The tenant can accept it or challenge it at the First-tier Tribunal.',
  },
  {
    q: 'What are the penalties for getting it wrong?',
    a: 'Civil penalties run up to £7,000 for many breaches, and up to £40,000 or criminal prosecution for serious or repeat offences, alongside extended Rent Repayment Orders. A clear audit trail is your best defence.',
  },
  {
    q: 'Do I have to allow pets?',
    a: 'You can’t unreasonably refuse a tenant’s request to keep a pet, though you can require them to hold pet damage insurance. Decide case by case, with a genuine reason for any refusal.',
  },
  {
    q: 'Do I need to register on a database or join an ombudsman?',
    a: 'Yes — landlords must register on the new Private Rented Sector database and join an approved redress scheme (Ombudsman). Some enforcement and possession steps depend on being registered.',
  },
  {
    q: 'Does this apply to my existing tenancies and HMOs?',
    a: 'The reforms apply broadly across the private rented sector, including existing tenancies and HMOs, as the relevant provisions commence. HMOs also keep their separate licensing duties on top.',
  },
]

export default function RentersRightsActGuide() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: TITLE,
      description: DESCRIPTION,
      datePublished: '2026-06-05',
      dateModified: '2026-06-05',
      author: { '@type': 'Organization', name: 'PropertyApp' },
      publisher: { '@type': 'Organization', name: 'PropertyApp' },
      mainEntityOfPage: CANONICAL,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-12">
        <div className="mx-auto max-w-3xl px-6">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/guides" className="hover:text-foreground">Guides</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">Renters’ Rights Act 2026</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">{TITLE}</h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> 14 min read</span>
            <span>Last reviewed: June 2026</span>
          </div>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            The Renters&rsquo; Rights Act is the biggest shake-up of the private rented sector in decades.
            It abolishes Section 21, moves every tenancy to a periodic model, changes how you raise rent,
            and adds new duties &mdash; backed by penalties of up to &pound;40,000. Here&rsquo;s what&rsquo;s
            changing and exactly what you need to do.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          {/* TOC */}
          <div className="rounded-xl border border-border bg-muted/30 p-6 mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              On this page
            </h2>
            <ol className="space-y-1.5 text-sm">
              {REFORMS.map((r, i) => (
                <li key={r.id}>
                  <a href={`#${r.id}`} className="text-primary hover:underline">
                    {i + 1}. {r.title}
                  </a>
                </li>
              ))}
              <li><a href="#checklist" className="text-primary hover:underline">Your RRA 2026 compliance checklist</a></li>
              <li><a href="#how-propertyapp-helps" className="text-primary hover:underline">How PropertyApp helps</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently asked questions</a></li>
            </ol>
          </div>

          {/* Reforms */}
          <div className="space-y-10">
            {REFORMS.map((r, i) => {
              const Icon = r.icon
              return (
                <article key={r.id} id={r.id} className="scroll-mt-24">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                      <span className="text-muted-foreground">{i + 1}.</span> {r.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{r.what}</p>
                  <div className="mt-4 rounded-lg border border-border bg-background p-4">
                    <p className="text-sm font-semibold mb-2">What to do</p>
                    <ul className="space-y-1.5">
                      {r.todo.map((t) => (
                        <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Checklist */}
          <div id="checklist" className="scroll-mt-24 mt-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <ClipboardCheck className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Your RRA 2026 compliance checklist</h2>
            </div>
            <div className="rounded-xl border border-border bg-muted/30 p-6">
              <ul className="space-y-2.5">
                {CHECKLIST.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* How PropertyApp helps */}
          <div id="how-propertyapp-helps" className="scroll-mt-24 mt-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">How PropertyApp helps</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Reading the rules is one thing; staying compliant across a portfolio is another. PropertyApp turns
              each duty into a workflow with a built-in audit trail &mdash; so compliance is something you
              <em> do</em>, not something you hope you remembered.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {HELPS.map((h) => (
                <div key={h.feature} className="rounded-xl border border-border bg-background p-5">
                  <h3 className="font-semibold mb-1.5">{h.feature}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div id="faq" className="scroll-mt-24 mt-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <HelpCircle className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Frequently asked questions</h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <div key={f.q} className="rounded-xl border border-border bg-background p-6">
                  <h3 className="font-semibold mb-2">{f.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 rounded-xl border border-border bg-muted/30 p-5 flex items-start gap-3">
            <Info className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              This guide is general information, not legal advice. The Renters&rsquo; Rights Act is being
              implemented in stages and details can change &mdash; check{' '}
              <a
                href="https://www.legislation.gov.uk/ukpga/2025/26/contents"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                the legislation
              </a>{' '}
              and GOV.UK for the current position, and take professional advice for your own situation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground">
            RRA compliance you can&rsquo;t forget
          </h2>
          <p className="mt-3 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Information Sheet dispatch, Statement of Tenancy Terms, Form 4A rent reviews and an ASB evidence
            pack &mdash; the whole Renters&rsquo; Rights Act regime, handled. Free for up to 3 properties.
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
