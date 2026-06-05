// Single source of truth for the RRA readiness checker.
// Imported by both the client component and the /api/rra-check route, so the
// emailed action plan is computed server-side from the same definitions
// (no trusting client-sent prose).

export type RraAnswer = 'yes' | 'no' | 'unsure'

export interface RraQuestion {
  id: string
  question: string
  helper: string
  /** What to do when the answer isn't "yes". */
  action: string
}

export const QUESTIONS: RraQuestion[] = [
  {
    id: 'section21',
    question: 'Have you stopped relying on Section 21, and do you know which Section 8 ground you’d use instead?',
    helper: 'Section 21 “no-fault” evictions are abolished — possession now needs an evidenced Section 8 ground.',
    action: 'Stop using Section 21; learn the Section 8 grounds and keep dated evidence (arrears, breaches, ASB) on file.',
  },
  {
    id: 'periodic',
    question: 'Are your tenancies set up as periodic (rolling) tenancies?',
    helper: 'Fixed terms are replaced by month-to-month periodic tenancies.',
    action: 'Update your tenancy templates to the periodic model and track rent and terms by period.',
  },
  {
    id: 'rent',
    question: 'Do you only increase rent via a Section 13 notice (Form 4A), once a year?',
    helper: 'Rent-review clauses are out; increases must use the statutory process, at most once a year.',
    action: 'Use the Section 13 / Form 4A process with proper notice, and be ready to justify the new rent.',
  },
  {
    id: 'ombudsman',
    question: 'Are you ready to join the landlord Ombudsman / redress scheme?',
    helper: 'Membership of an approved redress scheme becomes mandatory for every landlord.',
    action: 'Register with the approved landlord redress scheme and set up a written complaints process.',
  },
  {
    id: 'database',
    question: 'Are you ready to register on the Private Rented Sector database?',
    helper: 'Landlords and their properties must appear on the new PRS database.',
    action: 'Register yourself and each property once the database is live, and keep entries current.',
  },
  {
    id: 'terms',
    question: 'Has every tenant been given up-to-date written terms and the required information?',
    helper: 'Tenants must receive a written statement of terms and the prescribed information.',
    action: 'Issue or refresh written terms for every tenancy and re-send whenever something changes.',
  },
  {
    id: 'decenthomes',
    question: 'Does every property meet the Decent Homes Standard?',
    helper: 'The standard now applies to the private rented sector — no serious hazards, kept in good repair.',
    action: 'Audit each property against the standard and schedule any remedial works.',
  },
  {
    id: 'awaab',
    question: 'Can you deal with damp & mould within the new statutory timescales (Awaab’s Law)?',
    helper: 'Dangerous hazards must be investigated and fixed to a strict timetable.',
    action: 'Put a fast hazard-reporting and response process in place, and log every report with dates.',
  },
  {
    id: 'fairness',
    question: 'Do you have a fair pet-request process and no “No DSS” / “No children” wording?',
    helper: 'You can’t unreasonably refuse pets, or discriminate against benefit claimants or families.',
    action: 'Adopt a written pet-request process and remove discriminatory wording from adverts and policies.',
  },
  {
    id: 'audit',
    question: 'Do you keep a dated audit trail (notices, certificates, ASB logs) per property?',
    helper: 'Records are your defence if a council or the Ombudsman asks questions.',
    action: 'Keep a dated, per-property record of every notice, certificate and incident.',
  },
]
