import type { Metadata } from 'next'
import { RraChecker } from './rra-checker'

const TITLE = 'Free Renters’ Rights Act 2026 Compliance Check for Landlords'
const DESCRIPTION =
  'Answer 10 quick questions and get your personalised Renters’ Rights Act 2026 readiness score and action plan, emailed to you. Free for UK landlords — about 2 minutes.'

export const metadata: Metadata = {
  title: `${TITLE} | PropertyApp`,
  description: DESCRIPTION,
  keywords: [
    'Renters Rights Act checker',
    'RRA 2026 compliance check',
    'landlord compliance checklist',
    'am I RRA compliant',
  ],
  alternates: { canonical: '/rra-check' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.marpropertyinvestments.co.uk/rra-check',
    siteName: 'PropertyApp',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RraCheckPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-background to-muted/30 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Are you Renters&rsquo; Rights Act 2026 ready?
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Answer 10 quick questions and get your readiness score plus a personalised action plan in your
            inbox. Free, and about two minutes.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-2xl px-6">
          <RraChecker />
          <p className="mt-6 text-center text-xs text-muted-foreground">
            General guidance, not legal advice. We&rsquo;ll only use your email to send your action plan and
            occasional updates — unsubscribe any time.
          </p>
        </div>
      </section>
    </>
  )
}
