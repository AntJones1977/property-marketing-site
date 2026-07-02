# PropertyApp Marketing Site — Drains-Up Application Review

**Repository:** `AntJones1977/property-marketing-site`
**Review date:** 2 July 2026
**Review type:** Full ("drains-up") review — architecture, technical quality, security, financial & operational risk, and compliance, plus a review of AI-development governance (CLAUDE.md)
**Method:** Every source file in the repository was read line-by-line. The production build, TypeScript strict-mode check and dependency audit were executed as part of this review. Git history (31 commits, March–June 2026) was examined for process evidence.

**Scope note:** This repository is the public *marketing site* for PropertyApp. The PropertyApp product itself lives in a separate codebase that is not part of this session; statements the site makes about the product (encryption, isolated databases, test counts, MTD, Open Banking) are therefore reviewed here as **marketing claims requiring substantiation**, not as verified facts.

---

## 1. Executive Summary

### 1.1 What this application is

A public marketing and lead-generation website for **PropertyApp**, the property-portfolio management product of **MAR Property Investments Ltd**. It is a Next.js 16 (App Router) application in strict TypeScript with Tailwind CSS 4, producing **32 fully static pre-rendered pages** and exactly **two dynamic API endpoints**. It has no database, no authentication, no cookies and no analytics — an intentionally minimal attack and compliance surface.

### 1.2 Capabilities and features of the site

| Capability | Implementation |
|---|---|
| **Product marketing** | Home, Features (18-card grid + deep feature sections), About, 5-tier Pricing page with 18-item FAQ |
| **Content marketing / SEO** | 16-guide landlord library (tax, compliance, money) built on a reusable `GuideArticle` component; cornerstone 475-line Renters' Rights Act guide; sitemap, robots, canonical URLs, Open Graph image, and JSON-LD structured data (Organization, WebSite, Article, FAQPage) throughout |
| **Lead magnet** | Interactive 10-question Renters' Rights Act readiness checker (`/rra-check`) that scores the visitor, shows gaps, and emails a personalised action plan — with the score and plan computed **server-side** from a single shared question definition |
| **Contact funnel** | Contact form → business-inbox notification + auto-acknowledgement to the enquirer, via Resend |
| **Anti-spam** | Honeypot field on both forms, with "pretend success" responses so bots get no signal |

### 1.3 Capabilities of the marketed product (as claimed by the site)

The site positions PropertyApp as the only UK landlord platform covering: three tax surfaces (SA105 personal, CT600 company/SPV with capital allowances and drift detection, SA900/SA903 estate & trust with R185 apportionment); a cross-return filing tracker with statutory deadlines; Renters' Rights Act Wave 1+2 workflows (Information Sheet dispatch, Statement of Tenancy Terms, Form 4A/Section 13 rent reviews end-to-end); HMO compliance (30+ councils, room sizes, FRA); Section 42 leasehold extensions; MTD quarterly submissions (HMRC sandbox); Open Banking auto-match via TrueLayer (AIS-only, sandbox); e-signatures via DocuSeal including joint ASTs; tenant portal and referencing; AI receipt scanning; audit log, GDPR export/erasure, AES-256-GCM encryption and a self-hosted tier.

### 1.4 Overall verdict

**This is a well-built, disciplined, fit-for-purpose codebase.** The build is clean, strict TypeScript passes with zero errors, the architecture is exactly as simple as the problem demands, and there is visible engineering judgement in the details (server-authoritative scoring, honeypot design, escape functions, error handling, single-source-of-truth data). The content operation — 16 statutory guides with disclaimers, structured data and cross-linking — is unusually mature for a company of this size.

The material risks are **not in the code quality**. They are:

1. **Security/financial (High):** the two email endpoints have no rate limiting and the contact endpoint echoes attacker-controlled content to an attacker-chosen address — a usable spam relay from your verified domain.
2. **Compliance (High):** the site is missing statutory company trading disclosures (company registration number, registered office), and the privacy notice does not cover what this site actually does with data.
3. **Compliance (Medium-High):** heavy use of "the only UK tool…" superlatives and headline claims ("MTD direct to HMRC", Open Banking) whose sandbox status is disclosed only in FAQ small print — an ASA/CAP misleading-omission risk, with an FCA-perimeter dimension the team is clearly already aware of.
4. **Governance (Medium):** the controls that make this repo good — naming conventions, claim rules, publish gates — live in the owner's head and chat history, not in the repository. There is no CLAUDE.md, README, CI, lint config or test.

