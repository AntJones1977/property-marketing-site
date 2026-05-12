# UK Property Management Software — Competitive Comparison

> Snapshot as of **12 May 2026 (post-go-live testing wave)**. Refreshed
> end-to-end after the May 2026 build sprint — Form 4A statutory
> rent-increase workflow, records-first CT600 with mid-year split
> support, drift detection between current rate and actuals, admin
> tenant impersonation for testing, portal-login deep-links in tenant
> emails, bank-feed locked-year guard, Capital Investments CRUD,
> per-surface portfolio scope filters, and 50+ additional
> hotfix-grade fixes driven by real go-live testing on Vercel.
> Updated whenever a material competitor feature-launch happens or we
> ship anything strategic. Sources at the bottom of the file.
>
> **Stats at refresh:** 2,756 tests across 212 suites · 28 Prisma
> migrations · 73 pages · 211 API routes · ~90,789 LOC.

## Competitors Benchmarked

1. **Arthur Online** — mid-market letting-agent CRM, £70–£126/mo per org, thousands of integrations
2. **PayProp** — FCA-regulated client-money rent collection for letting agents, ~£49/mo + transaction
3. **Re-Leased** — commercial/mixed-use asset manager, quote-based (typically £300–£1,500/mo)
4. **Landlord Vision** — long-established UK self-managing landlord tool, £22–£100/mo, HMO-aware
5. **Hammock** — fintech-clean MTD bridge with FCA Open Banking, £8–£25/mo
6. **Alphaletz** — mobile-first individual landlord app, free tier + £10/mo
7. **Rentancy** — hybrid software + outsourced back-office service (agent model)
8. **Landlord Studio** — global DIY landlord app with best-in-class mobile, free–£24/mo

## Capability Matrix

Legend: ✅ full · ⚠️ partial/limited · ❌ not offered · 💰 custom pricing

