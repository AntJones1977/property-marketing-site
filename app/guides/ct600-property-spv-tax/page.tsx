import type { Metadata } from 'next'
import { GuideArticle } from '@/components/guide-article'

const CANONICAL = 'https://www.marpropertyinvestments.co.uk/guides/ct600-property-spv-tax'
const TITLE = 'CT600 for Property Companies: A UK Landlord’s Guide to SPV Tax'
const DESCRIPTION =
  'How property held in a limited company (SPV) is taxed: the CT600 Company Tax Return, full mortgage-interest relief, capital allowances, director’s loans (S455), ATED and the deadlines.'

const TAX_DISCLAIMER =
  'This guide is general information, not tax advice. Tax rules, rates and allowances change frequently — check GOV.UK and speak to a qualified accountant for your own circumstances.'

export const metadata: Metadata = {
  title: `${TITLE} | PropertyApp`,
  description: DESCRIPTION,
  keywords: [
    'CT600',
    'property company tax',
    'SPV landlord tax',
    'limited company buy to let',
    'S455 director loan',
    'ATED',
    'corporation tax property',
  ],
  alternates: { canonical: '/guides/ct600-property-spv-tax' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PropertyApp',
    locale: 'en_GB',
    type: 'article',
  },
}

export default function Ct600Guide() {
  return (
    <GuideArticle
      breadcrumb="CT600 property company tax"
      title={TITLE}
      description={DESCRIPTION}
      canonical={CANONICAL}
      readingTime="10 min read"
      disclaimer={TAX_DISCLAIMER}
      intro="Hold property in a limited company (an SPV) and you’re in a different tax world: you file a CT600 Company Tax Return and pay Corporation Tax, not Self Assessment. Here’s how company property tax differs from personal, why mortgage interest is fully deductible, capital allowances, director’s loans, ATED, and the deadlines."
      sections={[
        {
          id: 'what-is-ct600',
          heading: 'What is the CT600?',
          paragraphs: [
            'The CT600 is the Company Tax Return a limited company files to report its profits and pay Corporation Tax. If your buy-to-lets are held in a company — often called an SPV (Special Purpose Vehicle) — the company’s rental profits are taxed through the CT600, based on its accounting period rather than the personal tax year.',
          ],
        },
        {
          id: 'personal-vs-company',
          heading: 'Personal vs company: the key differences',
          bullets: [
            'Mortgage interest is fully deductible against company profits — no Section 24 restriction.',
            'Profits are taxed at Corporation Tax rates rather than your personal income tax rates.',
            'Profits stay in the company until you extract them as salary or dividends, which is then taxed personally.',
            'More admin: annual accounts, a Confirmation Statement, and Corporation Tax filings.',
          ],
        },
        {
          id: 'costs-allowances',
          heading: 'Allowable costs and capital allowances',
          paragraphs: [
            'The company deducts its running costs — mortgage interest, management and letting fees, insurance, repairs, service charges, accountancy and so on.',
            'On top of revenue costs, capital allowances (the Annual Investment Allowance and Writing-Down Allowances) give relief on qualifying plant and fixtures — though not on the residential building itself.',
          ],
        },
        {
          id: 'director-loans',
          heading: 'Director’s loans (S455) and taking profit out',
          paragraphs: [
            'Money you put into or take out of the company runs through your director’s loan account. If that account is overdrawn (you owe the company) at the year end, a temporary S455 tax charge can apply until it’s repaid.',
            'Profit is usually extracted as a mix of salary and dividends, each with its own tax treatment — worth planning with an accountant.',
          ],
        },
        {
          id: 'ated-duties',
          heading: 'ATED and other company duties',
          paragraphs: [
            'If the company holds residential property valued above the ATED threshold, an Annual Tax on Enveloped Dwellings return and charge may apply — though reliefs exist for genuine commercial lettings. The company also files annual accounts and a Confirmation Statement with Companies House.',
          ],
        },
        {
          id: 'deadlines',
          heading: 'Key deadlines',
          bullets: [
            'File the CT600 within 12 months of the end of the accounting period.',
            'Pay the Corporation Tax 9 months and 1 day after the period end — earlier than the filing deadline.',
            'Companies House accounts and the Confirmation Statement have their own separate dates.',
          ],
        },
        {
          id: 'how-propertyapp-helps',
          heading: 'How PropertyApp helps with your CT600',
          bullets: [
            'Per-company CT600 grouping with per-property running-cost drill-down.',
            'Records-first costs: capture a mid-year service-charge or rate change as two records and the period splits correctly.',
            'Capital allowances (AIA + WDA), S455 director-loan tracking and ATED alerts.',
            'Companies House auto-fill for CRN, ARD and directors, plus filing reminders.',
            'Lock the year and email a clean summary to your accountant.',
          ],
        },
      ]}
      faqs={[
        {
          q: 'Should I move my portfolio into a limited company?',
          a: 'It can help higher-rate taxpayers (full mortgage-interest relief and retained profits), but transferring personal property into a company can trigger Stamp Duty and Capital Gains Tax, and adds admin. It’s very situation-specific — take professional advice first.',
        },
        {
          q: 'Is mortgage interest fully deductible in a company?',
          a: 'Yes. The Section 24 restriction only applies to individuals; a company deducts finance costs in full against its profits.',
        },
        {
          q: 'What is the S455 charge?',
          a: 'A temporary Corporation Tax charge on a director’s loan that’s overdrawn at the year end. It’s refunded once the loan is repaid.',
        },
        {
          q: 'When do I file and pay?',
          a: 'File the CT600 within 12 months of the accounting period end; pay the Corporation Tax earlier, 9 months and 1 day after the period end.',
        },
        {
          q: 'Do I still need to do Self Assessment?',
          a: 'Not for company-held property income — that’s taxed through the company. But you’ll likely still file personal Self Assessment for the salary or dividends you take out.',
        },
      ]}
      ctaTitle="CT600 for your SPV, without the spreadsheet gymnastics"
      ctaText="PropertyApp is the only UK landlord tool with native limited-company tax — records-first running costs, capital allowances, S455 and ATED, grouped per company. Free to start."
    />
  )
}