### 1.5 Risk ratings at a glance

| Domain | Rating | One-line reason |
|---|---|---|
| Architecture | **Strong** | Static-first, minimal, right-sized; minor duplication issues |
| Technical quality | **Strong** | Clean build, strict TS, good UX/error handling; zero tests/CI |
| Security | **Amber** | Open email relay + no rate limits + no security headers; otherwise tiny attack surface |
| Financial risk | **Amber** | Email/function abuse costs; unbranded app domain; single-inbox lead pipeline |
| Operational risk | **Amber** | Resend single point of failure; no monitoring; statutory-content staleness |
| Compliance | **Amber-Red** | Missing trading disclosures; privacy notice scope; claim substantiation; PECR marketing consent |
| AI-dev governance | **Amber** | Excellent observable discipline; no codified CLAUDE.md/controls in-repo |

---

## 2. Architecture Review

### 2.1 Stack and topology

- **Framework:** Next.js 16.1.6, App Router, React 19.2, TypeScript 5.9 (strict), Tailwind CSS 4 (PostCSS pipeline), lucide-react icons, Resend SDK for email. Deployed (by evidence of URLs and conventions) on Vercel.
- **Topology:** 32 routes statically pre-rendered at build time; 2 server functions (`/api/contact`, `/api/rra-check`). No middleware, no database, no state.

```
app/
  layout.tsx            ← global metadata, header/footer shell
  page.tsx              ← home (features/pricing/guides as data arrays)
  features|pricing|about|contact|privacy|terms/
  guides/               ← hub + 16 guide pages (15 on shared GuideArticle)
  rra-check/            ← page + client quiz component
  api/contact           ← Resend: notify + auto-ack
  api/rra-check         ← Resend: lead plan + business notification
  sitemap.ts robots.ts opengraph-image.tsx
components/             ← header, footer, feature-card, pricing-card, guide-article
lib/rra-questions.ts    ← single source of truth for the checker
```

### 2.2 Architectural strengths

1. **Static-first is the right call.** Marketing pages carry zero server cost, zero cold-start latency, and no injection surface. Only the two forms are dynamic.
2. **Single source of truth, done properly.** `lib/rra-questions.ts` is imported by both the client quiz and the API route, and the file carries a comment explaining *why*: the emailed action plan is computed server-side "no trusting client-sent prose". This is a genuine security-by-design decision, correctly documented at the point of use.
3. **Content-as-data.** Features, pricing tiers, FAQs and guides are typed data arrays rendered through small components (`FeatureCard`, `PricingCard`, `GuideArticle`). Adding guide #17 is a data-authoring exercise, not an engineering one — and the same data drives both the visible page and its FAQPage/Article JSON-LD, so structured data cannot drift from visible content.
4. **Consistent conventions.** Both API routes share the same shape (parse-guard → honeypot → validate → send → best-effort secondary send), both forms share the same UX states, and the two routes explicitly mirror each other's configuration ("Mirrors the contact route's config so behaviour is consistent").
5. **Deliberate public-repo hygiene.** `.gitignore` excludes internal product docs with an explanatory comment ("this repo is public and the docs contain internal roadmap, unshipped specs, FCA-gated modules and incident reports"). That is a real, working information-classification control.

### 2.3 Architectural weaknesses

