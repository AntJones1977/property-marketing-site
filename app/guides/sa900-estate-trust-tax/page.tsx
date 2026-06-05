import type { Metadata } from 'next'
import { GuideArticle } from '@/components/guide-article'

const CANONICAL = 'https://www.marpropertyinvestments.co.uk/guides/sa900-estate-trust-tax'
const TITLE = 'SA900 & SA903: Tax on Inherited and Trust Property Explained'
const DESCRIPTION =
  'How rental income from a trust or a deceased person’s estate is taxed: the SA900 Trust and Estate Tax Return, the SA903 property pages, the Section 24 reducer, R185s to beneficiaries and the deadlines.'

const TAX_DISCLAIMER =
  'This guide is general information, not tax advice. Trust and estate taxation is complex and the rules, rates and bands change — check GOV.UK and take advice from a qualified accountant or tax adviser.'

export const metadata: Metadata = {
  title: `${TITLE} | PropertyApp`,
  description: DESCRIPTION,
  keywords: [
    'SA900',
    'SA903',
    'trust and estate tax return',
    'estate rental income tax',
    'R185 beneficiary',
    'trust property income',
    'inherited property tax',
  ],
  alternates: { canonical: '/guides/sa900-estate-trust-tax' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PropertyApp',
    locale: 'en_GB',
    type: 'article',
  },
}

export default function Sa900Guide() {
  return (
    <GuideArticle
      breadcrumb="SA900 estate & trust tax"
      title={TITLE}
      description={DESCRIPTION}
      canonical={CANONICAL}
      readingTime="9 min read"
      disclaimer={TAX_DISCLAIMER}
      intro="When property is held by a trust, or by the estate of someone who has died, the rental income isn’t reported on a normal Self Assessment — it goes on the Trust and Estate Tax Return (SA900), with the SA903 supplementary pages for property. Here’s how estate and trust property income is taxed, the Section 24 reducer, R185s to beneficiaries, and the deadlines."
      sections={[
        {
          id: 'what-are',
          heading: 'What are the SA900 and SA903?',
          paragraphs: [
            'The SA900 is the Trust and Estate Tax Return. The SA903 is its “UK property” supplementary pages — the trust-and-estate equivalent of an individual’s SA105.',
            'Personal representatives administering an estate, and trustees of trusts that hold property, use them to report rental income and work out the tax due.',
          ],
        },
        {
          id: 'who-needs',
          heading: 'Who needs to file?',
          bullets: [
            'Personal representatives (executors or administrators) of an estate that receives rental income during administration.',
            'Trustees of a trust that holds let property.',
          ],
          paragraphs: [
            'The tax treatment depends on the type: an estate in administration, an interest-in-possession trust, or a discretionary trust each have different rules and rates.',
          ],
        },
        {
          id: 'how-taxed',
          heading: 'How estate and trust property income is taxed',
          paragraphs: [
            'Rental profits are charged to income tax. The rate depends on the regime — for example, discretionary trusts have a standard-rate band and then trust rates, while an estate in administration is taxed at the basic rate.',
            'Crucially, the Section 24 finance-cost restriction still applies to residential mortgage interest, exactly as it does for individuals.',
          ],
        },
        {
          id: 'r185',
          heading: 'R185: passing income to beneficiaries',
          paragraphs: [
            'When income is paid out to a beneficiary, they receive a form R185 showing the income and the tax already accounted for. The beneficiary uses that to include the income on their own tax return and claim credit for the tax — so the same income isn’t taxed twice.',
          ],
        },
        {
          id: 'carry-forward',
          heading: 'Carrying losses and finance costs forward',
          paragraphs: [
            'Unused property losses and unused residential finance costs are carried forward to future years — the same principle as on an individual’s return.',
          ],
        },
        {
          id: 'deadlines',
          heading: 'Key deadlines',
          bullets: [
            'SA900 online: 31 January after the end of the tax year.',
            'SA900 paper: 31 October.',
            'Tax is generally due by 31 January.',
          ],
        },
        {
          id: 'how-propertyapp-helps',
          heading: 'How PropertyApp helps with SA900 / SA903',
          paragraphs: [
            'No mainstream landlord tool touches estate and trust property tax — most don’t even model the ownership type. PropertyApp does:',
          ],
          bullets: [
            'Generates the SA903 “UK property” working sheet from your live rent, expense and mortgage-interest data.',
            'Computes the SA900 estate income tax with the Section 24 reducer and de minimis, and apportions residuary income to beneficiaries via R185.',
            'Fills the real HMRC SA903 PDF at calibrated coordinates, with an in-app calibration overlay for future years.',
            'Carries unused losses and finance costs forward automatically, and tracks the return in the filing tracker.',
          ],
        },
      ]}
      faqs={[
        {
          q: 'Do I pay tax on rental income during probate?',
          a: 'Yes. While an estate is being administered, rental income the estate receives is taxable, and the personal representatives report it on the SA900.',
        },
        {
          q: 'What’s the difference between SA105 and SA903?',
          a: 'SA105 is the UK-property page for an individual’s Self Assessment; SA903 is the equivalent UK-property page for a trust or estate’s SA900 return.',
        },
        {
          q: 'What is an R185?',
          a: 'A statement given to a beneficiary showing the income paid to them and the tax already accounted for, so they can include it correctly on their own return and avoid double taxation.',
        },
        {
          q: 'Does Section 24 apply to trusts and estates?',
          a: 'Yes — the residential finance-cost restriction applies to trusts and estates, not just to individuals.',
        },
        {
          q: 'When is the SA900 deadline?',
          a: '31 October for paper filing and 31 January for online filing, mirroring Self Assessment.',
        },
      ]}
      ctaTitle="The only landlord app that handles estate & trust tax"
      ctaText="PropertyApp generates the SA903 worksheet from live data, computes SA900 estate income tax with the Section 24 reducer, and apportions R185s to beneficiaries — alongside your SA105 and CT600. Free to start."
    />
  )
}
