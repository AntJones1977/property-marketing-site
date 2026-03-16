import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — PropertyApp',
  description: 'Privacy policy for PropertyApp by MAR Property Investments Ltd.',
}

export default function PrivacyPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-6 prose prose-sm prose-gray">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: March 2026</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Data Controller</h2>
        <p className="text-muted-foreground leading-relaxed">
          MAR Property Investments Ltd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is the data controller responsible for your personal data. We are registered in England & Wales.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Data We Collect</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">When you use PropertyApp, we may collect:</p>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
          <li><strong>Identity data:</strong> Name, username, display name</li>
          <li><strong>Contact data:</strong> Email address</li>
          <li><strong>Financial data:</strong> Property values, rental income, mortgage details, expenses (entered by you)</li>
          <li><strong>Tenancy data:</strong> Tenant names, contact details, lease information</li>
          <li><strong>Technical data:</strong> IP address, browser type, session data</li>
          <li><strong>Usage data:</strong> Feature usage, login timestamps</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. How We Use Your Data</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
          <li>To provide and maintain your PropertyApp account</li>
          <li>To process property and financial data as directed by you</li>
          <li>To generate tax reports and financial summaries</li>
          <li>To send compliance and expiry alerts</li>
          <li>To process document signing requests</li>
          <li>To manage your subscription and billing</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Lawful Basis</h2>
        <p className="text-muted-foreground leading-relaxed">
          We process your data under the following lawful bases: contract performance (providing the service), legal obligation (financial record-keeping, HMRC requirements), legitimate interests (service improvement, security), and consent (marketing communications).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Data Security</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
          <li>All data transmitted via HTTPS/TLS encryption</li>
          <li>Sensitive financial fields encrypted with AES-256-GCM at rest</li>
          <li>Passwords hashed with bcrypt</li>
          <li>Each customer gets an isolated database</li>
          <li>Rate limiting on authentication endpoints</li>
          <li>Audit logging of all data access and modifications</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Data Retention</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
          <li>Financial records: 7 years (HMRC requirement)</li>
          <li>Tenancy data: duration of tenancy + 12 months</li>
          <li>Compliance certificates: validity period + 2 years</li>
          <li>Audit logs: 3 years</li>
          <li>Sessions: automatically purged when expired</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">7. Your Rights</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">Under UK GDPR, you have the right to:</p>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
          <li>Access your personal data (Article 15)</li>
          <li>Rectify inaccurate data (Article 16)</li>
          <li>Erase your data (Article 17) — subject to legal retention requirements</li>
          <li>Restrict processing (Article 18)</li>
          <li>Data portability (Article 20)</li>
          <li>Object to processing (Article 21)</li>
          <li>Withdraw consent at any time</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">8. Third-Party Services</h2>
        <p className="text-muted-foreground leading-relaxed">
          We use the following third-party services: Vercel (hosting), Neon (database), Stripe (billing), Anthropic Claude (AI receipt scanning), DocuSeal (e-signatures). Each processes data only as necessary to provide their service.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">9. Complaints</h2>
        <p className="text-muted-foreground leading-relaxed">
          If you have concerns about how we handle your data, please contact us first. You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at <span className="font-medium">ico.org.uk</span>.
        </p>
      </div>
    </section>
  )
}
