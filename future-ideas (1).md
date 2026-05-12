# Future Development Ideas

> Last updated: **12 May 2026 (post-go-live testing wave)**. The May
> sprint shipped the Form 4A statutory rent-increase workflow end-
> to-end (Waves 1+2+3 + the auto-renewal AST + the DocuSeal landlord
> pre-sign + Joint email fan-out), the AST landlord-sign drift
> reconciliation, the records-first CT600 per-property running costs
> with mid-year split + drift detection, bank-feed Wave 1 (locked-year
> guard + unmatch + property filter), CT600 tax-year tabs +
> lock-for-review, Capital Investments CRUD, admin tenant
> impersonation, portal-login deep-links in every tenant email, per-
> surface portfolio scope filters, two-lifecycle property removal
> (Delete vs Archive with KV cascade cleanup), big-file client-direct
> uploads (Vercel 4.5MB body-limit bypass), and ~50 hotfix-grade
> fixes surfaced by real go-live testing on Vercel. See status
> summary rows 78–110 for the May 2026 additions.
>
> **Codebase status at this refresh: final testing stage. No
> outstanding build work in the queue.** 212 test suites · 2,756
> individual cases · 28 Prisma migrations · 73 pages · 211 API
> routes · ~90,789 LOC. All May 2026 PRs (#100–#132) merged to
> master. Marketing-site update flows from `docs/competitor-comparison.md`
> (latest matrix + wedges + talking points).

## Status Summary

| #   | Feature                                                                                                                                                                                                                                                                                                                                                                                                                                              | Status                                                                               | Priority                                                                                                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---- |
| 1   | Making Tax Digital (MTD)                                                                                                                                                                                                                                                                                                                                                                                                                             | **Done (March 2026)**                                                                | **High**                                                                                                                                                                                     |
| 2   | Open Banking / Bank Feeds                                                                                                                                                                                                                                                                                                                                                                                                                            | **Phase 1 shipped (24 Apr 2026)**                                                    | **High**                                                                                                                                                                                     |
| 3   | Tenant Portal                                                                                                                                                                                                                                                                                                                                                                                                                                        | Done                                                                                 | -                                                                                                                                                                                            |
| 4   | Maintenance Request Workflow                                                                                                                                                                                                                                                                                                                                                                                                                         | Done                                                                                 | -                                                                                                                                                                                            |
| 5   | Native Mobile App / PWA                                                                                                                                                                                                                                                                                                                                                                                                                              | Idea                                                                                 | Medium                                                                                                                                                                                       |
| 6   | AI-Powered Insights                                                                                                                                                                                                                                                                                                                                                                                                                                  | Idea                                                                                 | Low                                                                                                                                                                                          |
| 7   | Automated Rent Reminders                                                                                                                                                                                                                                                                                                                                                                                                                             | Idea                                                                                 | Low                                                                                                                                                                                          |
| 8   | Extended Compliance Tracking                                                                                                                                                                                                                                                                                                                                                                                                                         | Idea                                                                                 | Low                                                                                                                                                                                          |
| 9   | Accountant Portal                                                                                                                                                                                                                                                                                                                                                                                                                                    | Idea                                                                                 | Low                                                                                                                                                                                          |
| 10  | Xero/QuickBooks Integration                                                                                                                                                                                                                                                                                                                                                                                                                          | Idea                                                                                 | Low                                                                                                                                                                                          |
| 11  | PlumbCalc Integration                                                                                                                                                                                                                                                                                                                                                                                                                                | Future Vision                                                                        | Medium                                                                                                                                                                                       |
| 12  | Data Import / CSV Templates                                                                                                                                                                                                                                                                                                                                                                                                                          | Done                                                                                 | -                                                                                                                                                                                            |
| 13  | Receipt Scanning & Expenses                                                                                                                                                                                                                                                                                                                                                                                                                          | Done                                                                                 | -                                                                                                                                                                                            |
| 14  | PDF Report Export                                                                                                                                                                                                                                                                                                                                                                                                                                    | Done                                                                                 | -                                                                                                                                                                                            |
| 15  | Task Status Notes / Activity Log                                                                                                                                                                                                                                                                                                                                                                                                                     | Done                                                                                 | -                                                                                                                                                                                            |
| 16  | Security Hardening & Market Readiness                                                                                                                                                                                                                                                                                                                                                                                                                | **Done (March 2026)**                                                                | **Critical**                                                                                                                                                                                 |
| 17  | Database Migration (JSON → PostgreSQL)                                                                                                                                                                                                                                                                                                                                                                                                               | **Done (March 2026)**                                                                | **Critical**                                                                                                                                                                                 |
| 18  | GDPR / UK GDPR Compliance                                                                                                                                                                                                                                                                                                                                                                                                                            | **Done (March 2026)**                                                                | **Critical**                                                                                                                                                                                 |
| 19  | CI/CD Pipeline & Automated Testing                                                                                                                                                                                                                                                                                                                                                                                                                   | **Done (March 2026)**                                                                | **High**                                                                                                                                                                                     |
| 20  | SaaS Productisation (Billing & Onboarding)                                                                                                                                                                                                                                                                                                                                                                                                           | **Done (March 2026)**                                                                | **Medium**                                                                                                                                                                                   |
| 21  | E-Signature Workflow Completion                                                                                                                                                                                                                                                                                                                                                                                                                      | **Done (March 2026)**                                                                | **High**                                                                                                                                                                                     |
| 22  | Multi-Document E-Signature                                                                                                                                                                                                                                                                                                                                                                                                                           | Idea                                                                                 | Medium                                                                                                                                                                                       |
| 23  | Signing Audit Trail & Compliance Report                                                                                                                                                                                                                                                                                                                                                                                                              | Idea                                                                                 | Low                                                                                                                                                                                          |
| 24  | Bulk Signing (Multiple Tenants)                                                                                                                                                                                                                                                                                                                                                                                                                      | **Sessions 1 + 2 shipped (28 Apr 2026)**                                             | **Medium**                                                                                                                                                                                   |
| 25  | Interactive Tutorial & Demo System                                                                                                                                                                                                                                                                                                                                                                                                                   | **Done (March 2026)**                                                                | **Medium**                                                                                                                                                                                   |
| 26  | HMRC Production Approvals                                                                                                                                                                                                                                                                                                                                                                                                                            | Idea                                                                                 | High                                                                                                                                                                                         |
| 27  | Tutorial Video Recording & Publishing                                                                                                                                                                                                                                                                                                                                                                                                                | Idea                                                                                 | Low                                                                                                                                                                                          |
| 28  | Property ownership history (time-based)                                                                                                                                                                                                                                                                                                                                                                                                              | **Phase 1 shipped (28 Apr 2026)**                                                    | **High**                                                                                                                                                                                     |
| 29  | Personal → Company property migration UI                                                                                                                                                                                                                                                                                                                                                                                                             | **Deferred indefinitely (zero affected records)**                                    | Low                                                                                                                                                                                          |
| 30  | Open Banking Phase 2 (auto-match + cron + consent)                                                                                                                                                                                                                                                                                                                                                                                                   | **Shipped (29 Apr 2026)** — sandbox; Phase 4 prod still gated on FCA TrueLayer Agent | High                                                                                                                                                                                         |
| 31  | SA105 2025-26 projection tidy (`tax-data.ts`)                                                                                                                                                                                                                                                                                                                                                                                                        | **Shipped (28 Apr 2026)**                                                            | Medium                                                                                                                                                                                       |
| 32  | SA105 banner intersection + tax-year aware                                                                                                                                                                                                                                                                                                                                                                                                           | **Shipped (28 Apr 2026)**                                                            | Medium                                                                                                                                                                                       |
| 33  | MTD info banner data-driven                                                                                                                                                                                                                                                                                                                                                                                                                          | **Shipped (28 Apr 2026)**                                                            | Low                                                                                                                                                                                          |
| 34  | SA105 hide company-property placeholders                                                                                                                                                                                                                                                                                                                                                                                                             | **Shipped (28 Apr 2026)**                                                            | Low                                                                                                                                                                                          |
| 35  | MANAGED ownership type (operational-only)                                                                                                                                                                                                                                                                                                                                                                                                            | **Shipped (28 Apr 2026)**                                                            | Medium                                                                                                                                                                                       |
| 36  | Phase A — unified rental-income source of truth (RentPayment-driven)                                                                                                                                                                                                                                                                                                                                                                                 | **Deferred**                                                                         | High                                                                                                                                                                                         |
| 37  | `hasGasAppliances` flag (CP12 compliance gating)                                                                                                                                                                                                                                                                                                                                                                                                     | **Shipped (28 Apr 2026)**                                                            | Medium                                                                                                                                                                                       |
| 38  | Transfer-date-aware ownership history (back-datable transitions)                                                                                                                                                                                                                                                                                                                                                                                     | **Shipped (28 Apr 2026)**                                                            | Medium                                                                                                                                                                                       |
| 39  | Limited-company operating expenses + capital assets (CT600 deductions)                                                                                                                                                                                                                                                                                                                                                                               | **Shipped (29 Apr 2026)**                                                            | High                                                                                                                                                                                         |
| 40  | Renters' Rights Act 2026 compliance dispatch (1 May target)                                                                                                                                                                                                                                                                                                                                                                                          | **Shipped (29 Apr 2026 — Wave 1 + Wave 2)**                                          | High                                                                                                                                                                                         |
| 41  | Rent Review Insights (market-driven rent suggestions)                                                                                                                                                                                                                                                                                                                                                                                                | **Shipped (29 Apr 2026)**                                                            | High                                                                                                                                                                                         |
| 42  | Rent Review v1.1 — ONS PRI auto-pull cron                                                                                                                                                                                                                                                                                                                                                                                                            | **Shipped (29 Apr 2026 — evening)**                                                  | Medium                                                                                                                                                                                       |
| 43  | Plan-tier feature gating + multi-user (invites, Owner role, audit)                                                                                                                                                                                                                                                                                                                                                                                   | **Shipped (30 Apr 2026)**                                                            | **High**                                                                                                                                                                                     |
| 44  | Per-property user scoping (deferred from #43)                                                                                                                                                                                                                                                                                                                                                                                                        | Idea                                                                                 | Medium                                                                                                                                                                                       |
| 45  | Tenancy template wizard placeholder dedup + address bleed fix                                                                                                                                                                                                                                                                                                                                                                                        | **Shipped (30 Apr 2026)**                                                            | Medium                                                                                                                                                                                       |
| 46  | Landlord countersigner wired into joint signing                                                                                                                                                                                                                                                                                                                                                                                                      | **Shipped (30 Apr 2026)**                                                            | High                                                                                                                                                                                         |
| 47  | Document upload P0 fix (Vercel Blob `access: 'private'` rejection)                                                                                                                                                                                                                                                                                                                                                                                   | **Shipped (30 Apr 2026)**                                                            | Critical                                                                                                                                                                                     |
| 48  | Landlord Reference Data + per-property assignment + signing prefill                                                                                                                                                                                                                                                                                                                                                                                  | **Shipped (30 Apr 2026)**                                                            | High                                                                                                                                                                                         |
| 49  | Template wizard property-aware prefill (auto-fill names + address)                                                                                                                                                                                                                                                                                                                                                                                   | **Shipped (30 Apr 2026)**                                                            | Medium                                                                                                                                                                                       |
| 50  | DocuSeal-template field-prefill via `values` payload                                                                                                                                                                                                                                                                                                                                                                                                 | Idea (deferred — couples code to live DocuSeal field names)                          | Medium                                                                                                                                                                                       |
| 51  | EICR upload form a11y (id + htmlFor + name on Document upload card)                                                                                                                                                                                                                                                                                                                                                                                  | **Shipped (30 Apr 2026 — late evening)**                                             | Low                                                                                                                                                                                          |
| 52  | Tenant-save bug fix — preserve name-only tenants in edit-property panel                                                                                                                                                                                                                                                                                                                                                                              | **Shipped (30 Apr 2026 — late evening)**                                             | High                                                                                                                                                                                         |
| 53  | Landlord-assigned compliance check (property detail + portfolio matrix + dashboard alert)                                                                                                                                                                                                                                                                                                                                                            | **Shipped (30 Apr 2026 — late evening)**                                             | High                                                                                                                                                                                         |
| 54  | Templates wizard — surface real auto-attach result (success vs failure banner + retry)                                                                                                                                                                                                                                                                                                                                                               | **Shipped (30 Apr 2026 — latest evening)**                                           | High                                                                                                                                                                                         |
| 55  | Tenant-portal Resend Invite supports email change (lookup-by-propertyId, modal email editable, `previousEmail` audit)                                                                                                                                                                                                                                                                                                                                | **Shipped (30 Apr 2026 — latest evening)**                                           | High                                                                                                                                                                                         |
| 56  | Comma-separated `Tenant Names` input removed; per-tenant contact rows are sole source of truth                                                                                                                                                                                                                                                                                                                                                       | **Shipped (30 Apr 2026 — latest evening)**                                           | High                                                                                                                                                                                         |
| 57  | Super-user role bypass on plan gates (admin/owner unrestricted by workspace plan)                                                                                                                                                                                                                                                                                                                                                                    | **Shipped (1 May 2026)**                                                             | High                                                                                                                                                                                         |
| 58  | Tenancy history Phase 1 + RRA wrong-PDF P0 + SoTT re-send badge + PDF preview modal                                                                                                                                                                                                                                                                                                                                                                  | **Shipped (1 May 2026)**                                                             | High                                                                                                                                                                                         |
| 59  | Per-page main-content width (data-heavy pages fill the screen on 1440p+ / 4K)                                                                                                                                                                                                                                                                                                                                                                        | **Shipped (1 May 2026)**                                                             | Medium                                                                                                                                                                                       |
| 60  | Form 4A (Section 13(2) rent-increase notice) — document wiring (DocumentType + auto-attach + prefill)                                                                                                                                                                                                                                                                                                                                                | **Shipped (1 May 2026 — PR #41)**                                                    | High                                                                                                                                                                                         |
| 61  | Form 4A — RentIncreaseProposal workflow (state machine + portal + admin UI + webhook auto-flip; BUSINESS gate deferred — workflow is core landlord functionality, not tier-locked. Storage: KV bundle (not Prisma model). Statuses: DRAFT/SENT/AGREED/DECLINED/TRIBUNAL_REFERRED/SUPERSEDED/COMPLETED (not the original PROPOSED/AGREED/EXPIRED scheme))                                                                                             | **Shipped (1 May 2026 — Waves 1 + 2 + 3, PR #43–#48)**                               | **High**                                                                                                                                                                                     |
| 62  | Tenancy history Phase 2 — edit-panel UI for `tenancyEffectiveDate` + Overview "since" + history panel + wizard preview                                                                                                                                                                                                                                                                                                                               | Idea — backend ready, UI pending                                                     | Medium                                                                                                                                                                                       |
| 63  | Mid-year ownership transfer visibility + audit script (`npm run ownership:audit`, edit-panel transfer date always visible, Kirby Close 2025-26 SA105 partial-year entry, regression guard `tests/kirby-close-split-2526.test.ts`)                                                                                                                                                                                                                    | **Shipped (1 May 2026)**                                                             | High                                                                                                                                                                                         |
| 64  | Iframe PDF preview headers fix (`next.config.ts` `X-Frame-Options: DENY → SAMEORIGIN` — unblocks SoTT preview + tenancy-agreement wizard + Form 4A preview iframes)                                                                                                                                                                                                                                                                                  | **Shipped (1 May 2026)**                                                             | High                                                                                                                                                                                         |
| 65  | Prisma `DocumentType` ↔ TypeScript union sync regression guard (migration `20260501000002_extend_document_type_enum` adds `RENT_INCREASE_NOTICE` + 13 HMO doc types; `tests/document-type-enum-sync.test.ts` parses both files and fails on drift)                                                                                                                                                                                                   | **Shipped (1 May 2026)**                                                             | Medium                                                                                                                                                                                       |
| 66  | Billing super-user-bypass on `/settings/billing` (page now consumes `resolveEffectivePlan` so admin/owner sees Business limits + admin-override banner; pattern lock — any plan-tier surface MUST consume `resolveEffectivePlan`)                                                                                                                                                                                                                    | **Shipped (1 May 2026)**                                                             | High                                                                                                                                                                                         |
| 67  | RRA resend PDF-attachment legal-requirement regression guard (new test in `tests/rra-routes.test.ts` asserts both first-send AND resend call `readInfoSheetBytes()` + pass the statutory PDF to `sendInfoSheetEmail`; locks the £7,000-penalty defence)                                                                                                                                                                                              | **Shipped (1 May 2026)**                                                             | High                                                                                                                                                                                         |
| 68  | Auto-renewal Tenancy Agreement on Form 4A AGREED (`src/lib/rent-increase/auto-renewal.ts` — picks Single/Joint AST template, prefills new rent + effective date, renders DOCX via `renderDocxTemplate`, uploads to Vercel Blob, creates DRAFT `SigningRequest`; webhook handler links via `markFollowUpDrafted`)                                                                                                                                     | **Shipped (1 May 2026)**                                                             | High                                                                                                                                                                                         |
| 69  | DocuSeal Form 4A landlord pre-sign template (Section 13(2) requires landlord-served notice — Form 4A docx sent to LANDLORD ONLY for signature; on SIGNED webhook tenant auto-emailed signed PDF + proposal flips DRAFT → SENT; `DOCUSEAL_FORM_4A_TEMPLATE_ID` env var + `docs/docuseal-form-4a-setup.md` runbook)                                                                                                                                    | **Shipped (1 May 2026)**                                                             | High                                                                                                                                                                                         |
| 70  | Multi-tenant joint email persistence — per-tenant contact rows survive edit-property save round-trips (regression: name-only tenants no longer dropped on save; per-tenant rows are sole source of truth, comma-separated `Tenant Names` removed)                                                                                                                                                                                                    | **Shipped (1 May 2026)**                                                             | High                                                                                                                                                                                         |
| 71  | RRA dispatch — live tenant names (dispatch surface + per-tenant evidence trail now read live `Tenancy.contactDetails` JSONB rather than legacy denormalised single-name column; aligns with joint-tenancy contact model)                                                                                                                                                                                                                             | **Shipped (1 May 2026)**                                                             | Medium                                                                                                                                                                                       |
| 72  | Dashboard Compliance Alerts grouping (compliance alerts collapsed by property + alert type; reduces noise on portfolios with multiple expiring certificates / missing landlord assignments / overdue RRA dispatches)                                                                                                                                                                                                                                 | **Shipped (1 May 2026)**                                                             | Medium                                                                                                                                                                                       |
| 73  | Property status badge — workflow-aware (badge on property tile reflects in-flight Form 4A / AST signing state — "Form 4A awaiting tenant", "Renewal awaiting landlord signature" — rather than generic ISSUE; consumes rent-increase bundle + open `SigningRequest`)                                                                                                                                                                                 | Planned                                                                              | Medium                                                                                                                                                                                       |
| 74  | Workflow tests — full path coverage (test discipline expansion to cover detour-and-return paths + regression-guard paths per CLAUDE.md operating principles; e.g. Form 4A DECLINED → user re-proposes, AST signed → tenant declines renewal)                                                                                                                                                                                                         | Idea                                                                                 | Medium                                                                                                                                                                                       |
| 75  | Joint Form 4A docx — vertical-text col 1 fix (Word lays out col 1 of the Joint template with rotated text; user to widen column manually in Word; no code change required, but tracking until verified)                                                                                                                                                                                                                                              | Awaiting user                                                                        | Low                                                                                                                                                                                          |
| 76  | GitHub Actions CI failure investigation (intermittent CI failures unrelated to test logic — pending user nod to triage workflow YAML + node version + cache strategy)                                                                                                                                                                                                                                                                                | Planned                                                                              | Medium                                                                                                                                                                                       |
| 77  | AST landlord-sign reconciliation (snapshot prefill at /api/signing/send for non-Form-4A AST envelopes; on landlord-sign cross-check against current Tenancy + Property and force `Property.rentalIncome ← Tenancy.rentAmount` + `syncCurrentTenancyPeriod` so SA105/CT600/MTD always pick up the latest rent; UI banner on property Tenancy tab lists drifts)                                                                                        | **Shipped (6 May 2026)**                                                             | High                                                                                                                                                                                         |
| 78  | DocuSeal sync safety net + signing reconcile route + auto-on-mount poll (`/api/signing/sync` reconciles a single envelope or all envelopes for a property when webhook miss / wrong secret / network blip leaves status stale; pure helper `decideReconcile` is monotonic + idempotent; first-transition-to-SIGNED still fires Case A/B side effects via `handleRentIncreaseSignedTransition`)                                                       | **Shipped (5 May 2026)**                                                             | High                                                                                                                                                                                         |
| 79  | Auto-renewal draft envelope detection (`isSigningRequestDraft` structural predicate; `/api/signing/status` exposes `isDraftEnvelope`; UI shows "Draft — needs to be sent" instead of "Awaiting Signature"; sync poll + green-eye refresh skip drafts; compliance checklist collapses drafts to `UPLOADED_UNSIGNED`)                                                                                                                                  | **Shipped (5 May 2026 +1)**                                                          | High                                                                                                                                                                                         |
| 80  | Regenerate renewal AST route (`POST /api/properties/[id]/rent-increase/[proposalId]/regenerate-renewal` — deletes existing draft `TENANCY_AGREEMENT` + `SigningRequest`, re-runs `generateRenewalDraftFromProposal` so the regenerated docx picks up current data; 409 refused if the existing draft was already dispatched)                                                                                                                         | **Shipped (5 May 2026 +1)**                                                          | Medium                                                                                                                                                                                       |
| 81  | Joint-tenancy Form 4A email fan-out (S.13(2) HA 1988 binds every named tenant — `resolveProposalContext` now returns `tenantContacts: Array<{ email, name }>`; webhook + formalise route loop the array and call `sendForm4ASignedEmail` once per recipient; partial-failure flag set if any recipient send fails — landlord sees per-property tab banner)                                                                                           | **Shipped (5 May 2026 +1)**                                                          | High                                                                                                                                                                                         |
| 82  | Tenant + admin password reset routes (`POST /api/tenants/reset-password` admin-trusted, returns plaintext temp password in response body; `POST /api/portal/forgot-password` public, no-enumeration contract, IP rate-limited, audit-logged on both match + miss)                                                                                                                                                                                    | **Shipped (5 May 2026 +1)**                                                          | High                                                                                                                                                                                         |
| 83  | Formalise recovery (`POST /api/properties/[id]/rent-increase/formalise` — only path that creates a proposal already in SENT, for orphan-Form-4A flows where the docx was sent via Documents tab without first creating a bundle proposal; validates source doc is SIGNED Form 4A, re-types mis-typed signed PDF in place, auto-emails tenant the signed Form 4A + portal link)                                                                       | **Shipped (5 May 2026 +1)**                                                          | High                                                                                                                                                                                         |
| 84  | Form 4A — fresh-upload-per-send (eliminate empty-placeholder bugs; route now routes Form 4A docs through the same upload-fallback path as renewal AST; locally-rendered docx with values baked in is what the landlord sees; env vars `DOCUSEAL_FORM_4A_TEMPLATE_ID` + `_SINGLE` ignored by send route)                                                                                                                                              | **Shipped (8 May 2026)**                                                             | High                                                                                                                                                                                         |
| 85  | Form 4A page-8 inline tag placement (`applyForm4AInlinePlacement` detects Form 4A via "Hannah Witham" sample name AND ≥3 horizontal-ellipsis chars near "Date"; replaces sample name with real landlord name; inserts Landlord Signature tag immediately before "Print name" paragraph; inline Date tag at ellipsis position; Acknowledgement checkbox after Date paragraph)                                                                         | **Shipped (8 May 2026 +1)**                                                          | High                                                                                                                                                                                         |
| 86  | Wizard Review-step missing-field warning (`detectTemplateWizardWarnings` surfaces amber banner above Review-step form values when user is generating a Joint template AND a Tenant 2/3/4 placeholder is exposed by docx but no value supplied; catches silent-blank class of bug — user generates Joint Form 4A with only Tenant 1 filled)                                                                                                           | **Shipped (8 May 2026 +1)**                                                          | Medium                                                                                                                                                                                       |
| 87  | DocuSeal field-name synonym broadcast (`buildForm4ASubmitterValues` now broadcasts every value across the synonym map at field-name level — emits BOTH canonical name AND every variant; DocuSeal has no synonym layer so values payload now binds regardless of whether admin named the field "Tenant 1 Name" or "Name of Tenant 1")                                                                                                                | **Shipped (8 May 2026 +1)**                                                          | High                                                                                                                                                                                         |
| 88  | Document delete cascade-cancel (`DELETE /api/documents/[id]` for `RENT_INCREASE_NOTICE` or `TENANCY_AGREEMENT` docx now cascade-cancels any open rent-increase bundle proposal that was linked to it — source Form 4A docx OR renewal Tenancy Agreement matching `bundle.current.signingRequestId` or `followUpSigningRequestId` triggers `markCancelled`)                                                                                           | **Shipped (5 May 2026 +5)**                                                          | High                                                                                                                                                                                         |
| 89  | Rent-renewal canonical writer (`applyRenewedRent(input, deps)` — Tenancy.rentAmount must update FIRST so `syncCurrentTenancyPeriod` sees the change and opens a new period; then Property.rentalIncome denormalised mirror; then period open with effectiveDate; both webhook Case B + sync route Case B paths call this single helper)                                                                                                              | **Shipped (5 May 2026 +6)**                                                          | High                                                                                                                                                                                         |
| 90  | `tenancy:audit` CLI (`npm run tenancy:audit [propertyId] [taxYear]` — sibling of `ownership:audit`; prints TenancyPeriod timeline, `Property.rentalIncome` vs `Tenancy.rentAmount` vs latest period rent, what each tax surface currently computes, ⚠ DRIFT flags when sources disagree)                                                                                                                                                             | **Shipped (5 May 2026 +6)**                                                          | Medium                                                                                                                                                                                       |
| 91  | Template prefill — `£` is in the docx not the placeholder value (regression-guard for double-£ bug; every active template bakes £ into surrounding text; prefill map MUST emit just the numeric value)                                                                                                                                                                                                                                               | **Shipped (5 May 2026 +4)**                                                          | High                                                                                                                                                                                         |
| 92  | Document-type-aware signing email copy (`getSigningRequestEmailCopy(kind, address)` / `getSigningCompleteEmailCopy(kind, ...)` branches subject + body by AST / FORM_4A / OTHER; Form 4A landlord no longer receives email titled "Tenancy Agreement Ready for Signing")                                                                                                                                                                             | **Shipped (5 May 2026 +3)**                                                          | High                                                                                                                                                                                         |
| 93  | Friendly DocuSeal errors with adminUrl deep-link (`friendlyDocuSealError` now passes `{ templateId, variant, apiUrl }` so message names the specific Single vs Joint template id; JSON response includes `adminUrl` deep-linking to DocuSeal admin page; UI renders "Open template in DocuSeal admin →" link beneath the error)                                                                                                                      | **Shipped (3 May 2026)**                                                             | Medium                                                                                                                                                                                       |
| 94  | Strict per-variant Form 4A routing (route no longer silently falls back from `_SINGLE` to Joint env var or vice versa; returns 422 naming the missing env var if the variant's template id is unset, instead of routing to a template whose field positions don't match the request docx)                                                                                                                                                            | **Shipped (3 May 2026)**                                                             | High                                                                                                                                                                                         |
| 95  | SigningRequest.signedDocumentId persist (rent-increase handler returns signedDocumentId; webhook + sync routes persist onto source `SigningRequest`; without this link, Documents-tab UI shows Send-for-Signing button on the wrong row + re-opens landlord-signing modal against already-signed PDF)                                                                                                                                                | **Shipped (5 May 2026 +3)**                                                          | High                                                                                                                                                                                         |
| 96  | TenantUser email + name sync (both ways: `planTenantUserEmailSync` matches by displayName → syncs email; `planTenantUserDisplayNameSync` matches by email → syncs displayName; pass-1 corrects email via OLD name, pass-2 corrects name via NEW email — covers both-changed-at-once case)                                                                                                                                                            | **Shipped (5 May 2026 +5)**                                                          | High                                                                                                                                                                                         |
| 97  | Tenancy history Phase 1 — TenancyPeriod table (mirror of PropertyOwnership; one row per renewal / rent change / deposit change / tenant change; backfill seeds one open period per existing Tenancy; `getTaxYearRentalIncome` last-resort branch sums `period.rentAmount × monthsActiveInTaxYear` instead of legacy `Property.rentalIncome × 12`)                                                                                                    | **Shipped (1 May 2026)**                                                             | High                                                                                                                                                                                         |
| 98  | Statement of Tenancy Terms auto-resend-needed badge (`needsStatementOfTermsResend(bundle, currentPeriod)` — true when a period has opened after the last SENT event; auto-dispatch intentionally NOT performed (tenant-spam concern), user clicks Resend)                                                                                                                                                                                            | **Shipped (1 May 2026)**                                                             | High                                                                                                                                                                                         |
| 99  | RRA dispatch wrong-PDF P0 hotfix + `npm run rra:redispatch` recovery script (cover-letter PDF was attached under Info Sheet filename for ~2 days; `readInfoSheetBytes()` now loads `public/templates/The_Renters__Rights_Act_Information_Sheet_2026.pdf`; recovery script re-dispatches affected tenants idempotently via the live route)                                                                                                            | **Shipped (1 May 2026)**                                                             | Critical                                                                                                                                                                                     |
| 100 | Bank-feed Phase 2 Wave 1 — locked-year guard + unmatch + property filter (server-side mirror of locked-year list at `KeyValue` row `tax-locked-years`; both auto-match runner + manual-match route + new unmatch route refuse to retro-match into a locked period; cron returns 200 not 500 on guard refusal so Vercel doesn't retry-storm; per-property filter on `/api/banking/transactions` for the Wave 5 per-property reconciliation dashboard) | **Shipped (7 May 2026 +2)**                                                          | High                                                                                                                                                                                         |
| 101 | Maintenance → Expense → SA105 wiring (`Maintenance.workDate` + `cost` columns + `linkedExpenseId` soft FK + reverse `Expense.maintenanceRequestId` soft FK; canonical writer `applyMaintenanceCostToExpense` auto-creates Expense on RESOLVED/CLOSED with cost > 0, reverts on un-resolve; auto-merge into SA105 PropertyCard via `mergeLiveExpensesIntoRepairs`)                                                                                    | **Shipped (7 May 2026 + 8 May 2026 auto-merge)**                                     | High                                                                                                                                                                                         |
| 102 | Maintenance receipts attach/detach — labour + materials rollup (`Expense.maintenanceRequestId` soft FK; UI panel inside maintenance edit form lists attached materials receipts + picker dropdown of unattached confirmed Expenses; aggregate footer "Materials £X · Labour £Y · Total £Z"; reverse "🔗 Maintenance" badge on `/receipts` rows with deep-link)                                                                                       | **Shipped (7 May 2026 +1)**                                                          | High                                                                                                                                                                                         |
| 103 | Client-direct big-file uploads to Vercel Blob (handles >4.5MB user uploads via `@vercel/blob/client`'s `upload()` with presigned token; `/api/documents/upload-token` + `/api/documents/finalize` split; pure helpers `parseDocumentUploadClientPayload` + `validateDocumentUploadConstraints` + `buildDocumentRowForFinalise` + `clientSideDocumentRejectReason`)                                                                                   | **Shipped (7 May 2026)**                                                             | Critical                                                                                                                                                                                     |
| 104 | CT600 period selector + editable expenses (per-company page accepts `?period=YYYY-MM-DD` and lets user edit back-dated expenses + assets in place; `AccountingPeriodSelector` for company-scoped views; `Ct600AsOfRewinder` for portfolio-scoped views; PUT routes re-derive `taxYear` + `accountingPeriodEnd` from date input)                                                                                                                      | **Shipped (6 May 2026)**                                                             | High                                                                                                                                                                                         |
| 105 | SA105 mid-year-transfer banner awareness + tax-year lock + delete custom year (`filterBannerSuppressedCompanyNames` per-year zero-personal-months filter; `toggleYearLock` + locked-state banner with mailto link to accountant; `deleteCustomTaxYear` refuses baseline years + wipes override rows)                                                                                                                                                 | **Shipped (6 May 2026 +2)**                                                          | High                                                                                                                                                                                         |
| 106 | Property-ownership pure helpers — client-safety split (`src/lib/property-ownership-shared.ts` holds pure helpers without Prisma imports; `property-ownership.ts` re-exports for back-compat; regression test in `tests/mid-year-transfer-filter.test.ts` parses imports + fails if client code re-points at server-side module)                                                                                                                      | **Shipped (6 May 2026 +2)**                                                          | Medium                                                                                                                                                                                       |
| 107 | CT600 tax-year tabs + lock-for-review (`Ct600TaxYearTabs` mirror of SA105's tabs; each tab maps to an `asOf` via `taxYearToAsOfDate`; same `mar-property-tax-locked-years` localStorage key + same `/api/tax/locked-years` server mirror as SA105; `buildCt600AccountantEmailMailto` per-company breakdown mailto link)                                                                                                                              | **Shipped (8 May 2026)**                                                             | High                                                                                                                                                                                         |
| 108 | Tenant-email portal-login button (every tenant-facing email — Form 4A landlord-signed → tenant, RRA Info Sheet, Statement of Tenancy Terms — now embeds clickable "Sign in to tenant portal" button + paste-link block via `buildPortalLoginUrl({ returnTo })`; `sanitiseReturnTo` open-redirect guard rejects any non-`/portal/...` path)                                                                                                           | **Shipped (11 May 2026)**                                                            | High                                                                                                                                                                                         |
| 109 | Admin tenant impersonation for portal testing (admin-only "Impersonate" button on every portal-user row; two-cookie pattern keeps admin session + tenant session live independently; red `ImpersonationBanner` on every `/portal/*` page; audit trail brackets the window with `START_TENANT_IMPERSONATION` + `STOP_TENANT_IMPERSONATION` admin-typed entries; `mustChangePassword` force-redirect bypassed during impersonation)                    | **Shipped (11 May 2026 + 12 May 2026 +1 hotfix)**                                    | High                                                                                                                                                                                         |
| 110 | Capital Investments KV-backed CRUD (`/finances` table was previously hardcoded array in `src/lib/data.ts`; migrated to KV store at `capital-investments` key; ACTIVE / REPAID / WRITTEN_OFF status enum; headline figure shows ACTIVE sum only; inline Add / Edit / Delete via REST CRUD on `/api/capital-investments`)                                                                                                                              | **Shipped (11 May 2026)**                                                            | Medium                                                                                                                                                                                       |
| 111 | Maintenance "All" tab sort — OPEN first then date raised (pure helper `sortMaintenanceAllListing<T>` with status priority `OPEN: 0, IN_PROGRESS: 1, RESOLVED: 2, CLOSED: 3` then `createdAt` descending within each bucket; generic over row shape so the page's enriched-row superset flows through unchanged)                                                                                                                                      | **Shipped (11 May 2026)**                                                            | Medium                                                                                                                                                                                       |
| 112 | Render surfaces — live DB reads, no static `@/lib/data` seed (`/finances` / `/mortgages` / `/market` / `/api/exports/finances` all migrated to `readProperties()`; regression-guard `tests/no-static-property-seed-in-render-surfaces.test.ts` walks every `.ts/.tsx` file under `src/app/` and fails on stale-seed imports)                                                                                                                         | **Shipped (11 May 2026)**                                                            | Critical                                                                                                                                                                                     |
| 113 | Form 4A doc-badge scoping (per-doc match against `bundle.current.{signingRequestId, followUpSigningRequestId}`; historic Form 4A docs from a COMPLETED proposal render quieter "Past proposal" badge instead of "Rental proposal generated" + "Cancel proposal ✕"; cancel CTA on historic-doc row no longer silently cancels the active proposal)                                                                                                    | **Shipped (12 May 2026)**                                                            | High                                                                                                                                                                                         |
| 114 | Property delete on detail page + KV cascade cleanup (new "Danger zone" Delete card on Edit Property tab with two-prompt confirmation + Archive guidance copy; `planPropertyKvCleanup` captures `tenancyIds` + `tenantUserIds` BEFORE Prisma cascade so KV bundles keyed by them get cleaned; audit log entry includes `kvKeysAttempted` + `kvKeysDeleted`)                                                                                           | **Shipped (12 May 2026)**                                                            | High                                                                                                                                                                                         |
| 115 | Form 4A modal — inline Original start date capture (`validateOriginalStartDateInput(raw, { notAfter? })` + `needsOriginalStartDateInput(tenancy)` predicate; modal renders editable date input when tenancy lacks `moveInDate` instead of erroring on Create draft; POST route validates + persists back to `Tenancy.moveInDate` so subsequent proposals skip the question)                                                                          | **Shipped (12 May 2026)**                                                            | High                                                                                                                                                                                         |
| 116 | Tax-data alignment hotfixes (SA105 visibility filter no longer bypasses company-exclusion via `                                                                                                                                                                                                                                                                                                                                                      |                                                                                      | p.months.length > 0`; `taxYearToAsOfDate`returns`start`of tax year not`end` so 31-Mar-ARD companies resolve to the AP ENDING in the tax year instead of the AP starting just before it ends) | **Shipped (12 May 2026 +5)** | High |
| 117 | CT600 per-property running costs — records-first + new UI tab (`RECORDS_FIRST_FALLBACK_CATEGORIES = { mortgageInterest, premisesRunningCosts, costOfServices }`; `resolveRecordsOrFallback({ records, fallback })` picks records when > 0 else fallback; new "Property running costs" tab on `/taxes/company/[id]/expenses` with inline Add / Edit / Delete; mid-year split captured by entering two records)                                        | **Shipped (12 May 2026 +6)**                                                         | High                                                                                                                                                                                         |
| 118 | CT600 drift detection (denormalised `Property.*` monthly columns vs Expense records — current rate vs historical actuals; `detectRunningCostsDrift` integer-pence float-noise safe; amber drift banner per property × category with one-click deep-link to property Edit panel; no auto-sync because `premisesRunningCosts` is a sum across service charge + ground rent that only the user can split)                                               | **Shipped (12 May 2026 +7)**                                                         | High                                                                                                                                                                                         |
| 119 | Per-surface portfolio scope filters (`isComplianceScopedProperty` status === ACTIVE only — drops `rentalIncome > 0`; `isFinancesScopedProperty` rentalIncome > 0 + visible "N active properties hidden" footnote with names; dashboard Total Portfolio Value tile adds "· N hidden (no rent yet)" in amber; per-surface intent documented in CLAUDE.md)                                                                                              | **Shipped (12 May 2026 +8)**                                                         | High                                                                                                                                                                                         |
| 120 | DocuSeal Form 4A admin-runbook script (`npm run docuseal:sync-form-4a` + `docs/docuseal-form-4a-setup.md` 10-step Word-by-Word; `npm run docuseal:verify-form-4a` post-upload programmatic gate)                                                                                                                                                                                                                                                     | **Shipped (3 May 2026)**                                                             | Medium                                                                                                                                                                                       |

---

## 39. Limited-company operating expenses + capital assets (CT600 deductions)

**Priority:** High
**Status:** ✓ Shipped 29 April 2026
**Complexity:** Medium (one feature, two record types)

### Background

Today the app records **per-property** expenses (mortgage, service charge,
ground rent, repairs, management fees) which feed SA105 + CT600 profit.
What's **missing** is the **company-level** running cost — the expenses
of operating MAR Property Co itself, not any individual property. These
are legitimate Corporation Tax deductions that reduce CT600 profit but
aren't currently captured anywhere.

The user has flagged the gap explicitly: "I need to record expenses
for running and operating MAR Limited Company as this will reduce
profit. Also include the ability to record assets like PC equipment
etc that would also offset against tax liabilities, including things
like insurance, accountancy, life assurance, etc."

### Two record types — different tax treatment

| Type                 | Examples                                                                                                                                                                                                                                                                                           | CT600 treatment                                                                                                                                                                                                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Revenue expenses** | Director/employee salaries, accountancy fees, business insurance, legal fees, life assurance (relevant-life policies), bank charges, software subscriptions, postage, telephone, utilities for a registered office, training, motoring (mileage / pool car), professional subscriptions, marketing | Deducted in full in the year incurred — straight reduction in taxable profit.                                                                                                                                                                                                    |
| **Capital assets**   | PC equipment, laptops, monitors, office furniture, cameras, tools, vehicles                                                                                                                                                                                                                        | Annual Investment Allowance (AIA — £1m limit, 100% in year of purchase) for most plant & machinery, OR Writing Down Allowance (WDA) at 18% main pool / 6% special-rate pool. Cars are special-rate (and CO₂-banded). The asset stays on the balance sheet at written-down value. |

Treating capital as revenue (or vice versa) gets the CT600 wrong by
several thousand pounds across multi-year horizons.

### Build sketch (when prioritised)

**Schema:**

- New `CompanyExpense` table — keyed by `companyId` (FK to the
  Companies KV), `category` (enum: ACCOUNTANCY / INSURANCE /
  LIFE_ASSURANCE / DIRECTOR_REMUNERATION / LEGAL / SUBSCRIPTIONS /
  UTILITIES / TRAVEL / OTHER), `description`, `amount`, `date`,
  `receiptBlobUrl`, `notes`, `taxYear` (derived from `date`).
- New `CompanyAsset` table — `companyId`, `description`, `category`
  (PLANT_MACHINERY / OFFICE_EQUIPMENT / VEHICLE / FURNITURE),
  `purchaseDate`, `purchasePrice`, `aiaClaimed: Boolean`,
  `wdaPool` (MAIN_POOL / SPECIAL_RATE / SINGLE_ASSET),
  `disposalDate?`, `disposalPrice?`, `notes`. Plus a derived
  `writtenDownValue` per tax year computed from a balance-brought-forward
  helper.

**UI:**

- New page: `/taxes/company/[id]/expenses` — tabs for
  "Operating Expenses" and "Capital Assets" within the
  per-company CT600 view. Add / edit / delete. Receipt upload to
  Vercel Blob (same path as PropertyDocument).
- Year filter (defaults to current).
- Subtotals visible: total operating expenses for the year,
  total AIA claimed, opening + closing WDV for the asset pool.

**CT600 page integration:**

- The `/taxes/company` per-company summary card adds two new
  rows under existing Property-level totals:
  - "Operating expenses (company)" — sum of `CompanyExpense` for
    the year
  - "Capital allowances (AIA + WDA)" — computed from
    `CompanyAsset` with the per-pool helper
- These deductions reduce the CT600 taxable profit number that
  feeds the Corporation Tax estimate.

**Helpers (pure, testable):**

- `src/lib/tax/capital-allowances.ts` — `computeAiaForYear`,
  `computeWdaForYear`, `rollForwardWdv`, `computeDisposalEvent`.
  Pure inputs/outputs (asset list + tax year → £ figures).
- `src/lib/tax/company-expenses.ts` — `sumOperatingExpensesForYear`,
  `expensesByCategoryForYear`.

**Tests:**

- Unit tests for AIA cap (£1m), WDA main vs special pool,
  disposal balancing-charge / balancing-allowance, mid-year
  acquisition (no apportionment for AIA — full claim regardless
  of when in the year purchased).
- Round-trip test: create an asset, claim AIA, verify CT600 page
  shows correct deduction; sell asset same year, verify disposal
  reduces deduction.
- Operating-expense aggregation by category and year.

**UAT:**

- Add accountancy fee → reduces CT600 profit by that amount.
- Add laptop @ £1,200 → AIA claim 100% → CT600 profit reduced by
  £1,200 in year of purchase; WDV £0 going forward.
- Add van @ £25,000 → AIA still 100% → CT600 reduced by £25,000;
  WDV £0.
- Add car @ £18,000, 110g/km CO₂ → special-rate pool, no AIA, 6%
  WDA → CT600 reduced by £1,080 year 1.
- Mid-year disposal of an asset previously written down → balancing
  allowance / charge calculated correctly.

### Why this is High priority

- Without it, the user's CT600 estimates are **systematically
  overstated** — every accountancy fee, every business insurance
  premium, every bit of office kit is a missed deduction.
- For a portfolio of MAR Property Co's size, this is realistically
  £3-8k of operating expenses + capital allowances per year —
  meaningful at 25% Corporation Tax (£750–£2,000 of tax saved).
- Distinct from per-property expenses that are already captured —
  this is a clean additive feature, not a refactor.
- Pairs naturally with the existing Reference Data → Companies
  module (CRN, UTR, year-end already there). The new tables
  attach to `companyId`.

### Resume condition

When the next CT600 prep cycle approaches OR when the user signals
they're ready to capture company operating costs. No infrastructure
prerequisite — this can ship standalone any time.

### What shipped (29 April 2026)

Both record types implemented as Prisma models with a real migration
(`20260429000000_add_company_expenses_and_assets`):

- `CompanyExpense` — soft-FK `companyId`, category enum (12 values),
  date / amount / description / optional notes + receipt URL.
  `taxYear` and `accountingPeriodEnd` are derived at write-time by
  the API route from the payment date + the company's
  `accountingRefDate`.
- `CompanyAsset` — soft-FK `companyId`, category enum (4 values:
  `PLANT_MACHINERY` / `OFFICE_EQUIPMENT` / `VEHICLE` / `FURNITURE`),
  `wdaPool` enum (`MAIN_POOL` / `SPECIAL_RATE` / `SINGLE_ASSET`),
  `aiaClaimed` boolean, optional disposal fields.

Pure helpers under `src/lib/tax/`:

- `company-expenses.ts` — `deriveTaxYearFromDate`,
  `deriveAccountingPeriodEnd`, `sumOperatingExpensesForPeriod`,
  `sumOperatingExpensesForTaxYear`, `expensesByCategoryForPeriod`.
- `capital-allowances.ts` — `computeAiaForPeriod` (AIA cap £1m,
  full-claim, special-rate excluded), `computeWdaForPeriod`
  (18% main / 6% special, opening balance roll-forward),
  `rollForwardWdv` (multi-period chained), `computeDisposalEvent`
  (balancing allowance / charge, capped at original cost),
  `totalCapitalAllowancesForPeriod`.

UI:

- New page `/taxes/company/[id]/expenses` with tabbed
  Operating-expenses + Capital-assets management. Add / delete
  flows, period summary cards (total operating, AIA claimed, WDA),
  per-category breakdown, mark-as-disposed action. Vehicles
  (CO₂-banded special-rate) deliberately hidden from the asset
  category dropdown — schema still supports them, UI enables in v2.
- `/taxes/company` page extended with two new P&L rows
  ("Operating expenses (company)" and "Capital allowances
  (AIA + WDA)"), feeding `computeCompanyPL` so the corporation tax
  estimate immediately reflects the deductions. New "Manage
  company expenses & assets" link on each company card.

API: `/api/companies/:id/expenses` (GET/POST) +
`/api/companies/:id/expenses/:expenseId` (PUT/DELETE);
`/api/companies/:id/assets` (GET/POST) +
`/api/companies/:id/assets/:assetId` (PUT/DELETE). Editor-role
gated. Validation rejects non-numeric / negative amounts,
malformed YYYY-MM-DD dates, and unknown categories.

`computeCompanyPL` extended with two new optional args
(`companyOperatingExpenses`, `capitalAllowances`) — defaulting
to 0 keeps every existing caller backwards-compatible.

**Tests:** +42 new (880 → **922** total) across
`tests/company-expenses.test.ts` (15),
`tests/capital-allowances.test.ts` (23), and 4 new
`computeCompanyPL` cases extending `tests/corporation-tax.test.ts`.

**E2E:** `e2e/tests/taxes/company-expenses.spec.ts` covers page
render + tab switch + API-driven add-then-list round trip + CT600
deduction-row visibility.

---

## 40. Renters' Rights Act 2026 compliance dispatch (1 May target)

**Priority:** High
**Status:** ✓ Shipped 29 April 2026 (Wave 1) — two days ahead of the 1 May commencement
**Complexity:** Medium (~1 session)

### What shipped (29 April 2026)

Wave 1 covers bulk dispatch + per-tenant evidence trail; Wave 2
items (Z5 / Z6 / written statement of terms) deferred until the
commencement Statutory Instrument lands.

**Lib (`src/lib/rra/`):**

- `dispatch.ts` — pure status state machine
  (`NOT_SENT → SENT → DELIVERED → OPENED → ACKNOWLEDGED`, plus
  `POSTED` parallel state). Monotonic ratchet via `appendEvent`
  (de-dupes on `(provider, providerId)`); `transitionedTo` gates
  side effects on the first transition into a status.
- `templates.ts` — Information Sheet + cover letter templating.
- `store.ts` — KV bundle helpers reading/writing
  `rra-dispatch:{tenantUserId}`.
- `email-resend.ts` — Resend SDK wrapper + webhook signature
  verification (HMAC SHA-256 on `RRA_RESEND_WEBHOOK_SECRET`).
- `evidence.ts` — per-tenant evidence pack export.

**API (10 route files):**
`/api/compliance/rra/*` (6 — list, dispatch, mark-posted, evidence
download, per-tenant detail, status backfill),
`/api/portal/rra/{acknowledge,status}` (2),
`/api/webhooks/resend` (1 — Resend delivery / open / bounce events),
`/api/cron/rra-status` (1 — periodic backfill / overdue alerting).

**UI:**

- `/compliance/rra` — landlord dispatch page with bulk-select +
  filter (`rra-dispatch-table.tsx` client island).
- Dashboard widget
  (`src/components/compliance/rra-dispatch-widget.tsx`) showing
  outstanding-tenant count.
- Tenant portal banner
  (`src/components/portal/rra-info-sheet-banner.tsx`) with
  "I have read this" → ACKNOWLEDGED.
- Property detail compliance section
  (`src/components/property/property-rra-section.tsx`).
- Settings → Reference Data card linking to `/compliance/rra`.
- Sidebar entry under Operations.

**Storage:** KV bundle keyed `rra-dispatch:{tenantUserId}` — JSONB
on the `KeyValue` table, no Prisma migration. Matches the
lease-renewals + companies + growth-snapshots + HMO pattern.

**Email transport:** Resend (`resend` SDK) added alongside the
existing nodemailer SMTP transport — Resend retained for the RRA
flow because its delivery + open webhooks supply the audit-quality
evidence the £7,000 penalty defence requires. Env vars added:
`RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RRA_RESEND_WEBHOOK_SECRET`.

**Tests:** +55 unit tests across 6 suites
(`tests/rra-{dispatch,templates,evidence,email-resend,routes,resend-webhook}.test.ts`).
922 → **977** total. **E2E:**
`e2e/tests/compliance/rra-dispatch.spec.ts` and
`e2e/tests/portal/rra-acknowledge.spec.ts`.

**Migrations:** zero (KV-only).

**Five-commit landing pattern** on
`claude/review-docs-changes-7JS1j`: `216114a`, `ff18cc5`, `ceed343`,
`7265adb`, `eb0421b`. Rolled into PR **#11**.

### Deferred from Wave 1

- **PDF merge of cover letter + Info Sheet** via jspdf isn't viable
  for v1 (jspdf can't reliably merge external PDFs); Info Sheet
  rides as a Resend attachment + portal download instead.
- **Periodic-tenancy audit on `/tenants` (Z5)** and **Section 21
  wind-down flagging (Z6)** — both await the Statutory Instrument
  confirming commencement detail.
- **Written statement of terms** (separate RRA requirement, no
  1 May urgency) — defers to v1.1.

### Background

The Renters' Rights Act 2025 commences **1 May 2026**. Information
Sheet must reach every named adult on every active tenancy by
**31 May 2026**; penalty for non-compliance is up to **£7,000 per
tenant**. Was the top short-term priority going into the 28-29 April
session — Wave 1 shipped on 29 April 2026 (two days ahead of the
commencement deadline). #C (Open Banking Phase 2), #D (Property
Migration UI Phase 2), and Phase A (Unified rental-income source)
all shipped on 29 Apr 2026. #F (Limited-company expenses) also
shipped 29 Apr 2026.

### Build spec

The canonical build spec lives in **`docs/rra-compliance-readiness.md`**.
That doc covers data model (KV bundle, no DB change), helpers, API,
UI, parallel execution plan, tests, and risks. This entry is the
future-ideas cross-reference; do not duplicate the spec here.

### Decisions locked (28 April 2026)

1. **Email provider:** Resend, added alongside the existing nodemailer
   SMTP transport (not replacing). Chosen for delivery + open webhooks
   — audit-quality evidence for the £7,000 penalty defence.
2. **Acknowledgement:** must provide, not must obtain. `DELIVERED`
   (per Resend webhook) is sufficient legal evidence; portal
   "I have read this" is captured opportunistically as stronger
   evidence but not gating.
3. **Scope:** Information Sheet only for v1. Written statement of
   terms (separate RRA requirement, no 1 May urgency) defers to v1.1.
4. **MANAGED properties:** included in dispatch; £7,000 penalty
   applies regardless of tax treatment. Tax surfaces still exclude
   MANAGED.
5. **Postal fallback:** full printable pack now — per-tenant cover
   letter + Info Sheet as a single PDF, with manual "mark as posted"
   override on the dispatch row.
6. **Storage:** KV bundle keyed `rra-dispatch:{tenantUserId}`. No
   Prisma model, no migration. Matches lease-renewals + HMO +
   companies pattern.

### Effort

~1 session — Wave 1 delivered on 29 April 2026 across a 5-commit
landing pattern on PR #11.

### Resume condition

Wave 1 is shipped and live. Wave 2 resumes when the Statutory
Instrument confirms commencement detail (so Z5 periodic-tenancy
audit and Z6 Section 21 wind-down flagging can land on the right
legal footing) and/or when the user requests the written statement
of terms work for v1.1.

### Cross-reference

- `docs/new-scope.md` — section #G (this entry's twin under
  Outstanding work)
- `docs/outstanding-work.md` — quick-status table row "RRA
  compliance dispatch"
- `docs/rra-compliance-readiness.md` — full build spec

---

## 41. Rent Review Insights (market-driven rent suggestions)

**Priority:** High
**Status:** ✓ Shipped 29 April 2026 (late afternoon)
**Complexity:** Medium (~half session)

### What shipped (29 April 2026)

End-to-end Rent Review Insights on a KV-only data model — no Prisma
migration. Identifies properties whose rent agreement is stale (no
review in 12+ months by default — configurable) and surfaces a
defensible suggested rent range based on ONS Private Rental Index
uplift + curated local comparables.

**Lib modules (`src/lib/rent-review/`):**

- `store.ts` — KV bundle helpers for `market-benchmarks`,
  `rent-review-history:{propertyId}`, `rent-review-settings`.
- `benchmark-seed.ts` — curated v1 seed populated from the existing
  `/market` page hardcoded data + ONS PRI public spreadsheet, with
  the admin-refresh helper signature designed for an ONS API
  drop-in v1.1.
- `insights.ts` — pure pipeline: `lastReviewAnchor`,
  `monthsSinceReview`, `isOutdated`, `suggestedRentRange`,
  `rraTribunalRisk`, `isSnoozed`, `buildInsight`.
- `benchmarks.ts` — area lookup + ONS uplift compounding.

**API routes (8):**

- `GET /api/market/insights`
- `POST /api/market/insights/[propertyId]/{apply,snooze,dismiss,restore}`
- `GET /api/market/benchmarks`
- `POST /api/admin/market/refresh-benchmarks`
- `GET / PUT /api/market/settings`

The Apply route routes through `upsertProperty` (per CLAUDE.md the
only sanctioned per-property write) and is regression-locked by an
extension to `tests/property-routes-no-nuclear-write.test.ts`.

**UI surfaces:**

- New top "Rent Review Insights" section on `/market` —
  `MarketInsightsTable` client island with filter chips (All /
  Outstanding / Snoozed / Dismissed / Up-to-date) and per-row
  Apply (method dropdown) / Snooze (duration picker) / Dismiss /
  Restore actions.
- `PropertyRentReviewCard` on the property detail Overview —
  hidden when up-to-date and not RRA-risk; shows current rent,
  suggested range, confidence label, anchor date, and fallback
  warning when applicable.
- Dashboard alert when `summary.outdated > 0` — links to `/market`.
- New "Rent Review Settings" card under Settings → Reference Data
  with editable thresholds and a read-only Market Benchmarks panel
  showing source / asOfDate / area count.

**Tests:** ~+27 new unit tests across 4 suites
(`tests/rent-review-{insights,benchmarks,routes}.test.ts` plus a
1-case extension to `tests/property-routes-no-nuclear-write.test.ts`).
977 → ~1004 total. **E2E** at `e2e/tests/market/rent-review.spec.ts`
(7 cases — outstanding-row render, Apply round-trip, Snooze,
Dismiss + Restore, dashboard alert, Settings persistence, MANAGED
Apply suppression).

**MANAGED handling:** read-only badge on the row; Apply suppressed
(income belongs to the underlying owner). Snooze and Dismiss remain
available so users can clear surface noise.

### Deferred (v1.1 candidates)

- ~~**ONS PRI auto-pull cron.**~~ **Shipped 29 Apr 2026 evening — see §42 below.**
- **Section 13 notice generation + signing flow handoff.** v1's
  Apply only updates fields and logs to history.
- **Trend mini-charts on the property page.** v1 is table-first —
  charts compound complexity.
- **Postcode-level granularity.** v1 is area-level (IG6, IG4,
  EN11, CO14, IG2, WA7).
- **Crowd-sourced comparables across the user base.**

### Background

The growth-plan snapshot pattern works well for portfolio metrics; we
want the same pattern for rent reviews. Identify properties whose
agreement is stale (no review in 12+ months) and surface a defensible
suggested rent range based on ONS Private Rental Index uplift +
curated local comparables. Surfaces on `/market`, property detail
Overview, and dashboard alert. Apply action updates fields and logs
to a per-property review history.

### Build spec

The canonical build spec lives in
**`docs/rent-review-insights-readiness.md`**. That doc covers data
model (KV bundles only — no Prisma migration), pure helpers, API,
UI, parallel execution plan, tests, and risks. This entry is the
future-ideas cross-reference; do not duplicate the spec here.

### Decisions locked (29 April 2026)

1. **Market data source:** Curated KV seed for v1; ONS API drop-in
   designed as a single-helper swap for v1.1.
2. **Outdated threshold:** 12 months default; configurable.
3. **Apply action:** Updates `Property.rentalIncome` +
   `Tenancy.rentAmount` + logs to history. No Section 13 notice
   generation, no signing flow handoff in v1.
4. **Confidence levels:** HIGH if `comparableCount >= 5`, MEDIUM if
   `>= 2`, LOW (index-only) otherwise.
5. **RRA tribunal risk:** Warn when suggested rent exceeds market
   median by configurable margin (default 10%); don't cap.
6. **Anchor fallback:** Fall back to `Tenancy.moveInDate` when no
   review history exists; surface a warning.
7. **Snooze duration:** User-configurable per dismissal; default 90
   days.
8. **v1 scope:** Table-first; trend mini-charts deferred to v1.1.
9. **MANAGED properties:** Read-only badge; Apply suppressed.
10. **Storage:** KV bundles. No Prisma migration. Matches
    lease-renewals + RRA + companies + HMO pattern.

### Effort

~half session — 3-4 hours wall-clock with 3-agent Wave 1.

### Resume condition

Shipped 29 April 2026 (late afternoon). v1.1 candidates listed under
"Deferred" above; no immediate trigger.

### Cross-reference

- `docs/new-scope.md` — section #H (this entry's twin under
  Outstanding work)
- `docs/outstanding-work.md` — Recently shipped block + quick-status
  table row "Rent Review Insights"
- `docs/rent-review-insights-readiness.md` — full build spec
  (canonical)
- `docs/architecture.md` §28 — runtime architecture
- `docs/process-maps.md` Map 27 — Rent Review Insights flow

---

## 42. Rent Review v1.1 — ONS PRI auto-pull cron

**Priority:** Medium
**Status:** ✓ Shipped 29 April 2026 (evening)
**Complexity:** Small (~2-3 hours wall-clock)

### What shipped

Automated daily refresh of the `market-benchmarks` KV bundle from
the ONS Beta API's Private Rental Index. Replaces the v1
admin-paste workflow as the default freshness path; the paste
workflow is preserved as an operator override.

**New files:**

- `src/lib/rent-review/ons-client.ts` — pure client with injectable
  `fetch`-like, schema-validation, defensive errors
  (`fetchOnsPriIndex`, `extractRegionSeries`, `parseOnsTimeId`,
  `looksLikeOnsPayload`, `OnsFetchError`, `ONS_GEOGRAPHY_CODES`).
- `src/lib/rent-review/refresh.ts` — orchestration
  (`refreshFromOns`, `translateOnsToBenchmark`,
  `existingAsOfMonth`, `asOfMonthToIsoDate`).
- `src/app/api/cron/ons-pri-refresh/route.ts` — Vercel cron entry
  (auth: `CRON_SECRET`).

**Wired into existing surfaces:**

- `src/app/api/admin/market/refresh-benchmarks/route.ts` — extended
  with `?source=ons` query that triggers `refreshFromOns` directly.
  The body-paste path is preserved when the query is absent.
- `vercel.json` — adds `/api/cron/ons-pri-refresh` daily at 04:00 UTC.
- `MarketAreaRow.region?: OnsRegionCode` (new optional field) carries
  the ITL1 region tag. The seed bundles each curated area with its
  region (`LONDON`, `EAST_OF_ENGLAND`, `NORTH_WEST` so far). Areas
  without a region tag pass through the refresh untouched.

### Translation rule

ONS publishes a _relative index_ per region. Benchmarks store
_absolute £/month medians_. We compound the regional MoM% onto each
area's existing median (`median * (1 + momPct)`, rounded to the
nearest pound) and refresh `onsIndex` + `onsYoyPct` to the regional
values. We never overwrite medians with index values.

### Defensive contract

Any HTTP error / schema mismatch / unexpected shape leaves the
existing KV bundle untouched. The cron returns 200 with `ok: false`
on error so Vercel doesn't retry-storm; the admin override returns 502. The `existingAsOfMonth >= ons.asOfMonth` gate skips the
network round-trip when the cache is already current — the cron
runs daily but ~28 of every 30 calls are no-ops.

### Env vars

- `CRON_SECRET` — Bearer token for cron authentication (already
  used by `/api/cron/compliance-scan` and `/api/cron/rra-status`).
- `ONS_API_BASE` — default `https://api.beta.ons.gov.uk/v1`.
- `ONS_PRI_DATASET_ID` — default `private-rent-prices`. The
  operator should verify the slug against the ONS dataset
  discovery endpoint before first run; documented in
  `docs/rent-review-insights-readiness.md` §12.

### Tests

- `tests/rent-review-ons-client.test.ts` (14 cases — parser,
  fetcher, schema-validation, HTTP error, low-level fetch error).
- `tests/rent-review-ons-refresh.test.ts` (11 cases — translation,
  rounding, MoM compounding, legacy passthrough, orchestration,
  cache-untouched-on-error contract).
- `tests/rent-review-ons-cron-route.test.ts` (8 cases — CRON_SECRET
  gate, success payload, error returns 200 not 500, admin
  `?source=ons` 200/403/502 paths, body-paste fallback preserved).

**E2E:** `e2e/tests/admin/ons-refresh.spec.ts` (3 cases — read-only
benchmarks fetch + admin-triggered refresh either succeeds or
fails cleanly without corrupting the bundle + cron 401 without
secret).

1063 → 1096 unit tests.

### Cross-reference

- `docs/rent-review-insights-readiness.md` §12 — operator
  verification + env-var matrix
- `docs/architecture.md` §29 — runtime architecture
- `docs/process-maps.md` Map 27 (extended) — cron flow added
- `docs/uat-checklist.md` AC. — UAT entries

---

## 1. Making Tax Digital (MTD) for Income Tax

**Priority:** High
**Status:** Done (March 2026)
**Complexity:** Large (multi-phase)

### Background

MTD for ITSA launches April 2026 for landlords earning >£50k gross. Quarterly digital submissions to HMRC become mandatory. This is the single most important compliance requirement on the horizon.

### Implementation Notes

All 4 phases completed in March 2026:

**Phase A: Data Model & Category Mapping** — Prisma models for MtdIdentity, MtdOAuthToken, MtdObligation, MtdSubmission. Tax calculator with quarterly/cumulative totals. HMRC field mapper for SA105 box references. Expense tax category system (repairsAndMaintenance, professionalFees, premisesRunningCosts, costOfServices, travelAndSubsistence, other). Section 24 mortgage interest handling.

**Phase B: Quarterly Submission UI** — MTD dashboard (/mtd) with 4 quarter cards showing status progression (Not Started / In Progress / Ready / Submitted). Deadline countdowns per quarter. Cumulative totals view. Per-property breakdown using HMRC categories. Data integrity checks with validation warnings. Submission review modal with line-by-line totals. Reconciliation tools for post-submission verification.

**Phase C: HMRC API Integration (Sandbox)** — OAuth2 flow via Government Gateway (authorize, callback, token exchange, refresh, revoke). HMRC API client for getObligations, submitQuarterlyUpdate, getBusinessDetails, triggerCalculation. Fraud prevention headers on all API calls. Sandbox testing with Gov-Test-Scenario headers. Encrypted token storage (AES-256-GCM).

**Phase D: Dashboard Alerts, Monitoring & Documentation** — MTD deadline alerts on main dashboard. Token health monitoring with expiry warnings. Data completeness scoring per quarter. Combined health summary. Process maps for quarterly submission, initial setup, final declaration, and OAuth connection flows.

### HMRC API Category Mapping

| Current Field       | HMRC API Field             | SA105 Box                  |
| ------------------- | -------------------------- | -------------------------- |
| rentIncome          | `rentIncome`               | Box 5                      |
| mortgage (interest) | `residentialFinancialCost` | Box 26 (Section 24 credit) |
| managementFee       | `professionalFees`         | Box 25                     |
| serviceCharge       | `costOfServices`           | Box 28                     |
| groundRent          | `premisesRunningCosts`     | Box 24                     |
| repairs             | `repairsAndMaintenance`    | Box 29                     |

### Key Dates

| Event                       | Date            |
| --------------------------- | --------------- |
| MTD Phase 1 live (>£50k)    | 6 April 2026    |
| First Q1 due                | 7 August 2026   |
| MTD Phase 2 (>£30k)         | 6 April 2027    |
| First Final Declaration due | 31 January 2028 |
| MTD Phase 3 (>£20k)         | 6 April 2028    |

### Key Components

- `src/lib/mtd/tax-calculator.ts` — Quarterly and cumulative totals from DB records
- `src/lib/mtd/hmrc-field-mapper.ts` — Maps portfolio totals to HMRC API fields
- `src/lib/mtd/integrity-checks.ts` — Pre-submission data validation
- `src/lib/mtd/hmrc-oauth.ts` — OAuth2 flow (authorize, callback, refresh, revoke)
- `src/lib/mtd/hmrc-client.ts` — HMRC Property Business API client
- `src/lib/mtd/fraud-headers.ts` — Gov-Client fraud prevention headers
- `src/lib/mtd/sandbox.ts` — Sandbox test scenario support
- `src/lib/mtd/monitoring.ts` — Dashboard alerts, token health, data completeness
- `src/lib/mtd/reconciliation.ts` — Post-submission reconciliation tools

---

## 2. Open Banking / Bank Feed Integration

**Priority:** High
**Status:** Phase 1 shipped (24 April 2026) — Phases 2–4 in flight
**Complexity:** Large (multi-phase)

### Summary

Connect to UK banks via TrueLayer (with Plaid / GoCardless BAD behind a provider abstraction) to auto-import transactions and reconcile rent and expenses. Delivered in four phases so the MVP ships value while the FCA Agent application is in flight.

### Phase 1 — MVP (shipped 24 April 2026)

- `BankConnection` + `BankAccount` + `BankTransaction` Prisma models (multi-bank from day one)
- TrueLayer sandbox OAuth with HMAC-signed state + encrypted (AES-256-GCM) access/refresh tokens mirroring `MtdOAuthToken`
- Provider abstraction at `src/lib/banking/` — TrueLayer concrete; GoCardless BAD + Plaid stubs for Phase 4 fallback
- Manual "Sync now" per connection; 90-day transaction look-back; idempotent upsert via `@@unique([bankAccountId, providerTxId])`
- Transactions page at `/finances/banking` with Unmatched / Matched / All filters
- Manual match drawer — translates a user decision into a `RentPayment` (credits → tenancy) or `Expense` (debits → property + SA105 category), marks the transaction MATCHED with pointers to the created row
- Plan gate: Pro = 2 connections, Business = unlimited, Free/Starter locked with upsell card; derived from `Subscription.plan`, no new column
- Feature flag `banking` (off by default) under Settings → Features
- 31 new unit tests (oauth-state, TrueLayer mock, connections store, sync idempotency, manual match, plan gate)
- Docs updated: `architecture.md` §17, `process-maps.md` Map 21, sidebar entry under Finance

### Phases 2–4 (planned)

- **Phase 2:** auto-match engine (reference + amount + rules) with a `PENDING_REVIEW` queue; daily Vercel cron at `/api/cron/banking-sync` reusing `CRON_SECRET`; consent-expiry banner + reconnect Tasks at T-14/T-0.
- **Phase 3:** HMO per-room matching off the `hmo:{propertyId}` bundle; auto-create `Expense` records from DEBITs with SA105 bucket suggestion; dashboard banking summary widget.
- **Phase 4:** TrueLayer Agent go-live; T&Cs/privacy addendum; ICO category update; optional TrueLayer webhooks; monitoring + alerts.

### Env vars (Phase 1)

| Key                       | Purpose                                                |
| ------------------------- | ------------------------------------------------------ |
| `BANKING_PROVIDER`        | Selector, default `TRUELAYER`                          |
| `TRUELAYER_CLIENT_ID`     | App id                                                 |
| `TRUELAYER_CLIENT_SECRET` | App secret                                             |
| `TRUELAYER_REDIRECT_URI`  | Must match `https://<host>/api/banking/oauth/callback` |
| `TRUELAYER_ENVIRONMENT`   | `sandbox` (default) or `production`                    |
| `TRUELAYER_SCOPE`         | Override default scope string (optional)               |

---

## 3. Tenant Portal

**Priority:** Medium
**Status:** Done
**Complexity:** Medium

### Summary

Self-service portal for tenants to view lease details, log maintenance requests, check payment history, and communicate with landlord.

---

## 4. Maintenance Request Workflow

**Priority:** Medium
**Status:** Done
**Complexity:** Medium

### Summary

Tenant-initiated maintenance requests with contractor assignment, status tracking, cost logging, and completion sign-off. Arthur Online's top feature.

---

## 5. Native Mobile App / PWA

**Priority:** Medium
**Status:** Idea
**Complexity:** Medium

### Summary

Wrap the Next.js app as a Progressive Web App with offline support, or build a React Native shell. Mobile access is a market expectation.

---

## 6. AI-Powered Insights

**Priority:** Low
**Status:** Idea
**Complexity:** Medium

### Summary

Rent review suggestions based on market data, yield optimisation recommendations, tax efficiency tips. Only Latch currently offers AI automation in this space.

---

## 7. Automated Rent Reminders

**Priority:** Low
**Status:** Idea
**Complexity:** Low

### Summary

SMS/email reminders to tenants before rent due date, with escalation for arrears.

---

## 8. Extended Compliance Tracking

**Priority:** Low
**Status:** Idea
**Complexity:** Low

### Summary

Add Right to Rent checks, HMO licensing, fire safety certificates, deposit protection deadlines beyond current Gas/EICR/EPC tracking.

---

## 9. Accountant Portal

**Priority:** Low
**Status:** Idea
**Complexity:** Low

### Summary

Read-only access role for accountant with export tools (CSV, PDF). Saves end-of-year back-and-forth. Note: PDF export is now built (tax return, P&L, portfolio summary) — accountant role + read-only login would complete this.

---

## 10. Xero/QuickBooks Integration

**Priority:** Low
**Status:** Idea
**Complexity:** Medium

### Summary

Sync income/expenses to accounting software for landlords who use separate accounting tools.

---

## 11. Maintenance & Trades Module (PlumbCalc Integration)

**Priority:** Medium (after PlumbCalc Phase 2 API layer is built)
**Status:** Future Vision
**Complexity:** Large

### Summary

New module in Property App that connects to PlumbCalc (and future trade estimation apps) to create a closed-loop maintenance workflow: tenant reports issue → landlord assigns tradesperson → tradesperson estimates via PlumbCalc → estimate submitted back to Property App → landlord approves → cost logged as property expense → flows into tax return.

### Architecture

- PlumbCalc and Property App remain **separate apps** communicating via API
- Tradespeople only access PlumbCalc (no visibility into property portfolio)
- Pattern is reusable for future trade apps (ElecCalc, DecorCalc, etc.)
- API key authentication for app-to-app communication

### Features

- Maintenance request creation (tenant-initiated via tenant portal, or landlord-initiated)
- Assign tradesperson and send link to PlumbCalc
- Receive submitted estimates via API endpoint
- Approve/reject/request revision workflow
- Compare multiple quotes from different tradespeople
- Auto-log approved costs as property expenses
- Track job completion and final costs vs estimate
- Compare estimate vs actual cost
- Automatic flow into tax return data (repairs & maintenance category)

### Dependencies

- PlumbCalc Phase 1 (best estimator) completed
- PlumbCalc Phase 2 (API layer with estimate sharing endpoints)
- Property App tenant portal (idea #3) would enhance but is not required

---

## 12. Data Import / CSV Template System

**Priority:** Medium
**Status:** Done
**Complexity:** Medium

### Summary

Bulk import system allowing new users to populate a fresh app instance from CSV spreadsheets. Supports properties (with nested mortgage and tenancy data), contractors, tasks, and phone/email contact imports. Downloadable CSV templates with sample data, client-side parsing with preview/validation, and bulk API endpoints for atomic imports.

### Key Features

- **4 modular CSV templates:** Properties, Contractors, Tasks, Contacts
- **Properties template:** Flat CSV with `mortgage_` and `tenancy_` prefixed columns — one row per property with auto-calculated fields (netProfit, monthlyPayment)
- **Contact import:** Auto-detects vCard/phone export CSV headers (Google Contacts, Outlook, Apple) and maps columns automatically
- **Preview & validation:** Client-side parsing with papaparse, green/red/yellow row status, per-row include/exclude checkboxes
- **Bulk API endpoints:** Read-once/write-once pattern (not N individual API calls)
- **Optional feature:** Toggled on via Settings page (off by default)
- **Guided tour:** driver.js tour steps for the import page

### Technical Details

- Client: papaparse for CSV parsing, preview table with validation
- API: 4 endpoints (`/api/import/properties|contractors|tasks|contacts`), editor role required
- Library: `src/lib/import/` — csv-templates, validators, parsers, column-mapper
- Tests: 4 test suites covering validators, parsers, column-mapper, and CSV template generation

---

## 13. Receipt Scanning & Expense Management

**Priority:** Medium
**Status:** Done
**Complexity:** Medium

### Summary

AI-powered receipt scanning using Claude Vision API that extracts expense data from photos/PDFs and feeds it into the tax return pipeline. Two entry points: property card (Scan Receipt button) and dedicated /receipts page for bulk scanning. Scanned expenses map to HMRC SA105 tax categories and can be imported directly into tax return repairs.

### Key Features

- **Claude Vision API** for receipt OCR — extracts vendor, amount, VAT, date, description, and HMRC category
- **Two entry points:** per-property scan button on property detail page, and dedicated /receipts page with property selector
- **Expense persistence:** migrated from hardcoded array to `data/expenses.json` with full CRUD API
- **HMRC category mapping:** repairsAndMaintenance, professionalFees, premisesRunningCosts, costOfServices, travelAndSubsistence, other
- **Tax bridge:** "Import from Receipts" button on tax return edit mode pulls confirmed expenses into repairs[] array
- **Mobile camera capture:** `capture="environment"` attribute opens camera directly on mobile devices
- **Optional feature:** toggled via Settings (off by default)

### Technical Details

- API: `/api/receipts/scan` (Claude Vision OCR), `/api/receipts/confirm` (save as expense), `/api/expenses` (CRUD)
- Store: `src/lib/expenses-store.ts` with seed migration from hardcoded data
- Components: `src/components/receipts/receipt-scanner.tsx`, `src/components/receipts/receipt-list.tsx`
- Receipt files stored in `public/receipts/{propertyId}/`
- Requires `ANTHROPIC_API_KEY` environment variable

---

## 14. PDF Report Export

**Priority:** Medium
**Status:** Done (March 2026)
**Complexity:** Medium

### Summary

Client-side PDF generation for three report types: SA105-ready tax returns, P&L financial statements, and portfolio summary reports. Uses jsPDF with autotable plugin, dynamically imported to keep bundle size down.

### Key Features

- **Tax Return PDF:** SA105 box references, per-property breakdowns, monthly detail tables, expense categories, estimated tax at 20%
- **Finances PDF:** P&L statement with income/expense/profit cards, cost breakdown with percentages, per-property yields, capital investments table
- **Portfolio PDF:** 8 summary cards, mortgage renewal alerts, compliance alerts, property overview with LTV, mortgage details table
- **Branded header bar** (dark gray-900), consistent styling across all reports
- **Reusable ExportPdfButton component** with loading spinner, used on dashboard, finances, and taxes pages
- **Dynamic imports** — PDF generators only loaded when user clicks Export

### Technical Details

- Library: `src/lib/pdf/` — `pdf-utils.ts` (shared), `tax-return-pdf.ts`, `finances-pdf.ts`, `portfolio-pdf.ts`
- Component: `src/components/exports/export-pdf-button.tsx`
- API: `src/app/api/exports/` — tax-return, finances, portfolio routes serve JSON data
- Dependencies: jspdf 4.2.0, jspdf-autotable 5.0.7

---

## 15. Task Status Notes / Activity Log

**Priority:** Medium
**Status:** Done (March 2026)
**Complexity:** Low

### Summary

Activity log on task cards for long-running tasks. Each note captures text, timestamp, and the authenticated user who added it. Notes displayed as a timeline (newest first) with an inline input field.

### Key Features

- **TaskNote type:** id, text, createdAt (ISO timestamp), createdBy (from session user.displayName)
- **Expandable notes panel** on each task card with note count badge
- **Add note input** with Enter key support and Send button
- **Backward compatible** — existing tasks without notes get `notes: []` backfilled at read time
- **PATCH API** handles `addNote` payload separately from standard field updates

---

## 16. Security Hardening & Market Readiness

**Priority:** Critical
**Status:** Done (March 2026)
**Complexity:** Large

### Summary

Full security audit (March 2026) identified critical vulnerabilities that must be resolved before the app can be offered to other users. This is a prerequisite for going to market.

### Critical Issues (Fix Immediately)

- **Exposed credentials:** `.env.local` contains real API keys and SMTP passwords — rotate and move to secrets manager
- **Default admin password:** `admin123` hardcoded in `users-store.ts` and logged to console — remove seed logging, force password change on first login
- **Unauthenticated endpoints:** `GET /api/properties` and `GET /api/documents` have no auth check — all property/financial/tenant data publicly accessible
- **Path traversal:** File upload uses unsanitised `propertyId` and `filename` in paths — use `path.basename()` and validate against existing records

### High Priority (Fix Before Production)

- ~~**Security headers:** `next.config.ts` is empty — add X-Content-Type-Options, X-Frame-Options, CSP, Referrer-Policy~~ **DONE** — `next.config.ts` now sets X-Content-Type-Options, X-Frame-Options (SAMEORIGIN — see CLAUDE.md "Iframe-based PDF previews" section for the SAMEORIGIN-not-DENY rationale), X-XSS-Protection, Referrer-Policy, Permissions-Policy. CSP still TBD.
- **Rate limiting:** No rate limiting on login endpoints — can be brute-forced
- **CSRF protection:** No CSRF tokens on state-changing endpoints
- **Input validation:** No schema validation (Zod) on any API route — malformed payloads accepted
- ~~**Webhook verification:** DocuSeal signing webhook has no signature verification~~ **DONE** (March 2026) — validates `x-docuseal-secret` header against `DOCUSEAL_WEBHOOK_SECRET` env var
- **File upload validation:** No file type whitelist, no size limits on document uploads
- **Mermaid XSS:** innerHTML with `securityLevel: 'loose'` — change to strict, sanitise output

### Medium Priority

- **Password complexity:** Only 8-char minimum enforced — add uppercase, number, special char requirements
- **Account lockout:** No lockout after failed login attempts
- **Error handling:** Some routes leak error details to client — return generic messages, log details server-side
- **Audit logging:** No logging of authentication attempts, data access, or modifications

---

## 17. Database Migration (JSON → PostgreSQL)

**Priority:** Critical
**Status:** Done (March 2026)
**Complexity:** Large

### Summary

All data is currently stored in flat JSON files (`data/*.json`). This is fundamentally unsuitable for production: no concurrency control, no transactions, no backups, no encryption at rest, no indexing. Every API request reads entire files from disk.

### Migration Plan

1. **Set up PostgreSQL** with Prisma ORM (Prisma already in package.json)
2. **Define schema** for all 12+ data models (properties, expenses, tasks, contractors, payments, maintenance, messages, sessions, users, tenant-users, documents, signing)
3. **Migrate all store files** (`*-store.ts`) from fs read/write to Prisma client calls
4. **Redis for sessions** — replace `sessions-store.ts` and `tenant-sessions-store.ts`
5. **Encrypt sensitive fields** — bank account numbers, sort codes, mortgage account numbers
6. **Implement proper transactions** — multi-step operations (e.g. create task + assign contractor) wrapped in transactions
7. **Add automated backups** — daily database dumps, point-in-time recovery

### Performance Improvements

- Eliminate N+1 query pattern (currently 33 instances of O(n²) loops)
- Add database indices for common queries (propertyId, status, date ranges)
- Connection pooling for concurrent requests
- Query-level caching where appropriate

### Alternative (Short-term)

- SQLite as intermediate step (simpler, file-based but with SQL features)
- Add file-level locking to JSON stores as a stopgap

---

## 18. GDPR / UK GDPR Compliance

**Priority:** Critical
**Status:** Done (March 2026)
**Complexity:** Medium

### Summary

Full UK GDPR compliance for tenant PII handling. Implemented in 6 steps as part of Phase 3 path to market.

### What Was Implemented

**Step 1: Audit Logging** — AuditLog and Consent Prisma models, fire-and-forget audit wrapper, audit calls wired into all auth routes (admin + tenant login/logout) and PII mutation routes (properties, contractors, tenants/invite, payments, admin/users, signing/send).

**Step 2: Privacy Policy + Terms Pages** — `/privacy` (UK GDPR privacy notice: data controller, categories, lawful basis, retention periods, tenant rights, security measures) and `/terms` (portal terms of use). Links added to portal login footer and tenant invite email.

**Step 3: Field-Level Encryption** — AES-256-GCM encryption for `bankAccount`, `sortCode`, and `depositProtectionRef` in tenancy records. `ENCRYPTION_KEY` env var (64-char hex). Transparent encrypt-on-write/decrypt-on-read in properties store. Backward-compatible with pre-migration plaintext. Migration script: `scripts/encrypt-existing-data.ts`.

**Step 4: Consent Tracking** — Consent DB store with grant/revoke/query. Tenant self-service consent page (`/portal/consent`) with data_processing and communications checkboxes. Admin consent viewer via API. Portal login response includes `needsConsent` flag.

**Step 5: GDPR Data Export + Erasure** — DSAR/Article 15 data export endpoint (`/api/gdpr/data-export`) with JSON download. GDPR deletion/erasure endpoint (`/api/gdpr/deletion-request`) with preview mode and anonymization (not hard-delete). Anonymization functions for tenant users, maintenance requests, messages, and signing requests. Financial records retained for HMRC 7-year requirement. Admin audit log viewer (`/api/gdpr/audit-log`).

**Step 6: Data Retention Policy** — Retention module with configurable periods. Purges expired sessions, deletes audit logs >3 years. Admin retention endpoint (`/api/admin/retention`) with stats view and cleanup trigger. Retention periods documented in privacy notice.

### New Environment Variables

| Key              | Purpose                                             |
| ---------------- | --------------------------------------------------- |
| `ENCRYPTION_KEY` | 64-char hex string for AES-256-GCM field encryption |

### Test Coverage

- `tests/audit-log-store.test.ts` — 9 tests
- `tests/encryption.test.ts` — 11 tests
- `tests/consent-store.test.ts` — 7 tests
- `tests/gdpr-endpoints.test.ts` — 8 tests (anonymization + data export)
- `tests/retention.test.ts` — 5 tests

---

## 19. CI/CD Pipeline & Automated Testing

**Priority:** High
**Status:** Done (March 2026)
**Complexity:** Medium

### Summary

Automated quality gates ensuring every push is validated before deployment.

### What Was Implemented

**GitHub Actions CI** (`.github/workflows/ci.yml`) — runs on every push to master and all PRs:

1. Lint (`eslint .`)
2. Type-check (`tsc --noEmit`)
3. Test (`npm test` — 46 test suites, 630 tests against in-memory mock)
4. Build (`npm run build`)

Node 22, npm ci with caching, no secrets needed (all tests use in-memory mocks).

**Pre-commit hooks** — Husky + lint-staged: auto-lints and formats staged files on every commit.

**Prettier** — code formatter (`.prettierrc.json`): semi-free, single quotes, trailing commas, 100-char print width. Applied only to new commits via lint-staged (no bulk reformat).

**Scripts added:** `format`, `format:check`, `prepare` (husky init).

---

## 20. SaaS Productisation (Billing & Onboarding)

**Priority:** Medium
**Status:** Done (March 2026)
**Complexity:** Medium

### Summary

Single-tenant SaaS model — each customer gets their own Vercel deployment + Neon database. Avoids complex multi-tenant database scoping. Includes self-service signup, onboarding wizard, Stripe billing integration, and usage-metered plan gating.

### What Was Implemented

**Step 1: Public Landing & Pricing Pages** — Marketing landing page at `/` for unauthenticated visitors, pricing page at `/pricing` with 4 tiers (Free/Starter/Pro/Business), dashboard moved to `/dashboard`.

**Step 2: Signup & Onboarding** — Self-service `/signup` for first admin user on fresh instances, 4-step onboarding wizard at `/onboarding`, first-run detection via `/api/auth/status`, `onboardingComplete` flag on User model.

**Step 3: Stripe Billing** — Subscription Prisma model with plan/limits/usage fields, Stripe Checkout for upgrades, Customer Portal for billing management, webhook handler for subscription lifecycle events, billing settings page with usage dashboard.

**Step 4: Usage Limits & Plan Gating** — Property limit enforcement on creation, user limit enforcement, receipt scan metering with monthly usage counter, e-signature metering, upgrade prompt component, actual property/user counts on billing page.

**Step 5: Documentation & Polish** — Updated project docs, cleaned seed route, added subscription to seed script.

### Pricing Tiers

| Plan     | Price     | Properties | Users     | Receipt Scans/mo | E-Signatures/mo | MTD Submissions |
| -------- | --------- | ---------- | --------- | ---------------- | --------------- | --------------- |
| Free     | £0/mo     | 3          | 1         | 5                | 0               | 0               |
| Starter  | £14.99/mo | 10         | 3         | 30               | 5               | 4               |
| Pro      | £29.99/mo | 25         | Unlimited | 100              | 20              | Unlimited       |
| Business | £49.99/mo | Unlimited  | Unlimited | Unlimited        | Unlimited       | Unlimited       |

### Competitor Benchmarks

| Competitor      | Pricing Model                                         |
| --------------- | ----------------------------------------------------- |
| Landlord Vision | From £12/month (1 property), £24/month (5 properties) |
| Landlord Studio | Free (3 units), Pro £7.99/month                       |
| Hammock         | From £4.50/month per property                         |
| Arthur Online   | From £25/month                                        |
| Property Hawk   | Free (basic), Pro from £8.25/month                    |

---

## Competitive Context

Based on analysis of: Landlord Vision, Landlord Studio, Hammock, Latch, Arthur Online, August, Property Hawk.

**App strengths vs market:** Growth planning, mortgage analytics, e-signatures (end-to-end with DocuSeal EU), lease renewal tracking, built-in training docs, interactive video tutorials, CSV data import with contact auto-detection, AI receipt scanning with HMRC category mapping, PDF report export (tax/P&L/portfolio), task activity log with status notes, SaaS billing (Stripe), self-service onboarding, tiered pricing with usage metering.

**App gaps vs market:** Bank feeds, native mobile.

---

## 21. E-Signature Workflow Completion

**Priority:** High
**Status:** Done (March 2026)
**Complexity:** Medium

### Summary

End-to-end e-signature workflow improvements closing 7 gaps: tenant portal "Sign Now" button, resend signing email, DocuSeal webhook secret validation, signed PDF document record creation, signed document download from tenant portal, landlord email notification on signing completion, and documentation updates.

### What Was Implemented

1. **Sign Now button** — Tenant portal documents page shows a "Sign Now" button when a tenancy agreement is PENDING or VIEWED, linking directly to DocuSeal signing page. Solves the lost email problem.
2. **Resend Signing Email** — Landlord can resend the signing email via a button on the property documents tab when status is PENDING or VIEWED. Reuses existing signing URL (no new DocuSeal submission). Audit logged. New endpoint: `POST /api/signing/resend`.
3. **Webhook Secret Validation** — DocuSeal webhook now validates `x-docuseal-secret` header against `DOCUSEAL_WEBHOOK_SECRET` env var. Rejects invalid requests with 401. Gracefully falls back in dev (logs warning).
4. **Signed Document Record** — When DocuSeal webhook receives `form.completed`, the signed PDF is downloaded from DocuSeal, stored in Vercel Blob, AND a new PropertyDocument record is created so it appears in document lists for both landlord and tenant.
5. **Signed Document Download** — Tenant portal shows a "Download Signed Copy" button (green) when the tenancy agreement has been signed. Compliance checklist shows "Signed" status.
6. **Landlord Notification Email** — When tenant signs, landlord receives a branded email with tenant name, property address, and signing timestamp. Sent to `LANDLORD_NOTIFICATION_EMAIL` (falls back to `SMTP_FROM`).
7. **Documentation** — Process maps (end-to-end webhook flow), architecture docs (DocuSeal EU, Vercel Blob, webhook security), and future ideas updated.

### New Environment Variables

| Key                           | Purpose                                                     |
| ----------------------------- | ----------------------------------------------------------- |
| `DOCUSEAL_WEBHOOK_SECRET`     | Secret for validating DocuSeal webhook requests             |
| `LANDLORD_NOTIFICATION_EMAIL` | Email address for landlord signing notifications (optional) |

### New API Endpoint

| Endpoint              | Method | Purpose                       |
| --------------------- | ------ | ----------------------------- |
| `/api/signing/resend` | POST   | Resend signing email (editor) |

---

## 22. Multi-Document E-Signature

**Priority:** Medium
**Status:** Idea
**Complexity:** Low

### Summary

Extend e-signature support beyond Tenancy Agreements to other document types such as inventory reports, deposit agreements, and property inspection forms. Currently only TENANCY_AGREEMENT documents can be sent for signing. Would reuse the existing DocuSeal EU integration and webhook infrastructure.

---

## 23. Signing Audit Trail & Compliance Report

**Priority:** Low
**Status:** Idea
**Complexity:** Low

### Summary

Generate a downloadable PDF audit trail for each signed document showing the full signing history: when the request was sent, when the tenant viewed, when they signed, IP address (if available from DocuSeal), and webhook processing timestamps. Useful for dispute resolution and regulatory compliance beyond basic status tracking.

---

## 24. Bulk Signing (Multiple Tenants)

**Priority:** Medium
**Status:** Session 1 shipped (28 April 2026) — Session 2 (UI) in flight
**Complexity:** Medium

### Summary

Joint AST signing — one DocuSeal submission with N submitters (e.g.
Tenant 1, Tenant 2, Landlord), per-signer status, aggregate envelope
status, parallel signing. Backwards compatible with the single-signer flow.

### Session 1 — backend (shipped)

- `SigningSubmitter` Prisma model + migration with backfill for existing single-signer rows
- `Tenancy.contactDetails: [{ name, email, phone }]` JSONB column (legacy fallback when empty)
- Aggregate-status helper at `src/lib/signing-aggregate.ts` — `aggregateStatus`, `transitionedTo`, `earliestViewedAt`, `latestSignedAt`
- DocuSeal client gains `createMultiSubmission({ templateId, submitters[] })`
- `/api/signing/send` accepts `submitters[]` payload (or legacy `tenantEmail`/`tenantName`); validates roles, emails, dedupe, max 4
- `/api/signing/webhook` per-submitter handling + once-only PDF download + `form.declined` → envelope FAILED
- `/api/signing/resend` accepts `submitterId` for targeted resend
- `/api/signing/status` response includes `submitters[]` projection
- `/api/portal/signing/me` — per-tenant view of pending signing tasks
- `/api/tenants/invite` accepts `invites[]` for joint TenantUser provisioning
- Plan-gate counts once per envelope (1 joint AST = 1 signature)
- Joint AST template at `public/templates/AST Short Term Tenancy Agreement Template - Joint.docx` available in the Templates page
- 40 new unit tests; total 789 passing

### Session 2 — UI (planned, ~half day)

- Send-for-signing modal: multi-row form pre-filled from `Tenancy.contactDetails`
- Property tab: expandable status panel with per-submitter rows + targeted resend button
- Tenant portal Documents page: per-tenant slice from `/api/portal/signing/me`
- Compliance checklist: aggregate-aware ("Partially signed (1/2)")
- Tenancy edit form: per-tenant emails + phones

### DocuSeal template setup

Roles must be named exactly: `Tenant 1`, `Tenant 2`, `Landlord`. Set
**signing order = Parallel** in the template settings. Send the
template ID to the deployment via `DOCUSEAL_JOINT_TENANCY_TEMPLATE_ID`
env var (or pass per-call as `docusealTemplateId` in the send body).

### Decline flow

Any `form.declined` event marks the envelope FAILED, sends a landlord
notification, and prevents PDF generation. Other signers' completed
signatures remain in DocuSeal but our envelope is dead — admin
re-sends a fresh envelope after fixing the issue.

---

## 25. Interactive Tutorial & Demo System

**Priority:** Medium
**Status:** Done (March 2026)
**Complexity:** Medium

### Summary

Reusable tutorial system across marketing websites that combines interactive step-through components with embedded video/GIF recordings from Playwright E2E tests. Deployed on PlumbCalc marketing site with 3 initial tutorials, and a demo recording pipeline in the Property App for generating real app footage.

### What Was Implemented

**Shared Components Package** (`packages/tutorial-components/`):

- `TutorialPlayer` — step-through player with progress dots, media embed (MP4/GIF/image), auto-play toggle, keyboard navigation (arrow keys), CSS transitions
- `TutorialCard` — listing card with icon, category badge, step count, and estimated duration
- `StepIndicator` — dot progress component with active/completed/pending states
- `MediaEmbed` — handles MP4 (autoplay, loop, muted), GIF, and static images with loading spinner
- Themed via CSS custom properties (`--color-primary`, `--color-accent`) so each site can brand independently

**PlumbCalc Website Integration** (`plumbcalc-website/`):

- `/tutorials` listing page with grid of TutorialCards
- `/tutorials/[slug]` individual tutorial page with TutorialPlayer + CTA section
- "Tutorials" added to header nav and footer links
- 3 initial tutorials: Creating a Bathroom Estimate (5 steps), Setting Up Your Price List (3 steps), Generating a Gas Safety Certificate (3 steps)
- `generateStaticParams()` for static site generation

**Demo Recording Pipeline** (Property App `e2e/demos/`):

- `demo.config.ts` — Playwright config with `video: 'on'`, `slowMo: 400ms`, 1280×720 viewport, single worker for consistent recordings
- 3 demo specs: `dashboard-tour.demo.ts` (4 steps), `e-signature.demo.ts` (3 steps), `tenant-portal.demo.ts` (4 steps)
- `convert-demos.ts` — FFmpeg conversion script (WebM → MP4 at CRF 28, optional GIF at 10fps/640px)
- npm scripts: `demo:record`, `demo:convert`, `demo:convert:gif`

### Data Schema

Tutorials are defined as TypeScript data arrays (`tutorials-data.ts`) in each marketing site. Adding a new tutorial requires only adding a data entry and dropping media files in `/public/tutorials/<slug>/`.

```typescript
Tutorial { slug, title, description, category, estimatedMinutes, iconName, steps[], ctaLabel, ctaHref }
TutorialStep { step, title, description, mediaPath, mediaType, annotation?, durationSeconds? }
```

---

## 26. HMRC Production Approvals

**Priority:** High
**Status:** Idea
**Complexity:** Medium (process-heavy, not code-heavy)

### Summary

The MTD integration currently works against the HMRC sandbox environment. To go live with real landlord data, the app must pass HMRC's production approval process. This includes registering the application on the HMRC Developer Hub, passing the production credentials checklist, implementing all mandatory fraud prevention headers with real data, and potentially undergoing a review of the application's handling of OAuth tokens and user data.

### Key Steps

- Register for HMRC production credentials on the Developer Hub
- Complete HMRC's production checklist (fraud headers, error handling, rate limiting)
- Switch `HMRC_ENVIRONMENT` from `sandbox` to `production`
- Test with a real Government Gateway account and live data
- Document the approval status and any conditions

### Dependencies

- MTD module (idea #1) — **COMPLETE**
- At least one paying customer with >£50k gross rental income to test with

---

## 27. Tutorial Video Recording & Publishing

**Priority:** Low
**Status:** Idea
**Complexity:** Low

### Summary

Use the existing demo recording pipeline (`e2e/demos/`) to record polished tutorial videos for the Property App marketing site. The infrastructure is already built (Playwright video recording, FFmpeg conversion to MP4/GIF, shared tutorial components). The remaining work is recording the actual videos against the seeded test database and publishing them to the marketing site's `/tutorials` page.

### Key Steps

- Record demos using `npm run demo:record` against the E2E seed database
- Convert recordings using `npm run demo:convert` (WebM to MP4)
- Add tutorial data entries to the Property App marketing site
- Drop media files into `/public/tutorials/<slug>/`
- Publish to `/tutorials` page using existing TutorialPlayer components

### Dependencies

- Interactive Tutorial & Demo System (idea #25) — **COMPLETE**
- Property App marketing site — **COMPLETE**

---

## 35. MANAGED ownership type (operational-only properties)

**Priority:** Medium
**Status:** Shipped (28 April 2026)
**Complexity:** Small

### Summary

Added a fourth `OwnershipType` enum value, `MANAGED`, for properties
the user runs day-to-day on behalf of someone else (friend, family,
private client). Visible on every operational surface — Dashboard,
Properties listing, Compliance, Maintenance, Tasks — but **excluded
from every tax surface** (SA105 page, MTD threshold, MTD quarterly,
CT600). Income belongs to the actual owner's tax return, not the
user's; the app must not silently misattribute it.

### What was implemented

- `prisma/migrations/20260428000003_add_managed_ownership_type/` adds
  `MANAGED` to the `OwnershipType` enum (additive — no backfill).
- Add-property and edit-property forms accept MANAGED as a fourth
  radio option; "Linked Company" dropdown is hidden when MANAGED is
  selected (same gate as SINGLE/JOINT). `companyId` is forced null
  on save.
- Properties listing groups MANAGED properties under a separate
  "Managed Properties (operational only)" section with a distinct
  badge (purple/indigo).
- Dashboard renders a "Managed Properties" group with an explainer
  noting income flows to the owner, not the user.
- Tax surfaces (SA105, MTD, CT600) filter MANAGED out via the
  `filterPersonalRecords` / personal-properties helpers — same code
  path as COMPANY exclusion.
- Banner copy on `/taxes` and `/mtd` mentions both COMPANY and
  MANAGED counts when present (e.g. "N company + M managed
  properties excluded").

---

## 36. Phase A — Unified rental-income source of truth (DEFERRED)

**Priority:** High
**Status:** Deferred
**Complexity:** Medium (single-session)

### Summary

Today, three separate data sources feed rental-income figures into
tax surfaces — `Property.rentalIncome × 12` for the MTD threshold
gate, hardcoded `tax-data.ts` constants for the SA105 page, and live
`RentPayment` + `Expense` records for the MTD quarterly calculator.
They don't reconcile to the penny. The forensic-accountant analysis
(28 Apr 2026) confirmed the architecturally correct fix is a single
helper that drives every tax view — `getTaxYearRentalIncome(year,
kind, companyId?)` in `src/lib/tax/rental-income.ts`. It would read
`RentPayment` first (live truth, ownership-aware via Phase 1
`PropertyOwnership` filtering), falling back to `tax-data.ts` only
when no records exist (preserves historic ACTUAL figures, since the
hardcoded constants are the user's transcribed ground truth for
sealed years). The same helper feeds MTD threshold (last completed
year's PERSONAL sum), SA105 page totals, CT600 page totals, and MTD
quarterly — eliminating the current reconciliation gap and forming
the foundation for Open Banking Phase 2 auto-match (which will
populate `RentPayment` records in volume).

### Why deferred

Most properties currently have zero `RentPayment` records, so the
proposed helper would just delegate to `tax-data.ts` for almost
everything — building it now buys very little. The natural trigger
to resume is when Open Banking Phase 2 ships and bank-fed
RentPayments start populating in volume; at that point the live
records become more credible than the spreadsheet transcription and
the unification becomes load-bearing rather than cosmetic.

### Resume condition

When `RentPayment` records start populating in volume — most likely
when Open Banking Phase 2 (auto-match + cron) goes live and feeds
matched rent transactions automatically. Until then the three-way
data split is acknowledged in `CLAUDE.md`, `docs/architecture.md`
§21, and `docs/outstanding-work.md`.

### Effort

~1 session: new helper module + tests, refactor four call-sites
(MTD threshold, SA105 page, CT600 page, MTD quarterly) to read
through it, regression-prove that historic figures are unchanged
byte-for-byte.

---

## 37. `hasGasAppliances` flag (CP12 compliance gating)

**Priority:** Medium
**Status:** Shipped (28 April 2026)
**Complexity:** Small (4-agent parallel build)

### Summary

Added a `hasGasAppliances Boolean @default(true)` column to `Property`
so the app can correctly skip gas-safety (CP12) compliance for
all-electric homes (new builds, refurbs, electric-heating-only flats).
The single source of truth is the pure helper
`shouldRequireGasSafety(property)` in
`src/lib/property-compliance.ts` — `false` only when
`hasGasAppliances === false`; legacy `undefined` rows still require
gas safety, matching the migration default.

### What was implemented

- Migration `20260428000004_add_has_gas_appliances` adds the column.
- Add-property + edit-property forms expose a checkbox; defaults
  checked.
- Property tile renders an "Electric only" badge when (and only when)
  `hasGasAppliances === false`. Default `true` and legacy `undefined`
  show nothing.
- Property detail Overview renders a "Gas appliances: Electric only /
  Yes" row.
- Six gas-related call-sites all gate on `shouldRequireGasSafety`:
  portfolio compliance matrix (`/compliance`), property Compliance
  Checklist tab, HMO tab gas event rows / "Log Gas Safety" button,
  auto-task generator, dashboard alerts, and portfolio JSON / PDF
  export.
- Test coverage: `tests/gas-appliance-compliance.test.ts` (5 cases)
  pins the helper contract; `tests/property-validation.test.ts` adds
  schema cases.

---

## 38. Transfer-date-aware ownership history (back-datable transitions)

**Priority:** Medium
**Status:** Shipped (28 April 2026)
**Complexity:** Small (extends Phase 1 ownership history)

### Summary

Extends `syncCurrentOwnership` to accept an optional
`{ transferDate?: Date }` so structural ownership changes
(`ownershipType` flip OR `companyId` change involving COMPANY) close
the open `PropertyOwnership` period at the actual transfer date
rather than today. Trivial (share-only) edits still update the open
period in place. The use case that drove the work: Kirby Close was
transferred to a limited company on a date earlier than today;
recording the actual transfer date splits MTD ITSA / CT600
attribution correctly across the tax-year boundary.

### What was implemented

- `syncCurrentOwnership(propertyId, options?)` in
  `src/lib/db/properties.ts` — structural-change detection, guard
  against `transferDate < open.effectiveFrom`, in-place update for
  trivial changes.
- PUT/PATCH `/api/properties/:id` accepts an optional `transferDate`
  body field.
- Edit-property panel shows a "Transfer date" date input only when
  the user has changed `ownershipType` or `companyId` from the
  originally loaded values. Defaults to today; back-datable.
- Each property tile + property detail Overview render
  "{OwnershipType} since {effectiveFrom}" using
  `loadCurrentOwnershipFromMap` / `getCurrentOwnershipFrom`.
- Test coverage: `tests/property-ownership.test.ts` adds 3 cases
  (sequential closed + open period scenarios, same-day boundary).
  `tests/property-validation.test.ts` adds 14 cases on
  `createPropertySchema`.

---

**Market readiness rating:** 9/10 — strong feature set with billing, onboarding, usage limits, e-signature workflow, interactive tutorials, and MTD compliance complete. Ready for customers. Remaining gaps are growth features (bank feeds, mobile).

**Path to market:**

1. **Phase 1 (Critical):** Security hardening + auth fixes + credential rotation — **COMPLETE** (March 2026)
2. **Phase 2 (Critical):** Database migration (JSON → Neon PostgreSQL via Prisma 7) — **COMPLETE** (March 2026)
3. **Phase 3 (Critical):** GDPR compliance + encryption + audit logging — **COMPLETE** (March 2026). 6 steps: audit logging, privacy/terms pages, field-level encryption (AES-256-GCM), consent tracking, GDPR data export/erasure, data retention policy.
4. **Phase 4 (High):** CI/CD + automated testing — **COMPLETE** (March 2026). GitHub Actions pipeline (lint → type-check → test → build), Husky pre-commit hooks, Prettier formatter.
5. **Phase 5 (Medium):** SaaS productisation + billing — **COMPLETE** (March 2026). Single-tenant model, Stripe billing, self-service onboarding, usage-metered plan gating.
6. **Phase 6 (High):** MTD integration — **COMPLETE** (March 2026). 4 phases: data model & category mapping, quarterly submission UI, HMRC API integration (sandbox), dashboard alerts & monitoring.

**Build metrics:** See [`docs/build-cost-estimate.md`](build-cost-estimate.md) for full cost analysis — 31,985 lines of source code, 630 unit tests, 69 E2E specs, built in 13 days.

---

## 43. Plan-tier feature gating + multi-user (invites, Owner role, audit log)

**Priority:** High
**Status:** Planned 30 April 2026 — decisions locked, awaiting build green light
**Complexity:** Medium (~1.5 sessions wall-clock with 4-wave parallel execution)

### Background

The marketing pricing page advertises four tiers (FREE / STARTER £14.99
/ PRO £29.99 / BUSINESS £49.99) with `PLAN_LIMITS` enforcing numeric
caps for properties, users, signatures, receipt scans, and bank
connections. But the high-value features that justify paying — CT600,
Open Banking auto-match, RRA dispatch, Rent Review Insights, MTD
submissions, HMO module, Section 42 — are not gated and are available
to every tier including FREE. The pricing tiers don't yet
differentiate the actual feature surfaces at runtime.

Separately, the multi-user model is half-built. Roles
(admin/editor/readonly) and a `userLimit` cap exist, but new users are
created by an admin typing a cleartext password into a form on
`/admin`. There is no email-invite flow, no Owner role above Admin,
and no write-side audit trail showing which user took which action on
which entity.

### Decisions locked (30 April 2026)

| #   | Decision                                                                                                                                                                                        |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| I-1 | Tax-led tiering — FREE: 3 properties, view-only tax. STARTER: SA105 + MTD + signatures. PRO: + CT600 + Open Banking + Rent Review + Growth + RRA. BUSINESS: + HMO + Section 42 + multi-user >5. |
| I-2 | Feature matrix per tier in central `src/lib/plan-features.ts` registry; no per-account overrides in v1.                                                                                         |
| I-3 | Email invite + accept link via Resend; replaces current cleartext-password admin flow.                                                                                                          |
| I-4 | New Owner role above Admin; exactly one per Subscription; cannot be deleted; transferable.                                                                                                      |
| I-5 | Per-property scoping deferred to a later phase (captured as #44).                                                                                                                               |
| I-6 | Audit pipeline extends existing `src/lib/audit.ts` rather than parallel-build.                                                                                                                  |
| I-7 | `requireFeature(key)` 403s gated routes server-side; `<FeatureGate>` mirrors it client-side.                                                                                                    |
| I-8 | Paywall is a soft block (inline upgrade card), not a redirect.                                                                                                                                  |

### Build spec

Canonical detail in `docs/new-scope.md` §#I — covers schema (1 new
migration: `UserInvite` + `AuditEvent` + `owner` enum value), 5 lib
modules, 7+ API routes, 5 UI surfaces (admin, billing, audit page,
accept-invite page, paywall component), ~70 unit tests, 4 Playwright
E2E specs, regression-guard test pinning `requireFeature` calls, and
a 4-wave parallel execution plan.

### Rollout plan

`ENABLE_PLAN_FEATURE_GATING` env flag defaults `false` on first
deploy; flip with a single redeploy after smoke-test. 30-day grace
period for users about to lose features they were using
(`subscription.gracePeriodEndsAt` column). Email comms before flip.

### Resume condition

User green-light. Build is fully specced and parallelisable; no
external dependencies (Resend already wired, Stripe already wired,
Prisma migration is a small additive change).

### Cross-reference

`docs/new-scope.md` §#I (canonical), `docs/outstanding-work.md` row
#I, `docs/architecture.md` §31-32 (to be added on ship),
`docs/process-maps.md` Maps 30-32 (to be added on ship).

---

## 44. Per-property user scoping

**Priority:** Medium
**Status:** Deferred from #43 (30 April 2026)
**Complexity:** Large (~2-3 sessions — touches every list query in the
app)

### Background

Real value for property managers and joint-portfolio cases: user
Alice manages only Kirby Close + Homelea Flat 4; user Bob manages
only Runcorn. Today every authenticated user sees the entire
portfolio.

### Build sketch

- New `UserPropertyScope` table — composite key `(userId, propertyId)`.
  Empty scope means "all properties" (existing behaviour); non-empty
  means "only these".
- Helper `scopedPropertyIds(userId)` returns either `null` (= no
  filter) or `string[]` (= the subset).
- Every list query that returns properties / expenses / maintenance /
  documents / RentPayment / etc. wraps the existing `where` clause
  with `propertyId: { in: scopedIds }` when `scopedIds` is non-null.
- Admin UI on `/admin/users/[id]` — multi-select of properties with
  "All properties" as the default.
- Owner cannot be scoped (always sees everything).

### Resume condition

Real customer demand — a property-manager workflow where one user
genuinely shouldn't see other properties. Until then, role-based
gating + workspace boundary (#43) is sufficient.

### Risks

- Touches every list query — high regression surface. Needs a
  parallel test pass that asserts every page respects the scope.
- Reports / portfolio export / dashboard summaries need scope-aware
  aggregation.

---

## Market Readiness Comparison — 18 March 2026

### Rating Progression

| Date             | Rating   | Key Milestone                                                                           |
| ---------------- | -------- | --------------------------------------------------------------------------------------- |
| 6 Mar 2026       | **3/10** | Initial build — strong features but JSON file storage, no auth hardening, no encryption |
| 10 Mar 2026      | **5/10** | Security hardening + database migration to PostgreSQL                                   |
| 12 Mar 2026      | **6/10** | GDPR compliance + audit logging + field-level encryption                                |
| 14 Mar 2026      | **7/10** | CI/CD pipeline + SaaS billing + onboarding + E2E tests                                  |
| 18 Mar 2026 (AM) | **7/10** | E-signature workflow gaps identified                                                    |
| 18 Mar 2026 (PM) | **9/10** | E-signature complete, tutorials, MTD all 4 phases delivered                             |

### What Changed Today (18 March 2026)

**Rating moved from 7/10 → 9/10** (+2 points in one session)

#### Improvements Delivered Today

| Area                     | Before (AM)                         | After (PM)                                                          | Impact                                                                          |
| ------------------------ | ----------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **E-Signature**          | Send only, no return journey        | Full lifecycle: send → sign → webhook → store → notify → compliance | Tenant can now sign from portal, landlord gets notified, signed PDF auto-stored |
| **MTD**                  | Not started                         | Complete — 4 phases, 189 tests, HMRC API integration                | Legal compliance for April 2026 mandate                                         |
| **Tutorial System**      | None                                | Shared components + 3 PlumbCalc tutorials + demo recording pipeline | Product marketing and user onboarding                                           |
| **Test Coverage**        | 441 tests, 33 suites                | 630 tests, 46 suites                                                | +189 tests (+43% increase)                                                      |
| **Marketing Site**       | Missing MTD and e-signature details | Features, pricing, homepage all updated                             | Sales-ready with accurate feature list                                          |
| **Documentation**        | Partial                             | Architecture, process maps (18), build cost estimate                | Investor/partner ready                                                          |
| **Webhook Security**     | Unvalidated                         | DocuSeal secret validation                                          | Production-grade security                                                       |
| **Compliance Checklist** | Didn't reflect signed status        | Scans all tenancy docs for best signing status                      | Accurate compliance dashboard                                                   |

#### Feature Completeness Scorecard

| Category             | Score      | Detail                                              |
| -------------------- | ---------- | --------------------------------------------------- |
| Portfolio Management | ✅ 10/10   | Dashboard, properties, mortgages, yields, LTV       |
| Financial Tracking   | ✅ 10/10   | Income, expenses, P&L, receipt scanning             |
| Tax Compliance       | ✅ 10/10   | SA105 mapping, MTD quarterly + Final Declaration    |
| Document Management  | ✅ 10/10   | Upload, e-sign, compliance tracking, signed copies  |
| Tenant Portal        | ✅ 9/10    | Documents, maintenance, messages, payments, signing |
| Security & Privacy   | ✅ 10/10   | AES-256, GDPR, audit logging, role-based access     |
| Billing & Plans      | ✅ 9/10    | Stripe, 4 tiers, usage limits, upgrade prompts      |
| Testing              | ✅ 9/10    | 630 unit + 69 E2E + history tracking                |
| Marketing            | ✅ 8/10    | Features, pricing, tutorials (needs video content)  |
| DevOps               | ✅ 9/10    | CI/CD, Railway, Vercel, auto-deploy                 |
| **Overall**          | **9.4/10** |                                                     |

#### What's Left for 10/10

| Gap                         | Priority | Effort    | Notes                                              |
| --------------------------- | -------- | --------- | -------------------------------------------------- |
| HMRC production credentials | High     | 1 day     | Register on Developer Hub, complete checklist      |
| Tutorial video recordings   | Low      | 1 day     | Run demo:record pipeline, replace placeholders     |
| Bank feed integration       | Medium   | 1-2 weeks | Open Banking API for automated transaction import  |
| Mobile PWA optimisation     | Low      | 1 week    | Already responsive, needs offline + install prompt |
| Accountant read-only role   | Low      | 2 days    | Read-only login with export access for accountant  |

#### Competitive Position

| Feature               | PropertyApp  | Landlord Vision | Arthur Online | Hammock     |
| --------------------- | ------------ | --------------- | ------------- | ----------- |
| Portfolio dashboard   | ✅           | ✅              | ✅            | ✅          |
| MTD HMRC submission   | ✅           | ✅              | ❌            | ❌          |
| E-signatures          | ✅           | ❌              | ❌            | ❌          |
| AI receipt scanning   | ✅           | ❌              | ❌            | ❌          |
| Tenant portal         | ✅           | ❌              | ✅            | ✅          |
| Compliance tracking   | ✅           | ✅              | ✅            | ❌          |
| SA105 PDF export      | ✅           | ✅              | ❌            | ❌          |
| Interactive tutorials | ✅           | ❌              | ❌            | ❌          |
| Free tier             | ✅ (3 props) | ❌              | ❌            | ✅ (1 prop) |
| Starting price        | £14.99/mo    | £12/mo          | £25/mo        | £9/mo       |

**Unique differentiators:** AI receipt scanning + E-signatures + Interactive tutorials — no competitor offers all three.

---

## Next Session Plan

Priority tasks for the next session, designed for parallel agent execution:

### 1. Tutorial Video Recording & Publishing (3 parallel agents)

| Agent   | Task                                                                                                                  |
| ------- | --------------------------------------------------------------------------------------------------------------------- |
| Agent 1 | Run `npm run demo:record` against seeded E2E database — record dashboard tour, property detail, tenant portal demos   |
| Agent 2 | Run `npm run demo:convert` — convert WebM to MP4, drop into Property Marketing Site `/public/tutorials/`              |
| Agent 3 | Create tutorial data entries + `/tutorials` pages on Property Marketing Site (reuse shared TutorialPlayer components) |

### 2. HMRC Sandbox Testing (2 parallel agents)

| Agent   | Task                                                                                                             |
| ------- | ---------------------------------------------------------------------------------------------------------------- |
| Agent 1 | Set sandbox env vars, connect to HMRC test Gateway with test NINO (AA000000A), verify OAuth flow end-to-end      |
| Agent 2 | Submit test quarterly update to sandbox API, verify response, check fraud headers accepted, test error scenarios |

### 3. Remaining 10/10 Gaps (parallel where possible)

| Agent   | Task                                                               | Effort        |
| ------- | ------------------------------------------------------------------ | ------------- |
| Agent 1 | Accountant read-only role — new role type with export-only access  | 2 days        |
| Agent 2 | Mobile PWA — add manifest.json, service worker, install prompt     | 1 day         |
| Agent 3 | Bank feed research — evaluate Open Banking APIs (TrueLayer, Plaid) | Research only |

### Parallel Agent Strategy

The 18 March session proved that 3 source agents + 1 test agent running simultaneously is the optimal pattern:

- **By layer**: separate agents for OAuth, API client, UI (no file conflicts)
- **By feature**: separate agents for settings, dashboard, modal (independent components)
- **Code then tests**: test agent launches as soon as source agents complete
- **Docs in background**: documentation agent runs while code is verified

This approach delivered ~10,800 lines of MTD code with 189 tests in a single session. Apply the same pattern to all future multi-file work.

---

## 50. DocuSeal-template field-prefill via `values` payload

**Priority:** Medium
**Status:** Idea (deferred — flagged 30 April 2026)

### Context

The joint AST template (DocuSeal template id `524100`) holds the
literal contract text including landlord block and party
addresses. When we send a submission today we only pass the
submitter list — DocuSeal renders its template as-is. That works
because our usual flow is:

1. User opens `/templates`, fills the wizard (now property-aware
   — see #49), generates a populated DOCX.
2. User uploads the populated DOCX as a `PropertyDocument`.
3. User clicks "Send for Signing"; the route picks
   `DOCUSEAL_JOINT_TENANCY_TEMPLATE_ID` if present and ignores
   the uploaded DOCX content (the DocuSeal template is the
   master copy).

There's a quiet contradiction in step 3: the wizard-generated
DOCX is effectively discarded once DocuSeal owns the envelope.
The user's effort on the wizard pays off only when the DocuSeal
template is unset (then we upload the DOCX as a one-off
template each time — the legacy fallback path).

### What "Path B" would do

Pass DocuSeal a `values: { 'Landlord Name': '...', 'Property
Address': '...', ... }` payload alongside the submitter list.
DocuSeal's template would carry text fields (placed via the
DocuSeal admin UI) bound to those names; on submission creation,
DocuSeal renders them inline before sending the signing emails.

This makes the template the single source of truth and removes
the wizard-DOCX-upload dance for the joint flow. The signing
route becomes:

```ts
await createMultiSubmission({
  templateId,
  submitters: [...tenants, landlord],
  values: {
    'Landlord Name': resolved.name,
    'Property Address': resolved.address,
    'Tenant 1 Name': contacts[0].name,
    // ... etc
  },
  externalId: documentId,
})
```

### Why deferred

- Couples our code to specific DocuSeal field names. If a user
  renames a field in DocuSeal's UI, the prefill silently breaks
  with no compile-time signal.
- Requires reading the live template's field schema first
  (`GET /templates/{id}`) and either pinning the field-name
  list in env / DB or building a mapping editor.
- Today's wizard-DOCX path works for the common case (single-
  signer + joint where DOCUSEAL_JOINT_TENANCY_TEMPLATE_ID is
  unset). The cost of double-entry is small for the active
  user count.
- Touches the `/api/signing/send` route which is already
  guarded by the joint signing tests + DocuSeal sandbox tests
  — careful expansion required.

### Resume condition

When the user has added enough custom DocuSeal templates that
the wizard-DOCX-upload friction outweighs the
field-name-coupling risk. Likely concurrent with adding
multi-document signing (#22) since both flows share the same
prefill machinery.

### Helpers ready to consume

- `resolveLandlordForProperty(...)` — already returns
  `{ name, email, address }` shape suitable for the values map.
- `buildPrefillMap(...)` — adapts trivially to emit a DocuSeal
  field-name → value map alongside the existing placeholder
  map, given a static field-name dictionary.

---

## 109. Admin tenant impersonation (shipped 11 May 2026)

**Priority:** High
**Status:** ✓ Shipped 11 May 2026 (+ 12 May 2026 +1
mustChangePassword bypass hotfix)
**Complexity:** Small (~half session)

### Summary

Admin-only "Impersonate as tenant" capability surfaced on the
`/tenants` row next to Reset Password. Two independent cookies
during impersonation: `property_session` (admin's own session,
untouched) + `tenant_session` (fresh tenant session). A third
small marker cookie carries a base64 JSON payload identifying
which admin started the session and which tenant is being
impersonated; the `ImpersonationBanner` reads it via a public
`GET /api/admin/impersonate/status` endpoint and pins a red
banner to the top of every `/portal/*` page until the admin
clicks "Stop impersonation".

### Pattern for new admin-override surfaces

If you add a new admin-only capability that mutates tenant-side
state, prefer this impersonation shape over a dedicated admin
endpoint that bypasses the tenant flow. Reusing the tenant
session means:

1. The exact same state-machine writers + side effects fire (no
   parallel paths to drift).
2. The audit trail captures the tenant-typed action AND the
   admin bracket — full traceability.
3. No new role surface to test / maintain.

Exception: one-shot admin actions with no tenant-side equivalent
(e.g. `/api/tenants/reset-password` returning a plaintext temp
password — a tenant would never see that) get a dedicated admin
endpoint.

### Cross-reference

- `src/lib/admin-impersonation.ts` — pure marker encode/decode helper
- `src/components/admin/impersonation-banner.tsx` — red banner client component
- `CLAUDE.md` — "Admin tenant impersonation" section

---

## 110. Capital Investments — KV-backed CRUD (shipped 11 May 2026)

**Priority:** Medium
**Status:** ✓ Shipped 11 May 2026
**Complexity:** Small

### Summary

`/finances` Capital Invested table was a hardcoded array in
`src/lib/data.ts` — read-only and impossible to update through
the UI. Migrated to a KV store at `capital-investments` with
ACTIVE / REPAID / WRITTEN_OFF status. Headline shows ACTIVE
sum only; REPAID + WRITTEN_OFF surface as footnotes so historical
context is preserved without inflating the live capital number.

### Pattern for similar "static-seed → user-managed entity" migrations

Mirror this shape — pure helpers split into `*-shared.ts`, KV
store + validators in `*-store.ts`, REST CRUD routes (GET / POST
/ PUT / DELETE), client component with inline form, drop the
now-stale entry from the regression guard allow-list. Validators
are the contract — both routes and tests consume the same
`validateXxxInput` helper so a forgotten field on the route side
fails the unit tests.

---

## 117. CT600 records-first per-property running costs (shipped 12 May 2026 +6)

**Priority:** High
**Status:** ✓ Shipped 12 May 2026 (+6 in the day's PR sequence)
**Complexity:** Medium (mirror of Phase A on the expense side)

### Summary

Sibling of the Phase A unified rental-income helper, on the
expense side. `buildCompanyAggregate` historically added
`Property.{serviceChargeMonthly, groundRentMonthly,
managementFeeMonthly, mortgage.monthlyPayment} × periodMonths`
unconditionally on top of any `Expense` rows tagged with the
matching `taxCategory` — which double-counted whenever records
existed AND silently lost any mid-year change in the monthly
value.

User repro (Kirby Close, 12 May 2026): service charge needs to
split mid-year when the management company is replaced (£200/mo
Apr–Sep + £250/mo Oct–Mar), but the single-rate
`Property.serviceChargeMonthly × 12` model can't express that.

### Contract

`RECORDS_FIRST_FALLBACK_CATEGORIES = { 'mortgageInterest',
'premisesRunningCosts', 'costOfServices' }` — the three categories
that have a `Property.*` monthly fallback.

`resolveRecordsOrFallback({ records, fallback })` — picks records
when `records > 0`, else fallback. Negative records treated as
"no records present" (defensive).

`buildPerPropertyRecordsMap(records, categories)` — produces a
`propertyId → category → sum` map covering only the records-first
categories. Skips records with null / unknown / out-of-set
taxCategory + negative / non-finite amounts.

### Pattern for new "Property.\* monthly with mid-year split needed" expense surfaces

Mirror this shape — add the category to
`RECORDS_FIRST_FALLBACK_CATEGORIES`, wire a per-property loop in
the aggregator that picks records-or-fallback, add a category
option to the running-costs tab. Don't introduce a new override
store; records via the `Expense` Prisma table is the canonical
store for property-level costs and survives the move to records-
driven tax automation.

---

## 118. CT600 drift detection (shipped 12 May 2026 +7)

**Priority:** High
**Status:** ✓ Shipped 12 May 2026 (+7 in the day's PR sequence)
**Complexity:** Small (sits on top of #117)

### Summary

`Property.*` monthly columns and Expense records are two
different dimensions: `Property.serviceChargeMonthly` is the
CURRENT RATE (forward estimate — drives the property tile,
Monthly Financial Summary, MTD threshold); `Expense` records
tagged `premisesRunningCosts` / `costOfServices` are HISTORICAL
ACTUALS (records-first source for CT600). They can legitimately
diverge during a mid-year rate change — but if they stay drifted
after the new rate kicks in, the forward-estimate displays are
stale.

`detectRunningCostsDrift({ property, records, category })`
compares the LATEST Expense record's amount against the
`Property.*`-derived monthly rate (service charge + ground rent
for premisesRunningCosts; management fee for costOfServices).
Returns `{ hasDrift, propertyMonthly, latestRecordAmount,
latestRecordDate, diff }`. Float-noise safe — comparison runs on
integer pence with `DRIFT_THRESHOLD_GBP = 0.01`.

### Why visible drift banner instead of auto-sync

`premisesRunningCosts` is the SUM of `Property.serviceChargeMonthly`

- `Property.groundRentMonthly` — only the user knows how to split
  the new rate between those two columns. Auto-sync would clobber
  the split. Visible drift + manual update keeps the user in
  control. The `managementFeeMonthly` category maps 1:1 onto a
  single record field so auto-sync WOULD be safe there — kept
  manual for consistency.

### Pattern for any new "denormalised column + records can drift" surface

Ship the records-first aggregator + a drift detector + a banner
that points at the canonical edit surface for the denormalised
column. Auto-sync is only safe when the denormalised column maps
1:1 onto a single record field. When it's a sum or derived
combination, the user has to drive the split.

---

## 119. Per-surface portfolio scope filters (shipped 12 May 2026 +8)

**Priority:** High
**Status:** ✓ Shipped 12 May 2026 (+8 in the day's PR sequence)
**Complexity:** Small

### Summary

Two surfaces filter the property list differently, and the filters
need to encode different intents. Pre-fix both surfaces required
`rentalIncome > 0` — silently hiding any freshly-bought property
that hadn't had its monthly rent entered yet.

User repro 12 May 2026: added a Limited Company property,
ownership set to COMPANY + linked company, but `rentalIncome` was
still 0 → property vanished from the dashboard Compliance Alerts
AND the `/finances` P&L by Property.

### Correct scope per surface

- **Compliance alerts (`/dashboard`)** — `status === 'ACTIVE'`,
  rentalIncome IRRELEVANT. Statutory certificates (gas safety,
  EICR, EPC) are a PRE-tenancy duty — a property bought in
  February to let in April still needs the CP12 in place. Filter:
  `isComplianceScopedProperty(p)`.
- **Finances P&L (`/finances`)** — `rentalIncome > 0` IS correct
  here; a row with £0 rent is noise in a P&L table. But hiding
  silently is wrong. The page now surfaces a "**N active
  properties hidden** because no monthly rent has been entered
  yet: {names}. [Open Properties]" footnote so the user sees they
  exist. Driven by `listActivePropertiesHiddenFromFinances`.

### Pattern for new portfolio-scoped surfaces

Consume a helper from `property-scope-helpers.ts` rather than
inlining a filter on each page. The scope of compliance ≠ the
scope of finances ≠ the scope of tax returns ≠ the scope of
operational surfaces — each has a defined intent. Document the
intent in the helper's JSDoc and reference it from the page.
Pre-12-May surfaces inlined filters that drifted into each
other.

---

## 114. Property delete + KV cascade cleanup (shipped 12 May 2026)

**Priority:** High
**Status:** ✓ Shipped 12 May 2026
**Complexity:** Medium

### Summary

Two distinct "remove from active surfaces" paths for a property,
with very different data-integrity contracts:

- **Delete (hard)** — for properties that never completed (a
  purchase that fell through). Cascade cleans EVERYTHING (Prisma
  cascade + explicit KV cleanup for HMO bundles, rent-increase
  proposals, AST reconciliation events, rent-review history, RRA
  statement-of-terms, RRA dispatch). Lives in a "Danger zone"
  card at the bottom of the Edit Property tab with two
  confirmation prompts.
- **Archive (soft)** — for sold properties. Set
  `Property.status = 'ARCHIVED'` via the Status field. Disappears
  from active operational surfaces but stays visible on TAX
  surfaces for any tax year that overlaps with the ownership
  period (PropertyOwnership history is what those use, not the
  current `Property.status` column).

### Why KV cleanup matters

Without it, a property re-using a deleted slug (e.g. delete
`ashbourne`, then create a fresh property with the same id) would
inherit the orphan `rent-increase-proposal:ashbourne` bundle from
the prior life. The new property would attach itself to an
in-flight Form 4A workflow it never opted into. Real risk
surfaced during the 12 May 2026 Runcorn go-live tidy-up.

### Pattern for new "deletion has consequences"

When an entity is deleted that's referenced by another canonical
writer's state (bundles, periods, etc.), put the cascade in the
deletion route, gated on doc type, best-effort. Don't reach
across canonical writers from outside.

---

## 100. Bank-feed Phase 2 Wave 1 — locked-year guard (shipped 7 May 2026 +2)

**Priority:** High
**Status:** ✓ Shipped 7 May 2026 (+2)
**Complexity:** Small (foundation for remaining Phase 2 waves)

### Summary

Foundation tightening for the bank-feed reconciliation pipeline.
Phase 1 (auto-match runner, manual match, daily cron) is feature-
complete and shipped — Wave 1 closes three audit-trail gaps
before the rest of Phase 2 (maintenance auto-link, drift surface,
per-property dashboard, sealed snapshot) builds on top.

### Three Wave 1 changes

1. **Locked-year retro-match guard.** The year-lock feature
   stored locked years in `localStorage` only — server surfaces
   (the daily cron, the manual-match route) had no awareness of
   which years the user had locked + emailed to their accountant.
   The cron could silently retro-match into a closed period.
   Fixed by mirroring the locked-year list at a `KeyValue` row +
   server-side `evaluateLockedYearGuard` predicate consumed by
   both the cron and the manual-match route. Cron returns 200 not
   500 on refusal so Vercel doesn't retry-storm.
2. **Per-property filter on transactions endpoint.** GET
   `/api/banking/transactions?propertyId=...` — wired now so the
   future per-property reconciliation dashboard (Wave 5) consumes
   a stable contract.
3. **Unmatch endpoint with cascade-delete + audit.** New route
   `POST /api/banking/transactions/[id]/unmatch` cascade-deletes
   the auto-created `RentPayment` / `Expense` rows that the
   previous match produced. Locked-year guard applies here too.

### Pattern for new "match-state changing" surfaces

Every code path that creates / deletes / modifies the
BankTransaction match state MUST go through the locked-year
guard before writing. Otherwise the audit-trail integrity
assumption ("a locked year never changes") falls down.

### Remaining Phase 2 waves (queued)

- **Wave 2 (Maintenance auto-link)** — DEBIT transaction matched
  to an Expense that was auto-created from a Resolved
  maintenance request should auto-attach the receipt to the
  maintenance row. Closes the loop: tenant reports → contractor
  invoice → bank match → maintenance receipt → SA105 tax row.
- **Wave 3 (Drift surface)** — surface drift between a matched
  BankTransaction and the row it created (rent edit after match,
  expense edit after match).
- **Wave 4 (Per-property reconciliation dashboard)** — for each
  property, show matched vs unmatched transactions in the period
  with a one-click reconciliation view.
- **Wave 5 (Sealed snapshot for year-end)** — at year-lock,
  snapshot the matched-transaction state so a future "show me
  2025-26 again" view can render the same numbers even if rows
  are subsequently edited.

These remain in the queue but are not blocking final testing —
Wave 1 is sufficient for go-live since the user can manually
review each property's transactions in the existing list view.

---

## 121. Form 4A — full end-to-end workflow (shipped May 2026 sprint)

**Priority:** Critical
**Status:** ✓ Shipped (Waves 1+2+3 on 1 May 2026 + 8 follow-up
hotfixes through 12 May 2026)
**Complexity:** Large (state machine + DocuSeal integration +
auto-renewal + joint-tenancy fan-out + portal-side accept)

### Summary

Section 13(2) Housing Act 1988 statutory rent-increase notice,
end-to-end:

1. **Propose** — landlord opens the "Propose Rent Increase" panel
   on the property Tenancy tab. Modal pre-fills original rent +
   original start date from `Tenancy`; landlord enters new rent +
   new effective date. POST `/api/properties/[id]/rent-increase`
   creates a DRAFT proposal in the KV bundle.
2. **Generate Form 4A docx** — pure helper
   `pickForm4ATemplate(contactCount)` chooses Single or Joint;
   `buildForm4APrefillMap(ctx)` extends `buildPrefillMap` with
   `[Enter New Rent Amount]` + `[Enter New Tenancy Start Date]`;
   the substitution renderer bakes values into the docx.
3. **DocuSeal landlord pre-sign** — fresh-upload-per-send (env
   var template ids ignored for Form 4A); the locally-rendered
   docx IS what the landlord sees; `injectDocuSealFieldTags`
   appends a Signatures section with Landlord signature + date +
   acknowledgement checkbox. Joint variant routes through the
   joint template; single through the single template (strict
   per-variant routing).
4. **Landlord signs** — DocuSeal webhook (or sync route safety
   net) fires `handleRentIncreaseSignedTransition`. Case A:
   downloads the signed PDF, attaches as RENT_INCREASE_NOTICE,
   flips DRAFT → SENT, emails the tenant the signed Form 4A +
   portal link (joint-tenancy fan-out — every named tenant
   receives it individually).
5. **Tenant Accepts / Declines / Refers to Tribunal in portal** —
   `/portal/documents` panel with three actions backed by
   `validatePortalAction`. On Accept → bundle flips to AGREED +
   `generateRenewalDraftFromProposal` runs (picks Single/Joint
   AST template, prefills new rent + new effective date, renders
   DOCX, uploads to Vercel Blob, creates DRAFT `SigningRequest`).
6. **Landlord sends renewal AST** — the DRAFT renewal envelope is
   detected via `isSigningRequestDraft` structural predicate; UI
   shows "Draft — needs to be sent". Send goes through the
   standard send route.
7. **All parties sign renewal AST** — webhook (or sync route)
   fires Case B: bundle flips AGREED → COMPLETED;
   `applyRenewedRent` runs in deliberate order: `Tenancy.rentAmount
= newRent` → `Property.rentalIncome = newRent` →
   `syncCurrentTenancyPeriod` opens a new period with the new
   rent + new effective date. **SA105 / CT600 / MTD / property
   tile / portal panel ALL re-render automatically.**

### What makes this a unique wedge

- **No competitor has the end-to-end workflow.** They sell
  template downloads or rely on the user emailing PDFs manually.
- **Joint-tenancy email fan-out is correct** — each named tenant
  individually receives the statutory notice as required by
  S.13(2). Pre-fix the property-app only emailed `contacts[0]`,
  which made the notice legally defective on joint tenancies.
- **Auto-renewal AST drafted on Accept** means the landlord
  doesn't have to manually re-draft a fresh tenancy agreement
  with the new rent — the system does it from the accepted Form
  4A.
- **Formalise recovery route** handles orphan-Form-4A flows
  where the docx was sent via the Documents tab without first
  creating a bundle proposal.
- **Regenerate renewal AST route** lets the landlord regenerate
  the auto-drafted docx after a templates / prefill fix lands,
  before the renewal envelope is dispatched.
- **Document delete cascade-cancel** keeps the bundle in sync —
  deleting all Form 4A docx + renewal docs cascade-cancels the
  bundle proposal so the user never sees a stale "Acknowledged
  by tenant" badge.

### Cross-reference

Full end-to-end map (read before changing anything):
`docs/form-4a-end-to-end.md`. Programmatic gate:
`npm run docuseal:verify-form-4a`.

CLAUDE.md sections covering specific facets:
"Form 4A Rent Increase Proposal — full workflow",
"DocuSeal sync safety net", "Auto-renewal draft envelope
detection", "Regenerate renewal AST route", "Joint-tenancy Form
4A email fan-out", "Document-type-aware signing email copy",
"Form 4A page-8 inline tag placement", "DocuSeal field-name
synonym broadcast", "Source-doc-type Form 4A detection",
"Formalise recovery", "Document delete cascade-cancel",
"Rent-renewal canonical writer", "Inline 'Original start date'
capture", "Per-doc badge scoping".

---

## 122. Final-testing-stage status (12 May 2026)

**Status:** Codebase is in final testing stage. No outstanding
build work in the queue. The May 2026 PR sequence (#100–#132)
closed every user-reported gap surfaced during go-live testing
across Kirby Close, Ashbourne, Runcorn, Lampits. Master at
commit `e31d6ab` (PR #132 merge) + the 11 May docs refresh.

**What "final testing stage" means:**

- The user is running real properties through real workflows on
  Vercel and clicking the surfaces a real landlord would click.
- Every reported gap so far has been closed within the same
  session via a small focused PR (each one a pure helper +
  sibling test + UI wiring).
- The remaining queue is **not blocking go-live** — Bank-feed
  Phase 2 Waves 2-5, native mobile app, tenant screening,
  accountant share portal are all roadmap-grade features, not
  defects.

**What's next if more gaps surface during testing:**

1. Same pattern — diagnose via operating principle #2 (which
   read surface filters differently from the canonical writer?),
   pure helper, sibling test, UI wiring, PR.
2. Each PR is single-purpose so the user can A/B the fix
   independently.
3. Doc refresh follows on the same branch or in a sibling
   docs-only PR.

**What's next when testing concludes:**

1. Tidy up the test-data properties (Ashbourne, Runcorn test
   transactions, Kirby pre-transfer testing state) via the
   property delete UI (#114).
2. Lock all completed tax years via the SA105 + CT600
   lock-for-review buttons.
3. Sync the locked-year list to the server (`/api/tax/locked-years`)
   so the bank-feed retro-match guard activates.
4. Bring the marketing site up to date using the talking points
   in `docs/competitor-comparison.md`.
5. Move on to the queued roadmap items (Bank-feed Phase 2 Waves
   2-5 first, since the Wave 1 foundation is shipped and the
   user knows the auto-match cron well by then).
