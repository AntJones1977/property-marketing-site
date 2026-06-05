import type { Metadata } from 'next'
import { GuideArticle } from '@/components/guide-article'

const CANONICAL = 'https://www.marpropertyinvestments.co.uk/guides/tenancy-deposit-protection'
const TITLE = 'Tenancy Deposit Protection: A Landlord’s Guide to Getting It Right'
const DESCRIPTION =
  'The deposit protection rules every landlord must follow: the 30-day deadline, the three approved schemes, the deposit cap, the penalties for non-compliance, and end-of-tenancy disputes.'

export const metadata: Metadata = {
  title: `${TITLE} | PropertyApp`,
  description: DESCRIPTION,
  keywords: [
    'tenancy deposit protection',
    'deposit scheme landlord',
    'deposit cap Tenant Fees Act',
    'prescribed information deposit',
    'DPS MyDeposits TDS',
  ],
  alternates: { canonical: '/guides/tenancy-deposit-protection' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PropertyApp',
    locale: 'en_GB',
    type: 'article',
  },
}

export default function DepositGuide() {
  return (
    <GuideArticle
      breadcrumb="Deposit protection"
      title={TITLE}
      description={DESCRIPTION}
      canonical={CANONICAL}
      readingTime="7 min read"
      intro="Take a deposit on an assured shorthold tenancy and the clock starts: you must protect it in an approved scheme and give the tenant prescribed information — or face penalties of up to three times the deposit. Here’s how to get deposit protection right."
      sections={[
        {
          id: 'the-rules',
          heading: 'The deposit protection rules',
          paragraphs: [
            'If you take a deposit for an assured shorthold tenancy, you must protect it in a government-approved scheme within 30 days of receiving it, and give the tenant the “prescribed information” about where and how it’s protected.',
          ],
        },
        {
          id: 'the-schemes',
          heading: 'The three approved schemes',
          bullets: [
            'Deposit Protection Service (DPS)',
            'MyDeposits',
            'Tenancy Deposit Scheme (TDS)',
          ],
          paragraphs: [
            'Each offers a custodial option (the scheme holds the money, usually free) and an insured option (you hold the money and pay a fee).',
          ],
        },
        {
          id: 'deposit-cap',
          heading: 'How much you can take (the deposit cap)',
          paragraphs: [
            'Under the Tenant Fees Act, deposits are capped: five weeks’ rent where the annual rent is under £50,000, and six weeks’ rent where it’s £50,000 or more.',
          ],
        },
        {
          id: 'penalties',
          heading: 'Penalties for getting it wrong',
          paragraphs: [
            'If you don’t protect the deposit or give the prescribed information, a tenant can claim a penalty of one to three times the deposit — and it can undermine your ability to recover possession.',
          ],
        },
        {
          id: 'end-of-tenancy',
          heading: 'At the end of the tenancy',
          paragraphs: [
            'Return the deposit promptly, agreeing any deductions for damage (beyond fair wear and tear) or unpaid rent. If you can’t agree, the scheme’s free dispute-resolution service can adjudicate.',
          ],
        },
        {
          id: 'how-propertyapp-helps',
          heading: 'How PropertyApp helps',
          bullets: [
            'Record the deposit amount, scheme and protection date against each tenancy.',
            'Time-based tenancy history, so a deposit change opens a new period and prompts an updated Statement of Tenancy Terms.',
            'Document storage for the prescribed information and the scheme certificate.',
          ],
        },
      ]}
      faqs={[
        {
          q: 'How long do I have to protect a deposit?',
          a: 'Within 30 days of receiving it — and you must give the tenant the prescribed information in the same window.',
        },
        {
          q: 'Which scheme should I use?',
          a: 'Any of the three approved schemes (DPS, MyDeposits, TDS); choose custodial (the scheme holds it) or insured (you hold it and pay a fee).',
        },
        {
          q: 'How much deposit can I take?',
          a: 'Five weeks’ rent if the annual rent is under £50,000; six weeks’ if it’s £50,000 or more.',
        },
        {
          q: 'What happens if I don’t protect it?',
          a: 'The tenant can claim one to three times the deposit, and it can block possession routes.',
        },
        {
          q: 'Who resolves deposit disputes?',
          a: 'Each scheme runs a free dispute-resolution service to adjudicate deductions at the end of the tenancy.',
        },
      ]}
      ctaTitle="Deposit protection you can prove"
      ctaText="Track the amount, scheme and protection date for every tenancy, with the prescribed information stored alongside. Free to start."
    />
  )
}
