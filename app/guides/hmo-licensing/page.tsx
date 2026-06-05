import type { Metadata } from 'next'
import { GuideArticle } from '@/components/guide-article'

const CANONICAL = 'https://www.marpropertyinvestments.co.uk/guides/hmo-licensing'
const TITLE = 'HMO Licensing in the UK: A Landlord’s Guide to Getting It Right'
const DESCRIPTION =
  'What counts as an HMO, the three licensing types (mandatory, additional, selective), room-size and fire-safety standards, the fit & proper test, Article 4, and the penalties for getting it wrong.'

export const metadata: Metadata = {
  title: `${TITLE} | PropertyApp`,
  description: DESCRIPTION,
  keywords: [
    'HMO licensing',
    'HMO licence UK',
    'mandatory HMO licence',
    'additional licensing',
    'selective licensing',
    'HMO room sizes',
    'Article 4 HMO',
  ],
  alternates: { canonical: '/guides/hmo-licensing' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PropertyApp',
    locale: 'en_GB',
    type: 'article',
  },
}

export default function HmoGuide() {
  return (
    <GuideArticle
      breadcrumb="HMO licensing"
      title={TITLE}
      description={DESCRIPTION}
      canonical={CANONICAL}
      readingTime="9 min read"
      intro="Houses in Multiple Occupation come with a licensing regime all of their own — and getting it wrong risks fines and rent repayment orders. Here’s what counts as an HMO, the three licensing types, the room-size and safety standards, and how to stay on the right side of your council."
      sections={[
        {
          id: 'what-is-hmo',
          heading: 'What counts as an HMO?',
          paragraphs: [
            'Broadly, a property is an HMO if at least three tenants live there forming more than one household (i.e. not all one family) and they share facilities such as a kitchen or bathroom. Larger, higher-occupancy HMOs face stricter rules and always need a licence.',
          ],
        },
        {
          id: 'licensing-types',
          heading: 'The three types of HMO licence',
          bullets: [
            'Mandatory licensing — required for HMOs with 5 or more people in 2 or more households, anywhere in England and Wales.',
            'Additional licensing — where a council extends licensing to smaller HMOs in its area.',
            'Selective licensing — where a council requires licensing of most or all private rentals in a designated area, HMO or not.',
          ],
        },
        {
          id: 'standards',
          heading: 'Room sizes, amenities and fire safety',
          bullets: [
            'Minimum room sizes: 6.51m² for one adult, 10.22m² for two (mandatory licence conditions); rooms under 4.64m² can’t be used for sleeping.',
            'Adequate kitchen and bathroom amenities for the number of occupants.',
            'Fire safety: alarms, fire doors, clear escape routes and a Fire Risk Assessment.',
            'Gas safety, electrical (EICR) and other certificates as standard.',
          ],
        },
        {
          id: 'fit-proper-article4',
          heading: 'Fit & proper person and Article 4',
          paragraphs: [
            'Councils apply a “fit and proper person” test to the licence holder and manager. Separately, an Article 4 direction can remove permitted-development rights, so converting a property to a small HMO needs planning permission — always check the local position by postcode.',
          ],
        },
        {
          id: 'penalties',
          heading: 'Penalties for getting it wrong',
          paragraphs: [
            'Operating a licensable HMO without a licence can mean an unlimited fine or a civil penalty, plus a Rent Repayment Order forcing you to pay back up to 12 months’ rent. It can also restrict the possession routes available to you.',
          ],
        },
        {
          id: 'how-propertyapp-helps',
          heading: 'How PropertyApp helps',
          bullets: [
            'HMO licence tracker with council scheme data seeded for 30+ UK councils.',
            'Statutory room-size checker (6.51m² / 10.22m²) and an amenity-ratio calculator.',
            'Fire Risk Assessment and fire-alarm service logs with auto next-due dates.',
            'A Fit & Proper Person register and a portfolio-wide compliance matrix.',
          ],
        },
      ]}
      faqs={[
        {
          q: 'Do all HMOs need a licence?',
          a: 'Not all — but HMOs with 5+ people in 2+ households always need a mandatory licence, and many smaller HMOs need one under additional or selective schemes. Always check with the local council.',
        },
        {
          q: 'What are the minimum room sizes?',
          a: '6.51m² for one adult and 10.22m² for two adults are the mandatory-condition minimums; a room under 4.64m² can’t be used as sleeping accommodation.',
        },
        {
          q: 'What is an Article 4 direction?',
          a: 'It removes permitted-development rights in an area, so converting to a small (C4) HMO needs planning permission. It varies by location, so check by postcode.',
        },
        {
          q: 'What’s the penalty for an unlicensed HMO?',
          a: 'A fine or civil penalty, plus a Rent Repayment Order of up to 12 months’ rent — and it can affect your ability to recover possession.',
        },
        {
          q: 'Does this apply on top of the Renters’ Rights Act?',
          a: 'Yes — HMO licensing sits alongside the wider tenancy rules, so you need to meet both.',
        },
      ]}
      ctaTitle="HMO compliance, end to end"
      ctaText="Licence tracking across 30+ councils, room-size and amenity checks, fire-safety logs and a fit & proper register — all in one place. Free for up to 3 properties."
    />
  )
}
