import type { Metadata } from 'next'
import { GuideArticle } from '@/components/guide-article'

const CANONICAL = 'https://www.marpropertyinvestments.co.uk/guides/section-8-possession-grounds'
const TITLE = 'Section 8 Notices: Grounds for Possession After Section 21'
const DESCRIPTION =
  'With Section 21 abolished, Section 8 is the route to regain possession. The mandatory and discretionary grounds, the notice periods, the court process, and the evidence you need.'

export const metadata: Metadata = {
  title: `${TITLE} | PropertyApp`,
  description: DESCRIPTION,
  keywords: [
    'Section 8 notice',
    'grounds for possession',
    'Ground 8 rent arrears',
    'Ground 14 anti-social behaviour',
    'evicting a tenant',
    'possession after Section 21',
  ],
  alternates: { canonical: '/guides/section-8-possession-grounds' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PropertyApp',
    locale: 'en_GB',
    type: 'article',
  },
}

export default function Section8Guide() {
  return (
    <GuideArticle
      breadcrumb="Section 8 possession"
      title={TITLE}
      description={DESCRIPTION}
      canonical={CANONICAL}
      readingTime="8 min read"
      intro="With Section 21 “no-fault” evictions abolished by the Renters’ Rights Act, Section 8 is now the route to regain possession — and it only works if you have a valid ground and the evidence to back it. Here are the grounds, the notice periods, and how the process works."
      sections={[
        {
          id: 'what-is',
          heading: 'What is a Section 8 notice?',
          paragraphs: [
            'A Section 8 notice (under the Housing Act 1988) starts possession proceedings based on one or more legal “grounds”. Unlike the old Section 21, you must have a reason — and be able to prove it.',
          ],
        },
        {
          id: 'grounds',
          heading: 'Mandatory vs discretionary grounds',
          bullets: [
            'Mandatory grounds: if proven, the court must grant possession (for example, serious rent arrears).',
            'Discretionary grounds: the court decides whether it’s reasonable to grant possession (for example, some breaches or anti-social behaviour).',
          ],
        },
        {
          id: 'key-grounds',
          heading: 'The grounds landlords use most',
          bullets: [
            'Ground 8 (mandatory) — serious rent arrears at the date of notice and hearing.',
            'Grounds 10 & 11 (discretionary) — some or persistent rent arrears, often pleaded together.',
            'Ground 14 (discretionary) — anti-social behaviour or nuisance.',
            'Grounds for the landlord selling or moving in — with their own notice periods and conditions.',
            'Breach of the tenancy terms.',
          ],
          paragraphs: [
            'The Renters’ Rights Act reshaped several grounds and their notice periods — check the current rules for the ground you intend to use.',
          ],
        },
        {
          id: 'notice-process',
          heading: 'Notice periods and the court process',
          bullets: [
            'Serve the correct Section 8 notice, specifying each ground and the notice period.',
            'Notice periods vary by ground — typically shorter for serious arrears or anti-social behaviour.',
            'If the tenant doesn’t leave, apply to the court for a possession order.',
            'Build your evidence — rent statements, correspondence, an ASB log — before you serve.',
          ],
        },
        {
          id: 'how-propertyapp-helps',
          heading: 'How PropertyApp helps',
          bullets: [
            'A per-property ASB incident log that exports as a Ground 14 evidence pack.',
            'Rent and arrears history to evidence Grounds 8, 10 and 11.',
            'A full audit trail of notices and tenancy events.',
          ],
        },
      ]}
      faqs={[
        {
          q: 'Can I still use Section 21?',
          a: 'No — Section 21 “no-fault” evictions are abolished. Possession now requires a valid Section 8 ground that you can evidence.',
        },
        {
          q: 'What’s the difference between mandatory and discretionary grounds?',
          a: 'On a mandatory ground the court must grant possession if it’s proven; on a discretionary ground the court decides whether it’s reasonable to do so.',
        },
        {
          q: 'Which ground covers rent arrears?',
          a: 'Ground 8 is the mandatory arrears ground; Grounds 10 and 11 are discretionary arrears grounds, often used alongside it.',
        },
        {
          q: 'How much notice do I give?',
          a: 'It depends on the ground — serious arrears and anti-social behaviour carry shorter notice. Check the current periods, as the Renters’ Rights Act changed them.',
        },
        {
          q: 'Do I need evidence?',
          a: 'Yes — especially for discretionary grounds. Keep rent statements, correspondence and an ASB log to support your case.',
        },
      ]}
      related={[
        { href: '/guides/renters-rights-act-2026', title: 'Renters’ Rights Act 2026' },
        { href: '/guides/form-4a-rent-increase', title: 'Form 4A rent increases' },
        { href: '/guides/right-to-rent-checks', title: 'Right to Rent checks' },
      ]}
      ctaTitle="Build the evidence before you need it"
      ctaText="PropertyApp logs ASB for a Ground 14 evidence pack and keeps your arrears and notice history audit-ready. Free to start."
    />
  )
}
