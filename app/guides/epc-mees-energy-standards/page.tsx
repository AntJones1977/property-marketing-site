import type { Metadata } from 'next'
import { GuideArticle } from '@/components/guide-article'

const CANONICAL = 'https://www.marpropertyinvestments.co.uk/guides/epc-mees-energy-standards'
const TITLE = 'EPC & MEES: Minimum Energy Efficiency Standards for Landlords'
const DESCRIPTION =
  'What EPCs and MEES mean for landlords: the current EPC E minimum, the proposed move to EPC C, exemptions and the cost cap, penalties, and how to improve a rating.'

export const metadata: Metadata = {
  title: `${TITLE} | PropertyApp`,
  description: DESCRIPTION,
  keywords: [
    'EPC landlord',
    'MEES',
    'minimum energy efficiency standards',
    'EPC C rented homes',
    'EPC E minimum',
    'PRS exemptions register',
  ],
  alternates: { canonical: '/guides/epc-mees-energy-standards' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PropertyApp',
    locale: 'en_GB',
    type: 'article',
  },
}

export default function EpcGuide() {
  return (
    <GuideArticle
      breadcrumb="EPC & MEES"
      title={TITLE}
      description={DESCRIPTION}
      canonical={CANONICAL}
      readingTime="7 min read"
      intro="You can’t legally let most properties below a minimum energy rating — and the bar is set to rise. Here’s what EPCs and MEES are, the current standard, the proposed move to EPC C, exemptions, penalties, and how to keep on top of it."
      sections={[
        {
          id: 'what-are',
          heading: 'What are EPCs and MEES?',
          paragraphs: [
            'An Energy Performance Certificate (EPC) rates a property’s energy efficiency from A (best) to G (worst) and is valid for 10 years. The Minimum Energy Efficiency Standards (MEES) set the lowest rating at which you’re allowed to let a property.',
          ],
        },
        {
          id: 'current-standard',
          heading: 'The current minimum — and the proposed EPC C',
          paragraphs: [
            'Currently you generally can’t grant or continue a tenancy on a property rated F or G — the minimum is EPC E.',
            'The government has proposed raising the minimum to EPC C for rented homes, though the timeline has shifted. Check GOV.UK for the latest confirmed standard and dates before you plan works.',
          ],
        },
        {
          id: 'exemptions',
          heading: 'Exemptions and the cost cap',
          paragraphs: [
            'If you genuinely can’t reach the standard, you may register a time-limited exemption on the PRS Exemptions Register — for example where you’ve spent up to the cost cap on improvements without reaching the rating, or where you can’t get the necessary consents.',
          ],
        },
        {
          id: 'penalties',
          heading: 'Penalties',
          paragraphs: [
            'Letting a property below the standard without a valid exemption can lead to civil penalties from the local authority, which increase with how long the breach has lasted.',
          ],
        },
        {
          id: 'improving',
          heading: 'Improving your EPC',
          bullets: [
            'Loft and cavity-wall insulation',
            'A more efficient boiler or better heating controls',
            'Double or secondary glazing',
            'Low-energy lighting and draught-proofing',
          ],
        },
        {
          id: 'how-propertyapp-helps',
          heading: 'How PropertyApp helps',
          bullets: [
            'Store each property’s EPC with its expiry date.',
            'Compliance-calendar reminders before certificates lapse.',
            'A portfolio-wide compliance matrix so no property slips below standard.',
          ],
        },
      ]}
      faqs={[
        {
          q: 'What EPC rating do I need to let a property?',
          a: 'Currently at least an E. The government has proposed raising it to C for rented homes — check GOV.UK for the confirmed standard and dates.',
        },
        {
          q: 'How long does an EPC last?',
          a: '10 years from the date it’s issued.',
        },
        {
          q: 'What if I can’t reach the minimum?',
          a: 'You may be able to register a time-limited exemption on the PRS Exemptions Register, for example after spending up to the cost cap on improvements.',
        },
        {
          q: 'What’s the penalty for letting a sub-standard property?',
          a: 'A civil penalty from the local authority, increasing with how long the breach has lasted.',
        },
        {
          q: 'Does this link to the Renters’ Rights Act?',
          a: 'They’re separate regimes, but both push up property standards — and the Decent Homes Standard under the RRA overlaps with energy efficiency.',
        },
      ]}
      ctaTitle="Never let an EPC lapse"
      ctaText="Store EPCs with expiry dates, get reminders before they run out, and see your whole portfolio’s standing at a glance. Free for up to 3 properties."
    />
  )
}
