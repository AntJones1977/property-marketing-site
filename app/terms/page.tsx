import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — PropertyApp',
  description: 'Terms of service for PropertyApp by MAR Property Investments Ltd.',
}

export default function TermsPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-6 prose prose-sm prose-gray">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: March 2026</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Agreement</h2>
        <p className="text-muted-foreground leading-relaxed">
          By creating an account and using PropertyApp, you agree to these Terms of Service. PropertyApp is provided by MAR Property Investments Ltd, registered in England & Wales.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Service Description</h2>
        <p className="text-muted-foreground leading-relaxed">
          PropertyApp is a property portfolio management platform designed for UK buy-to-let landlords. It provides tools for tracking properties, mortgages, tenants, compliance, expenses, and tax reporting.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Account Responsibilities</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
          <li>You are responsible for maintaining the security of your account credentials</li>
          <li>You must provide accurate information when creating your account</li>
          <li>You are responsible for all activity under your account</li>
          <li>You must notify us immediately of any unauthorised access</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Subscription & Billing</h2>
        <p className="text-muted-foreground leading-relaxed">
          Free accounts are available with limited features. Paid subscriptions are billed monthly via Stripe. You may upgrade, downgrade, or cancel at any time. Downgrades take effect at the end of the current billing period. No refunds are provided for partial months.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Acceptable Use</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">You agree not to:</p>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
          <li>Use the service for any unlawful purpose</li>
          <li>Attempt to gain unauthorised access to other accounts or systems</li>
          <li>Upload malicious content or attempt to compromise the service</li>
          <li>Resell or redistribute the service without permission</li>
          <li>Use automated tools to scrape or extract data from the service</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Data & Privacy</h2>
        <p className="text-muted-foreground leading-relaxed">
          Your use of PropertyApp is also governed by our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>. You retain ownership of all data you enter into the platform. We do not share your data with third parties except as described in our Privacy Policy.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">7. Service Availability</h2>
        <p className="text-muted-foreground leading-relaxed">
          We aim to provide reliable service but do not guarantee uninterrupted availability. We may perform maintenance that temporarily affects access. We will endeavour to provide advance notice of planned maintenance.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">8. Limitation of Liability</h2>
        <p className="text-muted-foreground leading-relaxed">
          PropertyApp is a management tool, not a substitute for professional financial, legal, or tax advice. We are not liable for decisions made based on information in the platform. Tax reports are provided as aids and should be verified by a qualified accountant.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">9. Termination</h2>
        <p className="text-muted-foreground leading-relaxed">
          You may close your account at any time. We reserve the right to suspend or terminate accounts that violate these terms. Upon termination, you may request export of your data within 30 days.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">10. Changes to Terms</h2>
        <p className="text-muted-foreground leading-relaxed">
          We may update these terms from time to time. Significant changes will be communicated via email or in-app notification. Continued use after changes constitutes acceptance.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">11. Governing Law</h2>
        <p className="text-muted-foreground leading-relaxed">
          These terms are governed by the laws of England & Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England & Wales.
        </p>
      </div>
    </section>
  )
}
