import Link from 'next/link'
import { ArrowRight, ChevronRight, Clock, Info, HelpCircle } from 'lucide-react'

const APP_URL = 'https://property-app-pi-fawn.vercel.app'

export interface GuideSection {
  id: string
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export interface GuideFaq {
  q: string
  a: string
}

export interface GuideLink {
  href: string
  title: string
}

export interface GuideArticleProps {
  breadcrumb: string
  title: string
  description: string
  /** Full canonical URL, used in the Article JSON-LD. */
  canonical: string
  readingTime: string
  intro: string
  sections: GuideSection[]
  faqs: GuideFaq[]
  related?: GuideLink[]
  ctaTitle: string
  ctaText: string
  disclaimer?: string
}

export function GuideArticle({
  breadcrumb,
  title,
  description,
  canonical,
  readingTime,
  intro,
  sections,
  faqs,
  related,
  ctaTitle,
  ctaText,
  disclaimer = 'This guide is general information, not professional tax or legal advice. Rules, rates and thresholds change — check GOV.UK and take advice for your own situation.',
}: GuideArticleProps) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      datePublished: '2026-06-05',
      dateModified: '2026-06-05',
      author: { '@type': 'Organization', name: 'PropertyApp' },
      publisher: { '@type': 'Organization', name: 'PropertyApp' },
      mainEntityOfPage: canonical,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-gradient-to-b from-background to-muted/30 py-12">
        <div className="mx-auto max-w-3xl px-6">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/guides" className="hover:text-foreground">Guides</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">{breadcrumb}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">{title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {readingTime}</span>
            <span>Last reviewed: June 2026</span>
          </div>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{intro}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          {/* TOC */}
          <div className="rounded-xl border border-border bg-muted/30 p-6 mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              On this page
            </h2>
            <ol className="space-y-1.5 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-primary hover:underline">{s.heading}</a>
                </li>
              ))}
              {faqs.length > 0 && (
                <li><a href="#faq" className="text-primary hover:underline">Frequently asked questions</a></li>
              )}
            </ol>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((s) => (
              <article key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3">{s.heading}</h2>
                {s.paragraphs?.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-3">{p}</p>
                ))}
                {s.bullets && (
                  <ul className="space-y-1.5 mt-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1 shrink-0">&#8226;</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          {/* FAQ */}
          {faqs.length > 0 && (
            <div id="faq" className="scroll-mt-24 mt-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <HelpCircle className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Frequently asked questions</h2>
              </div>
              <div className="space-y-4">
                {faqs.map((f) => (
                  <div key={f.q} className="rounded-xl border border-border bg-background p-6">
                    <h3 className="font-semibold mb-2">{f.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related guides */}
          {related && related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-lg font-semibold mb-4">Related guides</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {related.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="group flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3 hover:border-primary/40 hover:shadow-sm transition-all"
                  >
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">{r.title}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <div className="mt-12 rounded-xl border border-border bg-muted/30 p-5 flex items-start gap-3">
            <Info className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground leading-relaxed">{disclaimer}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground">{ctaTitle}</h2>
          <p className="mt-3 text-lg text-primary-foreground/80 max-w-2xl mx-auto">{ctaText}</p>
          <a
            href={`${APP_URL}/signup`}
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-background text-foreground px-6 py-3 text-sm font-medium hover:bg-background/90 transition-colors gap-2"
          >
            Get started free <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  )
}
