import type { Metadata } from 'next'
import { GuideArticle } from '@/components/guide-article'

const CANONICAL = 'https://www.marpropertyinvestments.co.uk/guides/right-to-rent-checks'
const TITLE = 'Right to Rent Checks: A Landlord’s Guide to Getting Them Right'
const DESCRIPTION =
  'Who you must check, how to do a Right to Rent check (including digital and online checks), the penalties for getting it wrong, and how to keep a compliant record. England-only.'

export const metadata: Metadata = {
  title: `${TITLE} | PropertyApp`,
  description: DESCRIPTION,
  keywords: [
    'Right to Rent',
    'Right to Rent check',
    'landlord immigration check',
    'share code check',
    'IDVT landlord',
  ],
  alternates: { canonical: '/guides/right-to-rent-checks' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PropertyApp',
    locale: 'en_GB',
    type: 'article',
  },
}

export default function RightToRentGuide() {
  return (
    <GuideArticle
      breadcrumb="Right to Rent checks"
      title={TITLE}
      description={DESCRIPTION}
      canonical={CANONICAL}
      readingTime="7 min read"
      intro="Before you let to a new tenant in England, you must check they have the legal right to rent — and get it wrong and you risk a civil penalty or worse. Here’s who you must check, how to do it (including digital and online checks), and how to keep a compliant record."
      sections={[
        {
          id: 'what-is',
          heading: 'What is a Right to Rent check?',
          paragraphs: [
            'Right to Rent is a legal duty on landlords in England to check that everyone who will live in a property as their main home has an immigration status that allows them to rent. It applies to all occupiers aged 18 and over, whether or not they’re named on the tenancy.',
          ],
        },
        {
          id: 'who-to-check',
          heading: 'Who you must check',
          bullets: [
            'Every adult occupier aged 18 or over who will use the property as their only or main home.',
            'Whether or not they’re named on the tenancy agreement.',
            'Before the tenancy starts — you can’t let first and check later.',
          ],
        },
        {
          id: 'how-to-check',
          heading: 'How to carry out the check',
          bullets: [
            'Manual check: see original documents with the person present, satisfy yourself they’re genuine, and keep dated copies.',
            'Digital identity check via a certified IDVT provider for British and Irish citizens with a valid passport.',
            'Home Office online check using a share code for many non-UK nationals.',
            'Follow-up checks where someone has time-limited permission to stay.',
          ],
        },
        {
          id: 'penalties',
          heading: 'Penalties for getting it wrong',
          paragraphs: [
            'Letting to someone without the right to rent — without a proper check — can mean a civil penalty per tenant, and in serious cases a criminal offence. A correct, documented check gives you a statutory excuse.',
          ],
        },
        {
          id: 'records',
          heading: 'Keeping a compliant record',
          paragraphs: [
            'Keep clear, dated copies of the documents or check results for the length of the tenancy and at least 12 months after it ends. Treat every applicant consistently to avoid discrimination.',
          ],
        },
        {
          id: 'how-propertyapp-helps',
          heading: 'How PropertyApp helps',
          bullets: [
            'Store Right to Rent check evidence against each tenancy.',
            'Set follow-up reminders for time-limited permissions.',
            'Keep the audit trail you need for a statutory excuse.',
          ],
        },
      ]}
      faqs={[
        {
          q: 'Do I have to check tenants who aren’t on the tenancy?',
          a: 'Yes — every adult who will live there as their main home, named on the agreement or not.',
        },
        {
          q: 'Can I do Right to Rent checks online?',
          a: 'Yes — via the Home Office online service with a share code for many tenants, or a certified IDVT provider for British and Irish passport holders. Some still need a manual document check.',
        },
        {
          q: 'Does Right to Rent apply across the UK?',
          a: 'It’s an England-only scheme. Scotland, Wales and Northern Ireland don’t place the same checking duty on landlords.',
        },
        {
          q: 'What’s the penalty for not checking?',
          a: 'A civil penalty per tenant, rising for repeat breaches, and potentially a criminal offence in serious cases.',
        },
        {
          q: 'How long do I keep the records?',
          a: 'For the length of the tenancy and at least 12 months after it ends.',
        },
      ]}
      related={[
        { href: '/guides/renters-rights-act-2026', title: 'Renters’ Rights Act 2026' },
        { href: '/guides/tenancy-deposit-protection', title: 'Tenancy deposit protection' },
        { href: '/guides/hmo-licensing', title: 'HMO licensing' },
      ]}
      ctaTitle="Right to Rent records that give you a statutory excuse"
      ctaText="Store every check against the tenancy, get follow-up reminders, and keep the audit trail that protects you. Free to start."
    />
  )
}
