import type { Metadata } from 'next'
import { GuideArticle } from '@/components/guide-article'

const CANONICAL = 'https://www.marpropertyinvestments.co.uk/guides/form-4a-rent-increase'
const TITLE = 'Form 4A Explained: How to Increase Rent the Legal Way (Section 13)'
const DESCRIPTION =
  'Under the Renters’ Rights Act, a Section 13 notice on Form 4A is the only lawful way to raise the rent on a periodic tenancy. Here’s when you can increase rent, the process, and the mistakes that make it invalid.'

export const metadata: Metadata = {
  title: `${TITLE} | PropertyApp`,
  description: DESCRIPTION,
  keywords: [
    'Form 4A',
    'Section 13 notice',
    'rent increase notice',
    'how to increase rent legally',
    'Renters Rights Act rent increase',
    'First-tier Tribunal rent',
  ],
  alternates: { canonical: '/guides/form-4a-rent-increase' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PropertyApp',
    locale: 'en_GB',
    type: 'article',
  },
}

export default function Form4aGuide() {
  return (
    <GuideArticle
      breadcrumb="Form 4A rent increases"
      title={TITLE}
      description={DESCRIPTION}
      canonical={CANONICAL}
      readingTime="7 min read"
      intro="Under the Renters’ Rights Act, there’s only one lawful way to raise the rent on a periodic tenancy: a statutory Section 13 notice, served on the prescribed Form 4A. Here’s when you can increase rent, how the process works, what a tenant can do about it, and the mistakes that make an increase invalid."
      sections={[
        {
          id: 'what-is',
          heading: 'What is Form 4A (a Section 13 notice)?',
          paragraphs: [
            'Form 4A is the government’s prescribed form for proposing a rent increase under Section 13 of the Housing Act 1988. Since the Renters’ Rights Act, rent-review clauses in tenancy agreements no longer work for assured tenancies — the Section 13 / Form 4A route is the way to increase the rent.',
          ],
        },
        {
          id: 'when-can-you',
          heading: 'When and how much can you increase?',
          bullets: [
            'Once in any 12-month period.',
            'With the correct minimum notice before the new rent starts.',
            'To a level in line with market rents — the tenant can challenge anything above that.',
          ],
        },
        {
          id: 'the-process',
          heading: 'The Form 4A process, step by step',
          bullets: [
            'Serve the completed Form 4A on the tenant, stating the new rent and the date it starts.',
            'The tenant can agree, do nothing (the new rent takes effect on the stated date), or apply to the First-tier Tribunal to challenge it before that date.',
            'The Tribunal decides the market rent — and crucially can’t set it higher than you asked for.',
            'Once it takes effect, the new figure becomes the tenancy’s rent.',
          ],
        },
        {
          id: 'common-mistakes',
          heading: 'Common mistakes that invalidate an increase',
          bullets: [
            'Using a rent-review clause instead of Form 4A.',
            'Giving too little notice, or stating the wrong dates.',
            'Increasing more than once in a 12-month period.',
            'Failing to serve each joint tenant correctly.',
          ],
        },
        {
          id: 'how-propertyapp-helps',
          heading: 'How PropertyApp helps',
          paragraphs: [
            'PropertyApp ships the only end-to-end Form 4A workflow on the UK market:',
          ],
          bullets: [
            'Propose the new rent and date; the prefilled Form 4A is generated for you.',
            'Pre-sign it digitally; the tenant is emailed the notice with a one-click portal link.',
            'The tenant accepts, declines or refers to tribunal in the portal.',
            'On acceptance a renewal agreement is auto-drafted, and the new rent flows to SA105 / CT600, MTD and the property record.',
          ],
        },
      ]}
      faqs={[
        {
          q: 'Can I still use a rent-review clause?',
          a: 'Not for assured tenancies under the Renters’ Rights Act. The statutory Section 13 / Form 4A process is the route to increase the rent.',
        },
        {
          q: 'How often can I raise the rent?',
          a: 'Once in any 12-month period, with the correct notice before the new rent takes effect.',
        },
        {
          q: 'What if the tenant challenges it?',
          a: 'They can apply to the First-tier Tribunal before the start date. The Tribunal sets the market rent and can’t go above the figure you proposed.',
        },
        {
          q: 'How much notice do I give?',
          a: 'At least the statutory minimum before the new rent takes effect — check the current period on GOV.UK, as it’s set in the legislation.',
        },
        {
          q: 'Do joint tenants each get a notice?',
          a: 'Yes — each named tenant should be served correctly for the increase to be valid.',
        },
      ]}
      ctaTitle="Form 4A rent reviews, start to finish"
      ctaText="Propose, sign, send and track a Section 13 rent increase — and watch the new rent flow into your tax returns automatically. The only end-to-end Form 4A workflow in the UK. Free to start."
      related={[
        { href: '/guides/renters-rights-act-2026', title: 'Renters’ Rights Act 2026' },
        { href: '/guides/tenancy-deposit-protection', title: 'Tenancy deposit protection' },
      ]}
    />
  )
}