| Capability                                                   | Our App                              | Arthur              | PayProp       | Re-Leased     | Landlord Vision    | Hammock            | Alphaletz     | Rentancy     | Landlord Studio    |
| ------------------------------------------------------------ | ------------------------------------ | ------------------- | ------------- | ------------- | ------------------ | ------------------ | ------------- | ------------ | ------------------ |
| Dashboard & reporting                                        | ✅                                   | ✅                  | ⚠️            | ✅            | ✅                 | ✅                 | ✅            | ⚠️           | ✅                 |
| Property CRUD (personal + company + **MANAGED**)             | **✅ 4-state**                       | ✅                  | ⚠️            | ✅            | ✅                 | ✅                 | ✅            | ⚠️           | ✅                 |
| Tenant portal (with e-sign)                                  | ✅                                   | ✅                  | ❌            | ✅            | ✅                 | ❌                 | ⚠️            | white-label  | ⚠️                 |
| **Admin tenant impersonation (for testing)**                 | **✅ unique** _(NEW)_                | ❌                  | ❌            | ❌            | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| Document management                                          | ✅                                   | ✅                  | ⚠️            | ✅            | ✅                 | ⚠️                 | ⚠️            | ⚠️           | ✅                 |
| Big-file uploads (>4.5MB, client-direct to blob)             | **✅** _(NEW)_                       | ⚠️                  | ⚠️            | ✅            | ⚠️                 | ⚠️                 | ⚠️            | ⚠️           | ⚠️                 |
| E-signature (DocuSeal) — single + joint AST + landlord       | **✅ landlord countersign**          | via Signable        | ❌            | ⚠️            | ✅                 | ❌                 | ❌            | ❌           | ⚠️                 |
| **Form 4A statutory rent-increase (Section 13(2))**          | **✅ end-to-end workflow** _(NEW)_   | ❌                  | ❌            | ❌            | ⚠️ template only   | ❌                 | ❌            | ⚠️ service   | ❌                 |
| **Renewal AST auto-drafted on Accept**                       | **✅ unique** _(NEW)_                | ❌                  | ❌            | ❌            | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| **AST landlord-sign drift reconciliation banner**            | **✅ unique** _(NEW)_                | ❌                  | ❌            | ❌            | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| Maintenance workflow                                         | ✅                                   | ✅ (contractor app) | ❌            | ✅            | ✅                 | ❌                 | ⚠️            | done-for-you | ⚠️                 |
| **Maintenance → receipts → SA105 wiring (auto-Expense)**     | **✅ unique** _(NEW)_                | ⚠️ records only     | ❌            | ⚠️            | ⚠️                 | ❌                 | ❌            | ⚠️           | ⚠️                 |
| **Receipt scanning (AI vendor + VAT + HMRC category)**       | **✅ Claude Vision**                 | ❌                  | ❌            | ❌            | ⚠️ manual          | ⚠️ basic           | ⚠️ basic      | ⚠️           | ✅                 |
| Tenant screening / referencing                               | ❌                                   | via partners        | ❌            | ⚠️            | ⚠️                 | ❌                 | ❌            | ✅ service   | ✅ TransUnion      |
| Rent collection / Open Banking (TrueLayer/GoCardless/Plaid)  | **✅ Phase 1 + Wave 1 hardening**    | ✅ GoCardless/Xero  | ✅ trust acct | ✅ DD + card  | ✅ OB              | ✅ OB, FCA         | ✅ OB         | ✅ service   | ✅ OB              |
| **Bank-feed locked-year retro-match guard**                  | **✅ unique** _(NEW)_                | ❌                  | ❌            | ❌            | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| Financial reporting (P&L)                                    | ✅                                   | via Xero            | ⚠️            | ✅            | ✅                 | ✅                 | ✅            | via Xero     | ✅                 |
| **Capital Investments CRUD (active/repaid/written-off)**     | **✅ unique** _(NEW)_                | ❌                  | ❌            | ⚠️ asset reg  | ⚠️                 | ❌                 | ❌            | ❌           | ❌                 |
| UK Tax SA105 + MTD quarterly                                 | ✅ HMRC sandbox                      | via Xero            | ❌            | ❌            | ✅ HMRC-recognised | ✅ HMRC-recognised | ⚠️            | via partners | ✅ HMRC-recognised |
| **SA105 lock-for-review + accountant email summary**         | **✅ unique** _(NEW)_                | ❌                  | ❌            | ❌            | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| **SA105 per-year ownership-aware filter**                    | **✅ unique** _(NEW)_                | ❌                  | ❌            | ❌            | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| **UK Tax CT600 / Company SPV**                               | **✅ per-company grouped**           | ❌                  | ❌            | ❌            | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| **CT600 records-first per-property running costs**           | **✅ unique** _(NEW)_                | ❌                  | ❌            | ❌            | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| **CT600 mid-year rate-change split (two records)**           | **✅ unique** _(NEW)_                | ❌                  | ❌            | ❌            | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| **CT600 drift detection (current rate vs actuals)**          | **✅ unique** _(NEW)_                | ❌                  | ❌            | ❌            | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| **CT600 lock-for-review + accountant email summary**         | **✅ unique** _(NEW)_                | ❌                  | ❌            | ❌            | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| **CT600 tax-year tabs (auto-resolve AP by ARD)**             | **✅ unique** _(NEW)_                | ❌                  | ❌            | ❌            | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| **CT600 company-level expenses + capital allowances**        | **✅ AIA + WDA + 12 categories**     | ❌                  | ❌            | ❌            | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| **SA105 + CT600 dual surface under one roof**                | **✅ unique**                        | ❌                  | ❌            | ❌            | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| **Time-based ownership history (back-datable)**              | **✅**                               | ❌                  | ❌            | ⚠️ commercial | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| **Time-based tenancy history (rent / deposit periods)**      | **✅** _(NEW)_                       | ❌                  | ❌            | ⚠️ commercial | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| **MANAGED ownership (operational-only)**                     | **✅ unique**                        | ❌                  | ❌            | ❌            | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| **Gas-appliance gating (CP12 skip if all-electric)**         | **✅ unique**                        | ❌                  | ❌            | ❌            | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| **Lease extension tracking (S.42)**                          | **✅**                               | ❌                  | ❌            | ⚠️ commercial | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| **Renters' Rights Act 2025 / 2026 compliance**               | **✅ end-to-end + Form 4A + portal** | ⚠️                  | ❌            | ❌            | ⚠️                 | ❌                 | ❌            | ⚠️ service   | ⚠️ content         |
| **Statement of Tenancy Terms — auto-resend on rent edit**    | **✅ unique** _(NEW)_                | ❌                  | ❌            | ❌            | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| **Portal-login deep-link in every tenant email**             | **✅ unique** _(NEW)_                | ❌                  | ❌            | ❌            | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| **Section 8 Ground 14 ASB evidence pack**                    | **✅**                               | ⚠️ generic notes    | ❌            | ❌            | ⚠️                 | ❌                 | ❌            | ⚠️           | ❌                 |
| **HMO compliance (licence, rooms, FRA)**                     | **✅ + 30+ councils**                | ✅ hierarchy        | ❌            | N/A           | ✅ HMO module      | ❌                 | ⚠️ certs only | ⚠️ service   | ⚠️                 |
| **Rent Review Insights (ONS PRI + comparables)**             | **✅ + daily ONS cron**              | ⚠️                  | ❌            | ⚠️ commercial | ⚠️                 | ❌                 | ❌            | ⚠️ service   | ❌                 |
| Compliance calendar (portfolio-wide)                         | ✅                                   | ⚠️                  | ❌            | ✅            | ⚠️                 | ❌                 | ⚠️ reminders  | ⚠️           | ⚠️                 |
| Reference Data (solicitors/brokers/fees/companies/landlords) | ✅ 5 entity types                    | ⚠️                  | ❌            | ⚠️            | ⚠️                 | ❌                 | ❌            | ⚠️           | ❌                 |
| **Per-surface portfolio scope filters**                      | **✅ unique** _(NEW)_                | ❌                  | ❌            | ❌            | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| Growth Plan with snapshot changelog                          | ✅                                   | ❌                  | ❌            | ⚠️            | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| Audit logging + GDPR export/deletion                         | ✅                                   | ⚠️                  | ⚠️            | ✅            | ⚠️                 | ⚠️                 | ⚠️            | ⚠️           | ⚠️                 |
| **Property delete (cascade) vs Archive (preserve)**          | **✅ two-lifecycle** _(NEW)_         | ⚠️                  | ⚠️            | ⚠️            | ⚠️                 | ⚠️                 | ⚠️            | ⚠️           | ⚠️                 |
| **Cascade-locked regression tests (contract pinning)**       | **✅ unique**                        | ❌ closed-source    | ❌            | ❌            | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| **Operating principle: "write once, propagate everywhere"**  | **✅ documented + enforced**         | ❌                  | ❌            | ❌            | ❌                 | ❌                 | ❌            | ❌           | ❌                 |
| Multi-property / portfolio                                   | ✅                                   | ✅                  | ✅            | ✅            | ✅                 | ✅                 | ✅            | ✅           | ✅                 |
| Native mobile app                                            | ❌ responsive web                    | ✅ (4 apps)         | ⚠️            | ✅            | ⚠️                 | ✅                 | ✅            | ❌           | ✅ best-in-class   |
| Pricing                                                      | self-hosted / SaaS                   | £70–£126/mo         | £49/mo + ~1%  | 💰 quote      | £22–£100/mo        | £8–£25/mo          | free–£10/mo   | 💰 service   | free–£24/mo        |