1. **`APP_URL` is hardcoded in 11 files.** `https://property-app-pi-fawn.vercel.app` appears in header, footer CTAs, guide component, checker, pricing, features, about, and both API routes. When the app gets a branded domain (it should — see §6.2), this is an 11-file change with a miss risk. The site base URL `https://www.marpropertyinvestments.co.uk` is similarly repeated. → **Create `lib/site.ts` exporting `APP_URL`, `SITE_URL`, `CONTACT_TO`, `CONTACT_FROM`** and import everywhere.
2. **Duplicated logic between the two API routes.** `escapeHtml`, the email-address regex, honeypot handling and the TO/FROM defaults are copy-pasted. Fine at n=2; extract to `lib/email.ts` before n=3.
3. **`app/sitemap.ts` is a hand-maintained route list.** It is currently complete (verified against the filesystem), but nothing enforces that. A new guide that is forgotten here silently loses sitemap coverage. → Derive guide routes from a shared guide registry (the `/guides` hub page already has one — export it and reuse), or add a build-time check.
4. **`next.config.ts` is empty** — no security headers, no redirects. See §5.4.
5. **The RRA cornerstone guide is a bespoke 475-line page** while the other 15 guides use `GuideArticle`. Justifiable for a flagship page, but it duplicates the disclaimer/CTA/JSON-LD patterns; keep an eye on it drifting from the shared component's behaviour.

**Assessment: appropriate, proportionate architecture with no over-engineering. The weaknesses are consolidation chores, not design flaws.**

---

## 3. Technical Review

### 3.1 Verified during this review

- `npm run build` — **passes**; 32/32 static pages generated, 2 dynamic API routes.
- `npx tsc --noEmit` (strict mode) — **zero errors**.
- `npm audit` — **1 high, 1 moderate** (see §3.4).

### 3.2 Code quality observations (positive)

- Forms are properly engineered: disabled/pending states, `role="alert"` error regions, guarded `res.json().catch(() => ({}))`, distinct network-error vs server-error messaging, form reset on success.
- Accessibility basics are present: labelled inputs, `aria-label` on the mobile menu toggle, `aria-hidden` + `tabIndex={-1}` + off-screen positioning on honeypots (correct pattern — screen readers and keyboards skip it).
- Error handling in API routes distinguishes must-succeed sends (fail the request, 502) from best-effort sends (log and continue) — with comments stating which is which and why.
- `escapeHtml` covers the right five characters and is applied to every user-supplied value interpolated into email HTML.
- Metadata discipline: `metadataBase`, per-page canonicals on all guides/checker, `en_GB` locale, keyword sets, OG types (`website` vs `article`) chosen correctly.

### 3.3 Defects and niggles (all minor)

| # | Item | Detail |
|---|---|---|
| T1 | Quiz progress mismatch | `rra-checker.tsx` shows `Question 1 of 10` but the bar/percent use `step/total` → displays **0%** on question 1 and 90% on question 10. Use `(step + 1) / total` for display. |
| T2 | Sitemap `lastModified` | Set to `new Date()` for every route on every build — tells crawlers everything changed constantly, which devalues the signal. |
| T3 | Shared publish dates | `GuideArticle` hardcodes `datePublished/dateModified: '2026-06-05'` and "Last reviewed: June 2026" for *all* guides. Make these per-guide props — they are also your content-review control (see §7.3). |
| T4 | Footer year frozen at build | `new Date().getFullYear()` in a statically rendered footer only updates on rebuild. Harmless, but will read "2026" in January 2027 if the site isn't redeployed. |
| T5 | No input length limits | Contact/checker accept unbounded `message`/`subject` strings into emails (see §5.2). |

### 3.4 Dependency health

- **next@16.1.6** carries a published advisory set (XSS via CSP nonces, RSC cache poisoning, image-optimization DoS, middleware bypass variants, SSRF via WebSocket upgrades — GHSA list in audit output). Most require features this site doesn't use (middleware, image optimization, CSP nonces), so *current* exploitability is low — but the fix is a patch-level `npm audit fix`. Do it anyway.
- **postcss** (moderate, build-time only) — same fix.
- No Dependabot/Renovate config, so the next advisory will also arrive silently. → enable Dependabot.

### 3.5 Engineering process

- **No tests.** For a static marketing site this is defensible; for the two API routes (the only code that can misbehave in production) a half-dozen route tests (honeypot, invalid email, missing fields, happy path with mocked Resend) would be cheap insurance.
- **No lint config, no CI.** Nothing prevents a broken build being merged except discipline. Git history shows a healthy PR-based flow with clean, descriptive messages — the discipline is real, but it isn't enforced. → A single GitHub Actions workflow running `tsc --noEmit && next build` on PRs closes this.
- **No README.** A new contributor (or a future AI session) has no entry point. See §8.

---

## 4. Security Review

### 4.1 Threat model

