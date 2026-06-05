import type { Metadata } from 'next'
import { GuideArticle } from '@/components/guide-article'

const CANONICAL = 'https://www.marpropertyinvestments.co.uk/guides/inheritance-tax-property-portfolio'
const TITLE = 'Inheritance Tax and Your Property Portfolio: A Landlord’s Guide'
const DESCRIPTION =
  'How Inheritance Tax affects a rental portfolio: the nil-rate bands, why property pushes estates over the threshold, the main reliefs and exemptions, and planning ideas to discuss with an adviser.'

const TAX_DISCLAIMER =
  'This guide is general information, not tax or estate-planning advice. Inheritance Tax is complex and the rules and thresholds change — speak to a qualified adviser and check GOV.UK for your own situation.'

export const metadata: Metadata = {
  title: `${TITLE} | PropertyApp`,
  description: DESCRIPTION,
  keywords: [
    'inheritance tax property',
    'IHT buy to let',
    'nil rate band',
    'inheritance tax landlord',
    'estate planning property',
  ],
  alternates: { canonical: '/guides/inheritance-tax-property-portfolio' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PropertyApp',
    locale: 'en_GB',
    type: 'article',
  },
}

export default function IhtGuide() {
  return (
    <GuideArticle
      breadcrumb="Inheritance tax"
      title={TITLE}
      description={DESCRIPTION}
      canonical={CANONICAL}
      readingTime="8 min read"
      disclaimer={TAX_DISCLAIMER}
      intro="A rental portfolio can leave a sizeable Inheritance Tax (IHT) bill for your heirs. Here’s how IHT works, why property pushes estates over the threshold, the main reliefs and exemptions, and the planning ideas worth discussing with an adviser."
      sections={[
        {
          id: 'how-iht-works',
          heading: 'How Inheritance Tax works',
          paragraphs: [
            'Inheritance Tax is charged on the value of your estate when you die, above a tax-free threshold (the nil-rate band). Buy-to-let property counts at its market value, so a portfolio can quickly take an estate over the threshold and into a 40% charge on the excess.',
          ],
        },
        {
          id: 'thresholds',
          heading: 'The nil-rate bands',
          paragraphs: [
            'Everyone has a nil-rate band, and there’s an additional residence nil-rate band that can apply when a main home passes to direct descendants — though it tapers away for larger estates and generally doesn’t help with buy-to-lets. Check the current figures on GOV.UK.',
          ],
        },
        {
          id: 'property-problem',
          heading: 'Why property is an IHT headache',
          paragraphs: [
            'Unlike cash, property isn’t easily split or sold quickly. Heirs can face a large IHT bill — often payable before probate completes — without the liquid funds to pay it, sometimes forcing a rushed sale.',
          ],
        },
        {
          id: 'reliefs-planning',
          heading: 'Reliefs, exemptions and planning',
          bullets: [
            'The spouse exemption — transfers between spouses or civil partners are usually IHT-free.',
            'Lifetime gifts — gifts made more than seven years before death normally fall out of the estate.',
            'Holding property in a company or trust — can help succession, but brings its own tax costs (and SDLT/CGT on transfer).',
            'Life insurance written in trust — can provide funds to pay the bill.',
          ],
          // Planning is personal — flag it.
        },
        {
          id: 'estate-tax',
          heading: 'When the estate keeps letting',
          paragraphs: [
            'While the estate is administered, rental income is taxed via the SA900 / SA903 (see our estate & trust guide). IHT on the capital value and income tax on the rents are separate things.',
          ],
        },
        {
          id: 'how-propertyapp-helps',
          heading: 'How PropertyApp helps',
          bullets: [
            'A clear, current portfolio valuation and equity position to inform planning.',
            'Ownership and company structures modelled — personal, company and estate/trust.',
            'Estate/trust tax handled on the SA900 / SA903 surface when the time comes.',
          ],
        },
      ]}
      faqs={[
        {
          q: 'Is buy-to-let subject to Inheritance Tax?',
          a: 'Yes — rental property counts at market value in your estate and can be taxed at 40% above the nil-rate band.',
        },
        {
          q: 'Does the residence nil-rate band cover my rentals?',
          a: 'Generally no — it’s aimed at a main home passing to direct descendants, not buy-to-lets. Check the current rules.',
        },
        {
          q: 'Can putting property in a company avoid IHT?',
          a: 'It can help with succession planning but isn’t a simple IHT escape, and it brings its own taxes (and SDLT/CGT on transfer). Take advice.',
        },
        {
          q: 'What are lifetime gifts?',
          a: 'Gifts you make during your life; if you survive seven years they normally fall outside your estate for IHT.',
        },
        {
          q: 'Who pays the Inheritance Tax?',
          a: 'The estate — your personal representatives — usually pays it, often before probate completes, which is why liquidity matters.',
        },
      ]}
      related={[
        { href: '/guides/sa900-estate-trust-tax', title: 'SA900: estate & trust tax' },
        { href: '/guides/capital-gains-tax-rental-property', title: 'Capital Gains Tax on a sale' },
        { href: '/guides/sa105-landlord-tax', title: 'SA105: property income tax' },
      ]}
      ctaTitle="Know your portfolio’s position"
      ctaText="PropertyApp keeps a current valuation, equity and ownership picture across personal, company and estate/trust holdings — the starting point for any IHT conversation. Free to start."
    />
  )
}