## Where We Lead (unique wedges)

1. **SA105 + CT600 dual surface under one roof — now with mid-year split correctness.** `/taxes` for personal SA105, `/taxes/company` for limited-company CT600, with **MANAGED** ownership cleanly excluded from both. Every other tool forces you to pick a side. The CT600 surface includes 12 company-expense categories (mortgage interest full deduction, director salary, employer pension, S455 director's loan tracking), ATED alerts, Companies House deadlines, AIA + WDA capital allowances — and crucially, **records-first per-property running costs** so a service charge that goes up mid-tax-year (e.g. management company changeover) is captured as two records and split correctly across the period.

2. **Time-based ownership history with back-datable transitions.** `PropertyOwnership` table closes/opens periods at the actual transfer date when you flip a property's ownership type — splits MTD/CT600 correctly across the tax-year boundary. **No competitor lets you do this** — they all overwrite the type and leave the historic returns wrong. Combined with the SA105 per-year ownership-aware filter (12 May 2026 hotfix), this means a property transferred to a Limited Company on 26 Feb 2026 keeps its 10 personal-ownership months on the 2025-26 SA105 and the 2 company-ownership months on the 2025-26 CT600 — automatically, without manual override.

3. **Time-based tenancy history (rent / deposit / contact periods).** Sibling of ownership history on the tenancy side. Every rent change, deposit change, tenant change, or lease-type change opens a new `TenancyPeriod` row at the actual effective date. SA105 / CT600 / MTD all sum `period.rentAmount × monthsActiveInTaxYear` instead of a single forward-estimate column, so a mid-year rent change comes out right. A canonical writer (`applyRenewedRent`) fires on every renewal AST sign so rent propagates to every dependent surface in a single transaction.

4. **Records-first CT600 with mid-year rate-change support.** The user's mental model: "service charge is £200/mo until Sept then £250/mo from Oct when the management company changes." Every other tool stores this as a single denormalised column and either overwrites silently or refuses the change. We store it as two Expense records, the CT600 aggregator picks them up automatically, and a separate **drift-detection banner** surfaces stale forward-estimate columns with a one-click deep-link to the property Edit panel for the user to update. No auto-sync (because the user has to decide how to split a sum like service charge + ground rent across the two columns) — visible drift + manual update keeps the user in control.

5. **Statement of Tenancy Terms — auto-resend on rent edit.** When the tenancy financial state changes (rent edit, deposit change, lease-type flip, contact list change) a new `TenancyPeriod` opens and the SoTT surface auto-derives a "Re-send needed" badge. The landlord clicks Resend — no manual flag-flipping, no chance of forgetting (which would be a Renters' Rights Act breach). Auto-dispatch is intentionally NOT performed (tenant-spam concern), but the badge is sticky until acknowledged.

6. **Form 4A — full statutory rent-increase workflow (Section 13(2) Housing Act 1988).** End-to-end: propose → render docx with prefilled tenant/landlord/rent values → DocuSeal landlord-pre-sign → on signed, tenant auto-emailed the signed Form 4A + portal link → tenant clicks Accept / Decline / Refer to Tribunal in the portal → on Accept, a renewal Tenancy Agreement is auto-drafted with the new rent + new effective date → landlord sends → all parties sign → COMPLETED → new TenancyPeriod opens at the new rent → SA105 / CT600 / MTD / property tile / portal panel ALL re-render. **No competitor has this end-to-end** — they sell template downloads or rely on the user emailing PDFs manually. Joint-tenancy fan-out is correct (each named tenant individually receives the statutory notice as required by S.13(2)).

7. **AST landlord-sign drift reconciliation.** Sibling of the rent-increase auto-flow. When any non-Form-4A AST envelope flips to SIGNED, the system snapshots the prefill values captured at send time and cross-checks against the current Tenancy + Property state. Mismatches (rent / deposit / dates / contacts / address) surface as a red banner above the property Tenancy tab with field-by-field signed-AST-vs-current comparison and a "Mark reviewed" button. The denormalised `Property.rentalIncome` mirror is force-corrected; everything else is flagged for the user to decide (the AST or the row could legitimately be the stale one — the system doesn't presume).

8. **Bank-feed locked-year retro-match guard.** Once the user has locked a tax year (e.g. 2025-26 — emailed totals to the accountant for review and signed off), the daily auto-match cron + the manual-match drawer both refuse to retro-match a transaction into the locked period. Server-side mirror of the lock list (`KeyValue` row) so the guard applies even when the lock was set in a different browser. **Audit-trail integrity is the operating principle** — a locked year never changes silently.

9. **Admin tenant impersonation for testing.** Click "Impersonate" on a tenant row, land on the portal as that tenant with a fresh tenant session — while your admin session stays intact in a separate cookie. Red banner pinned to every portal page until you click Stop. Audit trail brackets the window with `START_TENANT_IMPERSONATION` + `STOP_TENANT_IMPERSONATION` admin-typed entries so impersonated tenant actions stay distinguishable from real ones. The `mustChangePassword` trap is bypassed during impersonation (admins don't know the tenant's temp password). **Crucial for testing tenant-portal workflows on real properties** without juggling test accounts or breaking real-tenant state.

10. **Portal-login deep-link in every tenant email.** Every tenant-facing email — Form 4A signed notification, RRA Information Sheet, Statement of Tenancy Terms — embeds a clickable "Sign in to tenant portal" button + paste-link block driven by a single pure helper (`buildPortalLoginUrl`). Open-redirect-guarded (`sanitiseReturnTo` rejects any non-`/portal/...` path). **No more "search inbox for an earlier invite to find the URL"** — every email is self-contained and deep-links the tenant to the panel they need to action.

11. **MANAGED ownership type (operational-only).** Fourth value on the ownership enum. Properties show on dashboard / properties / compliance / maintenance but are excluded from every tax surface (SA105, MTD threshold, MTD quarterly, CT600). For users who manage on behalf of someone else (friend, family, client). **No competitor models this** — they all push everything onto the user's tax return.

12. **Gas-appliance compliance gating.** `Property.hasGasAppliances` boolean, single-source-of-truth helper `shouldRequireGasSafety`. All-electric properties skip the annual gas-safety (CP12) requirement across the portfolio matrix, Compliance Checklist, HMO tab, dashboard alerts, auto-task generator, and portfolio export. **No competitor models this granularity** — they ask for a CP12 on every property regardless.

13. **Joint-tenant AST signing with parallel DocuSeal envelope + landlord countersigner.** One envelope, N submitters (up to 4 tenants + 1 landlord), aggregate status, plan-gated once per envelope, post-signing automation (PDF download, document attach, landlord notification, tenant fan-out for statutory notices) fires exactly once on the final signer's `form.completed`. Sequential signing with landlord LAST. Most competitors send N independent envelopes and you reconcile manually.

14. **Section 42 leasehold extensions** — full statutory workflow (notice → counter-notice → tribunal → completion), built-in legal reference, 80-year cliff-edge warning. Re-Leased does commercial rent reviews; nobody else covers residential leasehold extensions.

15. **Renters' Rights Act 2025 / 2026 readiness — end-to-end.** Bulk-dispatch Information Sheet to every tenant with delivery + open webhook audit, per-tenant ACKNOWLEDGED state, Statement of Tenancy Terms PDF generation + re-send-needed badge, Section 8 Ground 14 ASB log per property for evidence pack export, MTD threshold checker, 31 May 2026 dashboard deadline alert. Form 4A workflow above is the rent-increase prong of the same regime. Competitors treat RRA as a blog post.

16. **HMO end-to-end compliance** — licence tracker, council scheme lookup (30+ UK councils seeded), room-size compliance (6.51m² / 10.22m² statutory minima), amenity-ratio calculator, compliance-event log with auto next-due dates, portfolio-wide /compliance matrix. Arthur and Landlord Vision do parts; we bundle it into one workflow.

17. **Rent Review Insights with ONS PRI auto-pull cron.** Identifies properties whose rent agreement is stale (12+ months by default), surfaces a defensible suggested rent range based on ONS Private Rental Index uplift + curated local comparables, daily auto-refresh of the regional uplift from the ONS Beta API. **Apply propagates through the canonical rent-renewal writer** so SA105 / CT600 / MTD / property tile all re-read on the next render. Unique combination of market-data benchmark + canonical writer for the actual rent change.

18. **Reference Data model** — 5 entity types (Limited Companies, Solicitors, Mortgage Brokers, Standard Fees, Landlords). Pick-once-reuse-everywhere. No competitor has this pattern.

19. **Capital Investments CRUD with status tracking.** ACTIVE / REPAID / WRITTEN_OFF status tags. The headline figure on `/finances` shows the sum of ACTIVE rows only; REPAID + WRITTEN_OFF surface as footnotes so historical context is preserved without inflating the live capital number. Inline Add / Edit / Delete via REST CRUD. No competitor has this — most don't model investor capital at all.

20. **Per-surface portfolio scope filters.** Compliance alerts on the dashboard pick up freshly-bought properties before rent is set (because statutory certs are a PRE-tenancy duty); finance P&L hides them but surfaces a footnote naming what's hidden; tax surfaces use the time-based ownership history. **Each surface's scope is documented and intentional** rather than copy-pasted — pure helpers in `property-scope-helpers.ts` enforce the per-surface rule and a sibling test pins the contract. No silent hidden-from-dashboard regressions.

21. **Two-lifecycle property removal.** Delete (hard, with full Prisma + KV cascade cleanup) for properties that never completed — a purchase that fell through. Archive (soft, status flip) for sold properties — preserves all financial history, RentPayment / Expense rows stay linked, historic SA105 / CT600 returns still resolve. Two confirmation prompts on Delete with explicit guidance steering toward Archive for sold cases. Cascade cleanup wipes orphan KV bundles (rent-increase, ast-reconciliation, rent-review, RRA dispatch) so a property re-using a deleted slug never inherits stale workflow state.

22. **Big-file user uploads — client-direct to Vercel Blob.** Vercel's 4.5MB serverless body limit silently rejected the EICR PDF for one user's property; fixed by switching the property Documents upload to a client-direct blob upload via a presigned token route (20MB cap, role-gated, audit-logged on finalise). Other competitors hit the same wall and force the user to email PDFs.

23. **Maintenance → receipts → SA105 wiring.** A Resolved maintenance request with a recorded cost auto-creates an Expense row tagged with the right HMRC tax category for the correct tax year. Receipts uploaded via the `/receipts` page can be attached to a maintenance request for materials-vs-labour rollup; the maintenance UI shows the aggregate "Materials £X · Labour £Y · Total £Z" footer. Both labour AND materials flow into SA105 automatically — no manual import, no double-entry. Closed-loop from tenant report → contractor invoice → tax return.

24. **Engineering rigour** — 2,756 tests across 212 suites, regression-locked contract tests (e.g. `tests/property-routes-no-nuclear-write.test.ts` greps the route tree and fails the build if any route file imports `writeProperties`; `tests/no-static-property-seed-in-render-surfaces.test.ts` fails if any page reads the static seed instead of the live DB), pre-push hooks running lint + type-check + tests, all-Prisma + KV-store persistence (no file-based JSON drift). Operating principles documented in CLAUDE.md and applied uniformly. Closed-source competitors don't ship contract tests; their breakages hit users.

25. **Self-hostable + audit log + GDPR export + pre-push build validation** — appeals to privacy-sensitive landlords, accountants, and agents with DPA compliance obligations.

## Where We Match

- Dashboard, property CRUD, tenant portal with e-sign, document management, maintenance workflow, financial P&L, multi-property — all table-stakes and we're at parity or better.
- MTD SA105 quarterly: we match Hammock, Landlord Vision, Landlord Studio.
- **Open Banking (Phase 1 + Wave 1 hardening)** — TrueLayer + GoCardless BAD + Plaid stub abstractions, multi-bank from day one, encrypted tokens, idempotent sync, plus the Wave 1 locked-year retro-match guard + unmatch endpoint + per-property filter. Sandbox today; production via TrueLayer Agent application (in motion). Brings parity with Hammock + Landlord Vision; remaining Phase 2 waves (auto-link to maintenance, drift surface, per-property dashboard) are the deferral.
- **Receipt scanning** — Claude Vision API extracts vendor / VAT / amount / date / HMRC category from photos and PDFs. Matches Landlord Studio's best-in-class receipt OCR.

## Where We're Behind (strategic gaps)

1. **Open Banking Phase 2 remaining waves** (deferred until TrueLayer Agent application is in motion). Phase 1 + Wave 1 hardening shipped — the hold-up is the regulated-Agent application + the auto-link-to-maintenance + drift-surface + per-property dashboard waves; once those land we close to **full parity** with Hammock.
2. **No tenant screening / referencing** (Landlord Studio + TransUnion; Rentancy service). Critical lettings-lifecycle omission. Revenue opportunity (£25-£50 pass-through fee per report).
3. **No native mobile app** (Alphaletz, Hammock, Landlord Studio, Arthur all mobile-first). Responsive web isn't enough for receipt-capture-on-the-go at Screwfix. PWA is the lower-cost path.
4. **No FCA-regulated client money account** (PayProp owns this). Blocks letting-agent market — but explicit non-goal for the self-managing landlord segment we serve.

## Renters' Rights Act 2026 readiness (as of 12 May 2026)

**Fully shipped end-to-end:**

- **Bulk Information Sheet dispatch** — every active tenancy, EMAIL + POSTAL channels, per-tenant evidence trail, delivery + open webhooks (Resend), per-tenant ACKNOWLEDGED via portal banner, dashboard widget showing outstanding count.
- **Statement of Tenancy Terms** — PDF generator + email dispatch + per-period re-send-needed badge (auto-flips when a new `TenancyPeriod` opens).
- **Form 4A Section 13(2) rent-increase workflow** — full state machine (DRAFT → SENT → AGREED → COMPLETED, plus DECLINED / TRIBUNAL_REFERRED / SUPERSEDED branches), landlord pre-sign via DocuSeal, tenant portal Accept / Decline / Refer to Tribunal panel, auto-renewal AST drafted on Accept, rent propagation on COMPLETED.
- **Section 8 Ground 14 ASB incident log** per property with evidence pack export.
- **Periodic-tenancy detection** on `/tenants` with conversion checker.
- **Dashboard deadline alerts** — 31 May 2026 / £7,000 penalty banner with link-through to the dispatch surface.

**No competitor has shipped this end-to-end — most still treat RRA as a blog post.**

## Strategic Gaps To Consider Closing Next

Prioritised by ROI × market-gap × effort:

### 1. **Open Banking Phase 2 remaining waves** — ★★★★★

- Phase 1 abstraction + Wave 1 hardening already shipped (TrueLayer + GoCardless + Plaid stubs, multi-bank, encrypted tokens, idempotent sync, locked-year guard, unmatch, per-property filter).
- Remaining waves: maintenance auto-link (DEBIT → matching Expense → auto-attach to Resolved maintenance request), drift surface (BankTransaction match vs the row it created drifting), per-property reconciliation dashboard, sealed snapshot for year-end.
- Closes the gap with Hammock + Landlord Vision; turns MTD story from "good" to "effortless."
- Estimated effort: 2-3 sessions of build + Agent-application lead time (~6 weeks).

### 2. **Tenant screening (Experian Rental Exchange / TransUnion Rent Bureau)** — ★★★★

- Integrate screening API; let landlord order a report before approving a tenancy.
- Charge through as a pass-through fee (£25–£50/report).
- Estimated effort: 1–2 sessions.

### 3. **Native mobile app (PWA-plus or React Native)** — ★★★★

- Start with an installable PWA — faster ship than dual native apps.
- Receipt scanner using device camera + offline buffer (already supported via responsive web with `capture="environment"`; PWA wraps it with install prompt + offline).
- Estimated effort: 3–5 sessions.

### 4. **HMO Phase 4 extras** — ★★★

- Article 4 auto-check by postcode (we have the council data, add `postcodes.io` lookup).
- HMO yield calculator (sum of room rents vs whole-property rentalIncome — data exists).
- Utility recharge calculator (split by room size/equal/headcount).
- Estimated effort: 1–2 sessions.

### 5. **Rogue Landlord Database lookup at new tenant** — ★★

- Right-to-Rent is already a gap; pair it with an electoral-roll reverse lookup and database of banning orders.
- Defensive: protects against letting to a banned tenant by mistake.

### 6. **Accountant share portal** — ★★★

- Read-only link an accountant can use for year-end review — no login, short-lived token, specific tax year.
- The lock-for-review + mailto-summary buttons on SA105 + CT600 already cover the "send the figures" case; this would let the accountant verify against source records too.
- Competitive parity with QuickBooks accountant-sharing pattern.

## Positioning Summary

Our app is the only one in this landscape that combines:

- **Personal + Company + Managed** ownership under one roof — SA105, CT600, and operational-only handling for properties run on someone else's behalf
- **Time-based ownership AND tenancy history** with back-datable transitions — splits MTD/CT600/SA105 across boundary years correctly
- **Records-first CT600 with mid-year rate-change support** — service charge / management fee / mortgage interest changes captured as two records and split across the period
- **Drift detection** between denormalised forward-estimate columns and time-based records — visible amber banner + one-click deep-link to fix
- **Form 4A end-to-end statutory rent-increase workflow** — propose → DocuSeal landlord pre-sign → tenant portal Accept / Decline / Refer → renewal AST auto-drafted → COMPLETED propagates rent everywhere
- **AST landlord-sign drift reconciliation** with field-by-field signed-AST-vs-current banner
- **Statement of Tenancy Terms auto-resend on rent edit** — Renters' Rights Act compliance you can't forget
- **Portal-login deep-link in every tenant email** — no more "search inbox for the URL"
- **Admin tenant impersonation** for testing portal workflows on real properties with bracketed audit trail
- **Gas-appliance gating** — all-electric properties skip CP12 automatically
- **Joint-tenant AST signing** with one parallel DocuSeal envelope, landlord countersigner, exactly-once post-signing automation, and joint-tenancy email fan-out for statutory notices
- **Open Banking Phase 1 + Wave 1** (TrueLayer / GoCardless / Plaid abstraction, locked-year retro-match guard, unmatch endpoint)
- **Residential leasehold extensions** workflow (Section 42)
- **Renters' Rights Act 2026** end-to-end (Info Sheet, ASB log, Statement of Tenancy Terms, Form 4A statutory rent-increase, periodic-tenancy detection)
- **HMO end-to-end** (licence, rooms, FRA, amenity ratios, portfolio compliance, 30+ council schemes)
- **Rent Review Insights** with daily ONS PRI auto-pull cron
- **Reference Data** (companies, solicitors, brokers, fees, landlords — 5 entity types)
- **Capital Investments CRUD** with ACTIVE / REPAID / WRITTEN_OFF status tracking
- **Per-surface portfolio scope filters** documented and enforced via pure helpers
- **Two-lifecycle property removal** (Delete with KV cascade cleanup vs Archive preserving history)
- **Big-file client-direct uploads** bypassing Vercel's 4.5MB serverless body limit
- **Audit log + GDPR + self-host + cascade-locked regression tests + operating-principle documentation**

Target persona: **professional UK landlord with 5-50 properties operating via personal + SPV, HMO exposure, leasehold flats, at least one property managed on behalf of another owner, and active mid-year rent / service-charge changes that need to land in the right tax period**. That's a segment nobody else serves with this combination — and the recent records-first + drift-detection + Form 4A work makes us the only credible choice for landlords who are about to take the Renters' Rights Act 2026 regime seriously.

## Marketing-site talking points (12 May 2026 refresh)

Pulled out as a quick-reference for the property marketing site update:

- **"The only landlord app that does SA105 AND CT600 correctly across mid-year transfers."**
- **"Form 4A statutory rent-increase workflow — propose, sign, accept, renew. Done."**
- **"Renters' Rights Act 2026 — end-to-end Information Sheet dispatch, Statement of Tenancy Terms with auto-resend, Section 13(2) Form 4A workflow, ASB evidence pack. No competitor has shipped this."**
- **"Records-first tax — capture a mid-year service-charge increase as two records and watch CT600 split it correctly."**
- **"Time-based ownership history — back-date a Personal-to-Limited-Company transfer and watch SA105 + CT600 split it correctly across the tax-year boundary."**
- **"Drift detection — when your property tile says £200/mo but your latest invoice says £250/mo, we tell you which one is wrong."**
- **"Statement of Tenancy Terms auto-resend — change the rent, the system asks the tenant to re-acknowledge. RRA compliance you can't forget."**
- **"Admin tenant impersonation — test the portal as a tenant without juggling test accounts."**
- **"Every tenant email has a one-click portal sign-in button — no more 'where's that earlier email?'"**
- **"AST landlord-sign drift reconciliation — if what got signed doesn't match what the system shows, we surface the diff field-by-field."**
- **"Capital Investments CRUD with ACTIVE / REPAID / WRITTEN_OFF status — your live capital number doesn't include loans you've already repaid."**
- **"Per-surface portfolio scope filters — compliance alerts pick up the property you bought yesterday even before you've set the rent (statutory certs are a PRE-tenancy duty)."**
- **"Property delete vs Archive — two distinct lifecycles. Delete cleans EVERYTHING (Prisma + KV bundles) for properties that never completed; Archive preserves history for sold properties so historic tax returns still resolve."**
- **"Big-file uploads — EICR over 4.5MB? No problem. Client-direct to blob storage."**
- **"2,756 regression tests across 212 suites — closed-source competitors don't ship contract tests. Their breakages hit you."**

## Sources

- [Arthur Online](https://www.arthuronline.co.uk), [PayProp UK](https://www.payprop.com/uk/), [Re-Leased](https://www.re-leased.com/en-gb)
- [Landlord Vision](https://www.landlordvision.co.uk), [Hammock](https://www.usehammock.com), [Alphaletz](https://alphaletz.com)
- [Rentancy](https://www.rentancy.com), [Landlord Studio UK](https://www.landlordstudio.com/uk)
- [Best Landlord Software UK 2026 (Latch)](https://www.uselatch.co.uk/blog/best-landlord-software-uk-2026)
- [Cheapest MTD Software UK Landlords 2026 (Latch)](https://www.uselatch.co.uk/blog/cheapest-mtd-software-uk-landlords-2026)
- [Renters' Rights Act 2025 (legislation.gov.uk)](https://www.legislation.gov.uk/ukpga/2025/26/contents)
- [Housing Act 1988 — Section 13 (statutory rent increases)](https://www.legislation.gov.uk/ukpga/1988/50/section/13)