No auth, no sessions, no cookies, no database, no user content rendered to other users. The only attack surface is **two unauthenticated POST endpoints that cause email to be sent**, plus the platform/dependency layer.

### 4.2 Finding S1 — HIGH: `/api/contact` can be used as an open email relay

The contact route sends an auto-acknowledgement **to the address the caller supplies**, containing **the subject and message the caller supplies**, from your verified sending domain (`contact@marpropertyinvestments.co.uk`):

- `route.ts` accepts any `email` + free-text `subject`/`message` → sends the victim an email whose body is the attacker's text verbatim (escaped for HTML, but escaping doesn't stop spam/phishing prose).
- There is **no rate limiting, no CAPTCHA, no origin check**; the honeypot only stops naive crawlers — a targeted script simply omits the `company` field.
- Consequences: bulk unsolicited mail from your domain → **DMARC/domain reputation damage, Resend account suspension, blacklisting of the domain your business email presumably also uses**, plus per-email cost. The RRA endpoint is a lesser variant (content is fixed, but it still emails any address on demand — 2 sends per call).

**Recommendations (in order of value):**
1. **Rate limit both routes** (per-IP token bucket — Vercel WAF rule, or Upstash Ratelimit; even an in-memory limiter per function instance raises the bar meaningfully).
2. **Stop echoing the message body in the acknowledgement** — "Thanks, we received your message about *[subject only, length-capped]*" removes the relay value at zero UX cost.
3. Add **Cloudflare Turnstile or hCaptcha** on both forms (invisible modes exist).
4. **Cap field lengths** server-side (e.g. name 100, subject 150, message 5,000 chars) and reject oversized JSON bodies.
5. Monitor Resend via its webhooks/dashboard for volume anomalies; set a billing alert.

### 4.3 Finding S2 — MEDIUM: No security headers

`next.config.ts` sets nothing: no `Strict-Transport-Security`, `Content-Security-Policy`, `X-Frame-Options`/`frame-ancestors`, `Referrer-Policy`, or `Permissions-Policy`. For a static site a strict CSP is easy (self + inline JSON-LD scripts) and cheap credibility for a product marketing "security first". → Add a `headers()` block; verify with securityheaders.com after deploy.

### 4.4 Things done right (worth keeping)

- Server-authoritative computation of the checker result — the client cannot inject prose into the emailed plan (explicitly designed and commented).
- Correct HTML escaping of all user input in email templates; JSON body via Resend SDK means no SMTP header-injection path; subject prefixing (`[Website enquiry]`) keeps provenance clear.
- `dangerouslySetInnerHTML` is used only for `JSON.stringify` of **static, hardcoded** JSON-LD objects — safe today. (Rule to codify: if JSON-LD ever includes user/CMS data, escape `<` in the serialiser.)
- Honeypots return **fake success**, denying bots a training signal.
- No secrets in the repo; `.env` gitignored; `.env.example` documents setup without leaking anything; internal strategy docs deliberately excluded from the public repo with rationale.
- Dependency count is tiny (8 runtime deps) — small supply-chain exposure.

### 4.5 Residual dependency risk

The Next.js advisory set (§3.4) mostly targets features unused here, but **middleware-bypass and cache-poisoning classes can become relevant the day middleware or dynamic rendering is added**. Patch now while it's a no-op.

---

## 5. Financial Risk Review

