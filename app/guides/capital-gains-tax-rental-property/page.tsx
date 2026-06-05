import type { Metadata } from 'next'
import { GuideArticle } from '@/components/guide-article'

const CANONICAL = 'https://www.marpropertyinvestments.co.uk/guides/capital-gains-tax-rental-property'
const TITLE = 'Capital Gains Tax When You Sell a Rental Property: A Landlord’s Guide'
const DESCRIPTION =
  'How Capital Gains Tax works when you sell a buy-to-let: calculating the gain, the rates and annual exemption, the 60-day reporting rule, and the reliefs that cut the bill.'

const TAX_DISCLAIMER =
  'This guide is general information, not tax advice. Tax rules, rates and allowances change frequently — check GOV.UK and speak to a qualified accountant for your own circumstances.'

export const metadata: Metadata = {
  title: `${TITLE} | PropertyApp`,
  description: DESCRIPTION,
  keywords: [
    'Capital Gains Tax property',
    'CGT rental property',
    'CGT 60 day rule',
    'private residence relief',
    'lettings relief',
    'selling buy to let tax',
  ],
  alternates: { canonical: '/guides/capital-gains-tax-rental-property' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PropertyApp',
    locale: 'en_GB',
    type: 'article',
  },
}

export default function CgtGuide() {
  return (
    <GuideArticle
      breadcrumb="Capital Gains Tax"
      title={TITLE}
      description={DESCRIPTION}
      canonical={CANONICAL}
      readingTime="8 min read"
      disclaimer={TAX_DISCLAIMER}
      intro="When you sell a rental property for more than you paid, the profit is usually subject to Capital Gains Tax (CGT) — and residential property has its own rules, rates and a tight 60-day reporting deadline. Here’s how the gain is worked out, what you can deduct, the reliefs, and how to report it."
      sections={[
        {
          id: 'what-is-cgt',
          heading: 'What is CGT on a rental property?',
          paragraphs: [
            'Capital Gains Tax is charged on the gain you make when you dispose of an asset that isn’t your main home. For landlords, that usually means selling (or gifting) a buy-to-let. Residential property is taxed at higher CGT rates than most other assets.',
          ],
        },
        {
          id: 'calculating-gain',
          heading: 'How the gain is calculated',
          paragraphs: ['The gain is broadly the sale price less what you paid, less allowable costs:'],
          bullets: [
            'Buying and selling costs (legal fees, the SDLT you paid on purchase, estate-agent fees)',
            'Capital improvements (an extension or a new kitchen — not routine repairs)',
            'Your annual exempt amount (the tax-free CGT allowance, which has been reduced in recent years)',
          ],
        },
        {
          id: 'rates',
          heading: 'Rates and the annual exempt amount',
          paragraphs: [
            'Residential property gains are taxed at higher rates than other assets, and the rate depends on whether the gain falls within your basic-rate band or above it.',
            'The annual exempt amount has been cut significantly — check GOV.UK for the current figures before you sell.',
          ],
        },
        {
          id: 'sixty-day',
          heading: 'The 60-day reporting and payment rule',
          paragraphs: [
            'If you’re an individual disposing of UK residential property and there’s CGT to pay, you must report the disposal and pay the tax within 60 days of completion — separately from your normal Self Assessment. Missing this deadline triggers penalties.',
          ],
        },
        {
          id: 'reliefs',
          heading: 'Reliefs that can reduce the bill',
          bullets: [
            'Private Residence Relief — if the property was ever your main home for a period.',
            'Lettings relief — now restricted to periods of shared occupancy with the tenant.',
            'Transfers between spouses or civil partners — on a no-gain/no-loss basis, useful for using both allowances.',
            'Capital losses — offset losses on other disposals against your gains.',
          ],
        },
        {
          id: 'how-propertyapp-helps',
          heading: 'How PropertyApp helps',
          bullets: [
            'Records the purchase price and capital improvements over the life of each property.',
            'Archive (rather than delete) a sold property so its full financial history is preserved for the calculation.',
            'Keeps the figures and documents your accountant needs in one place.',
          ],
        },
      ]}
      faqs={[
        {
          q: 'When do I have to report and pay CGT on a property?',
          a: 'For UK residential property, within 60 days of completion if there’s tax to pay — separately from Self Assessment.',
        },
        {
          q: 'What is the annual exempt amount?',
          a: 'A tax-free slice of gains each year. It’s been reduced substantially recently, so check the current figure on GOV.UK.',
        },
        {
          q: 'Can I deduct improvement costs?',
          a: 'Yes — genuine capital improvements (like an extension) reduce the gain, but routine repairs don’t (those go against income instead).',
        },
        {
          q: 'Do I pay CGT if I sell through my company?',
          a: 'No — a company pays Corporation Tax on the gain, not CGT. It’s one of several personal-vs-company differences (see our CT600 guide).',
        },
        {
          q: 'Is my own home subject to CGT?',
          a: 'Your main residence is usually covered by Private Residence Relief, so normally there’s no CGT on it.',
        },
      ]}
      ctaTitle="Sell with the numbers ready"
      ctaText="PropertyApp keeps your purchase price, improvements and disposal details in one place — and preserves a sold property’s history — so the CGT calculation is straightforward. Free to start."
    />
  )
}
