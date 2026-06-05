import type { Metadata } from 'next'
import { GuideArticle } from '@/components/guide-article'

const CANONICAL = 'https://www.marpropertyinvestments.co.uk/guides/landlord-insurance-rent-guarantee'
const TITLE = 'Landlord Insurance & Rent Guarantee: What Cover Do You Need?'
const DESCRIPTION =
  'Why standard home insurance won’t do, what landlord insurance covers, whether you need rent guarantee and legal expenses cover, and what mortgage lenders typically require.'

export const metadata: Metadata = {
  title: `${TITLE} | PropertyApp`,
  description: DESCRIPTION,
  keywords: [
    'landlord insurance',
    'rent guarantee insurance',
    'buy to let insurance',
    'property owners liability',
    'rent protection cover',
  ],
  alternates: { canonical: '/guides/landlord-insurance-rent-guarantee' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PropertyApp',
    locale: 'en_GB',
    type: 'article',
  },
}

export default function InsuranceGuide() {
  return (
    <GuideArticle
      breadcrumb="Landlord insurance"
      title={TITLE}
      description={DESCRIPTION}
      canonical={CANONICAL}
      readingTime="6 min read"
      intro="Standard home insurance won’t cover a let property — and the right landlord cover protects your biggest asset and your rental income. Here’s what landlord insurance includes, whether you need rent guarantee cover, and what lenders typically require."
      sections={[
        {
          id: 'why-landlord-insurance',
          heading: 'Why you need landlord insurance',
          paragraphs: [
            'Letting a property changes the risk, so insurers require specific landlord (buy-to-let) insurance. Letting on a standard residential policy can invalidate it — leaving you uninsured when you most need cover.',
          ],
        },
        {
          id: 'whats-covered',
          heading: 'What landlord insurance covers',
          bullets: [
            'Buildings insurance — the structure itself (often required by your lender).',
            'Landlord contents — any furnishings you provide.',
            'Property owners’ liability — claims from tenants or visitors.',
            'Optional extras: loss of rent, accidental or malicious damage, and home emergency cover.',
          ],
        },
        {
          id: 'rent-guarantee',
          heading: 'Rent guarantee & legal expenses',
          paragraphs: [
            'Rent guarantee (rent protection) insurance pays your rent if a tenant defaults, usually paired with legal-expenses cover for possession proceedings. It typically requires referenced tenants and a compliant tenancy, so your paperwork matters.',
          ],
        },
        {
          id: 'what-lenders-require',
          heading: 'What lenders and the law expect',
          paragraphs: [
            'Buy-to-let mortgage lenders usually require buildings insurance to at least the reinstatement value. Most other landlord cover isn’t legally mandatory, but going without is a significant risk to your asset and income.',
          ],
        },
        {
          id: 'how-propertyapp-helps',
          heading: 'How PropertyApp helps',
          bullets: [
            'Store each policy and its renewal date in the property’s documents.',
            'Compliance-calendar reminders before a policy lapses.',
            'Link cover to the right property and tenancy.',
          ],
        },
      ]}
      faqs={[
        {
          q: 'Do I need special landlord insurance?',
          a: 'Yes — a standard home policy usually won’t cover a let property and could be void. You need landlord/buy-to-let cover.',
        },
        {
          q: 'Is landlord insurance a legal requirement?',
          a: 'Buildings cover is typically required by your mortgage lender; most other cover is strongly advised rather than legally required.',
        },
        {
          q: 'What is rent guarantee insurance?',
          a: 'Cover that pays your rent if the tenant defaults, usually with legal expenses for possession — typically requiring referenced tenants.',
        },
        {
          q: 'Does it cover the tenant’s belongings?',
          a: 'No — tenants insure their own contents; your contents cover is only for items you provide.',
        },
        {
          q: 'When should I review my cover?',
          a: 'At each renewal, and whenever you change the property, the furnishings or the tenancy type.',
        },
      ]}
      related={[
        { href: '/guides/buy-to-let-mortgages', title: 'Buy-to-let mortgages' },
        { href: '/guides/tenancy-deposit-protection', title: 'Tenancy deposit protection' },
        { href: '/guides/renters-rights-act-2026', title: 'Renters’ Rights Act 2026' },
      ]}
      ctaTitle="Never let a policy lapse"
      ctaText="Store landlord and rent-guarantee policies with renewal reminders, linked to each property. Free for up to 3 properties."
    />
  )
}
