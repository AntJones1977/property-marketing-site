import type { Metadata } from 'next'
import { GuideArticle } from '@/components/guide-article'

const CANONICAL = 'https://www.marpropertyinvestments.co.uk/guides/sa105-landlord-tax'
const TITLE = 'SA105 Explained: The UK Landlord’s Guide to Property Income Tax'
const DESCRIPTION =
  'What the SA105 is, who needs to file it, what counts as income and allowable expenses, how the Section 24 mortgage-interest rules work, and the Self Assessment deadlines.'

const TAX_DISCLAIMER =
  'This guide is general information, not tax advice. Tax rules, rates and allowances change frequently — check GOV.UK and speak to a qualified accountant for your own circumstances.'

export const metadata: Metadata = {
  title: `${TITLE} | PropertyApp`,
  description: DESCRIPTION,
  keywords: [
    'SA105',
    'SA105 property income',
    'landlord tax return',
    'Section 24 mortgage interest',
    'property allowance',
    'Self Assessment landlord',
  ],
  alternates: { canonical: '/guides/sa105-landlord-tax' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PropertyApp',
    locale: 'en_GB',
    type: 'article',
  },
}

export default function Sa105Guide() {
  return (
    <GuideArticle
      breadcrumb="SA105 property income tax"
      title={TITLE}
      description={DESCRIPTION}
      canonical={CANONICAL}
      readingTime="9 min read"
      disclaimer={TAX_DISCLAIMER}
      intro="The SA105 is the “UK property” supplementary page you attach to your Self Assessment to declare rental income. If you let property as an individual, this is where your rental profit — and the tax on it — is worked out. Here’s who needs it, what you can and can’t deduct, how the Section 24 mortgage rules bite, and the deadlines that matter."
      sections={[
        {
          id: 'what-is-sa105',
          heading: 'What is the SA105?',
          paragraphs: [
            'The SA105 is the supplementary page of the Self Assessment return (SA100) used to report income from UK land and property. It covers residential and commercial lettings, furnished and unfurnished — furnished holiday lettings have their own separate rules.',
            'You combine the figures for your UK residential properties, totalling income and allowable expenses to arrive at a single taxable profit or loss for the year.',
          ],
        },
        {
          id: 'who-needs',
          heading: 'Who needs to file an SA105?',
          bullets: [
            'Individuals receiving UK rental income above the £1,000 property allowance.',
            'Jointly-owned property: each owner reports their share on their own return (married couples are 50/50 by default unless a valid Form 17 declaration says otherwise).',
            'You generally don’t need it if gross property income is under £1,000 (the property allowance covers it) or it’s fully within Rent-a-Room relief (£7,500).',
          ],
        },
        {
          id: 'income-expenses',
          heading: 'Income and allowable expenses',
          paragraphs: [
            'Income is the rent and related charges you receive. From that you deduct allowable, wholly-and-exclusively revenue expenses such as:',
          ],
          bullets: [
            'Repairs and maintenance (restoring, not improving)',
            'Letting agent and management fees',
            'Landlord insurance',
            'Ground rent, service charges and any utilities you pay',
            'Accountancy and certain professional fees',
            'Replacement of domestic items relief (replacing furniture/appliances — this replaced the old wear-and-tear allowance)',
          ],
        },
        {
          id: 'section-24',
          heading: 'Mortgage interest and Section 24',
          paragraphs: [
            'For residential lets, mortgage interest and other finance costs are no longer a deductible expense. Instead you get a finance-cost tax reducer worth 20% of the interest.',
            'For higher- and additional-rate taxpayers this is far less generous than the old full deduction — which is a major reason some landlords move properties into a limited company (see our CT600 guide).',
          ],
        },
        {
          id: 'deadlines',
          heading: 'Deadlines and Making Tax Digital',
          bullets: [
            'Register for Self Assessment by 5 October after the tax year you first need to file.',
            'Paper return: 31 October. Online return and payment: 31 January.',
            'Payments on account may be due (31 January and 31 July).',
            'Making Tax Digital for Income Tax is being phased in for landlords above the income threshold — quarterly digital updates plus a final declaration. Check GOV.UK for when you’re brought in.',
          ],
        },
        {
          id: 'how-propertyapp-helps',
          heading: 'How PropertyApp helps with your SA105',
          bullets: [
            'Generates SA105-ready figures mapped to the correct boxes — per property and portfolio-wide.',
            'Splits joint-ownership income automatically.',
            'Time-based records so a mid-year rent or cost change lands in the right tax year.',
            'AI receipt scanning straight into the right HMRC category.',
            'Lock the year and email a clean summary to your accountant; MTD quarterly submissions built in.',
          ],
        },
      ]}
      faqs={[
        {
          q: 'Do I need to file an SA105 if I made a loss?',
          a: 'Usually yes — and it’s worth it. Reporting a rental loss lets you carry it forward to set against future rental profits.',
        },
        {
          q: 'What is the £1,000 property allowance?',
          a: 'A tax-free allowance for property income. If your gross rental income is £1,000 or less it’s usually tax-free; above that you can deduct your actual expenses or claim the £1,000 allowance instead — whichever leaves you better off.',
        },
        {
          q: 'Can I deduct my mortgage payments?',
          a: 'Only the interest counts, and for residential lets it’s no longer a straight deduction — it’s a 20% basic-rate tax reducer under Section 24. Capital repayments are never deductible.',
        },
        {
          q: 'How is jointly-owned property taxed?',
          a: 'Each owner declares their share of income and expenses on their own return. Married couples and civil partners are taxed 50/50 by default unless they make a valid Form 17 declaration reflecting actual ownership.',
        },
        {
          q: 'When is the SA105 deadline?',
          a: 'It’s part of your Self Assessment: 31 October for paper filing, and 31 January for online filing and payment.',
        },
      ]}
      ctaTitle="Your SA105, done in minutes — not a spreadsheet weekend"
      ctaText="PropertyApp maps your income and expenses to the right SA105 boxes, handles joint ownership and Section 24, and lets you lock the year and email your accountant. Free for up to 3 properties."
      related={[
        { href: '/guides/ct600-property-spv-tax', title: 'CT600 for property companies' },
        { href: '/guides/capital-gains-tax-rental-property', title: 'Capital Gains Tax on a sale' },
        { href: '/guides/sa900-estate-trust-tax', title: 'SA900: estate & trust tax' },
      ]}
    />
  )
}
