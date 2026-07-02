# CLAUDE.md — property-marketing-site

## What this repo is

Public marketing site for **PropertyApp** (MAR Property & Investments Ltd).
Next.js App Router + TypeScript strict + Tailwind 4. Static-first: marketing
pages are prerendered; the ONLY server code is `app/api/contact` and
`app/api/rra-check` (both send email via Resend, both rate-limited).

The PropertyApp product lives in a **separate private repo** — this repo must
never contain product source, internal docs, roadmap or incident material
(see the `.gitignore` comments; **this repo is public**).

## Commands

- `npm run dev` — dev server on port 3001
- `npm run build` — must pass before any push
- `npm run typecheck` — strict TS, zero errors expected

## Architecture rules

- Shared constants (`APP_URL`, `SITE_URL`, contact addresses, statutory
  company details) live in `lib/site.ts` — never hardcode them in pages,
  components or routes.
- New guides: use `components/guide-article.tsx`; add the route to
  `app/sitemap.ts`; set `alternates.canonical`; verify the Article/FAQPage
  JSON-LD renders.
- The RRA checker questions live ONLY in `lib/rra-questions.ts` — scoring
  stays server-side in the API route (never trust client-sent prose).
- Forms keep the honeypot pattern (field name `company`, fake-success
  response) plus server-side validation, length caps (`lib/email.ts`) and
  the per-IP rate limiter (`lib/rate-limit.ts`).
- Security headers are set in `next.config.ts` — a change that adds
  third-party scripts, fonts or images must update the CSP deliberately.

## Editorial & compliance controls

- **Statute naming:** the Act is the "Renters' Rights Act" — use one
  consistent year form site-wide and state commencement dates separately.
  (Known issue: product pages say 2025, guides/URLs say 2026 — do not add a
  third variant; a standardisation decision is pending with the owner.)
- **Marketing claims:** every objective claim ("the only…", test counts,
  "direct to HMRC") must match the product's SHIPPED state. Sandbox-only
  features (MTD, Open Banking) must say so in the same breath as the claim,
  not only in an FAQ.
- Every guide keeps the "general information, not advice" disclaimer.
- The footer's statutory company-details block (name, CRN, registered
  office, place of registration) must never be removed. Values live in
  `lib/site.ts`.
- Do NOT add cookies, analytics or third-party scripts without flagging the
  PECR/consent impact first — the site's zero-cookie posture is deliberate.
- The RRA checker promises no mailing list; do not add marketing follow-up
  emails without an explicit, unbundled opt-in and a working unsubscribe.

## Definition of done for any change

build passes · typecheck passes · sitemap/canonical updated for new routes ·
no new hardcoded URLs/emails · CSP still valid · no internal docs committed