| # | Risk | Exposure | Mitigation |
|---|---|---|---|
| F1 | **Email abuse costs / account suspension** (from S1) | Each abusive call = up to 2 Resend sends + a serverless invocation, unbounded. Worst case: Resend suspends the account → **both lead funnels silently die** (revenue impact exceeds the direct cost). | Rate limiting + captcha + billing alerts (§4.2) |
| F2 | **Unbranded app domain.** Every signup CTA on the site points to `property-app-pi-fawn.vercel.app` — a machine-generated Vercel URL. | Conversion loss (looks like a hobby project at the exact moment of trust transfer, on a site charging up to £99.99/mo); continuity risk (Vercel project rename breaks 11 hardcoded references); lookalike/phishing risk (anyone can register a similar `*.vercel.app`). | Put the app on `app.marpropertyinvestments.co.uk`; centralise the constant (§2.3.1) |
| F3 | **Lead pipeline is email-only, defaulting to a third-party mailbox.** If `CONTACT_TO_EMAIL` is unset, leads route to the hardcoded fallback `Marpropertyinvestmentsltd@mail.com` — a mail.com address published in a public repo, and inconsistent with the `contact@marpropertyinvestments.co.uk` shown on the contact page. Leads exist nowhere except that inbox. | Silent lead loss; single point of failure; minor credential-phishing target since the address is public. | Make the env var required (fail loudly at build if unset); align default with the branded domain; consider logging leads to a store/sheet as a second copy |
| F4 | **Refund terms vs consumer law.** Terms state "No refunds are provided for partial months." Small landlords may qualify as consumers; UK Consumer Contracts Regulations give a 14-day cancellation right for distance contracts for digital services unless properly waived, and blanket no-refund wording can be unenforceable/unfair (CRA 2015). | Chargebacks, ASA/Trading Standards complaints, unenforceable term. | Have the terms reviewed; add the 14-day cooling-off treatment and the express-consent-to-immediate-supply waiver if intended |
| F5 | **Claim-substantiation liability.** "The only UK landlord tool that…" appears repeatedly; "3,254 regression tests across 243 suites"; "fully GDPR/UK GDPR compliant"; "legally binding… Valid under UK eIDAS". Objective superlative claims are actionable (ASA; competitor complaint is the usual trigger) if not substantiated **at the time of publication**. | Forced ad withdrawal, adverse ASA ruling (public), competitor PR ammunition. | Maintain a claims register (§7.4) with evidence per claim; soften or date-stamp what can't be evidenced |

---

## 6. Operational Risk Review

