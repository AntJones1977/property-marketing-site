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
  Scroll,
  ListChecks,
  History,
} from 'lucide-react'
import type { Metadata } from 'next'

const APP_URL = 'https://property-app-pi-fawn.vercel.app'

export const metadata: Metadata = {
  title: 'Features — PropertyApp',
  description:
    'SA105 + CT600 + SA900/SA903 (estate/trust) tax returns, a per-return filing tracker, HMO compliance, Section 42 leasehold extensions, Renters\u2019 Rights Act 2025 Wave 1 + 2 dispatch, MTD quarterly submissions, Growth Plan snapshots, tenant referencing, and more \u2014 the only UK landlord software that covers personal, company, estate and HMO portfolios end to end.',
}

const FEATURE_SECTIONS = [
  {
    category: 'UK Tax \u2014 Personal (SA105), Company (CT600) & Estate/Trust (SA900/SA903)',
    features: [
      {
        icon: BarChart3,
        title: 'SA105 Personal Tax Returns',
        description:
          'Generate HMRC SA105-ready reports mapping your income and expenses to the correct Self Assessment boxes. Covers SINGLE and JOINT ownership types. Lock the year for review and email a summary to your accountant in one click.',
        bullets: [
          'SA105 box references for all fields',
          'Per-property and portfolio-level breakdowns',
          'Joint-ownership split between owners',
          'Mid-year transfer banner — suppressed for properties with personal months in the displayed year',
          'Emerald Lock / amber Unlock buttons + locked-state banner',
          'One-click "Email summary to accountant" with the PDF',
          'Delete projected (custom rolled-forward) years',
          'P&L financial statements',
          'One-click PDF export for your accountant',
        ],
      },
      {
        icon: Landmark,
        title: 'CT600 Company / SPV Returns',
        description:
          'The only UK landlord tool with native Limited Company tax support. Records-first per-property running costs (capture a mid-year service-charge increase as two records and watch CT600 split it correctly), capital allowances (AIA / WDA), S455 director-loan tracking, ATED alerts, drift detection and tax-year lock.',
        bullets: [
          'Mortgage interest full deduction (not Section 24 capped)',
          'Records-first running costs — every rate is a dated record, not a forward estimate',
          'Mid-year rate-change split — service charge £200/mo until Sept then £250/mo from Oct = two records, CT600 splits the period correctly',
          'Drift detection — amber banner per property × category when the property tile rate differs from the latest invoice, with one-click deep-link to fix',
          'Per-property drill-down — rental income, mortgage, mgmt fee, service charge, ground rent, R&M, net income',
          'Period selector + inline Edit on every expense and asset row; re-derives tax-year + AP-end on date change',
          'Tax-year tabs auto-resolve the accounting period from the company ARD (completed → 5 Apr, in-progress → today, future → Projected badge)',
          'Emerald Lock / amber Unlock + locked-state banner + "Email summary to accountant" link',
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
        icon: Scroll,
        title: 'SA900 / SA903 Trust & Estate Returns',
        description:
          'The only UK landlord tool that handles estate and trust property income. Generate the HMRC SA903 “UK Property” working sheet from live rent, expense and mortgage-interest data, then compute the SA900 estate income tax and apportion residuary income to beneficiaries — no competitor acknowledges this ownership type at all.',
        bullets: [
          'SA903 (UK Property / TL2) working sheet generated from live data',
          'SA900 estate income tax by regime — administration / interest in possession / discretionary',
          'Section 24 residential finance-cost reducer + de minimis + standard-rate band',
          'R185 (Estate Income) beneficiary apportionment',
          'Fills the real HMRC SA903 flat PDF — text overlaid at calibrated (x, y) coordinates via pdf-lib',
          'In-app per-field nudge / stretch calibration overlay — align any future year without a developer',
          'SA900 hand-filing checklist + combined template print',
          'Cross-year property-loss + residential finance-cost carry-forward, automatic once a year is confirmed',
          'ESTATE / TRUST cleanly excluded from SA105, CT600 and MTD',
        ],
      },
      {
        icon: ListChecks,
        title: 'Tax-Return Filing Tracker',
        description:
          'One tracker spanning personal SA105, company CT600 and estate SA900. Mark each return Confirmed → Submitted → Accepted (every stage dated), and let a deadline-aware compliance nag chase what is overdue or due soon — then fall silent once a return is accepted.',
        bullets: [
          'Confirmed → Submitted → Accepted lifecycle, each stage dated by you',
          'Spans SA105 + CT600 + SA900 under one roof',
          'Deadline-aware severity — overdue / due-soon / not-started / submitted / accepted',
          'Statutory deadlines built in — SA105/SA900 31 Jan online, SA900 paper 31 Oct, CT600 +12 months, CT600 payment +9 months + 1 day',
          'Dashboard + /compliance nudges; returns go quiet once accepted',
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
      {
        icon: TrendingUp,
        title: 'Capital Investments CRUD',
        description:
          'KV-backed Capital Investments register with ACTIVE / REPAID / WRITTEN_OFF status. Your live capital headline sums ACTIVE rows only — repaid and written-off positions sit as footnotes so the number reflects reality, not history.',
        bullets: [
          'Inline Add / Edit / Delete on the Growth Plan',
          'Three states: ACTIVE / REPAID / WRITTEN_OFF',
          'Headline shows sum of ACTIVE only',
          'REPAID + WRITTEN_OFF surfaced as footnotes',
          'Full audit log on every state change',
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
          'Link UK banks via TrueLayer (AIS-only — read-only access). Multi-bank from day one with encrypted tokens, idempotent sync, a deterministic match-rule engine that turns transactions into RentPayment / Expense records, and a locked-year retro-match guard that protects sealed returns.',
        bullets: [
          'TrueLayer (sandbox today; production via FCA TrueLayer Agent route)',
          'Multi-bank: Pro = 2 connections, Business = unlimited',
          'BankMatchRule scoring: surname / amount / recurring counterparty',
          '≥0.85 auto-creates RentPayment / Expense; 0.6–0.85 goes to review queue',
          'Locked-year retro-match guard — once a tax year is locked, the daily cron and manual-match drawer both refuse to retro-match into it',
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
          'Atomic, reversible, audit-logged transfers between SINGLE / JOINT / COMPANY / MANAGED / ESTATE / TRUST ownership types — split a tax year cleanly between SA105 and CT600 when a property moves to your SPV part-way through.',
        bullets: [
          'Pre-flight diff: shows 2024-25 SA105 totals before and after — refuses to commit if they would change',
          'Atomic transfer route — closes one PropertyOwnership period and opens another',
          'Reversal flow restores prior state with audit trail',
          'Ownership history timeline on the property Overview tab',
          'Time-aware tax filtering — records dated D belong to whichever return covered ownership at D',
        ],
      },
      {
        icon: History,
        title: 'Time-Based Tenancy History',
        description:
          'Sibling of ownership history on the tenancy side. Every rent change, deposit change, tenant change or lease-type change opens a new TenancyPeriod at the actual effective date, so SA105 / CT600 / MTD sum rent by months active in each period instead of a single forward estimate — a mid-year rent change lands in the right period.',
        bullets: [
          'New TenancyPeriod row at every rent / deposit / tenant / lease-type change',
          'Tax surfaces sum period.rentAmount × months active, not a single forward column',
          'Canonical writer (applyRenewedRent) propagates a renewal in one transaction',
          'Mid-year rent changes split correctly across the tax-year boundary',
          'Underpins Form 4A rent propagation and Statement of Tenancy Terms re-send',
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
          'End-to-end RRA compliance built before the 1 May 2026 commencement. Bulk Information Sheet dispatch with delivery + open evidence, plus the periodic-tenancy audit, Section 21 wind-down register, and Statement of Tenancy Terms with auto-resend on rent / deposit / lease edits. Competitors treat this as a blog post; we treat it as a product surface.',
        bullets: [
          'Wave 1 \u2014 bulk Info Sheet dispatch via Resend with delivery + open webhooks',
          'Postal-pack PDF fallback (per-tenant cover letter + Info Sheet)',
          'Tenant-portal "I have read this" \u2192 ACKNOWLEDGED (strongest evidence)',
          'Per-tenant evidence pack PDF for \u00a37,000-per-tenancy penalty defence',
          'Wave 2 \u2014 periodic-tenancy audit + "Mark as periodic" action',
          'Wave 2 \u2014 Section 21 wind-down register with permanent ABOLISHED banner',
          'Wave 2 \u2014 Statement of Tenancy Terms PDF dispatch',
          'Auto-resend badge \u2014 change the rent / deposit / lease type and the SoTT surface flags "Re-send needed", sticky until acknowledged',
          'Dashboard countdown, escalating from info \u2192 warning \u2192 danger',
          'MANAGED properties included (penalty applies regardless of tax treatment)',
        ],
      },
      {
        icon: RefreshCw,
        title: 'Form 4A \u2014 Section 13(2) Statutory Rent-Increase Workflow',
        description:
          'The end-to-end statutory rent-review workflow no competitor has shipped. Propose, sign, accept, renew \u2014 and watch the new rent propagate to every tax and tenant surface in one move.',
        bullets: [
          'Propose new rent + effective date; system renders docx prefilled',
          'DocuSeal landlord pre-sign with one click',
          'Tenant auto-emailed signed Form 4A + one-click portal sign-in link',
          'Portal Accept / Decline / Refer-to-Tribunal buttons',
          'On Accept \u2014 renewal Tenancy Agreement auto-drafted with new rent + effective date',
          'Landlord sends renewal AST; parallel multi-signer flow; COMPLETED state opens a new TenancyPeriod',
          'SA105, CT600, MTD, property tile and tenant portal all re-render with the new rent',
          'Full audit trail across every step',
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
          'Stay on top of mandatory safety certificates. The system alerts you when Gas Safety, EICR, or EPC certificates are expiring across the portfolio. Per-property "all-electric" gating skips Gas Safety entirely on properties with no gas appliances. Per-surface portfolio scope means alerts pick up a property you bought yesterday before you have set the rent — statutory certs are a pre-tenancy duty.',
        bullets: [
          'Gas Safety, EICR, EPC, PAT, legionella',
          'Per-property hasGasAppliances flag — "Electric only" properties skip CP12 everywhere',
          'Per-surface portfolio scope — compliance alerts include pre-tenancy properties (tax surfaces exclude them)',
          'Dashboard alerts for upcoming and overdue renewals',
          'Document storage with expiry dates',
          'Per-property compliance status',
        ],
      },
      {
        icon: FileCheck,
        title: 'Document Management',
        description:
          'Upload and organise all property documents: tenancy agreements, certificates, land registry titles, leases, and more. Big files (EICRs over 4.5MB, scanned bundles) upload client-direct to blob storage so they never hit a body-size limit.',
        bullets: [
          '11 document types supported',
          'Secure cloud storage (Vercel Blob)',
          'Big-file uploads >4.5MB — client-direct to blob, no proxy limit',
          'Signed document download via secure URLs',
          'Per-property document organisation',
        ],
      },
      {
        icon: PenTool,
        title: 'E-Signatures (incl. Joint AST + Landlord Countersign)',
        description:
          'Send tenancy agreements for legally binding digital signing via DocuSeal. Joint ASTs run as a single envelope with up to 4 tenants + 1 landlord countersigner, parallel signing, and exactly-once post-sign automation.',
        bullets: [
          'Send documents for signing in one click',
          'Joint AST: one envelope, up to 4 tenants + 1 landlord countersigner, parallel signing',
          'Exactly-once post-sign automation (no duplicate state on webhook replay)',
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
      {
        icon: ClipboardCheck,
        title: 'AST Landlord-Sign Drift Reconciliation',
        description:
          'Tenancy snapshots get prefilled at send time. On landlord-sign we cross-check the snapshot against the current Tenancy and Property records, force Property.rentalIncome to match Tenancy.rentAmount, and surface field-by-field diffs (rent, deposit, dates, contacts, address) so what got signed is what is on file.',
        bullets: [
          'Snapshot-at-send-time prefill (no last-minute surprises)',
          'On-sign cross-check against current Tenancy + Property',
          'Force-aligns Property.rentalIncome \u2190 Tenancy.rentAmount via canonical writer',
          'Field-by-field diff banner \u2014 rent, deposit, dates, contacts, address',
          'Audit-logged at every step',
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
          'Give your tenants a self-service portal where they can view their documents, submit maintenance requests, and communicate with you. Every tenant email — Form 4A, RRA Info Sheet, Statement of Tenancy Terms — includes a one-click portal sign-in deep-link, so tenants land in the right place without hunting through inboxes.',
        bullets: [
          'Separate tenant login with secure access',
          'Portal sign-in deep-link in every tenant email (Form 4A, RRA Info Sheet, SoTT)',
          'View tenancy documents and signed agreements',
          'RRA 2025 Information Sheet banner — "I have read this" → ACKNOWLEDGED',
          'Form 4A — Accept / Decline / Refer-to-Tribunal buttons in-portal',
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
          'Tenants can submit maintenance requests through the portal. A back-datable workDate and cost field means a Resolved request auto-creates an Expense in the right HMRC SA105 category for the right tax year — labour + materials rolled up in one place.',
        bullets: [
          'Tenant-initiated and landlord-initiated requests',
          'Status tracking (Open, In Progress, Resolved, Closed)',
          'Contractor assignment',
          'Back-datable workDate — splits cost into the correct tax year',
          'Resolved + cost > 0 auto-creates an Expense via the canonical writer',
          'Attach materials receipts to the request; "Materials £X · Labour £Y · Total £Z" rollup',
          'Auto-merges into SA105 PropertyCard via dedup helper',
          '"All" tab sort: Priority (OPEN → IN_PROGRESS → RESOLVED → CLOSED), then createdAt desc',
        ],
      },
      {
        icon: UserCheck,
        title: 'Admin Tenant Impersonation',
        description:
          'Click "Impersonate" on any tenant row and land on the portal as that tenant — see exactly what they see when testing a Form 4A flow, a Joint AST signing slice, or an RRA Info Sheet banner. Your admin session stays intact; a red banner reminds you until you stop. Audit-logged.',
        bullets: [
          'One-click Impersonate from the tenant row',
          'Fresh tenant session — admin property_session cookie preserved',
          'Persistent red banner until you click Stop Impersonating',
          'Full audit trail of every impersonation',
          'No juggling test accounts to verify the tenant experience',
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
          'Centralised, pick-once-reuse-everywhere library for limited companies, solicitors, mortgage brokers, standard fees and landlords. Maintain each entity in one place \u2014 every property that links to it updates automatically, and every signing template prefills landlord details from the reference record.',
        bullets: [
          'Five entity types: Limited Companies, Solicitors, Mortgage Brokers, Standard Fees, Landlords',
          'Limited Companies: CRN, UTR, year-end, directors, SIC, ATED',
          'Landlords \u2014 per-property assignment with signing-template prefill',
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
          'A complete overview at a glance. Track total value, equity, monthly income, profit, and yields across all properties \u2014 personal, joint, company, managed and estate/trust. Property lifecycle handled in two distinct flows: Delete (full Prisma + KV cascade for incomplete purchases) or Archive (preserves history for sold properties so historic returns still resolve).',
        bullets: [
          'Auto-calculated net profit, yields, and LTV ratios',
          'Property status (Active, Buying, Selling, Issue)',
          'Mortgage renewal alerts with countdown',
          'Portfolio summary PDF export',
          'Six ownership states \u2014 SINGLE, JOINT, COMPANY, MANAGED, ESTATE, TRUST',
          'MANAGED shown operationally (excluded from every tax surface); ESTATE / TRUST routed to the SA900/SA903 surface and excluded from SA105 / CT600 / MTD',
          'Delete vs Archive \u2014 two lifecycles. Delete cleans everything for properties that never completed; Archive preserves history for sold properties',
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
        title: 'Audit Log, GDPR, Multi-User & Self-Host',
        description:
          'Privacy, security and compliance built in \u2014 important for landlords handling tenant data under DPA / UK GDPR obligations. Plan-tier feature gating, an Owner role and multi-user invites with full invite audit. 3,254 regression tests across 243 suites keep cascade-locked contracts pinned at build time.',
        bullets: [
          'AES-256-GCM encryption at rest',
          'Per-account isolated database',
          'Full audit log for every state change',
          'Multi-user with Owner role + invite audit (Starter: up to 3; Pro+: unlimited)',
          'Super-user role bypasses plan gates for admin / Owner accounts',
          'Plan-tier feature gating with one-click upgrade prompts',
          'GDPR data export and erasure',
          'Self-hosted deployment option (Portfolio / Agent tier)',
          '3,254 regression tests across 243 suites \u2014 cascade-locked contract tests fail the build if a route bypasses the canonical writer',
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
            Built for landlords running personal, joint, SPV and inherited-estate portfolios with HMO and
            leasehold exposure. The only UK tool that combines SA105 + CT600 + SA900/SA903 (estate/trust),
            Section 42, Renters&rsquo; Rights Act 2025, and HMO end-to-end compliance in one product.
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
