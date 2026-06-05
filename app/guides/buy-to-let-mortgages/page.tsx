import type { Metadata } from 'next'
import { GuideArticle } from '@/components/guide-article'

const CANONICAL = 'https://www.marpropertyinvestments.co.uk/guides/buy-to-let-mortgages'
const TITLE = 'Buy-to-Let Mortgages: A Primer for UK Landlords'
const DESCRIPTION =
  'How buy-to-let mortgages differ from residential ones: deposits, interest-only, rental stress tests (ICR), personal vs limited-company borrowing, and remortgaging.'

export const metadata: Metadata = {
  title: `${TITLE} | PropertyApp`,
  description: DESCRIPTION,
  keywords: [
    'buy to let mortgage',
    'BTL mortgage',
    'limited company buy to let',
    'rental stress test ICR',
    'interest only mortgage landlord',
    'remortgage buy to let',
  ],
  alternates: { canonical: '/guides/buy-to-let-mortgages' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PropertyApp',
    locale: 'en_GB',
    type: 'article',
  },
}

export default function MortgagesGuide() {
  return (
    <GuideArticle
      breadcrumb="Buy-to-let mortgages"
      title={TITLE}
      description={DESCRIPTION}
      canonical={CANONICAL}
      readingTime="7 min read"
      intro="Buy-to-let mortgages work differently from residential ones — different deposits, affordability tests and tax treatment. Here’s how BTL lending works, the personal-vs-company choice, and what to watch at remortgage time."
      sections={[
        {
          id: 'how-btl-differs',
          heading: 'How buy-to-let mortgages differ',
          bullets: [
            'Often interest-only, so monthly payments are lower but you repay the capital at the end.',
            'Bigger deposits — typically around 25% of the value or more.',
            'Affordability is based on rental income (an interest coverage ratio, or stress test), not just your salary.',
            'Product fees can be higher, and some are charged as a percentage of the loan.',
          ],
        },
        {
          id: 'personal-vs-company',
          heading: 'Personal vs limited-company BTL',
          paragraphs: [
            'Many landlords borrow through a limited company (SPV) for the full mortgage-interest relief that Section 24 denies individuals. Company BTL rates are often a little higher and lenders are more specialist — weigh the tax saving against the cost and admin (see our CT600 and SA105 guides).',
          ],
        },
        {
          id: 'stress-tests',
          heading: 'Rental stress tests (ICR)',
          paragraphs: [
            'Lenders apply an interest coverage ratio — your rent must exceed the mortgage interest by a set margin at a stressed interest rate. Higher-rate taxpayers borrowing personally often face tougher tests, which is another reason company structures are popular.',
          ],
        },
        {
          id: 'remortgaging',
          heading: 'Remortgaging and fixed-rate ends',
          paragraphs: [
            'Track when your fixed rate ends — rolling onto the lender’s standard variable rate can sharply raise your costs. Plan your remortgage a few months ahead so you’re not caught out.',
          ],
        },
        {
          id: 'how-propertyapp-helps',
          heading: 'How PropertyApp helps',
          bullets: [
            'Record each mortgage — lender, rate, type and balance.',
            'Fixed-rate end-date alerts so you remortgage in good time.',
            'Mortgage interest flows into your SA105 (as a Section 24 reducer) or CT600 (fully deductible).',
          ],
        },
      ]}
      faqs={[
        {
          q: 'How big a deposit do I need for a buy-to-let?',
          a: 'Typically around 25% of the property value or more, though it varies by lender and product.',
        },
        {
          q: 'Are buy-to-let mortgages interest-only?',
          a: 'Often, yes — many landlords choose interest-only for cash flow, repaying the capital on sale or refinance.',
        },
        {
          q: 'Should I buy through a limited company?',
          a: 'It can give full mortgage-interest relief (unlike Section 24 for individuals), but rates and admin differ. It’s a tax-and-cost trade-off — take advice.',
        },
        {
          q: 'What is an ICR stress test?',
          a: 'An interest coverage ratio lenders use: your rent must cover the mortgage interest by a set margin at a stressed rate.',
        },
        {
          q: 'What happens when my fixed rate ends?',
          a: 'You usually roll onto a higher standard variable rate, so plan a remortgage ahead of the end date.',
        },
      ]}
      related={[
        { href: '/guides/ct600-property-spv-tax', title: 'CT600 for property companies' },
        { href: '/guides/sa105-landlord-tax', title: 'SA105: property income tax' },
        { href: '/guides/landlord-insurance-rent-guarantee', title: 'Landlord insurance & rent guarantee' },
      ]}
      ctaTitle="Never miss a remortgage window"
      ctaText="Track every mortgage, rate and fixed-rate end date with alerts — and watch the interest flow into the right tax return. Free to start."
    />
  )
}
