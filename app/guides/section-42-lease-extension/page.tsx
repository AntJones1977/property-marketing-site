import type { Metadata } from 'next'
import { GuideArticle } from '@/components/guide-article'

const CANONICAL = 'https://www.marpropertyinvestments.co.uk/guides/section-42-lease-extension'
const TITLE = 'Section 42: How to Extend a Short Residential Lease'
const DESCRIPTION =
  'The statutory route to extend a flat’s lease: how Section 42 works, the 80-year “marriage value” cliff edge, the notice and counter-notice process, and how leasehold reform is changing the rules.'

export const metadata: Metadata = {
  title: `${TITLE} | PropertyApp`,
  description: DESCRIPTION,
  keywords: [
    'Section 42 lease extension',
    'extend leasehold flat',
    '80 year lease',
    'marriage value',
    'leasehold reform',
    'statutory lease extension',
  ],
  alternates: { canonical: '/guides/section-42-lease-extension' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PropertyApp',
    locale: 'en_GB',
    type: 'article',
  },
}

export default function Section42Guide() {
  return (
    <GuideArticle
      breadcrumb="Section 42 lease extensions"
      title={TITLE}
      description={DESCRIPTION}
      canonical={CANONICAL}
      readingTime="8 min read"
      intro="If you own a flat on a lease, the term shrinks every year — and once it nears 80 years, extending gets sharply more expensive. Section 42 is the statutory route to extend a residential lease. Here’s how it works, the 80-year cliff edge, the process, and how recent leasehold reform is changing the rules."
      sections={[
        {
          id: 'what-is-s42',
          heading: 'What is a Section 42 lease extension?',
          paragraphs: [
            'Section 42 of the Leasehold Reform, Housing and Urban Development Act 1993 gives qualifying leaseholders of flats the statutory right to extend their lease. The extension adds years to the term and usually reduces the ground rent, in exchange for a premium paid to the freeholder.',
          ],
        },
        {
          id: 'who-qualifies',
          heading: 'Who qualifies',
          paragraphs: [
            'You generally need to be the leaseholder of a flat held on a long lease. Historically there was a two-year ownership requirement before you could claim — but leasehold reform is changing the qualifying rules, so check the current position before you serve notice.',
          ],
        },
        {
          id: '80-year',
          heading: 'The 80-year cliff edge',
          paragraphs: [
            'Once a lease drops below 80 years, “marriage value” has historically been added to the premium, making an extension significantly more expensive. Extending before you hit 80 years can save thousands — though reform is changing how the premium is calculated.',
          ],
        },
        {
          id: 'the-process',
          heading: 'The Section 42 process',
          bullets: [
            'Serve a Section 42 notice on the freeholder, proposing the terms and a premium.',
            'The freeholder serves a counter-notice (usually within two months).',
            'Negotiate the premium; if you can’t agree, the First-tier Tribunal can decide.',
            'Complete the new lease and pay the premium.',
          ],
        },
        {
          id: 'reform',
          heading: 'How leasehold reform changes things',
          paragraphs: [
            'The Leasehold and Freehold Reform Act 2024 is reshaping lease extensions — for example, longer standard extension terms, changes to the ownership qualifying period, and reform of marriage value. Provisions are being brought in over time, so the exact position depends on what’s in force when you act. Take specialist advice before serving notice.',
          ],
        },
        {
          id: 'how-propertyapp-helps',
          heading: 'How PropertyApp helps',
          bullets: [
            'Track each lease extension through notice → counter-notice → tribunal → completion.',
            'An 80-year cliff-edge warning so you act before the premium jumps.',
            'Built-in legal reference at each step, linked to your property and solicitor.',
          ],
        },
      ]}
      faqs={[
        {
          q: 'When should I extend my lease?',
          a: 'Ideally well before it drops below 80 years, after which the premium has historically risen sharply due to marriage value. Reform is changing this, so check the current rules.',
        },
        {
          q: 'How long does a Section 42 extension add?',
          a: 'The statutory extension has traditionally added 90 years to the existing term for flats; leasehold reform is increasing standard extension lengths, so confirm the current entitlement.',
        },
        {
          q: 'What is marriage value?',
          a: 'An extra element of the premium that has applied once a lease falls below 80 years. Its future is being changed by leasehold reform.',
        },
        {
          q: 'What if the freeholder won’t agree?',
          a: 'If you can’t agree terms, the First-tier Tribunal can determine the premium and the terms of the extension.',
        },
        {
          q: 'Does this apply to houses?',
          a: 'Section 42 is the route for flats; leasehold houses have a separate statutory regime.',
        },
      ]}
      ctaTitle="Never miss the 80-year cliff edge"
      ctaText="PropertyApp tracks every Section 42 lease extension from notice to completion, with an 80-year warning and built-in legal reference. Free to start."
    />
  )
}
