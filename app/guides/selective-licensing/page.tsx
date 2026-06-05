import type { Metadata } from 'next'
import { GuideArticle } from '@/components/guide-article'

const CANONICAL = 'https://www.marpropertyinvestments.co.uk/guides/selective-licensing'
const TITLE = 'Selective Licensing: Is Your Rental in a Designated Area?'
const DESCRIPTION =
  'Many councils require a licence for ordinary private rentals in designated areas. How selective licensing works, how to check if your property is covered, what’s involved, and the penalties for letting without one.'

export const metadata: Metadata = {
  title: `${TITLE} | PropertyApp`,
  description: DESCRIPTION,
  keywords: [
    'selective licensing',
    'selective licence landlord',
    'private rented licensing area',
    'do I need a selective licence',
    'rent repayment order',
  ],
  alternates: { canonical: '/guides/selective-licensing' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PropertyApp',
    locale: 'en_GB',
    type: 'article',
  },
}

export default function SelectiveLicensingGuide() {
  return (
    <GuideArticle
      breadcrumb="Selective licensing"
      title={TITLE}
      description={DESCRIPTION}
      canonical={CANONICAL}
      readingTime="7 min read"
      intro="Beyond HMO licensing, many councils run “selective licensing” schemes that require a licence for ordinary private rentals in designated areas. Here’s how selective licensing works, how to check if your property is covered, what’s involved, and the penalties for letting without a licence."
      sections={[
        {
          id: 'what-is',
          heading: 'What is selective licensing?',
          paragraphs: [
            'Selective licensing lets a council require most or all privately rented homes in a designated area to be licensed — regardless of whether they’re HMOs. Councils use it to tackle low housing demand, anti-social behaviour or poor property conditions in specific areas.',
          ],
        },
        {
          id: 'how-to-check',
          heading: 'How to check if your area is covered',
          bullets: [
            'Check the local council’s website for designated selective licensing areas.',
            'Schemes are area-specific and time-limited (typically up to five years), so they change.',
            'One street can be in a scheme while a neighbouring one isn’t — always check by exact address.',
          ],
        },
        {
          id: 'whats-involved',
          heading: 'What’s involved',
          paragraphs: [
            'You apply to the council, pay a fee, and meet licence conditions covering things like management standards, safety certificates and tenancy paperwork. The licence holder must usually pass a “fit and proper person” test.',
          ],
        },
        {
          id: 'penalties',
          heading: 'Penalties for not licensing',
          paragraphs: [
            'Letting a licensable property without a licence can mean an unlimited fine or a civil penalty, plus a Rent Repayment Order of up to 12 months’ rent — the same teeth as HMO licensing.',
          ],
        },
        {
          id: 'vs-hmo',
          heading: 'Selective vs HMO licensing',
          paragraphs: [
            'An HMO may need a mandatory or additional HMO licence; a single-family let in a selective area needs a selective licence. Some properties fall under both regimes — check carefully so you hold the right licence(s).',
          ],
        },
        {
          id: 'how-propertyapp-helps',
          heading: 'How PropertyApp helps',
          bullets: [
            'Track each property’s licence type, reference and expiry.',
            'Reminders before a licence lapses.',
            'A portfolio-wide compliance matrix across HMO and selective licences.',
          ],
        },
      ]}
      faqs={[
        {
          q: 'How do I know if selective licensing applies?',
          a: 'Check your council’s designated areas by exact address — schemes are local and time-limited.',
        },
        {
          q: 'Does selective licensing apply to non-HMOs?',
          a: 'Yes — that’s the point: it can require a licence for ordinary single-family lets in a designated area.',
        },
        {
          q: 'How long does a scheme last?',
          a: 'Schemes are usually time-limited (often up to five years) and can be renewed or dropped.',
        },
        {
          q: 'What’s the penalty for not licensing?',
          a: 'An unlimited fine or civil penalty, plus a Rent Repayment Order of up to 12 months’ rent.',
        },
        {
          q: 'Is this the same as an HMO licence?',
          a: 'No — they’re separate regimes; some properties need to be assessed under both.',
        },
      ]}
      related={[
        { href: '/guides/hmo-licensing', title: 'HMO licensing' },
        { href: '/guides/renters-rights-act-2026', title: 'Renters’ Rights Act 2026' },
        { href: '/guides/section-42-lease-extension', title: 'Section 42 lease extensions' },
      ]}
      ctaTitle="Never miss a licence renewal"
      ctaText="Track licence type, reference and expiry for every property — HMO and selective — with reminders before they lapse. Free for up to 3 properties."
    />
  )
}