| # | Risk | Detail | Mitigation |
|---|---|---|---|
| O1 | **Resend is a single point of failure** for both funnels | A Resend outage or suspension = no contact messages, no lead plans. Errors go to `console.error` only (Vercel logs — nobody is alerted). | Resend webhook → alert; consider a fallback provider behind an interface; at minimum a weekly test-send |
| O2 | **No CI gate** | Merges to `master` presumably auto-deploy with no build check in the repo. | One GitHub Actions workflow: typecheck + build on every PR |
| O3 | **No observability at all** | No analytics, no uptime check, no funnel measurement. (The upside — zero cookies, zero consent banner — is real and worth preserving; choose a cookieless analytics tool like Plausible/Fathom if measurement is wanted.) | Uptime monitor on `/` and a synthetic POST test; cookieless analytics if desired |
| O4 | **Statutory-content staleness** | 16 guides state law as of "June 2026", with one shared hardcoded review date. RRA commencement, EPC C proposals, CGT rates, deposit caps *will* change. Wrong statutory guidance under your brand is a reputational risk the disclaimers only partly absorb. | Per-guide `lastReviewed` prop (T3) + a quarterly content-review checklist; treat guide review dates as a compliance control, not decoration |
| O5 | **Statute naming inconsistency** | The same law is called **"Renters' Rights Act 2025"** on home/features/about/pricing and **"Renters' Rights Act 2026"** in all guides, URLs and the checker. One site, two names for the flagship topic — confuses users, splits SEO equity, and looks careless to the exact audience being told you are the compliance experts. | Pick the statutory citation (the Act's year of passage), use it everywhere, with commencement dates stated separately; add to CLAUDE.md as an editorial rule (§8) |
| O6 | **Bus factor / no runbook** | No README: how to deploy, what env vars exist (only `.env.example` hints), who owns the domain/Resend/Vercel accounts. | 30-line README: stack, commands, env vars, deploy path, ownership |

---

## 7. Compliance Review

### 7.1 Finding C1 — HIGH: Missing statutory trading disclosures

The Companies Act 2006 and the Company, LLP and Business (Names and Trading Disclosures) Regulations 2015 require a UK company's website to state: **registered company name, company registration number, registered office address, and place of registration**. The site shows "MAR Property Investments Ltd" and "Registered in England & Wales" (footer, about, contact) but **no CRN and no registered office address** anywhere. The Ecommerce Regulations 2002 additionally require a geographic address and email for service providers (email is present). This is a strict, fine-able requirement and a five-minute fix. → Add a company-details block to the footer.

### 7.2 Finding C2 — HIGH: Privacy notice does not cover this site's actual processing

`/privacy` describes the **PropertyApp product** (isolated databases, bcrypt, Stripe, DocuSeal…). It does not mention what **this site** collects and does:

- Contact-form data (name, email, subject, message) processed via **Resend** (not listed as a processor) and stored in a mailbox;
- RRA-checker data — email **plus compliance answers**, which are arguably more sensitive than they look (they are, in effect, self-declared legal non-compliance records tied to an identified landlord);
- Hosting/server logs (Vercel), retention for leads, and the lawful basis for each.

→ Add a "This website" section (or a separate site privacy notice) naming Resend and Vercel, the purposes, retention and lawful bases. Also verify **ICO registration** (data-protection-fee) status for MAR Property Investments Ltd — processing lead and tenant data almost certainly requires it.

### 7.3 Finding C3 — MEDIUM-HIGH: PECR marketing consent on the checker

`/rra-check` says: *"We'll only use your email to send your action plan and occasional updates — unsubscribe any time."* Problems:

1. "Occasional updates" is electronic direct marketing. PECR requires **consent** for that; the soft-opt-in exception applies to *existing customers* in a sales context, which a free lead magnet likely is not.
2. Consent here is bundled and implicit (submitting for one purpose is treated as agreement to another) — not the unbundled, affirmative consent UK GDPR requires.
3. **No unsubscribe mechanism exists** — there is no mailing list infrastructure in this codebase, and the transactional emails sent contain no unsubscribe link. Promising "unsubscribe any time" without the mechanism is itself a problem.

→ Either (a) drop "and occasional updates" and keep the flow purely transactional (cleanest, zero engineering), or (b) add an unticked opt-in checkbox, store consent, and send via an audience/list with working unsubscribe.

### 7.4 Finding C4 — MEDIUM: Advertising-claims accuracy (CAP Code / ASA, with an FCA edge)

- **Superlatives:** "The only UK landlord tool/software that…" appears on home, about, guides hub, pricing FAQ and features in several variants. These are objective comparative claims; the ASA requires documentary substantiation held **before** publication. A single competitor shipping CT600 support falsifies several pages at once.
- **Sandbox vs production:** the homepage feature card says MTD does "Quarterly SA105 submissions **direct to HMRC** via Government Gateway"; only the pricing FAQ and one trust-strip badge disclose "sandbox". Same pattern for Open Banking ("Sandbox today; production via the FCA TrueLayer Agent route" — FAQ only). Material qualifications buried away from the headline claim is the classic **misleading-omission** pattern. The team's own `.gitignore` comment ("FCA-gated modules") shows the perimeter issue is understood internally — the public copy should reflect the same care. Keep regulated-sounding claims (Open Banking, referencing, e-signature validity) precisely scoped until the relevant authorisations/integrations are production-real.
- **Unverifiable numerics:** "3,254 regression tests across 243 suites" is the kind of claim that ages instantly and invites challenge; either date-stamp it ("as of June 2026") or generate it from the product repo.
- **"Fully GDPR compliant"** — the ICO itself discourages compliance-as-badge claims; prefer describing the concrete measures (which the site already does well elsewhere).

→ Create a **claims register**: every objective marketing claim, its evidence, its status (shipped / sandbox / roadmap), and its last verification date. This is a business-analysis artefact, it plays directly to the owner's strengths, and it converts a diffuse legal risk into a maintained control.

### 7.5 What is already done well

- **Disclaimers are consistent and well-placed:** every guide carries a "general information, not tax/legal advice" notice (a sensible default in `GuideArticle`, strengthened per tax guide), the checker page and both checker emails repeat it. This materially mitigates the guidance-liability risk of §6 O4.
- **No cookies, no trackers, self-hosted fonts** (`next/font` bundles Geist — no request to Google at runtime): no consent banner needed, and the site avoids the Google-Fonts-IP-transfer problem entirely. This is a genuinely clean PECR/GDPR posture — preserve it deliberately.
- Terms include the right liability framing for a tax tool ("not a substitute for professional… advice", "verified by a qualified accountant").
- Public repo contains no personal data, no secrets, and deliberately excludes internal documents.

---

## 8. CLAUDE.md / AI-Development Governance Review

### 8.1 Finding

**There is no CLAUDE.md in this repository, and there never has been** (verified against full git history). There is also no README, no CONTRIBUTING, no lint/test/CI configuration. The only codified controls are the `.gitignore` comment block and `.env.example`.

### 8.2 Why this matters *for this specific repo*

The owner's stated method — 25 years of business analysis applied as *controlled requirements, controls and guidance* driving AI development — demonstrably works here. The evidence is in the output: 31 commits of coherent, convention-consistent work; rationale comments at every non-obvious decision ("no trusting client-sent prose", "pretend success so the bot has no signal", "Mirrors the contact route's config"); a PR-based history with clean messages; a deliberate information-classification rule in `.gitignore`. This codebase reads like it was built against requirements, because it was.

But the *controls themselves are not in the repository*. They currently exist in the owner's prompts and session history. Every new AI session must re-derive: the statutory naming convention (and it shows — the 2025/2026 split of O5 is exactly the class of drift a written editorial rule prevents), the claim-substantiation rule, the single-`APP_URL` intent, the "new guides use `GuideArticle` + sitemap + canonical + JSON-LD" definition of done, and the never-commit-internal-docs rule. In BA terms: **the requirements are controlled, but the controls are not versioned**. CLAUDE.md is where they belong — it is loaded automatically into every future Claude session against this repo, making it the highest-leverage governance file you can write.

### 8.3 Recommended CLAUDE.md (ready to adopt)

```markdown
# CLAUDE.md — property-marketing-site

## What this repo is
Public marketing site for PropertyApp (MAR Property Investments Ltd).
Next.js 16 App Router + TypeScript strict + Tailwind 4. Static-first:
marketing pages are prerendered; the ONLY server code is
app/api/contact and app/api/rra-check (both send email via Resend).
The PropertyApp product lives in a SEPARATE private repo — this repo
must never contain product source, internal docs, or roadmap material
(see .gitignore; this repo is PUBLIC).

## Commands
- npm run dev    # port 3001
- npm run build  # must pass before any push
- npx tsc --noEmit

## Architecture rules
- Shared constants (APP_URL, SITE_URL, contact addresses) live in
  lib/site.ts — never hardcode them in pages or routes.
- New guides: use components/guide-article.tsx with per-guide
  lastReviewed date; add the route to app/sitemap.ts; set
  alternates.canonical; verify JSON-LD renders.
- The RRA checker questions live ONLY in lib/rra-questions.ts —
  scoring stays server-side in the API route.
- Forms keep the honeypot pattern (field name "company",
  fake-success response) and server-side validation + escapeHtml.

## Editorial & compliance controls
- Statute naming: "Renters' Rights Act 2025" (the Act);
  commencement/implementation dates stated separately. Never "RRA 2026"
  as the Act's name.
- Marketing claims: every objective claim ("the only…", numbers,
  "direct to HMRC") must match the claims register and the product's
  SHIPPED state. Sandbox-only features must say so in the same
  breath as the claim, not only in an FAQ.
- Every guide keeps the "general information, not advice" disclaimer.
- Footer must retain the statutory company details block
  (name, CRN, registered office, place of registration).
- Do not add cookies, analytics, or third-party scripts without
  flagging the PECR/consent impact first.

## Definition of done for any change
build passes · typecheck passes · sitemap/canonical updated for new
routes · no new hardcoded URLs/emails · no internal docs committed
```

### 8.4 Assessment of the method itself

Requested context: the owner has not trained in AI and is applying 25 years of business-analysis practice to drive AI development through controlled requirements. On the evidence of this repository, the honest assessment is:

- **What the method is producing:** consistency and traceability that many professional teams don't achieve — conventions hold across 31 commits, decisions carry their rationale in-place, functional quality is high, and scope discipline is visible (no speculative features, no dead code, nothing half-finished in the tree).
- **Where the method's blind spots show:** exactly where un-prompted requirements live — the *non-functional* and *statutory* layer. Rate limiting, security headers, CRN disclosure, PECR consent mechanics and CI gates are things no feature requirement ever asks for; they come from checklists, not stories. The fix is the BA's own toolkit: promote this review's findings register into standing non-functional requirements, codify the editorial/compliance rules in CLAUDE.md, and add the one CI workflow that makes "build passes" a control rather than a habit.
- **Net:** the boundary being pushed here is real. The gap is not skill or tooling — it is that the control framework is oral. Write it down (§8.3), and the same method covers the blind spots too.

---

## 9. Consolidated Findings Register

| ID | Sev. | Area | Finding | Recommendation |
|----|------|------|---------|----------------|
| S1 | **High** | Security/Financial | `/api/contact` relays attacker content to attacker-chosen addresses from the verified domain; no rate limit/captcha on either endpoint | Rate limit; stop echoing message body in the ack; captcha; length caps; Resend alerts |
| C1 | **High** | Compliance | Missing statutory trading disclosures (CRN, registered office) | Add company-details block to footer |
| C2 | **High** | Compliance | Privacy notice doesn't cover the site's own processing (contact form, checker answers, Resend, Vercel); ICO registration to verify | Add site-specific privacy section; confirm ICO fee registration |
| C3 | **Med-High** | Compliance | PECR: "occasional updates" marketing promise without consent mechanism or working unsubscribe | Drop the promise or implement real opt-in + list management |
| C4 | **Medium** | Compliance | Unsubstantiated superlatives; sandbox status disclosed only in FAQ; unverifiable numerics | Claims register; qualify claims at point of use |
| F2 | **Medium** | Financial | Signup CTAs point at unbranded `*.vercel.app` domain, hardcoded in 11 files | Branded app subdomain + `lib/site.ts` constant |
| F3 | **Medium** | Financial/Ops | Lead pipeline defaults to a public, off-brand mail.com inbox; email-only lead storage | Require env var; align addresses; secondary lead store |
| F4 | **Medium** | Legal | "No refunds" term vs consumer cancellation rights | Legal review of terms §4 |
| S2 | **Medium** | Security | No security headers (HSTS, CSP, frame-ancestors, etc.) | `headers()` in next.config.ts |
| D1 | **Medium** | Technical | next@16.1.6 high-severity advisory set; postcss moderate; no Dependabot | `npm audit fix`; enable Dependabot |
| O1 | **Medium** | Operational | Resend single point of failure, errors only in logs, no alerting | Webhook alerts; synthetic tests |
| O2 | **Medium** | Operational | No CI gate on build/typecheck | One GitHub Actions workflow |
| O4 | **Medium** | Operational | Statutory guide content has no per-guide review control | Per-guide lastReviewed + quarterly review checklist |
| O5 | **Medium** | Content | "RRA 2025" vs "RRA 2026" naming split across the site | Standardise; codify in CLAUDE.md |
| G1 | **Medium** | Governance | No CLAUDE.md/README — controls not versioned in-repo | Adopt §8.3 CLAUDE.md + 30-line README |
| T1–T5 | Low | Technical | Progress-bar %, sitemap lastModified, shared publish dates, frozen year, no input caps | Per §3.3 |
| G2 | Low | Governance | No tests for the two API routes | ~6 route tests with mocked Resend |

## 10. Prioritised Action Plan

**Now (this week, ~a day of work total):**
1. Footer company-details block (C1) — minutes, removes a strict legal gap.
2. Rate limit + de-fang the contact acknowledgement + length caps (S1).
3. `npm audit fix` (D1) and security headers (S2).
4. Privacy-notice site section + decide the "occasional updates" question (C2, C3).
5. Adopt CLAUDE.md (§8.3) and standardise the Act's name (O5, G1).

**Next (this month):**
6. Claims register + copy pass on superlatives/sandbox qualifications (C4, F5).
7. Branded app domain + `lib/site.ts` consolidation (F2, F3) — do together, it's one refactor.
8. CI workflow, Dependabot, README (O2, D1, O6).
9. Terms review for consumer-cancellation rights (F4).

**Later (this quarter):**
10. Per-guide review dates + quarterly statutory-content review cadence (O4, T3).
11. API route tests; Resend alerting; uptime monitor (G2, O1, O3).
12. Optional: cookieless analytics, captcha, secondary lead store.

---

*Prepared as a point-in-time review of commit `2aaf330` on branch `claude/app-architecture-compliance-review-9g23bf`. Legal and regulatory observations identify risk areas for professional review; they are not legal advice.*
