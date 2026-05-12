# Outstanding Work — One-Screen Index

> Index of planned work as of session end 29 April 2026 (late afternoon
> — Rent Review Insights shipped, on top of the morning's #F and the
> early-afternoon RRA Wave 1). Each item links to its detailed build
> spec in `docs/new-scope.md` (sections #A–#H). Items are ordered by
> recommended priority.

## Recently shipped

> **12 May 2026 — wave summary:** the user spent the day driving
> Kirby Close + Ashbourne + Runcorn through real go-live testing
> on Vercel. Eight follow-up PRs landed in sequence, each closing
> a specific user-reported gap. Branch `master` at commit
> `e31d6ab` includes all of them.

> **12 May 2026 (+8): Portfolio scope filters** (PR #132,
> `claude/portfolio-scope-filters`). Compliance alerts on the
> dashboard previously filtered on `rentalIncome > 0` AND status,
> silently hiding a freshly-bought Company property whose rent
> hadn't been entered. Compliance is a PRE-tenancy duty —
> statutory certificates (CP12 / EICR / EPC) must be in place
> before letting. New pure helpers in
> `src/lib/property-scope-helpers.ts`:
> `isComplianceScopedProperty` (status === ACTIVE only),
> `isFinancesScopedProperty` (rentalIncome > 0),
> `countActivePropertiesHiddenFromFinances` +
> `listActivePropertiesHiddenFromFinances`. /finances now shows
> an amber footnote listing the hidden properties with a link;
> dashboard Total Portfolio Value tile adds "· N hidden (no rent
> yet)" in amber. CLAUDE.md "Portfolio scope" section documents
> the per-surface intent.

> **12 May 2026 (+7): CT600 drift detection** (PR #131,
> `claude/ct600-drift-detection`). Property.\* monthly columns and
> Expense records are two dimensions; can legitimately drift
> during a mid-year rate change but stale-after-the-fact is
> invisible without a cue. New pure helper
> `src/lib/tax/property-running-costs-drift.ts` ::
> `detectRunningCostsDrift` — float-noise-safe via integer-pence
> comparison, threshold 1p. The Property Running Costs tab renders
> an amber drift banner per property × category with a one-click
> deep-link to the property Edit panel. Property page Monthly
> Financial Summary card now carries an explicit caption
> ("Current rate — forward estimate"). 14 cases.

> **12 May 2026 (+6): CT600 per-property running costs —
> records-first + new UI tab** (PR #130,
> `claude/ct600-records-first`). Sibling of Phase A on the expense
> side. `buildCompanyAggregate` historically ADDED `Property.* ×
periodMonths` on top of any Expense records for the matching
> taxCategory, double-counting. New pure helper
> `src/lib/tax/company-property-records-first.ts` ::
> `RECORDS_FIRST_FALLBACK_CATEGORIES = { mortgageInterest,
premisesRunningCosts, costOfServices }` with
> `resolveRecordsOrFallback` + `buildPerPropertyRecordsMap`. New
> "Property running costs" tab on
> `/taxes/company/[id]/expenses` with inline Add / Edit / Delete
> backed by `/api/expenses` (no new backend). Mid-year split
> captured by entering two records. 13 cases.

> **12 May 2026 (+5): Tax-data alignment hotfixes** (PR #129,
> `claude/tax-alignment-hotfixes`). Two off-by-one bugs found
> during Kirby go-live: SA105 visibility filter used
> `|| p.months.length > 0` to bypass company-exclusion (a user-
> edited projection for a fully-company year mis-rendered on
> personal SA105); CT600 `taxYearToAsOfDate` returned the END of
> the tax year, landing inside the NEXT AP for 31-Mar-ARD
> companies. Fixes: SA105 filter consumes
> `bannerEligibleCompanyNames` (per-year zero-personal-months
> list); `taxYearToAsOfDate` returns `start` (6 Apr of start
> year) for completed + future-projected years.

> **12 May 2026 (+4): Form 4A modal — inline Original start date**
> (PR #128, `claude/form4a-original-start-date-inline`). Kirby
> Close tenancy had no `moveInDate` (legacy migration), so the
> Propose-rent-increase modal showed "Original start date: N/A"
> and Create draft failed with "Missing or invalid fields". New
> pure helper `src/lib/rent-increase/original-start-date.ts` ::
> `validateOriginalStartDateInput` (rejects empty / non-ISO /
> calendar-impossible / future) + `needsOriginalStartDateInput`
> predicate. Modal now surfaces an editable date input when the
> tenancy lacks `moveInDate`; the POST route validates + persists
> back to `Tenancy.moveInDate` so subsequent proposals skip the
> question. 12 cases.

> **12 May 2026 (+3): Property delete + KV cascade cleanup** (PR
> #127, `claude/property-delete-detail-page`). User asked for a
> Delete button on the property detail page (existing one on
> `/properties` hover-trash was easy to miss). Plus the DELETE
> route left several KV bundles orphaned after the Prisma cascade
> (`rent-increase-proposal`, `ast-reconciliation`,
> `rent-review-history`, `rra-statement`, `rra-dispatch`) — a
> property reusing a deleted slug would inherit them. New pure
> helper `src/lib/property-cleanup.ts` ::
> `planPropertyKvCleanup` + `cascadeCleanPropertyKvBundles`. New
> "Danger zone" card on Edit Property tab steers users toward
> Archive for sold properties. CLAUDE.md "Property delete vs
> archive — two lifecycles" section documents the distinction.
> 10 cases.

> **12 May 2026 (+2): Form 4A doc-badge scoping** (PR #126,
> `claude/form4a-doc-badge-scoping`). Runcorn repro: historic
> Form 4A docs from a COMPLETED proposal still showed "Rental
> proposal generated" + "Cancel proposal ✕" badges as if they
> were the active workflow — clicking Cancel on a historic-doc
> row would silently cancel `bundle.current` (the new Form 4A
> #2). New pure helper `isDocLinkedToCurrentProposal(input,
bundle)` in `src/lib/rent-increase/property-status.ts`.
> `/api/signing/status` now exposes the SigningRequest `id`.
> Property-tabs DocumentsTab gates badges on per-doc match;
> historic Form 4A docs render a quieter "Past proposal" badge.
> 8 cases.

> **12 May 2026 (+1): mustChangePassword bypass during admin
> impersonation** (PR #125,
> `claude/impersonation-mustchangepw-bypass`). Discovered during
> first Ashbourne impersonation test — admin trapped on
> `/portal/change-password` because the Ashbourne tenant had
> `mustChangePassword=true` and the admin didn't know the temp
> password. `/api/portal/auth/me` now surfaces `isImpersonated`
> (true when marker cookie names the current tenant);
> `TenantAuthProvider` skips the force-redirect when impersonated;
> change-password page auto-redirects off if landed on directly.
> Defence-in-depth: bypass requires marker's tenantUserId to match
> the current tenant. 5 cases.

> **12 May 2026: Pre-go-live cleanup wave** (PR #124,
> `claude/add-app-login-email-link-Cqz89`). Six features +
> docs refresh, all listed above on 11 May (when work began on
> the branch) — the merge landed 12 May. Portal-login button in
> tenant emails (Form 4A + RRA), live-DB sweep for /finances /
> /mortgages / /market / finances export, Capital Investments
> KV CRUD, Maintenance "All" tab sort, admin tenant impersonation,
> Impersonate toggle on `/tenant-portal-preview`. Combined +99
> test cases.

> **11 May 2026:** **Admin tenant impersonation** (branch
> `claude/add-app-login-email-link-Cqz89`, commit `2acce75`). Admin /
> owner master override surfaced as an "Impersonate" button on every
> portal-user row on `/tenants`. Click → confirm → admin lands on
> `/portal` as the chosen tenant via a fresh tenant session, while
> the admin's own `property_session` cookie stays intact (two
> independent cookies). Red `ImpersonationBanner` pins to the top of
> every `/portal/*` page until the admin clicks "Stop impersonation".
> Audit trail: `START_TENANT_IMPERSONATION` + `STOP_TENANT_IMPERSONATION`
> admin-typed entries bracket the window so impersonated tenant
> actions stay distinguishable from real ones. New pure helper
> `src/lib/admin-impersonation.ts` (marker encode/decode,
> schema-versioned, pinned by 9 tests). Routes:
> `POST /api/admin/impersonate/{start,stop}` + `GET /status`.
> Solves the Ashbourne Form 4A testing case (does Accept generate
> the renewal AST draft?) without juggling logins.

> **11 May 2026:** **Maintenance "All" tab sort** (branch
> `claude/add-app-login-email-link-Cqz89`, commit `c399924`). Pure
> helper `sortMaintenanceAllListing` orders the All tab on
> `/maintenance` by status priority (OPEN → IN_PROGRESS → RESOLVED →
> CLOSED), then by `createdAt` desc within each bucket so today's
> open work pins to the top. Single-status filter tabs keep their
> existing layout. 8 cases pin the contract.

> **11 May 2026:** **Capital Investments KV-backed CRUD** (branch
> `claude/add-app-login-email-link-Cqz89`, commit `9da1a50`). The
> Capital Invested table on `/finances` migrated from a hardcoded
> 30-item array in `@/lib/data.ts` to a KV-backed store
> (`capital-investments-store.ts`) mirroring companies / landlords.
> Inline Add / Edit / Delete on the Capital Invested card with status
> badges (ACTIVE / REPAID / WRITTEN_OFF). Existing 6 entries
> preserved via seed-on-first-read. Extended shape with optional
> `date`, `notes`, `status`. Routes: `GET/POST /api/capital-investments`
>
> - `PUT/DELETE /api/capital-investments/[id]`. Pure helpers split
>   into `*-shared.ts` (client-safe) and `*-store.ts` (server-only)
>   so the card can import the aggregator without dragging Prisma into
>   the browser bundle. 21 cases.

> **11 May 2026:** **Live-DB sweep for `/finances`, `/mortgages`,
> `/market`, finances export** (branch
> `claude/add-app-login-email-link-Cqz89`, commit `17d38a9`). User-
> reported: "added mortgage details to Runcorn — finance/mortgage
> sections didn't update" + "can't see Ashbourne in financial
> overview". Root cause: four render surfaces still imported
> `properties` from `@/lib/data` (a 30-property seed baked into the
> codebase). Migrated all four to `readProperties()` from
> `@/lib/db/properties` with `force-dynamic`. Regression-guard test
> `no-static-property-seed-in-render-surfaces.test.ts` walks every
> `.ts/.tsx` under `src/app/` and refuses re-introduction. Operating
> principle #2 enforced at the contract layer.

> **11 May 2026:** **Portal-login button in tenant emails** (branch
> `claude/add-app-login-email-link-Cqz89`, commit `fd927fe`). Form
> 4A landlord-signed → tenant email said "log into your tenant
> portal" with no clickable link; tenants had to dig through invite
> emails for the URL. New pure helper
> `buildPortalLoginUrl({ returnTo })` is the single source of truth
> for portal URLs in tenant emails. Wired into Form 4A signed email +
> RRA Info Sheet + RRA Statement of Terms. Login page now honours
> `?returnTo=/portal/documents` so the tenant lands directly on the
> Documents page (where the Accept / Decline / Refer-Tribunal panel
> renders) after sign-in. `sanitiseReturnTo` open-redirect guard
> (rejects scheme-relative, protocol, CRLF, non-`/portal/` paths).
> 58 cases.

> **8 May 2026 (+1):** **CT600 lock-for-review** (PR #111).
> Mirrors SA105's lock pattern on `/taxes/company`. Lock icon on
> tabs, emerald Lock / amber Unlock buttons next to the tab strip,
> locked-state banner with `mailto:` "Email summary to accountant"
> link. Shared state by design: same `mar-property-tax-locked-years`
> localStorage key + same `/api/tax/locked-years` server mirror
> as SA105 — locking on either page locks both. Cross-tab `storage`
> events keep the two surfaces in sync without reloads. New pure
> helper `src/lib/tax/ct600-accountant-email.ts` builds the
> per-company email body (5 tests pin the contract). Followed
> CLAUDE.md operating principle #2 — single source of truth for
> the lock list. Branch: `claude/ct600-year-lock-and-review`.

> **8 May 2026:** **Form 4A two prefill gaps** (PR #110). User-
> reported during §BY UAT testing: Form 4A from "Propose Rent
> Increase" left placeholders unfilled, AND Form 4A Joint via the
> Templates wizard rendered with only one tenant name. Two distinct
> upstream data-loss bugs:
> (a) `[Enter Original Rent Amount]` was gated on
> `tenancy.rentAmount > 0`. When the live tenancy column is 0
> (legacy import / mid-edit / column-mirror drift), the placeholder
> dropped. Fix: fall back to `property.rentalIncome` (denormalised
> mirror, same number).
> (b) Strict `isContact` predicate at `src/lib/tenancy-contacts.ts`
> required `typeof email === 'string'`. A `contactDetails` row
> with no `email` key entirely (vs empty-string) failed and got
> silently filtered out — joint tenancies where one tenant had
> no captured email rendered with one tenant on Form 4A Joint.
> Fix: split into `isStrictContact` (signing pipeline; DocuSeal
> needs email-per-submitter) and `isLenientContact` (read +
> storage paths; accepts name-only). 8 new test cases.

> **8 May 2026:** **CT600 year tabs** (PR #109). UX harmonisation
> requested by user — `/taxes` (SA105) used tax-year tabs but
> `/taxes/company` (CT600) used a `Today / 1y / 2y / 3y ago`
> rewinder. Replaced with the SA105 tab pattern. Each tab maps to
> an asOf via `taxYearToAsOfDate(taxYear, today)`: completed-year
> → 5 Apr (last day), in-progress → today, future → 5 Apr (with
> Projected badge). The asOf flows server-side into
> `buildCompanyAggregate` unchanged; per-company "Accounting
> period: ..." subtitle keeps non-31-Mar ARDs explicit. New pure
> helper `src/lib/tax/ct600-tax-year-tabs.ts` (16 tests).

> **8 May 2026:** **Maintenance/Receipt expenses auto-flow to SA105**
> (PR #107). The maintenance auto-Expense + scanned-receipt Expense
> rows are the canonical writes for property repairs; the SA105 page
> previously required a manual "Import from Receipts" click — easy
> to forget, totals wrong until taken. Operating principle #2
> violation closed: `PropertyCard` now auto-fetches confirmed
> `Expense` rows for the property + tax year on mount (PROJECTED
> years only), merges them via the new
> `mergeLiveExpensesIntoRepairs` pure helper
> (`src/lib/tax/auto-expense-merge.ts`, 11 unit tests). Display +
> edit modes both render auto-merged rows with a "Maintenance" /
> "Receipt" badge; totals reflect them automatically. The merge
> dedups by `sourceExpenseId` first, then by
> `(description, amount)`, so re-saving doesn't duplicate. Legacy
> Import button kept as "Refresh" for in-flight Expenses confirmed
> mid-session. CT600 already auto-pulls live Expense rows via
> `company-aggregator.ts:137` so company-owned property maintenance
> already flows correctly there. Branch:
> `claude/maintenance-auto-flows-to-tax`.

> **8 May 2026 (–1):** **Form 4A #101 Fix B — Documents-tab Send
> coverage** (PR #106). The original Fix B (PR #103) wired
> `submitters[*].values` into the Tenancy-tab "Rent Increase
> Proposals" section only. The Documents-tab "Send for landlord
> signature" button on a Form 4A docx was a SEPARATE Form 4A send
> pathway that didn't have the wiring — so generating a Form 4A
> via the Templates wizard at `/templates`, attaching it to the
> property, then clicking Send for signature from the Documents
> tab silently bypassed Fix B and the landlord saw `[Enter X]`
> placeholders. Mirrored the same wiring into `property-tabs.tsx`
> with a 12-case regression-guard test
> (`tests/form-4a-fix-b-coverage.test.ts`) that parses every
> Form 4A send surface and fails CI if any of them omit the
> `buildForm4APrefillMap` + `buildForm4ASubmitterValues` +
> `values:` attach. Joint and Single both work via the same
> shared values map.

> **8 May 2026 (–2):** **Form 4A #101 Fix B — DocuSeal field
> prefill** (PR #103, #104). Architectural fix for the wrong-
> property-data bug. Until now `createMultiSubmission` sent only
> `{ template_id, send_email, submitters }` to DocuSeal — no
> field-level prefill — so DocuSeal rendered the static template
>
> - every property's send showed the same content (Kirby Close
>   baked into the template at upload time). PR wired per-submission
>   `submitters[*].values` end-to-end so the same DocuSeal template
>   serves every property correctly. New pure helper
>   `buildForm4ASubmitterValues` (in `src/lib/rent-increase/`)
>   converts placeholder-keyed prefill maps to DocuSeal field-name-
>   keyed values maps. Runbook `docs/docuseal-form-4a-setup.md` §6b
>   added: manual DocuSeal admin step (Replace document on the
>   existing template + add Text fields per the canonical names).
>   13 unit tests pin the contract.

> **8 May 2026 (–3):** **Form 4A #101 Fix A — Stop-gap recovery
> runbook + sync-script guard** (PR #102). Documents the recovery
> procedure (re-sync the blank template) for the Kirby-Close-on-
> every-send bug, plus extends `scripts/docuseal-sync-form-4a.ts`
> with `checkPlaceholdersIntact` (`src/lib/rent-increase/template-guard.ts`)
> — the script refuses to upload a docx that has rendered test
> data baked in OR is missing required placeholder fragments.
> Stops the next person to run the script from re-introducing
> the bug. 11 cases including a sanity check against the live
> `public/templates/` files.

> **7 May 2026 (+3):** \*\*TrueLayer sandbox + receipts Vercel-Blob
>
> - ENCRYPTION_KEY recovery** (PR #100). Three concurrent fixes
>   on the deploy-readiness branch:
>   (a) **TrueLayer providers filter sandbox-aware.** Was hardcoded
>   `uk-ob-all uk-oauth-all` (production-only); sandbox couldn't
>   match any provider so the picker showed "Bad Request". Fix:
>   `uk-cs-mock` for sandbox, prod filter unchanged. Setup runbook
>   `docs/banking-truelayer-setup.md` documents the live console
>   config + env-var mapping.
>   (b) **Receipts route uploads via Vercel Blob.** Was writing to
>   `public/receipts/` via `fs.writeFileSync` — works in local dev
>   but Vercel's filesystem is read-only except `/tmp`, so EROFS in
>   production. Fix: `put({ access: 'private' })` matching the
>   documents store; new `/api/expenses/[id]/receipt` proxy route
>   Bearer-auths against `BLOB_READ_WRITE_TOKEN`. 14-case
>   regression guard parses route source + fails on any
>   `fs.writeFileSync`/`mkdirSync`/`unlinkSync`/`renameSync`
>   reintroduction.
>   (c) **ENCRYPTION_KEY-rotation recovery.\*\* Fielded a production
>   incident where the key was rotated, breaking decryption of
>   `Tenancy.bankAccount` / `sortCode` / `MtdIdentity.nino`/`utr`
>   / `MtdOAuthToken.accessToken`/`refreshToken` /
>   `BankConnection.accessToken`/`refreshToken`. Recovery procedure
>   documented; user cleared the affected rows + re-entered.

> **7 May 2026 (+2):** **Bank-feed Phase 2 Wave 1 — locked-year
> guard + unmatch + property filter.** Foundation tightening for
> Open Banking Phase 2. Three audit-trail gaps closed:
> (1) **Locked-year retro-match guard** — cron + manual match now
> refuse to write into a tax year the user has locked. Pure helper
>
> - KV-backed server mirror sync'd from `/taxes` Lock/Unlock
>   actions. Auto-match runner adds `skippedLockedYear` counter;
>   manual match returns 409 with friendly path-out copy. 15 unit
>   tests. (2) **Per-property filter** on `GET /api/banking/transactions?propertyId=`
>   — wired now so the upcoming Wave 5 reconciliation dashboard
>   consumes a stable contract. (3) **Unmatch endpoint**
>   `POST /api/banking/transactions/[id]/unmatch` — cascade-deletes
>   the auto-created RentPayment/Expense, clears match pointers,
>   flips status to UNMATCHED, locked-year guard applies, audit-
>   logged as `UNMATCH_BANK_TRANSACTION`. Branch:
>   `claude/test-joint-rent-increase-lR2g5`.

## Bank-feed Phase 2 — remaining waves (queued)

Wave 1 shipped; Waves 2–6 queued in dependency order. See
CLAUDE.md "Bank-feed Phase 2 Wave 1" + the audit notes for
context.

- **Wave 2 — Maintenance auto-link.** When the auto-matcher
  creates an Expense for a DEBIT, look for an open
  `MaintenanceRequest` on the same property within ±7 days at
  the exact amount. Auto-populate `Expense.maintenanceRequestId`.
  Manual-match drawer offers the suggestion as a one-click
  accept. ~2-3h.
- **Wave 3 — SA105 / CT600 confirmed-receipts feed + drift
  surface.** Pure `computePropertyReconciliation` helper. Per-
  property card on SA105 + CT600 shows "Bank-confirmed: 12/12
  rent payments · £0 drift" with click-through to unmatched
  queue. ~3-4h.
- **Wave 4 — Compliance evidence chain.** New
  `Expense.complianceEventId` soft FK. Auto-match category
  extension for insurance / certs links to active compliance
  events. Compliance card per property gets an Evidence
  subsection. ~3-4h.
- **Wave 5 — Per-property reconciliation dashboard.** New
  `/finances/reconciliation/[propertyId]` page aggregating
  rent + expenses + materials/labour breakdown + drift +
  completeness %. Anomaly alerts (missing rent, unexpected
  debits, cross-account duplicates). ~4-5h.
- **Wave 6 — Final financial reconciliations + sealed snapshot.**
  Canonical writer `applyReconciliationClose(propertyId, taxYear)`
  → immutable `ReconciliationSnapshot` Prisma row + sealed PDF
  via existing export-pdf-button. Email-to-accountant flow
  attaches the PDF. ~3-4h.

## Queued — separate features (not bank-feed)

- **Third-Party Contacts reference data.** New Reference Data
  type for general-purpose contractor/service-provider directory
  (distinct from existing Solicitors / Mortgage Brokers /
  Contractors). Accessible via the highlighted "Third-Party
  Contacts" section on the property edit form. KV store + CRUD
  route + reference-data card + property-edit picker + tests +
  docs. ~3-4h. Will land as a separate commit on this branch
  after Bank-feed Wave 2.

> **7 May 2026 (+1):** **Maintenance receipts attach/detach +
> labour + materials rollup.** Extends today's earlier
> maintenance → SA105 wiring so a single repair can capture both
> labour (the `cost` field on the request) AND materials (existing
> `Expense` rows attached via the dropdown picker). New pure helper
> `aggregateMaintenanceCost` splits attached Expenses into labour
>
> - materials and exposes the rollup. POST `/api/expenses` extended
>   to accept `maintenanceRequestId`; PATCH already accepted it.
>   Maintenance DELETE cascade-cleans the soft-FK landscape: deletes
>   the auto-managed labour Expense, detaches material receipts (so
>   they survive as independent property expenses). UI: Materials
>   receipts panel on the maintenance edit form (list + attach picker
> - aggregate footer); reverse "🔗 Maintenance" badge on receipt-
>   list rows with deep-link to /maintenance. 10 unit tests on the
>   aggregate helper. Branch: `claude/test-joint-rent-increase-lR2g5`.

> **7 May 2026:** **Maintenance → Expense → SA105 wiring.** Closes
> the "no way to retrospectively log historic work + capture cost"
> gap reported during data-entry testing. MaintenanceRequest now
> has `workDate` (back-datable) + `cost` + `linkedExpenseId` columns
> plus `Expense.maintenanceRequestId` reverse FK. New canonical
> writer `applyMaintenanceCostToExpense` keeps the linked Expense
> in step with the request's lifecycle: auto-create on RESOLVED/
> CLOSED with cost > 0, auto-delete on revert, update in place on
> cost / workDate / title edits. UI: Work date input on New Request
> modal + Edit panel; Cost input on Edit panel; "✓ Linked to SA105
> {year}" badge with deep-link to /taxes. 29 unit tests on the
> canonical writer (state transitions + best-effort failure).
> CLAUDE.md "Maintenance → Expense → SA105 wiring" section
> documents the pattern. Branch: `claude/test-joint-rent-increase-lR2g5`.

> **6 May 2026 (+2):** **SA105 mid-year-transfer banner + tax-year
> lock + delete.** Three small fixes on the personal SA105 page:
>
> 1. **Banner mid-year-transfer awareness.** Kirby Close
>    (transferred Personal → Company on 26 Feb 2026) was being
>    flagged as "tax-excluded but still appears" on every projected
>    year — false positive because it has 10 legitimate personal-
>    ownership months in 2025-26. New pure helper
>    `filterBannerSuppressedCompanyNames` + `/api/property-ownership/summary`
>    endpoint feed mid-year-transfer awareness into the banner: if
>    a property had any personal months in the displayed year, it's
>    silently removed from the banner list.
> 2. **Delete a projected tax year.** Small × button glued to each
>    projected-year tab when the year is custom (rolled-forward).
>    Refuses baseline years. Wipes the year from
>    `mar-property-tax-custom-years` + every matching override.
> 3. **Lock a tax year for review.** Lock / Unlock buttons on the
>    year selector. Locked-state banner with "Email summary to
>    accountant" mailto for dry-run validation. Editability gate
>    automatically respects the lock — `PropertyCard` accepts a new
>    `yearLocked` prop, every existing edit surface inherits.
>
> 28 unit tests across 3 spec files. CLAUDE.md "SA105 mid-year-
> transfer banner + tax-year lock + delete" section documents the
> three patterns. Branch: `claude/test-joint-rent-increase-lR2g5`.

> **6 May 2026 (+1):** **CT600 period selector + editable expenses.**
> The per-company operating-costs page + the CT600 summary defaulted
> to "current accounting period" with no way to flip backwards. A
> user with a back-dated expense couldn't see it aggregated on the
> summary because the page was hard-pinned to the current period.
> Two fixes:
>
> 1. **Period selector everywhere.** Pure helper
>    `src/lib/tax/period-selector.ts` (`getPeriodOptions`,
>    `resolveSelectedPeriodEnd`, `formatPeriodLabel`) plus
>    `<AccountingPeriodSelector />` (per-company expenses page,
>    URL-driven `?period=YYYY-MM-DD`) and `<Ct600AsOfRewinder />`
>    (CT600 summary, `?asOf=YYYY-MM-DD` with Today / 1y / 2y / 3y
>    ago presets + custom date). Both pages now show the selected
>    period's totals + filter table rows accordingly. Empty-state
>    hint surfaces "N expenses recorded in other periods" when the
>    table is empty for the chosen period but rows exist elsewhere.
> 2. **Editable date on existing rows.** `<Pencil />` Edit buttons
>    on every expense + asset row open inline modals
>    (`EditExpenseModal`, `EditAssetModal`) that reuse the existing
>    PUT routes. Both routes already re-derive `taxYear` +
>    `accountingPeriodEnd` from the date input — so a back-dated
>    expense corrected to a current-period date auto-reassigns to
>    the right bucket without further action.
>
> 17 unit tests for the period-selector helper. CLAUDE.md "CT600
> period selector + editable expenses" section documents the
> pattern + edit-everywhere rule for new tax surfaces. Branch:
> `claude/test-joint-rent-increase-lR2g5`.

> **6 May 2026:** **AST landlord-sign reconciliation.** Closes the
> "the AST signing event itself was purely documentary" gap on
> non-Form-4A AST signings (a brand-new tenancy or any first AST on
> a property where Form 4A was never used). The signing webhook +
> sync route now snapshot the prefill at send time
> (`SigningRequest.prefillSnapshot` JSONB) and on landlord-sign
> compare it against the current Property + Tenancy state, force
> the canonical tax-refresh writers
> (`Property.rentalIncome ← Tenancy.rentAmount` +
> `syncCurrentTenancyPeriod`), and surface a red banner on the
> property Tenancy tab listing each drift (rent / deposit / dates /
> contacts / address / postcode). Pure helpers in
> `src/lib/ast-reconciliation/` (snapshot, compute, apply,
> should-reconcile, store) — 60 tests across 4 spec files. Policy
> decisions: flag-only (no auto-overwrite of Tenancy fields), period
> start = `Tenancy.moveInDate`, graceful backfill (legacy envelopes
> get the tax-refresh half but no mismatch detection). API at
> `/api/properties/[id]/ast-reconciliation` (GET bundle + POST
> mark-reviewed). Pattern documented in CLAUDE.md "AST landlord-sign
> reconciliation" section. Branch: `claude/test-joint-rent-increase-lR2g5`.

> **5 May (+11):** **CT600 accounting-period compliance + per-property
> drill-down + address fix + rent-review guard.**
>
> 1. **CT600 accounting-period compliance (Waves 1–3).** The
>    Corporation Tax page was incorrectly measuring turnover and
>    expenses over the HMRC income tax year (6 Apr → 5 Apr). Companies
>    are assessed on their own 12-month accounting period ending on
>    `Company.accountingRefDate`. Three waves:
>    - **Wave 1 (helpers):** four new pure functions in
>      `src/lib/tax/company-expenses.ts` —
>      `deriveAccountingPeriodRange`, `listAccountingPeriods`,
>      `accountingPeriodLabel`, `countMonthsInAccountingPeriod`.
>      Pinned by `tests/accounting-period-helpers.test.ts` (25 cases).
>    - **Wave 2 (aggregator rewrite):** `buildCompanyAggregate` now
>      accepts `{ asOfDate?, today? }` instead of a UK tax-year
>      string. New `getAccountingPeriodRentalIncome` helper uses
>      arbitrary ISO date windows (no `tax-data.ts` fallback — those
>      entries are UK-tax-year indexed). Recurring costs prorated by
>      `periodMonths` not hardcoded ×12. `CompanyBreakdown` now
>      carries `periodStart`, `periodEnd`, `periodLabel` instead of
>      `taxYear`. Per-property `propertyBreakdowns` array added.
>    - **Wave 3 (page):** CT600 page updated to use new API —
>      `periodLabel` in CardDescription, `asOfDate` in result,
>      `computeFilingDates` takes `periodEnd` not `accountingRefDate`.
>    - **API:** `?asOfDate=YYYY-MM-DD` replaces `?year=2025-26`.
>    - Tests: `tests/taxes-company-refactor.test.ts` fully rewritten
>      (period shape, basic shape, mid-year transfer, fallback).
> 2. **CT600 per-property drill-down.** New
>    `CompanyPropertyBreakdownSection` client component (expandable
>    chevron per property) showing rental income, mortgage, mgmt fee,
>    service charge, ground rent, R&M, and net income. "Estimated"
>    badge when source = 'fallback'.
> 3. **DOCX address trailing `, .` fix.** `splitAddress` in
>    `template-prefill.ts` now places the postcode on the _next
>    available_ line after address parts (1-part → line 2, 2-part →
>    line 3, 3+-part → line 4). Cleanup regex in
>    `template-generate.ts` strengthened with `+` quantifier to
>    collapse multiple consecutive empty slots in one pass.
> 4. **Rent review card hidden for new properties.** One-liner null-
>    guard in `property-tabs.tsx` — the card is suppressed when
>    `property.tenancy` is falsy.

> **5 May (+10):** **Three-commit polish wave — tenant + admin
> password reset, auto-renewal "Draft" envelope detection,
> regenerate-renewal route + joint-tenancy Form 4A email fan-out.**
> Final-stage pre-test-sweep ship covering one P0 (joint-tenancy
> Section 13(2) notices were silently single-cast), one UX dead-
> end (auto-renewal AST stuck on "Awaiting Signature" with the Send
> button suppressed), one lockout recovery (Runcorn `Tenancy.email`
> vs `TenantUser.email` drift breaking resend-invite), and one
> follow-up tool (regenerate stale renewal AST after a templates
> fix).
>
> 1. **Tenant + admin password reset (commit `07cae36`).** Two new
>    routes: `POST /api/tenants/reset-password` (admin, returns
>    plaintext temp password in body, audit `RESET_TENANT_PASSWORD`)
>    - `POST /api/portal/forgot-password` (public, no enumeration,
>      no plaintext in body, rate-limited 5/15min per IP, audit
>      `FORGOT_PASSWORD_RESET` / `FORGOT_PASSWORD_NO_MATCH`). New
>      `/portal/forgot-password` page with sibling layout that
>      bypasses the tenant auth wrapper. New "Reset Password" button
>      on `/tenants` rows with a Copy-to-clipboard result dialog.
>      Both reset routes never touch the email field — that's why
>      they sidestep the resend-invite collision check that was
>      blocking lockout recovery. See CLAUDE.md "Tenant + admin
>      password reset" section. Tests:
>      `tests/tenant-reset-password-route.test.ts` (5) +
>      `tests/portal-forgot-password-route.test.ts` (8).
> 2. **Auto-renewal "Draft" envelope detection (commit `75c26db`).**
>    Root cause: the portal Accept route writes a SigningRequest
>    row with `docusealSubmissionId=0` + empty `signingUrl` BEFORE
>    any DocuSeal envelope exists (the landlord still has to click
>    Send). Pre-fix the UI mis-read PENDING as "dispatched" and
>    suppressed the Send button — landlord couldn't actually
>    dispatch the renewal. New pure helper
>    `src/lib/signing-draft.ts::isSigningRequestDraft(req)` is the
>    single source of truth for "row exists but envelope never
>    dispatched". `/api/signing/status` exposes `isDraftEnvelope`
>    per request; property-tabs.tsx renders "Draft — needs to be
>    sent" instead of "Awaiting Signature" + re-enables
>    canSendForSigning + skips auto-on-mount sync polls + suppresses
>    the per-doc Refresh-from-DocuSeal eye icon.
>    `compliance-checklist.ts::deriveTenancyBadge` collapses drafts
>    to UPLOADED_UNSIGNED so the Overview Compliance Checklist
>    doesn't claim "Awaiting Signature" while the landlord still
>    has to click Send. `/api/signing/sync` skips drafts in all 3
>    entry points (signingRequestId / documentId / propertyId-batch)
>    to avoid `getSubmission(0)` 404s. See CLAUDE.md "Auto-renewal
>    draft envelope detection" section. Tests:
>    `tests/signing-draft.test.ts` (8) + 2 new cases in
>    `tests/compliance-checklist.test.ts`.
> 3. **Regenerate-renewal route + joint-tenancy email fan-out
>    (commit `9b59bc3`).** Two fixes:
>    - **Regenerate-renewal route.** New `POST
/api/properties/[id]/rent-increase/[proposalId]/regenerate-renewal`
>      deletes the existing draft TENANCY_AGREEMENT + SigningRequest
>      and re-runs `generateRenewalDraftFromProposal` so the
>      regenerated docx picks up current data (templates, prefill,
>      deposit, contacts). Refused 409 if the existing draft
>      envelope has been dispatched (`!isSigningRequestDraft(req)`)
>      — would orphan an in-flight DocuSeal submission. Audit-
>      logged `REGENERATE_RENT_INCREASE_RENEWAL`. New blue
>      "Regenerate renewal AST" button on the AGREED state of
>      `property-rent-increase-section.tsx`. See CLAUDE.md
>      "Regenerate renewal AST route" section. Tests:
>      `tests/rent-increase-regenerate-renewal-route.test.ts` (7).
>    - **Joint-tenancy Form 4A email fan-out (P0).** Section 13(2)
>      Housing Act 1988 binds every named tenant — pre-fix only
>      `contacts[0]` received the signed Form 4A email on joint
>      tenancies, making the served notice legally defective.
>      `resolveProposalContext` refactored from `tenantEmail: string
| null` + `tenantName: string` to `tenantContacts: Array<{ email;
name }>`. `handleRentIncreaseSignedTransition` Case A loops with
>      per-recipient personalisation. Same fan-out applied to the
>      `formalise` route. Single tenancies = one iteration,
>      identical behaviour. Partial-failure flag rule: any single
>      recipient send failure → `tenantEmailFailed=true` (we don't
>      pretend partial success). See CLAUDE.md "Joint-tenancy Form
>      4A email fan-out" section. Tests:
>      `tests/periodic-tenancy-agreement-render.test.ts` (2 — round-
>      trip Single + Joint AST templates through `renderDocxTemplate`
>      asserting no `[Enter ...]` placeholders survive) + 2 new
>      joint fan-out cases in
>      `tests/rent-increase-webhook-integration.test.ts`.
>
> Total: **2135 tests across 168 suites** (was 2114 across 165),
> +21 tests, +3 suites. 3 new API routes, 1 new portal page, 1 new
> pure helper.

> **5 May (+9):** **Tenant Portal Preview filter relaxed + Cancel-
> proposal button on Documents tab.** Two follow-up fixes after
> +8:
>
> 1. User reported Runcorn missing from the property picker on
>    `/tenant-portal-preview`. Root cause: filter required
>    `status === 'ACTIVE'` AND `contacts.length > 0`. Runcorn
>    likely failed one of those (status drift or legacy contact
>    shape). Fix: relaxed to "any property with a tenancy row
>    attached", sorted alphabetically, with `(no tenant contact)`
>    fallback label on the card.
> 2. User reported Runcorn's "Acknowledged by tenant" badge was
>    blocking a fresh Form 4A — the bundle was stuck AGREED with
>    no related docs left, and the existing Cancel button only
>    lives on the Tenancy tab. Fix: added a small red `Cancel
proposal ✕` link next to the badge on the Documents tab,
>    visible whenever the bundle is in DRAFT/SENT/AGREED state.
>    Click → confirmation dialog → DELETE
>    `/api/properties/[id]/rent-increase/[proposalId]` →
>    SUPERSEDED → bundle re-fetched + `router.refresh()` so the
>    badge clears immediately.

> **5 May (+8):** **Tenant Portal Preview** — admin-only read-only
> mirror of what the tenant sees on `/portal/documents`. New page
> at `/tenant-portal-preview` (server component, editor+ auth)
> with property picker + the same Documents list + Form 4A
> Accept/Decline panel the tenant sees, with all action buttons
> rendered DISABLED behind a "Preview mode" banner so the admin
> can verify state without responding on a tenant's behalf. Reuses
> `findDocumentsByPropertyId` + `readBundle` directly (no
> `/api/portal/*` calls — those require tenant auth). New nav
> item under Tenants group with the Eye icon.
>
> Built per user request as a "fall-back review tool" to verify
> in-flight Form 4A panels + signed-document attachments end-to-
> end without setting up tenant credentials. Total tests still
> **2101 across 163 suites** — the new page is a pure server
> component reading existing Prisma helpers, so coverage is
> indirect (via the helpers' existing tests).

> **5 May (+7):** **Tax-propagation gap closed — `applyRenewedRent`
> canonical writer + `npm run tenancy:audit` script.** Resumes the
> deferred follow-up captured in the +5 ship.
>
> Investigation confirmed the two suspected gaps:
>
> 1. Webhook Case B called `syncCurrentTenancyPeriod(propertyId, …)`
>    without updating `Tenancy.rentAmount` first. The helper reads
>    Tenancy → sees no structural change → never opens a new
>    period. Renewals completed in the bundle but the new rent
>    never reached any tax surface.
> 2. `Property.rentalIncome` was never updated on renewal either —
>    so the MTD threshold check + property tile "monthly profit" /
>    "gross yield" stayed at the OLD rent until the user manually
>    edited the property.
>
> Fix: new pure helper
> `src/lib/rent-increase/apply-renewed-rent.ts::applyRenewedRent(input, deps)`
> is the single canonical writer for "rent has officially renewed".
> Three writes in deliberate order (Tenancy.rentAmount → Property.rentalIncome →
> syncCurrentTenancyPeriod) so the new period opens correctly and
> all denormalised surfaces are in step. Webhook Case B + sync
> route Case B both call this single helper.
>
> Once the new TenancyPeriod row exists, the Phase A
> `getTaxYearRentalIncome` helper at
> `src/lib/tax/rental-income.ts:274` automatically pro-rates
> SA105 / CT600 / MTD totals from the new effective date — that
> wiring already existed; the gap was upstream.
>
> Plus new audit script `npm run tenancy:audit [propertyId] [taxYear]`
> (mirrors `ownership:audit`): per-property timeline + tax-surface
> reconciliation report with `⚠ DRIFT` flags when sources
> disagree. Portfolio-wide summary mode (no args) flags drifted
> properties for follow-up.
>
> Test contract: 6 new pure-helper cases for
> `tests/rent-increase-apply-renewed-rent.test.ts` (write-order
> invariant, best-effort failure paths) + updated existing Case B
> assertions in `tests/rent-increase-webhook-integration.test.ts`
> to assert against the new canonical writer dep instead of the
> bare syncCurrentTenancyPeriod call. Total **2101 tests across
> 163 suites**, all passing.

> **5 May (+6):** **Server-component refresh on document
> mutations.** Follow-up to the +5 cascade-cancel ship: user
> reported the "Acknowledged by tenant" header badge stayed
> showing after deleting all docs. Root cause: the badge is
> rendered by a Next.js **server component**
> (`src/app/properties/[id]/page.tsx`) that reads the bundle at
> page-render time. The +5 cascade-cancel ran fine server-side
> and the bundle was correctly SUPERSEDED, but the page itself
> wasn't re-rendered, so the server-rendered HTML stayed stale
> until manual reload.
>
> Same root cause for the Tenancy + Overview tab badges, which
> are also bound to the server-rendered bundle state.
>
> Fix: added `router.refresh()` to the document mutation handlers
> in `property-tabs.tsx` (delete, upload, manual DocuSeal sync).
> After every mutation, Next.js re-renders the server component
> tree against the post-mutation state — so the cascade-cancel
> propagates instantly to all bundle-bound surfaces. Total tests
> still **2094 across 162 suites**.

> **5 May (+5):** **Cascade-cancel bundle on Form 4A/AST delete +
> tenant displayName sync to TenantUser + frontend bundle refetch.**
> User reported on Runcorn that after deleting all docs, the
> orange "Acknowledged by tenant" badge stayed showing — and that
> tenant edits to name/email weren't reaching the tenant portal.
>
> Three fixes:
>
> 1. **Document DELETE cascade-cancel.** When a Form 4A
>    (RENT_INCREASE_NOTICE) or renewal AST (TENANCY_AGREEMENT)
>    docx is deleted via `DELETE /api/documents/[id]`, look up
>    the linked bundle proposal — either via
>    `bundle.current.signingRequestId` (source Form 4A path) or
>    `bundle.current.followUpSigningRequestId` (renewal AST path)
>    — and `markCancelled` it (→ SUPERSEDED, archived to history).
>    Best-effort + audit-logged + idempotent on terminal states.
>    Non-Form-4A / non-AST doc deletions don't cascade.
> 2. **Frontend bundle refetch.** `property-tabs.tsx` now refetches
>    the rent-increase bundle status after every document action
>    (delete, upload, manual sync), so the cascade-cancel above
>    surfaces as a cleared badge immediately rather than on the
>    next page reload.
> 3. **Tenant displayName sync to TenantUser.** New pure helper
>    `src/lib/tenant-user-name-sync.ts::planTenantUserDisplayNameSync`
>    matches users by email and syncs their displayName. Wired
>    into `/api/properties/[id]` PUT after the existing email-sync
>    pass (which matches by name). The two-pass design handles
>    name-and-email-changed-at-once: pass 1 corrects email via
>    old name, pass 2 corrects name via new email.
>
> Test contract: 9 new pure-helper cases for
> `tenant-user-name-sync` + 7 cascade-route integration cases.
> Total **2094 tests across 162 suites**, all passing.

### Tenancy-renewal → tax / financial reconciliation propagation (raised 5 May 2026 +5)

**Status:** Captured as a follow-up; not built yet. User
flagged: when the renewal Tenancy Agreement is signed and a new
TenancyPeriod opens with the new rent, the new amount should
flow into the relevant personal tax (SA105) / corporation tax
(CT600) / MTD ITSA returns automatically, and the compliance +
financial audit checks should re-run to confirm everything
reconciles.

Most of the framework already exists per CLAUDE.md "Tax data
architecture" section:

- `syncCurrentTenancyPeriod` (called from webhook Case B after
  renewal AST signed) opens a new `TenancyPeriod` with the new
  rent + effective date.
- The Phase A `getTaxYearRentalIncome` last-resort branch sums
  `period.rentAmount × monthsActiveInTaxYear` — so MTD/SA105/CT600
  totals automatically pick up the new period's rent for the
  relevant months.

**Suspected gaps to investigate when this work is picked up:**

1. **`Tenancy.rentAmount` denormalised column** — does the
   webhook Case B handler update Tenancy before calling
   `syncCurrentTenancyPeriod`? If not, the helper's
   `isStructuralTenancyChange(openRow, next)` check sees no
   change → no new period opens. (Possibly a real bug —
   confirm by reading the Case B path end-to-end.)
2. **`Property.rentalIncome` denormalised column** — used by
   the MTD threshold check. Does it auto-update when a new
   period opens with a different rent?
3. **`tax-data.ts`** — historic-ACTUAL hardcoded SA105 entries
   for sealed years. Per CLAUDE.md, this is the Phase A deferral
   path; not auto-updated until Open Banking Phase 2.
4. **No-op vs invariant audit** — once #1 and #2 are confirmed,
   write a `npm run tenancy:audit <propertyId>` script (mirror
   of the existing `npm run ownership:audit`) that prints the
   TenancyPeriod timeline + the corresponding rent on each tax
   surface, flagging any drift.

**Marquee acceptance criteria for the eventual fix:**

- After Form 4A signed → tenant accept → renewal AST signed →
  new period opens at new rent → SA105 page totals reflect the
  new rent for months from `newEffectiveDate` onwards.
- Property tile "monthly profit" + "gross yield" reflect the new
  rent immediately.
- Compliance checklist re-runs (already does via derived state).
- Audit script outputs a clean reconciliation report.

> **5 May (+4):** \*\*Renewal Tenancy Agreement prefill — £ duplication
>
> - missing [Enter Start Date] / [Enter Deposit Amount].\*\* User
>   reported that the auto-generated renewal AST after a Form 4A
>   acceptance still required them to type the new rent + new start
>   date, and showed `££` in front of the rental amount + literal
>   `[Enter Start Date]` and `[Enter Deposit Amount]` placeholders
>   in the rendered docx.
>
> Root cause: extracted the active templates' placeholders via
> `unzip -p ... word/document.xml` and found three things:
>
> 1. The Periodic Tenancy Agreement Single + Joint templates bake
>    `£` into the surrounding text BEFORE the placeholder (e.g.
>    `£[Enter Rental Amount]`). The prefill helper was prepending
>    `£` too — rendered as `££1200`. Same pattern in the Form 4A
>    templates.
> 2. The new Periodic templates use `[Enter Start Date]` (short
>    key), but auto-renewal was setting the legacy
>    `[Enter Tenancy Start Date]` — so the placeholder stayed
>    literal in the rendered docx.
> 3. The new Periodic templates also use `[Enter Deposit Amount]`,
>    which neither `buildPrefillMap` nor `auto-renewal` was setting
>    at all.
>
> Fix:
>
> - **Strip `£`** from all 4 prefill sites:
>   `template-prefill.ts:153` (`[Enter Rental Amount]`),
>   `template-prefill.ts:163` (`[Enter Original Rent Amount]`),
>   `auto-renewal.ts:132` (`[Enter Rental Amount]` override),
>   `form-4a-generation.ts:74` (`[Enter New Rent Amount]`). Emit
>   numeric only — the `£` lives in the template's surrounding
>   text.
> - **Add `[Enter Start Date]` + `[Enter Deposit Amount]`** to
>   `buildPrefillMap` (sourced from `Tenancy.moveInDate` +
>   `Tenancy.depositAmount`). Auto-renewal overrides
>   `[Enter Start Date]` with `proposal.newEffectiveDate` and
>   carries the deposit through unchanged (Form 4A increase
>   doesn't auto-bump the deposit; user can edit before sending
>   if they want to recalculate under the Tenant Fees Act 5-week
>   cap).
>
> Test contract: 6 new pure-helper cases for
> `template-prefill.test.ts` (regression guards: rental amount
> NEVER contains `£`, original rent NEVER contains `£`, deposit
> NEVER contains `£`) + 6 new integration cases for
> `tests/rent-increase-auto-renewal-prefill.test.ts` covering the
> renewal-specific overrides. Total: **2078 tests across 160
> suites**, all passing.

> **5 May (+3):** **SigningRequest.signedDocumentId persist +
> document-type-aware signing emails** (continuation of
> `claude/fix-docuseal-signed-update-EUugX`). Two follow-up bugs
> from the previous Send-button-suppression ship:
>
> 1. **Send button still appearing on signed PDFs.** The
>    suppression logic in property-tabs.tsx checked
>    `signingStatus.signedDocumentId === doc.id`, but the
>    backend never populated `signedDocumentId` on the
>    `SigningRequest` for Form 4A flows — the rent-increase
>    handler attached the signed PDF as a new
>    PropertyDocument but the doc id wasn't linked back to the
>    envelope. Fix: extended `handleRentIncreaseSignedTransition`
>    to return the attached doc id, and webhook + sync routes
>    now persist it onto `SigningRequest.signedDocumentId` after
>    the handler returns. Plus a defensive frontend fallback
>    that recognises signed-result docs by `originalName`
>    starting with "Signed Form 4A " or "Signed Tenancy
>    Agreement " — covers historic rows attached before the
>    persist landed.
> 2. **Email mis-labels Form 4A as "Tenancy Agreement".** The
>    `sendSigningEmail` helper hard-coded "Tenancy Agreement
>    Ready for Signing" copy regardless of what was actually
>    being signed. So when a Form 4A was sent to the landlord,
>    the email subject + body still said "tenancy agreement".
>    Fix: new pure helper `src/lib/signing-email-copy.ts`
>    branches subject / heading / body / button label / legal
>    note via `DocumentSigningKind = 'AST' | 'FORM_4A' | 'OTHER'`.
>    Send + webhook + sync + resend routes derive the kind from
>    the source doc's type and forward it. Form 4A emails now
>    correctly say "Form 4A — Rent Increase Notice Ready for
>    Signing" with a body referencing Section 13(2) of the
>    Housing Act 1988.
>
> Test contract: 16 new pure-helper cases for
> `signing-email-copy` (mapping + per-kind copy assertions
> including a regression guard that the Form 4A copy NEVER
> contains the phrase "tenancy agreement"). Plus a new
> assertion in `tests/signing-sync-route.test.ts` that the
> SigningRequest is updated with `signedDocumentId` after the
> orphan-A handler returns. Total **2066 tests across 159
> suites**, all passing.

> **5 May (+2):** **UX fix on signed-result PDF row + honest doc
> notes** (continuation of `claude/fix-docuseal-signed-update-EUugX`).
> User reported that after the landlord signed the Form 4A, the
> signed-result PDF row in the Documents tab showed a Send-for-
> Signing button that opened the Form 4A landlord-send modal —
> wrong action, wrong row. The doc notes also misleadingly
> claimed "Served on tenant via email" even though the orphan
> branch intentionally does NOT email the tenant.
>
> Fix:
>
> 1. **Status route extended** to expose `signedDocumentId` per
>    request — frontend can now distinguish source docs from
>    signed-result docs.
> 2. **property-tabs.tsx** — Send-for-Signing button suppressed on
>    signed-result docs (`canSendForSigning = ... && !isSignedResultDoc`).
>    Formalise CTA also surfaced on signed-result rows; click
>    handler resolves back to the source docId so the modal opens
>    against the right SigningRequest regardless of which row was
>    clicked.
> 3. **Webhook + sync attach helpers** — orphan-aware filename
>    (`Signed Form 4A - {date}.pdf`, no `orphan` literal) and
>    honest notes ("Awaiting formalise — click Formalise to set
>    rent terms and notify tenant" instead of "Served on tenant
>    via email").
>
> Tests: extended `tests/signing-webhook.test.ts` to lock the new
> filename + notes shape on the orphan branch. Total still **2050
> tests across 158 suites**, all passing. UAT Section BL pinned in
> `docs/uat-checklist.md`.

> **5 May (+1, evening):** **Single-tenant landlord countersigner +
> new Periodic Tenancy Agreement template IDs.** User uploaded two
> new DocuSeal templates: Periodic Tenancy Agreement Single
> (`https://docuseal.eu/templates/535378`, roles `Tenant` +
> `Landlord`) and Joint (`https://docuseal.eu/templates/535392`,
> roles `Tenant 1`, `Tenant 2`, `Landlord`). Both configured with
> sequential signing order, landlord LAST. Replaces the legacy
> `524100` joint AST template + closes the "single AST has no
> landlord countersigner" gap from the previous session's
> follow-ups list.
>
> Code changes:
>
> 1. `src/lib/signing-resolve-template-id.ts` — new
>    `astVariant: 'single' | 'joint'` field. When set, picks AST
>    template based on this value instead of `submitterCount > 1`
>    — required because single AST sends now have
>    `submitterCount === 2` (1 tenant + 1 landlord) and the legacy
>    rule would mis-route them to the joint template. Back-compat:
>    when unset, the legacy submitter-count rule still applies.
> 2. `src/app/api/signing/send/route.ts` — accepts `astVariant` in
>    body, forwards to resolver.
> 3. `src/components/property/property-tabs.tsx` — Landlord row
>    now visible for BOTH single and joint AST flows. Sends
>    `submitters: [...tenants, landlord]` + `astVariant`. Tenant
>    role naming follows template config — `Tenant` for single,
>    `Tenant 1` / `Tenant 2` / ... for joint.
>
> Vercel env vars to update on deploy:
>
> - `DOCUSEAL_TEMPLATE_ID = 535378` (was: legacy single id, or unset)
> - `DOCUSEAL_JOINT_TENANCY_TEMPLATE_ID = 535392` (was: `524100`)
>
> Test contract: 6 new resolver cases
> (`tests/signing-resolve-template-id.test.ts`) + 2 new send route
> cases (`tests/signing-send-joint.test.ts`). Total: **2050 tests
> across 158 suites**, all passing. UAT Section BK pinned in
> `docs/uat-checklist.md`.

> **5 May (+1):** **Orphan-Form-4A recovery + source-doc-type detection**
> (continuation of `claude/fix-docuseal-signed-update-EUugX`). User
> follow-up on the previous DocuSeal sync ship: the sync route
> correctly pulled the signed status from DocuSeal, but when the
> Form 4A had been sent via the Documents tab (orphan-doc state, no
> formal proposal in the bundle), the signed PDF was attached as
> TENANCY_AGREEMENT instead of RENT_INCREASE_NOTICE — wrong type,
> wrong filename, no tenant email, and no path to start the
> tenant-acknowledgement → auto-renewal-AST chain.
>
> Fix:
>
> 1. **Source-doc-type Form 4A detection** in webhook + sync routes.
>    Look up the source PropertyDocument; if its type is
>    RENT_INCREASE_NOTICE, route through the rent-increase handler
>    even when no bundle proposal exists. New `caseHit: 'A-orphan'`
>    branch on `handleRentIncreaseSignedTransition` attaches the
>    signed PDF correctly + skips the generic landlord-signed email.
>    Tenant email is intentionally NOT sent on orphan (we don't know
>    the rent terms yet).
> 2. **Formalise recovery route** `POST
/api/properties/[id]/rent-increase/formalise`. Pure helper
>    `formaliseFromSignedEnvelope` in `state.ts` is the only path
>    that creates a proposal already in SENT (skipping DRAFT) — for
>    when the landlord has already signed but no proposal exists.
>    Auto-cleanup: re-types any mis-typed signed PDF in place
>    (TENANCY_AGREEMENT → RENT_INCREASE_NOTICE). Auto-emails the
>    tenant the signed Form 4A + portal link so they can Accept /
>    Decline / Refer-to-Tribunal.
> 3. **UI** — blue "Formalise →" button next to the orange "Form 4A
>    attached — formalise proposal" badge in the Documents tab,
>    visible only when the envelope is SIGNED + no formal proposal
>    exists. Modal asks for new rent + new effective date.
>
> Test contract: 6 new state-machine cases for
> `formaliseFromSignedEnvelope`, 6 new orphan-branch cases on
> `tests/rent-increase-webhook-integration.test.ts`, 4 new
> source-doc-type detection cases on `tests/signing-webhook.test.ts`
>
> - `tests/signing-sync-route.test.ts`, and 12 new integration
>   cases on the new `tests/rent-increase-formalise-route.test.ts`.
>   Total: **2042 tests across 158 suites**, all passing.
>
> Known gap (out of scope for this PR, logged for the next pass):
> the **single-tenant Tenancy Agreement** DocuSeal template only
> has a "First Party" (tenant) role — landlord doesn't countersign
> on single ASTs. Joint already includes Landlord. To bring single
> in line we need (a) a Landlord role + Signature/Date fields in
> the Single DocuSeal template, (b) the send route to include a
> Landlord submitter when MAX_SUBMITTERS=2 for single AST flows,
> and (c) the existing Wave 3 follow-up renewal AST chain to wire
> through. Marked as a follow-up.

> **5 May:** **DocuSeal signed-update safety net** (`claude/fix-docuseal-signed-update-EUugX`).
> User report: after sending the Form 4A single to the landlord and
> signing it inside DocuSeal, the property-app document row stayed
> at "Awaiting Signature" indefinitely. Root cause: the
> `/api/signing/webhook` is the single writer of
> `SigningRequest.status`, so if DocuSeal isn't configured to call
> our webhook URL, or `DOCUSEAL_WEBHOOK_SECRET` doesn't match (silent
> 401), or the request drops, the row stays PENDING forever — and
> we had no fallback that asks DocuSeal "what's the truth?".
>
> Fix: a manual + auto-on-mount reconciliation. New pure helper
> `src/lib/signing-reconcile.ts` (`mapRemoteSubmitterStatus`,
> `reconcileSubmitters` — idempotent + monotonic, never walks status
> backwards, `decideReconcile`, `pickSignedPdfUrl`). New route
> `POST /api/signing/sync` accepts `{ documentId | signingRequestId
| propertyId }`, calls DocuSeal `getSubmission`, applies submitter
> patches, recomputes envelope aggregate, and on first SIGNED
> transition fires the **same** Case A/B side effects the webhook
> would (download PDF, attach as RENT_INCREASE_NOTICE, email tenant,
> flip DRAFT → SENT) by reusing
> `handleRentIncreaseSignedTransition` — single canonical writer.
> UI: small green eye button next to PENDING / VIEWED badges in the
> Documents tab + auto-on-mount POST when at-least-one in-flight
> envelope is on the page.
>
> Test contract: `tests/signing-reconcile.test.ts` (23 cases —
> mapping, idempotency, monotonicity, joint multi-signer, decision
> aggregator, PDF URL pick) + `tests/signing-sync-route.test.ts`
> (10 cases — first SIGNED transition fires Case A, VIEWED-only
> transition skips side effects, declined → FAILED, idempotent
> SIGNED, DocuSeal throws → no-op, batch mode skips terminal,
> Form 4A DRAFT bundle skips generic TENANCY_AGREEMENT doc
> creation). Total: 2014 tests across 157 suites, all passing.

> **3 May (latest +1):** **Form 4A landlord-signing — wrong-template-id
> regression fix + EU domain URL test.** User report: when sending a
> Form 4A docx for landlord signature from the Documents tab on a
> property without an open rent-increase proposal, the route
> silently routed through `DOCUSEAL_TEMPLATE_ID` (the AST single
> template, e.g. id `531964`) instead of
> `DOCUSEAL_FORM_4A_TEMPLATE_ID_SINGLE` (the Form 4A single, e.g.
> `531444`). Symptom: friendly error said "DocuSeal Form 4A template
> (#531964) is missing the required fields" with the wrong template
> id + a `docuseal.com` admin URL when the user was on DocuSeal EU.
>
> Root cause: the route gated Form 4A detection on
> `Boolean(linkedProposalId)` alone — and the property-tabs handler
> only sets `linkedProposalId` when an open proposal exists.
>
> Fix: detect Form 4A as `Boolean(form4aVariant) ||
Boolean(linkedProposalId)` — either signal asserts the flow.
> Bundle DRAFT → SENT auto-flip remains independently gated on
> `linkedProposalId` so it doesn't fire when no proposal is linked.
> Friendly error message is now variant-aware: only says "Form 4A
> template" when we know the variant; otherwise says "DocuSeal
> template" so we never mislead operators into looking at the wrong
> env var. Single/Joint variants now include the env-var hint
> inline in the message ("env var
> `DOCUSEAL_FORM_4A_TEMPLATE_ID_SINGLE`") so the operator knows
> exactly which Vercel var to fix.
>
> Test contract: 4 new regression cases in `tests/signing-send.test.ts`
> ("regression guard for the wrong-template-id bug") + extended
> `docuseal-error-friendly` tests for variant-aware messages and the
> env-var hint + new `docuseal-admin-url` test for the EU domain
> (`api.docuseal.eu` → `docuseal.eu/templates/{id}/edit`). Total:
> 1981 tests across 155 suites, all passing.

> **3 May:** **Form 4A landlord-signing — strict per-variant template
> routing + actionable DocuSeal admin link.** Single and Joint Form 4A
> docx files have different layouts → they need their own DocuSeal
> templates with their own field placements. The send route used to
> silently fall back from `_SINGLE` to the Joint env var when
> `_SINGLE` was unset; that produced a legally defective notice (Joint
> field positions on a Single docx). Now strict per-variant — the
> route returns a 422 naming the missing env var instead.
>
> Pure helpers extracted: `src/lib/signing-resolve-template-id.ts`
> (template-id resolution, no I/O) +
> `src/lib/docuseal-admin-url.ts` (DocuSeal admin URL builder).
> `friendlyDocuSealError` takes `{ templateId, variant, apiUrl }`
> context and returns `adminUrl` so the API response carries a deep
> link to the DocuSeal admin page for the failing template — the
> property-tabs + property-rent-increase-section UIs render it as
> "Open template in DocuSeal admin →" beneath the error.
>
> Test contract: `tests/signing-resolve-template-id.test.ts` (24
> cases, including a regression-guard for the dropped fallback) +
> `tests/docuseal-admin-url.test.ts` (12 cases) +
> `tests/docuseal-error-friendly.test.ts` (extended) +
> `tests/signing-send.test.ts` "Form 4A variant routing" (9 new
> cases). Total: 264 tests passing across the signing/docuseal/
> rent-increase suites. UAT entries BC7–BC9 in
> `docs/uat-checklist.md`. Runbook section 8 updated to drop the
> "backward-compat fallback" guidance and call out that both env
> vars are required.

> **1 May (latest +17):** **Operating principles codified at top of
> CLAUDE.md (commit e923344).** Five non-negotiable rules pinned
> as the canonical regression-discipline contract for every future
> change:
>
> - **(a) Think like a 5-year-old user.** Surfaces must have
>   guardrails, minimum clicks to value, defaults sourced from live
>   data (never hardcoded), and disabled buttons that explain why
>   they're disabled. No silent failures, no "you should've known".
> - **(b) Write once, propagate everywhere.** One canonical writer
>   per entity (`upsertProperty`, `syncCurrentOwnership`,
>   `syncCurrentTenancyPeriod`, `kvSet`, …). One resolver per
>   derived fact (`resolveLandlordForProperty`,
>   `resolveEffectivePlan`, `getCurrentOwnershipFrom`,
>   `shouldRequireGasSafety`, …). Two places must never hold the
>   same fact.
> - **(c) Workflow tests walk the full path.** Every shipped
>   workflow needs a golden-path test, a detour-and-return test
>   (cancel / decline / refer / supersede paths), and a
>   regression-guard test pinning the bug we just fixed.
> - **(d) Standard Delivery Procedure applies regardless of size.**
>   Even a 15-min one-file fix needs unit tests, UAT entry, doc
>   updates, and a PR — scaled appropriately, never skipped.
> - **(e) Hold the system map in your head before touching code.**
>   Read the relevant CLAUDE.md sections + the helper + the route +
>   the test contract BEFORE editing. Final-stages regression
>   discipline — the bar goes up, not down, as the codebase grows.

> **1 May (latest +16):** **Auto-renewal relocated to portal Accept
> route (commit 5e97105).** When tenant clicks Accept on the portal
> Rent Increase Proposal panel, `/api/portal/rent-increase/respond`
> now fires `generateRenewalDraftFromProposal` immediately after the
> AGREED transition lands — renewal AST DRAFT auto-appears in the
> property Documents tab so the landlord can send it to all parties
> for parallel DocuSeal signing. Webhook Case B (renewal SIGNED) is
> unchanged: flips AGREED → COMPLETED + opens new TenancyPeriod at
> the new rent via `syncCurrentTenancyPeriod`. Best-effort: AGREED
> transition writes to KV first; renewal-generation failure is
> caught and logged so it never blocks the tenant's accept.
> **Supersedes** the Wave 3 plan (latest +4 above) which fired the
> renewal draft from the Form-4A DocuSeal SIGNED webhook — moot
> after the landlord-pre-sign reshape (latest +15 below) moved
> tenant accept out of DocuSeal entirely.

> **1 May (latest +15):** **Form 4A landlord-pre-sign reshape
> (commits 80a96ed, 14f55a7, e31fcfd).** Section 13(2) Housing Act
> 1988 requires a landlord-served notice — the original Wave 3
> design (tenant signs Form 4A in DocuSeal, webhook flips to AGREED)
> was statutorily wrong. Reshape:
>
> - **Landlord signs Form 4A FIRST in DocuSeal.** The DocuSeal
>   template now has a single Landlord role; the tenant role was
>   removed. The send route uses
>   `DOCUSEAL_FORM_4A_TEMPLATE_ID` (Joint) +
>   `DOCUSEAL_FORM_4A_TEMPLATE_ID_SINGLE` (Single, falls back to
>   Joint env var if unset) — per-variant env vars so the Single
>   template's field placement is independent.
> - **Tenant auto-emailed the signed PDF on webhook.** New
>   `sendForm4ASignedEmail` Resend wrapper fires from the webhook
>   handler with the freshly-downloaded signed-Form-4A bytes
>   attached.
> - **Tenant responds via portal panel** (Accept / Decline / Refer
>   to Tribunal) — no DocuSeal sign by tenant. Portal panel from
>   Wave 2 carries the response; the landlord-pre-sign reshape is
>   purely about WHO signs the Form 4A itself.
> - **Wave 3 webhook handler `handleRentIncreaseSignedTransition`
>   Case A retargeted:** was "tenant SIGNED Form 4A → SENT → AGREED";
>   is now "landlord SIGNED Form 4A → DRAFT → SENT + email tenant
>   the signed PDF". New `markLandlordSignatureRequested`
>   state-machine helper supports the DRAFT → (landlord signing
>   pending) sub-state cleanly.

> **1 May (latest +14):** **Documents tab Form 4A modal fork
> (commits 0de218b, 3619d91).** "Send to landlord for signature"
> button is now enabled for `RENT_INCREASE_NOTICE` doc type with a
> full modal fork distinct from the tenancy-agreement send flow:
> title "Send Form 4A to landlord for signature", helper text drops
> the joint-AST-countersign reference, the DocuSeal Template ID
> input is hidden (Form 4A uses env var only — no per-send
> override), submit button label "Send to landlord for signature".
> Landlord row prefilled from the resolved landlord (via
> `resolveLandlordForProperty`); no tenant rows.

> **1 May (latest +13):** **Dashboard Compliance Alerts grouped by
> property (commit 39e97aa).** Replaces the cramped vertical list
> with a responsive 1/2/3-col grid, sorted urgent-first, grouped by
> property name. Each property card shows its alert items inline so
> the user can scan compliance status across the portfolio at a
> glance instead of reading a long flat list.

> **1 May (latest +12):** **Multi-tenant joint email persistence fix
> (commit d75ff22).** `cleanContactsForStorage` in
> `src/lib/tenancy-contacts.ts` no longer dedupes joint-tenant
> rows by email — multiple joint tenants sharing one inbox is a
> valid real-world case (couples, families). Previously the second
> tenant's name silently disappeared on save. Test:
> `tests/multi-tenant-persistence.test.ts`.

> **1 May (latest +11):** **RRA dispatch live tenant names (commit
> dd16ee3).** New pure helper `formatTenantNamesForDispatch` at
> `src/lib/rra/tenant-display-name.ts` reads `Tenancy.contactDetails`
> (the live joint-tenant array) instead of stale
> `TenantUser.displayName`. RRA dispatch emails + audit log now
> always reflect the current tenant roster even after a contact-list
> edit. Tests: `tests/rra-tenant-display-name.test.ts`.

> **1 May (latest +10):** **SoTT preview X-Frame-Options DENY →
> SAMEORIGIN (`next.config.ts`).** Root cause of the
> "Vercel can't connect" iframe-preview failure: the global
> `X-Frame-Options: DENY` header blocked every same-origin iframe
> used by `PdfPreviewModal` (Statement of Tenancy Terms,
> tenancy-agreement wizard, Form 4A preview). Flipped to
> `SAMEORIGIN` — still blocks third-party clickjacking. Test:
> `tests/next-config-security-headers.test.ts`. Pattern locked in
> CLAUDE.md "Iframe-based PDF previews" section: any future
> tightening back to DENY MUST add per-route header overrides on
> the PDF preview routes first.

> **1 May (latest +9):** **DocumentType enum migrations
> 20260501000002 + 20260501000003 (P0 fix).** The Postgres enum was
> missing values that the app code already referenced — uploads
> were failing on prod with `invalid input value for enum`.
> Migrations add `RENT_INCREASE_NOTICE`, `STATEMENT_OF_TERMS`, and
> 13 HMO doc types (FRA, fire alarm, EICR_HMO, etc.). New
> regression test `tests/document-type-enum-sync.test.ts` parses
> `prisma/schema.prisma` + `src/types/index.ts` and fails if either
> drifts. Wizard auto-attach is now template-aware via
> `templateFilenameToDocType` in `src/lib/template-doc-type.ts` —
> replaces the hardcoded `'TENANCY_AGREEMENT'` so newly-added
> template families file under the correct DocumentType
> automatically.

> **1 May (latest +8):** **DocuSeal sync scripts + 10-step runbook
> for Form 4A.** New `npm run docuseal:sync-form-4a` uploads both
> Single + Joint Form 4A docx as fresh DocuSeal templates and
> prints next-steps copy for the per-variant env vars
> (`DOCUSEAL_FORM_4A_TEMPLATE_ID` Joint,
> `DOCUSEAL_FORM_4A_TEMPLATE_ID_SINGLE` Single). New runbook
> `docs/docuseal-form-4a-setup.md` — 10-step Word-by-Word
> interactive guide for the unavoidable manual post-upload step
> (Landlord role + Signature field + Date field placement). Sync
> runbook table in CLAUDE.md "Tenancy templates" section now lists
> AST + Form 4A side-by-side.

> **1 May (latest +7):** **UK-structured address layout for Form 4A
> placeholders.** New `splitAddress(addr, mode='uk-structured')` in
> `src/lib/template-prefill.ts` — line 1/2 = street, line 3 = town,
> line 4 = postcode/county. Detects + drops the trailing UK
> postcode so it doesn't double-render. `buildPrefillMap` now
> ALWAYS populates BOTH `[Enter Tenant Name]` AND
> `[Enter Tenant 1 Name]` for the primary contact (Runcorn fix —
> the Form 4A Single template uses the numbered placeholder while
> the AST single template uses the bare one; supplying both keeps
> a single prefill builder driving both template families).

> **1 May (latest +6):** **Plain-English status labels for proposals.**
> `STATUS_BADGE` map in `src/lib/rent-increase/status-display.ts`
> updated for landlord-facing copy: DRAFT = "Rental proposal
> generated", SENT = "Sent — awaiting tenant", AGREED = "Acknowledged
> by tenant" (was "Agreed"). New
> `ACKNOWLEDGED_NEXT_STEP_CTA = 'Generate tenancy agreement with
proposed terms'` reused on the property tab + portal so the next
> action stays consistent across surfaces. Existing
> `tests/rent-increase-status-display.test.ts` updated to lock the
> new labels.

> **1 May (latest +5):** **Mid-year ownership transfer — Kirby Close
> 26 Feb 2026 split + always-visible transfer date + audit script.**
>
> User reported transferring Kirby Close to MAR Property Co. Ltd
> on 26 Feb 2026 and asked for: (a) visibility of the transfer date
> on the edit panel after save, and (b) the SA105 to show 10 months
> of personal income while CT600 picks up the remaining ~2 months.
>
> - **Edit-property-panel transfer date — always visible.** Section
>   now renders for every property regardless of whether the user
>   has changed `ownershipType` / `companyId`. Read-only when no
>   structural change is in flight (shows "Currently transferred on
>   {effectiveFrom}" + a "Correct via Transfer ownership →" link to
>   the audit-trail-safe dedicated flow). Editable when the user IS
>   changing structural fields, defaulting to the open period's
>   effectiveFrom rather than today. Hidden field made visible.
> - **Kirby Close 2025-26 partial-year SA105 entry**
>   (`kirbyClose_2526` in `src/lib/tax-data.ts`): 10 months of rent
>   (Apr 2025 → Jan 2026 = £14,500) + £0 for Feb/Mar 2026.
>   Mortgage matches (10 months personal + £0 post-transfer; new
>   company-side mortgage starts 2026-03-01 per `Property.mortgage`).
>   Lump-sum service charge + ground rent (paid in April) stay
>   personal. Comment block at the previous "Kirby removed for
>   2025-26" location updated to point at the new entry.
> - **`npm run ownership:audit [propertyId] [taxYear]`** —
>   generic CLI tool that works for any property (Horns Road,
>   Lampits, Kirby, etc.). With no args, prints a one-line summary
>   per property flagging which ones have transitioned (⚡). With a
>   `propertyId`, dumps the denormalised columns +
>   `PropertyOwnership` timeline + tax-data.ts entry + expected
>   month-split.
> - **Regression guard** — `tests/kirby-close-split-2526.test.ts`
>   (8 cases) locks the partial-year entry shape: 10 non-zero
>   income months, totalRentIncome = £14,500, status PROJECTED,
>   2024-25 ACTUAL preserved. Prevents a future tax-data refactor
>   from silently re-removing Kirby from the personal SA105.
> - **Pattern locked** in `CLAUDE.md` "Mid-year ownership transfers"
>   section — every future mid-year transfer needs the
>   `PropertyOwnership` row + partial-year tax-data.ts entry +
>   regression test, with `npm run ownership:audit` as the verifier.

> **1 May (latest +4):** \*\*Form 4A Rent Increase Proposal — Waves 2
>
> - 3 (UI + DocuSeal auto-flip + auto-renewal + E2E) + SoTT preview
>   P1 fix + RRA resend legal-requirement regression test.\*\*
>
> _Note (superseded later same day):_ The Wave 3 DocuSeal auto-flip
> on tenant signature was REPLACED by the Form 4A landlord-pre-sign
> reshape (see latest +15 below) — Section 13(2) requires a
> landlord-served notice, so the tenant no longer signs in DocuSeal.
> The auto-renewal trigger was RELOCATED from the Form-4A SIGNED
> webhook to the portal Accept route (see latest +16 below). The UI
> bullets, helpers, and E2E coverage from this entry remain accurate.
>
> - **Wave 2 — UI:**
>   - Property tab "Rent Increase Proposals" section
>     (`src/components/property/property-rent-increase-section.tsx`):
>     create proposal modal, generate-and-send pipeline (auto-picks
>     Single/Joint Form 4A template, prefills, uploads as
>     `RENT_INCREASE_NOTICE`, opens send modal with `linkedProposalId`
>     pre-set so `/api/signing/send` auto-flips DRAFT → SENT), cancel
>     with confirm, history list of past attempts.
>   - Portal panel on `/portal/documents` (only when
>     `bundle.current.status === 'SENT'`): three action buttons
>     (Accept / Decline / Refer to Tribunal) with confirm card +
>     2000-char optional note textarea. Validator
>     `validatePortalAction(input)` in
>     `src/lib/rent-increase/portal-action-validate.ts`.
>   - Pure helpers shared by both surfaces:
>     `pickForm4ATemplate`, `buildForm4APrefillMap`, `STATUS_BADGE`
>     map, `formatProposalSummary`.
> - **Wave 3 — DocuSeal webhook auto-flip + auto-renewal:**
>   - `handleRentIncreaseSignedTransition(envelopeId, envelope, deps)`
>     in `src/lib/rent-increase/webhook-handlers.ts` — Case A: Form
>     4A SIGNED → AGREED + auto-generates renewal Tenancy Agreement
>     DRAFT envelope; Case B: renewal SIGNED → COMPLETED + opens new
>     TenancyPeriod via `syncCurrentTenancyPeriod`. Idempotent via
>     status guards. Best-effort failures caught in-helper.
>   - `generateRenewalDraftFromProposal(...)` in
>     `src/lib/rent-increase/auto-renewal.ts` — resolves landlord/
>     contacts, picks Single vs Joint AST, prefills with new rent +
>     effective date, renders DOCX via shared
>     `src/lib/template-generate.ts::renderDocxTemplate`, uploads to
>     private Vercel Blob, creates DRAFT envelope.
>   - Webhook integration in `src/app/api/signing/webhook/route.ts`
>     wrapped in defensive try/catch so rent-increase failures
>     never break the signing webhook.
> - **Wave 3D — E2E:** `e2e/tests/rent-increase/proposal-flow.spec.ts`
>   (7 cases) covers landlord propose+cancel + tenant ACCEPT /
>   DECLINE / REFER_TRIBUNAL + 3 validation guards (rent ≤ original,
>   effective date ≤ start date, second open proposal). Fixtures in
>   `e2e/fixtures/test-data.ts` + seed in `e2e/seed/seed-test-db.ts`.
> - **+41 unit tests** (form-4a-generation 10, status-display 9,
>   portal-action-validate 10, store-followup-lookup 4,
>   webhook-integration 8). Total 1848 passing across 146 suites
>   (was 1807 across 141).
> - **SoTT preview "Vercel can't connect" P1 fix
>   (`next.config.ts`):** root cause was global
>   `X-Frame-Options: DENY` blocking every same-origin iframe used
>   by `PdfPreviewModal`. Affected ALL in-app PDF previews (SoTT,
>   tenancy-agreement wizard, future Form 4A preview), not just
>   SoTT. Flipped to `SAMEORIGIN` — still blocks third-party
>   clickjacking. New regression guard
>   `tests/next-config-security-headers.test.ts`. **Pattern lock:**
>   any future tightening back to DENY MUST add per-route header
>   overrides on the PDF preview routes first.
> - **RRA resend PDF-attachment legal-requirement regression
>   guard:** added to `tests/rra-routes.test.ts` (1 new case).
>   Asserts that on the second send (resend within the 60s window)
>   `readInfoSheetBytes` is called AGAIN and `sendInfoSheetEmail`
>   is invoked with the same statutory bytes — both invocations
>   carry the actual `public/templates/...Information_Sheet_2026.pdf`
>   buffer. Locks the £7,000-penalty defence so a future refactor
>   that splits the resend into its own handler can't silently drop
>   the attachment.

> **1 May (latest +3):** **Form 4A Rent Increase Proposal — Wave 1
> backend foundation + billing super-user-bypass P1 fix.**
>
> - **Form 4A workflow Wave 1:** State machine + KV store + 5 API
>   routes (landlord create/cancel + tenant view/respond +
>   `linkedProposalId` wired into `/api/signing/send` for
>   auto-mark-SENT). State machine in `src/lib/rent-increase/state.ts`
>   models `DRAFT → SENT → AGREED|DECLINED|TRIBUNAL_REFERRED|
SUPERSEDED → COMPLETED` with locked (status, eventKind) wrapper
>   functions. KV bundle at `rent-increase-proposal:{propertyId}` —
>   one open `current` proposal + immutable `history`. Pure module
>   (caller passes `now: string`) for trivially deterministic tests.
>   **+64 unit tests** (`tests/rent-increase-state.test.ts` 46 cases,
>   `tests/rent-increase-store.test.ts` 12 cases,
>   `tests/billing-superuser-bypass.test.ts` 6 cases).
>   **Plan deviations from architecture §34.5:** went KV (no new
>   Prisma model / migration — mirrors RRA / lease-renewals); no
>   BUSINESS-only feature gate (workflow is core landlord
>   functionality, not a tier-locked add-on); statuses renamed for
>   RRA-alignment (`PROPOSED→DRAFT`, `EXPIRED→SUPERSEDED`, etc.).
>   **Wave 2** = property tab UI + portal accept/decline UI.
>   **Wave 3** = DocuSeal webhook auto-flip on tenant signature +
>   auto-generated tenancy-agreement renewal draft + E2E.
> - **Billing super-user-bypass P1 fix:** User reported as admin
>   they were still capped at the FREE workspace plan on
>   `/settings/billing` (Properties 9/3 in red, Users 4/1 in red)
>   despite the 1 May super-user-bypass landing for feature gates +
>   usage caps. Root cause: `/api/billing/route.ts` returned the
>   raw `subscription.plan` + raw column limits without applying
>   `resolveEffectivePlan`. Fix: route now computes `effectivePlan`,
>   uses `PLAN_LIMITS[effectivePlan]` + `PLAN_DISPLAY[effectivePlan]`,
>   and exposes `superUserBypass: boolean` + `actualPlan` so the page
>   renders an honest blue "Admin override" banner above the Current
>   Plan card and hides the Upgrade Options card when bypassed.
>   Pattern lock: any new surface that needs to render plan-tier
>   info MUST consume `resolveEffectivePlan(user.role,
subscription.plan)`, never the raw `subscription.plan`.

> **1 May (latest +2):** **Form 4A rent-increase template wiring (PR #41).**
> Statutory Section 13(2) Housing Act 1988 rent-increase notice
> integrated into the wizard + auto-attach pipeline. **Document side
> only** — the full workflow (state machine, portal page, webhook
> auto-flip) shipped in Wave 1 above.
>
> - New `RENT_INCREASE_NOTICE` DocumentType + property dropdown +
>   portal label + portal `TENANT_VISIBLE_DOC_TYPES` allowlist.
> - Filename → DocumentType routing helper
>   (`src/lib/template-doc-type.ts`) — wizard auto-attach now files
>   Form 4A under the correct type instead of hardcoded
>   `TENANCY_AGREEMENT`.
> - Form 4A prefill: `[Enter Original Rent Amount]` ← `Tenancy.rentAmount`,
>   `[Enter Original Tenancy Start Date]` ← `Tenancy.moveInDate`.
>   The "New" fields are deliberately NOT prefilled.
> - Original blank Form 4A archived; Single + Joint variants are the
>   active templates.
> - 49 new test cases / 138 suites / 1743 tests passing.

## Next session

### Playwright tutorial-recording pipeline (raised 5 May 2026 +2)

**Status:** Captured as follow-up; not built yet. User asked
whether the UAT checklist could be served by Playwright recordings
and reused as marketing tutorials.

**Current state:** `e2e/playwright.config.ts` has
`video: 'on-first-retry'` — videos only appear on flaky retries
into `e2e/test-results/` (gitignored, wiped each run). 48 spec
files exist; many already cover UAT golden paths end-to-end.

**Scope when picked up:**

1. Tag tutorial-grade specs (a `@tutorial` test annotation or a
   separate Playwright project) and switch `video: 'on'` for those
   only. Keep unit-level specs lightweight.
2. Post-run script (`scripts/persist-tutorial-recordings.ts`) that
   walks `e2e/test-results/`, copies the `.webm` videos under
   stable names (`{spec-name}.webm`), uploads to Vercel Blob using
   the existing `BLOB_READ_WRITE_TOKEN`, and writes a manifest
   JSON the marketing app can fetch.
3. **Marketing-app integration** — repo is
   `https://github.com/AntJones1977/property-marketing-site`.
   Proposed contract (Claude Code's GitHub MCP scope is
   restricted to the property-app repo so the marketing-side
   wiring needs to land in a session with broader scope OR be
   done by a human; the contract here is what each side
   produces / consumes):
   - **property-app produces:** uploads each tutorial `.webm`
     (and optional `.mp4` transcoding for Safari/iOS compat) to
     Vercel Blob under a stable namespace
     `tutorials/{spec-slug}/v{n}.webm`. Writes a manifest at
     `tutorials/manifest.json` with shape:
     ```
     {
       "version": "2026-05-05",
       "tutorials": [
         {
           "slug": "form-4a-end-to-end",
           "title": "Form 4A — landlord pre-sign → tenant accept → renewal AST",
           "specPath": "e2e/tests/rent-increase/proposal-flow.spec.ts",
           "videoUrl": "https://blob.vercel-storage.com/tutorials/form-4a-end-to-end/v1.webm",
           "mp4Url": "https://blob.vercel-storage.com/tutorials/form-4a-end-to-end/v1.mp4",
           "durationSeconds": 47,
           "createdAt": "2026-05-05T18:00:00Z"
         }
       ]
     }
     ```
   - **marketing-site consumes:** fetches the manifest at
     build-time (Next.js `generateStaticParams` or similar) and
     renders an MDX page per tutorial that embeds the video via
     a `<TutorialVideo videoUrl={...} mp4Url={...} />` component.
     The MDX file lives under `app/tutorials/[slug]/page.mdx` (or
     equivalent in the marketing-site's routing convention).
     Static-build-time fetch keeps the marketing site decoupled
     from any property-app runtime, and it's CDN-friendly.
   - **Versioning:** if a spec changes, bump `v1.webm` → `v2.webm`
     in the manifest; the marketing site will pick up the new url
     on its next build. No coordinated cross-repo deploy required.
4. Optional v2: inject visible step-banners during the test
   (`page.evaluate` to show "Step N: Click X") so the silent
   recordings are self-explanatory without voiceover. Or pivot to
   annotated screenshot strips for written docs.

**Marquee specs to start with** (proposed):

- `e2e/tests/rent-increase/proposal-flow.spec.ts` — full Form 4A
  end-to-end (propose → landlord sign → tenant accept → renewal
  AST drafted → all parties sign → COMPLETED).
- A new `e2e/tests/signing/joint-ast.spec.ts` if not present —
  send for signing, all 3 parties sign sequentially.
- A dashboard tour spec — show the alerts grouping, compliance
  matrix, growth plan snapshot.

### Form 4A RentIncreaseProposal — final follow-ups

**Status:** Waves 1 + 2 + 3 ✓ shipped 1 May 2026. Outstanding
follow-ups (small):

- DRY pass: the `/api/templates/generate` route still owns its
  inlined PizZip + escapeXml logic. Wave 3 extracted the same
  logic into `src/lib/template-generate.ts::renderDocxTemplate` for
  reuse, but didn't refactor the route to delegate. ~5-min cleanup
  task.
- Portal "View Form 4A notice" deep link: the proposal panel
  references the document via copy ("see Rent Increase Notice
  section below") rather than a direct deep link, because the
  proposal stores `signingRequestId` (not `documentId`). Either
  store the document id on the proposal or join via `SigningRequest
→ documentId` lookup at render time. Low priority.
- Auto-expire cron (1-month statutory window) — re-evaluate after
  user has time to react manually.

---

> **1 May (latest +1):** **Tenancy history Phase 1 + RRA-compliant
> templates + RRA wrong-PDF P0 + SoTT re-send badge.**
>
> - **P0 fix (`ff8385c`):** RRA dispatch EMAIL was attaching a
>   jspdf cover letter under the Info Sheet filename. Routed
>   through `readInfoSheetBytes()`. Recovery script
>   `npm run rra:redispatch` re-sends to affected tenants.
> - **TenancyPeriod schema + helper:** mirror of PropertyOwnership.
>   Backfills one open period per Tenancy. `syncCurrentTenancyPeriod`
>   closes/opens periods on structural rent/deposit/contact changes.
>   Soft-FK `signingRequestId` records the envelope that triggered
>   the renewal.
> - **Property route plumbing:** PUT/PATCH peel
>   `tenancyEffectiveDate` + `linkedSigningRequestId` and forward
>   to the sync helper. New GET tenancy-history route.
> - **Phase A rental-income:** last-resort branch sums
>   `period.rentAmount × monthsActive` — mid-year rent changes
>   split correctly across SA105 / CT600 / MTD.
> - **SoTT re-send badge:** `needsStatementOfTermsResend` derives
>   needsResend on the state route; UI shows amber badge.
>   Auto-dispatch NOT performed (tenant-spam concern).
> - **PDF preview modal** for SoTT: in-page modal so the landlord
>   can verify rent/deposit against the new agreement before
>   clicking Resend.
> - **RRA Assured Periodic Tenancy templates** auto-discovered;
>   old AST templates archived; Word's NBSP variants normalised.
>   DocuSeal re-sync via `npm run docuseal:sync-rra`.
>
> Phase 2 deferrals (next session):
>
> - Edit-panel UI for `tenancyEffectiveDate` + envelope picker
>   (backend accepts both today; renewals default to "today")
> - Tenancy history panel + Overview "since" line
> - Wizard tenancy-agreement PDF preview
> - **Form 4A rent-increase workflow** — Wave 1 backend shipped
>   1 May (latest +2). Wave 2 (property tab UI + portal
>   accept/decline UI) and Wave 3 (DocuSeal webhook auto-flip +
>   auto-tenancy-agreement-renewal-draft + E2E) still outstanding.

> **1 May:** **Super-user role bypass on plan gates.** User
> reported that as the admin / super-user they were being restricted
> by the workspace's plan tier — locked out of features they need to
> operate (and upgrade) the system from. New pure helper
> `src/lib/effective-plan.ts` exports `resolveEffectivePlan(role,
workspacePlan)` (returns `BUSINESS` for `owner`/`admin`),
> `isUsageAllowed(role, used, limit)` (bypasses caps for the same
> roles), and `isSuperUserRole(role)`. Wired into `requireFeature`
>
> - `hasFeature` (`src/lib/feature-gate.ts`), `/api/auth/me`
>   (so the client `<FeatureGate>` payload mirrors the server),
>   `getBankingPlanStatus` (`src/lib/banking/plan-gate.ts`), and
>   the per-user usage caps on `/api/signing/send` +
>   `/api/receipts/scan`. Out of scope: `/api/auth/accept-invite`
>   seat caps still apply uniformly (admins shouldn't be able to
>   over-seat the workspace by inviting beyond the cap). New
>   `tests/effective-plan.test.ts` (28 cases) + super-user bypass
>   coverage added to `tests/feature-gate.test.ts` and
>   `tests/banking-plan-gate.test.ts`. Architecture §32.

> **30 Apr (latest +9):** **Tenancy-template attach now uploads to
> the private Vercel Blob store.** User reported "Couldn't attach
> to {Property} → Documents — Vercel Blob: Cannot use public access
> on a private store" when generating an AST from `/templates`
> with the auto-attach toggle on. The DOCX downloaded locally but
> the attachment failed. Root cause: the production Blob store has
> been reconfigured as private, but `src/app/api/documents/route.ts`
> and `src/app/api/signing/webhook/route.ts` still called
> `put(..., { access: 'public' })`. The v2 SDK rejects that
> combination. Fix: both routes now upload with
> `access: 'private'`. Existing download flows already proxy
> through `/api/documents/[id]` and
> `/api/portal/documents/[id]/download` with a
> `BLOB_READ_WRITE_TOKEN` Bearer header, so private blobs work
> end-to-end. New regression test
> `tests/blob-uploads-private-access.test.ts` pins the contract
> by static source analysis — fails if a future commit flips
> either route back to public access.

> **30 Apr (latest +8):** **Compliance matrix now merges
> PropertyDocument with HMO bundle events.** User reported that
> Cranbrook's EICR PDF (uploaded via the Documents tab, expiry
> 11 Jul 2029) showed "Valid" on the property detail Compliance
> Checklist + dashboard alerts but "No record" on `/compliance`.
> Root cause: the matrix only read `bundle.complianceEvents`
> from the per-property HMO bundle — `PropertyDocument` rows were
> ignored entirely. Pure helper `pickLatestCertEvidence` in
> `src/lib/compliance-source-merge.ts` merges the two sources
> for the three cert categories (GAS / EICR / EPC); HMO-only
> categories keep the bundle-only path. Tie-breaker on the
> renewal date (event.performedDate vs document.uploadDate).
> Tooltip on each cell identifies the winning source so the user
> can audit the badge. 12 new unit tests; UAT section AP.D added
> (7 scenarios). Auto-trigger note: the page already re-fetches
> on every mount so doc uploads now take effect on the next visit
> with no manual refresh dance.

> **30 Apr (latest +7):** **Tenancy email change auto-syncs to
> TenantUser.email.** User reported that updating a tenant's email
> on the property's Tenancy form fixed `Tenancy.contactDetails`
> but the matching `TenantUser` row kept its old email — so the
> property detail Documents tab RRA panel + RRA dispatch on
> `/compliance/rra` + portal-account login all kept showing the
> stale address. Pure helper `planTenantUserEmailSync` in
> `src/lib/tenant-user-email-sync.ts` matches each active
> TenantUser on the tenancy to a single contact by trimmed/lower
> display name, then plans the email update with collision-checks
> against the `email @unique` schema constraint. Wired into both
> PUT and PATCH `/api/properties/{id}` routes — fires whenever
> the body includes `tenancy.contactDetails`. Audit log records
> `SYNC_TENANT_USER_EMAIL` per change with `previousEmail`.
> 12 new unit tests; UAT section AQ.C added (8 scenarios).

> **30 Apr (latest +6):** **Archive tenant-portal accounts from
> the RRA dispatch list.** User reported two test rows
> ("Raj"/"raj2" on Cranbrook Road) cluttering `/compliance/rra`
> and asked for archive (preferred for audit) or delete. New
> soft-delete path: pure helper `planArchiveTenantUser` in
> `src/lib/tenant-archive.ts` returns ARCHIVE / UNARCHIVE / NOOP
> transitions; new POST route `/api/tenants/[tenantUserId]/archive`
> with `{ archived: boolean }` body (editor role); RRA dispatch
> table gains a per-row archive icon with confirm dialog +
> optimistic row removal. The TenantUser row is preserved
> (`isActive=false`) so RRA dispatch history, maintenance
> request authorship, signing audit log etc. all stay
> reconstructable. Distinct from `anonymizeTenantUser` (GDPR
> erasure path that also redacts PII). Audit-log entries
> `ARCHIVE_TENANT_USER` / `UNARCHIVE_TENANT_USER` record the
> previous state. 5 new unit tests, UAT section AQ.B added (8
> scenarios). Restore is via API for now — admin UI for the
> archived list can land as a follow-up.

> **30 Apr (latest +5):** **Resend Invite button stays visible
> after Portal Active.** Follow-up to (latest +3) — user updated
> a tenant's email and went to `/tenants` to re-issue credentials,
> but the Resend Invite button had been replaced entirely by a
> static "Portal Active" success badge once the tenant had
> logged in. The previous condition only showed Resend when
> `hasPortalUser && !hasLoggedIn`. /tenants row now renders the
> Portal Active badge + Resend Invite button together when the
> account is logged-in-active — admins can re-issue credentials
> at any point in the lifecycle (typo fix, tenant changed
> providers, password reset). UAT entry AQ9 added.

> **30 Apr (latest +4):** \*\*Tenancy edit silent-save bug fixed
>
> - comma `Tenant Names` input removed.\*\* User reported that
>   editing a tenant's name in the edit-property panel and saving
>   appeared to silently fail — the property tile, Tenancy tab,
>   dashboard, and banking-match all kept showing the old name.
>   Root cause: a legacy "Tenant Names (comma-separated)" text
>   input pre-filled from `tenancy.tenantNames` was prioritised
>   over the per-tenant contact rows on save, so editing a contact
>   row's name without also touching the comma field wrote the
>   OLD name back into `tenantNames` (which most read surfaces
>   consume) while `contactDetails` quietly held the new name.
>
> Per user direction, the comma input is now removed entirely —
> per-tenant contact rows are the single source of truth. Pure
> helper `deriveTenantNames(storageContacts)` in
> `src/lib/tenancy-tenant-names.ts` derives the data column from
> contacts on save. The data column itself is preserved (still
> read by banking-match, RRA Statement of Terms, /tenants list,
> property tile, etc.) and legacy multi-tenant data
> (`tenantNames=["John","Jane"]` but no `contactDetails`) now
> seeds N contact rows on form-load instead of truncating to
> the first name.
>
> 7 unit tests on the helper + UAT entries U.A8 / U.A9 / U.A10.

> **30 Apr (latest +3):** **Tenant-portal resend invite now
> handles email changes.** User reported: admin had typo'd a
> tenant's email at first invite, fixed it on the tenancy, then
> clicked Resend Invite and got 404 — because the route looked up
> the TenantUser by email (still pointing at the typo). Route
> now looks up by `propertyId` instead; the modal's email field
> is editable in resend mode; new pure helper `planResendInvite`
> decides whether to sync email / displayName against the
> existing record and guards against collisions with the
> `TenantUser.email @unique` schema constraint. New audit field
> `previousEmail` lands in `RESEND_TENANT_INVITE` events when
> the email actually changed. 11 new unit tests, UAT section AQ
> added (8 scenarios).

> **30 Apr (latest +2):** **Templates wizard auto-attach —
> stop misleading the user when the upload silently fails.**
> User reported that creating a joint AST for "Lampits" with
> the "Save to property" checkbox ticked left the doc not
> appearing on the property's Documents tab, despite the
> green success banner claiming it had been attached. Root
> cause: the success banner was driven by the user's _intent_
> (`selectedProperty && attachToProperty`), not by the actual
> attach result — `setGenerated(true)` fires before the
> attach POST resolves, and the toast that does report the
> error auto-dismisses. New `attachResult` state distinguishes
> success / failure / not-attempted; the green "Attached to
> X" suffix only renders when the POST returned 2xx, and a
> persistent red error block surfaces the underlying error
> message + a "Retry generate + attach" button when it
> didn't. Console.error logs the status + error so the next
> investigation can paste it straight from DevTools.
> Underlying upload bug (if any) will be triaged from the
> error message the user can now see. UAT entries AO7 / AO8 /
> AO9 added.

> **30 Apr (latest +1):** **Landlord-assigned compliance —
> portfolio matrix + dashboard alert + E2E.** Follow-up wave that
> wired the same `checkLandlordAssignment` helper into two more
> surfaces so the verdict is consistent everywhere it matters:
>
> - **Portfolio `/compliance` matrix** now has a "Landlord" column
>   between "Property" and the certificate columns. Green ✓ for
>   assigned, amber "Missing" otherwise. A 4th summary card "No
>   landlord assigned" surfaces the count for the active filter.
> - **Dashboard `/dashboard` Compliance Alerts** now appends one
>   warning per ACTIVE rental property whose landlord (or linked
>   company, for COMPANY-owned) is missing. Reuses the existing
>   alert row UX so links target the property's documents tab.
> - **Playwright spec** `e2e/tests/compliance/landlord-assigned.spec.ts`
>   covers all three surfaces: property detail row flips Missing →
>   Assigned after a landlord is created via API and patched onto
>   the property; matrix shows the column + Missing badge; dashboard
>   surfaces the alert. Hermetic — sets up + tears down state via
>   API.
> - UAT sections AP.B + AP.C added (10 scenarios).
>
> **30 Apr (latest):** **Landlord-assigned compliance check.** Adds
> a per-property compliance line that surfaces whether the property
> has a landlord on record. Pure helper `checkLandlordAssignment`
> in `src/lib/landlord-compliance.ts` classifies the property as
> ASSIGNED (with source `landlord` or `company` and the resolved
> name) or MISSING with an actionable reason
> (`no-landlord` / `no-company` / `stale-landlord-ref` /
> `stale-company-ref`). Rendered as the top row of the existing
> Compliance Checklist on the property detail page (Overview tab),
> with green "Assigned: {name}" or amber "Missing" + hint. Reuses
> the existing `landlordsCache` / `companiesCache` state — eager-
> loaded on mount so the verdict appears without waiting for the
> signing form to open. 12 new unit tests, UAT section AP added.
> Possible follow-ups: surface the same check on the portfolio
> `/compliance` matrix and the dashboard compliance alerts panel —
> deferred until requested.

> **30 Apr (later evening):** \*\*Edit-property tenant save bug fix
>
> - EICR upload form a11y.\*\* Branch
>   `claude/investigate-visual-state-TMID5`. User reported that a
>   tenant added to Kirby Close via the edit-property panel was not
>   being persisted. Root cause: `normaliseContacts` (in
>   `src/lib/tenancy-contacts.ts`) silently drops any row without an
>   email, and the edit panel was routing both the storage payload
>   AND the signing payload through it — so a name-only tenant was
>   dropped from `contactDetails` AND the derived `tenantNames`
>   fallback. New helper `cleanContactsForStorage` keeps any row
>   with non-empty trimmed name OR email; `normaliseContacts`
>   remains strict for the signing pipeline (DocuSeal still requires
>   an email). 7 new unit tests, UAT entries U.A6 (revised) + U.A7
>   (regression). Same branch also resolved the DevTools
>   accessibility warnings on the property detail page's document
>   upload form (id + htmlFor + name on Document Type / Expiry Date
>   / Notes / File fields).
>
> **30 Apr (late evening):** **Financial reconciliation review +
> Phase A record-date partitioning fix + auto-attach + compliance
> refactor.** Multi-thread session on `claude/template-auto-attach-doc`
> (9 commits, all pushed). Three streams landed end-to-end:
>
> **Stream 1 — Template auto-attach + compliance refactor** (`bf956d4`,
> `7a1d5eb`, `41a27c8`):
>
> - `/templates` wizard now files the generated DOCX as a
>   TENANCY_AGREEMENT row on the picked property when "Save to
>   property" is checked. Closes the user-confused gap where
>   downloaded DOCXs weren't appearing in the property's Documents
>   tab.
> - Compliance Checklist business logic extracted from inline JSX
>   in `property-tabs.tsx` (-105 lines) into pure helper
>   `src/lib/compliance-checklist.ts` (+220 lines). 40 new unit
>   tests cover newest-doc picking, joint-aware partial-signed
>   badge, expiry handling, gas suppression, multi-version
>   regression.
>
> **Stream 2 — Financial reconciliation framework** (`49f15f9`,
> `13181e6`, `7bc4568`, `9d69ac8`):
>
> - `docs/financial-reconciliation-map.md` — 122-row inventory of
>   every UI surface that renders a £, with helper + source. 3
>   reconciliation pairs flagged as currently violated, 5 as
>   genuinely reconciled, 5 as never tested.
> - `tests/fixtures/financial.ts` — pure-data portfolio (SINGLE +
>   JOINT + COMPANY + MANAGED + mid-year-transfer property)
>   spanning the 2025-26 tax year with hand-derived
>   `EXPECTED_RENT_TOTALS` for assertion.
> - 4 reconciliation test files (`personal-vs-company`,
>   `managed-exclusion`, `cross-pane-totals`, `phase-a-rental-income`,
>   `cross-surface-invariants`) covering 65 assertions across:
>   partition invariant, MANAGED exclusion, cross-pane render
>   helpers, Phase A integration, MTD threshold consistency, CT600
>   turnover by companyId, per-property records match, quarterly
>   transfer partition.
>
> **Stream 3 — Phase A record-date partitioning fix** (`661a1ef`,
> `0bdecc4`):
>
> - Real bug discovered while writing reconciliation tests:
>   `getTaxYearRentalIncome` and `getQuarterlyRentalIncome` filtered
>   records by `Property.ownershipType` (current denormalised state)
>   not by `ownershipAt(propertyId, recordDate)`. Mid-year transfers
>   misallocated — pre-transfer rent landed on the post-transfer tax
>   surface.
> - Both helpers now route every record through
>   `ownershipKindAt(ownershipMap, propertyId, recordDate)` and
>   pro-rate recurring monthly charges via
>   `countOwnershipMonthsInPeriod`. Aligned with MTD's
>   `filterPersonalRecords` rule — single partition rule across
>   SA105 / CT600 / MTD annual + quarterly.
> - **Real-world impact**: for any transferred property,
>   pre-transfer rent now correctly appears on SA105 (PERSONAL)
>   and post-transfer rent on CT600 (COMPANY). SA105 page + MTD
>   threshold check inherit the fix automatically — both already
>   consume the helper via API routes.
>
> Test count: 1437 → **1528** (+91), 1 documented `it.skip`
> (quarterly-vs-annual records-vs-fallback semantic gap).
>
> **Known follow-up (not shipped):** the records-vs-fallback
> divergence between annual and quarterly helpers when records
> are sparse — quarterly fallback fires per-quarter, inflating
> sums. Documented in `cross-surface-invariants.test.ts` as a
> skipped test. Closing requires either records-dense fixtures
> or a helper change that propagates "property has records this
> year" into the per-quarter decision.

> **30 Apr (evening, follow-up):** **Template wizard property-aware
> prefill + Landlord E2E spec.** The `/templates` "Customise
> Agreement" wizard now exposes a "For property" picker on step 1.
> Selecting a property fills tenant names (from
> `tenancy.contactDetails`), address (split on commas with postcode
> last), and rental amount via a new pure helper
> `src/lib/template-prefill.ts::buildPrefillMap`. The user can still
> override every field. Landlord prefill is exposed on the context
> for future templates that add `[Enter Landlord …]` placeholders
> (today's templates carry landlord text in the literal). 13 unit
> tests cover address splitting + map shaping (`tests/template-
prefill.test.ts`). New Playwright spec
> `e2e/tests/settings/landlords.spec.ts` (8 scenarios) locks in the
> Landlord CRUD + API contract + wizard-picker presence.
>
> **Path B (DocuSeal-template `values` field-prefill) deferred** —
> noted as future-idea #50 with full resume conditions. The
> wizard-DOCX-upload path already covers the common case; field-
> prefill couples code to live DocuSeal field names and is risky
> until we have a stable schema.
>
> 1424 → **1437** unit tests passing.

> **30 Apr (evening):** **Landlord Reference Data shipped.**
> Closes the follow-up flagged when the Landlord countersigner
> landed earlier today. Landlord identities now live in the same
> KV-store / Settings → Reference Data pattern as Limited Companies,
> can be set once and assigned to property tiles, and drive the
> joint-AST signing send prefill via a pure resolver.
>
> **What shipped:**
>
> - **Schema:** `Property.landlordId` soft FK column (migration
>   `20260430000001_add_property_landlord_id`). Mirror of `companyId`.
> - **Type:** `Landlord` interface in `src/types/index.ts` (id,
>   name, email, phone, address lines 1–4, postcode, notes,
>   timestamps).
> - **Store:** `src/lib/landlords-store.ts` (KV-backed CRUD
>   helpers + `landlordIdFromName` slug helper, mirror of
>   `companies-store.ts`).
> - **Pure helper:** `src/lib/landlord-resolution.ts` —
>   `resolveLandlordForProperty(property, landlords, companies,
fallback?)` returns a normalised `{ name, email, address }`
>   regardless of ownership type. Single source of truth for the
>   joint signing prefill and (future) AST template generator.
>   `shouldShowLandlordPicker(ownershipType)` drives the form
>   conditional.
> - **APIs:** `/api/landlords` (GET/POST) and
>   `/api/landlords/[id]` (GET/PATCH/DELETE). Editor-role for
>   writes, readonly for reads. Delete cascade-nulls
>   `Property.landlordId` (soft FK semantics — no block-on-FK).
> - **Pages/components:** `/settings/reference-data/landlords`
>   page (list + add/edit/delete dialog, mirror of Companies
>   page). New tile on the Reference Data hub. Add-property +
>   edit-property forms gain a Landlord dropdown when
>   `ownershipType !== 'COMPANY'`. Signing send panel
>   (`property-tabs.tsx::openSigningForm`) prefills the Landlord
>   row via the resolver, falling back to the logged-in user.
> - **Tests:** 11 unit tests in `tests/landlord-resolution.test.ts`
>   (all 4 ownership types, fallback paths, address joining), 11
>   in `tests/landlords-store.test.ts` (CRUD + slug-with-collision).
>   Total moved 1385 → **1424**.
>
> **Follow-up:** the AST template generator at
> `/api/templates/generate` does not yet read landlord address
> fields — they go in once the user populates `[Enter Landlord
Address …]` placeholders in the DOCX. Helper is ready; just a
> wiring change in the wizard.
>
> **30 Apr (afternoon):** **Document upload P0 fix —
> `access: 'public'` on Vercel Blob `put`.** Both `/api/documents`
> POST and the DocuSeal signed-PDF webhook handler called
> `put(..., { access: 'private' })`. Private blobs are a
> paid/enterprise tier on Vercel Blob — standard stores reject the
> value at runtime. Bug had been latent since the upload route was
> first written; **no document upload had ever worked in
> production**. Flipped both to `access: 'public'` +
> `addRandomSuffix: true` (URL is stored in the DB and only served
> to authenticated users; random suffix makes it unguessable).
> Added 17-test `tests/file-security.test.ts` covering the
> previously-untested helpers including a regression case for the
> multi-period EICR filename that surfaced the bug.
>
> **30 Apr (later):** **Landlord countersigner wired into joint
> signing send.** The DocuSeal joint AST template (`524100`) was
> configured with three roles (`Tenant 1`, `Tenant 2`, `Landlord`)
> but the send route only ever shipped tenant submitters — meaning
> the Landlord slot was never populated and envelopes never moved to
> fully `SIGNED`. The signing send panel in
> `src/components/property/property-tabs.tsx` now renders a
> Landlord row beneath the tenant rows in joint mode, prefilled from
> the logged-in user's `displayName` + `email`, and appends
> `{ role: 'Landlord', name, email }` to the submitters payload. The
> route's `MAX_SUBMITTERS` cap was bumped from 4 → 5 (4 tenants + 1
> landlord). `User.email` now flows through `/api/auth/me` to power
> the prefill. **Tests:** the existing `signing-send-joint` suite
> gained a 3-submitter happy-path test and the cap-test was retuned
> to assert 5 max. 1385 tests passing.
>
> **Follow-up still owed:** Reference Data **Landlord** entity (KV-
> stored, mirror of `Company`) + `Property.landlordId` soft FK so the
> landlord identity can be set once and assigned to property tiles.
> Tracked in this section but not yet built.
>
> **30 Apr:** **Tenancy template wizard — joint-tenant placeholder
> dedup + address-line bleed fix.** The "Customise Agreement" wizard
> at `/templates` previously asked for the joint tenants' names twice
> (once as `Name of Tenant 1` / `Name of Tenant 2`, again as
> `Tenant 1 Name` / `Tenant 2 Name`) and left `[Enter Address Line 3]`
> / `[Enter Address Line 4]` placeholder text in the rendered DOCX
> when those lines were blank. Both bugs traced to the placeholder
> synonym/expansion logic in `src/app/api/templates/route.ts` +
> `src/app/api/templates/generate/route.ts`, which only handled the
> single-tenant template's variants.
>
> **What shipped:**
>
> - **New helper:** `src/lib/template-placeholders.ts` (extracted from
>   the route handlers — pure logic, fully unit-tested) exposing
>   `PLACEHOLDER_SYNONYM_MAP`, `canonicalisePlaceholders`, and
>   `expandReplacements`. Synonyms now cover both single (`Name of
Tenant` ↔ `Tenant Name`) and joint (`Name of Tenant 1 ` ↔
>   `Tenant 1 Name`, `Name of Tenant 2 ` ↔ `Tenant 2 Name`) variants.
> - **Address bleed:** unsupplied address lines are explicitly blanked
>   so the DOCX never carries placeholder text, and the combined-
>   address auto-built placeholder is always emitted (joining only
>   filled lines, falling back to empty when none are supplied).
> - **Tests:** `tests/template-placeholders.test.ts` adds **11 new
>   unit tests**. End-to-end smoke against the joint AST DOCX confirms
>   zero `[Enter …]` placeholders remain in the rendered file. 1384
>   tests passing.
> - **Known gap surfaced:** signing send route only ships tenant
>   submitters — the `Landlord` role configured on DocuSeal joint
>   template `524100` is never populated. Tracked separately; not
>   part of this fix.
>
> **29 Apr (late evening, follow-up):** **Property Migration UI
> Phase 2 (#D).** Atomic transfer-ownership flow with reversible
> audit log; `/taxes/company` page now reads from a server-side
> aggregator (`/api/taxes/company`) that consumes the Phase A unified
> rental-income helper and ownership-aware filtering for mid-year
> transfers.
>
> **What shipped:**
>
> - **Schema:** new `OwnershipTransferAudit` Prisma model + migration
>   `20260429000002_add_ownership_transfer_audit` (15 → **16** models,
>   17 migrations).
> - **Helpers:** `src/lib/property-transfer.ts` (pure validation,
>   diff math, structural-change detection),
>   `src/lib/db/ownership-transfer.ts` (audit-log persistence),
>   `src/lib/tax/company-aggregator.ts` (server-only company
>   aggregator wired to Phase A `getTaxYearRentalIncome`).
> - **APIs:** `POST /api/properties/[id]/transfer-ownership` (atomic
>   `upsertProperty` + `syncCurrentOwnership` + audit row, NEVER
>   `writeProperties`), `GET` (audit list),
>   `POST /api/properties/[id]/transfer-ownership/[transferId]/reverse`
>   (idempotent reversal — re-opens prior period and stamps original
>   audit), `GET /api/taxes/company` (per-company breakdown).
> - **Pages:** `/properties/[id]/transfer-ownership` (server component
>   - client form with pre-flight diff panel + MANAGED warning
>     banner), `/properties/[id]/transfer-ownership/reverse` (audit
>     timeline + reverse button on the most-recent live transfer),
>     `/taxes/company` refactored from client-fetch to server-rendered
>     wrapper around `buildCompanyAggregate`.
> - **Surfaces:** Property detail Overview tab gains an "Ownership
>   history" timeline card with a "Transfer ownership →" CTA when
>   the user is editor.
> - **Tests:** **27 new unit tests** across
>   `tests/property-transfer-ownership.test.ts` (validation, diff
>   counts, structural-change detection, audit shape),
>   `tests/ownership-transfer-audit.test.ts` (persistence layer +
>   reversed-flag stamping), `tests/taxes-company-refactor.test.ts`
>   (default tax-year picker, basic-shape aggregation, mid-year
>   ownership split keeps pre-transfer expenses on PERSONAL,
>   `tax-data.ts` fallback path). 1247 → **1274** total tests.
> - **Regression guard:** `tests/property-routes-no-nuclear-write.test.ts`
>   extended (NOT bypassed) to cover both new transfer routes —
>   they must never call `writeProperties`.
> - **E2E:** `e2e/tests/properties/transfer-ownership.spec.ts` (5
>   scenarios — diff render, MANAGED warning, back-date guard,
>   reverse page shell, ownership-history panel on Overview).
> - **UAT:** Section AF added to `docs/uat-checklist.md`.
> - **Docs:** new-scope #D flipped to Shipped 29 Apr; architecture +
>   process-maps + build-cost-estimate updated; future-ideas note.
>
> **29 Apr (late evening):** **Open Banking Phase 2 — auto-match +
> cron + consent.** Phase 1 manual reconcile (24 Apr) now has its
> automation layer: a pure scoring engine, a daily Vercel cron that
> syncs all active connections and runs the matcher, a 90-day SCA
> consent banner with auto-Task creation on expiry, an unmatched
> queue page with bulk-accept, and a match-rule CRUD admin UI.
>
> **What shipped:**
>
> - **Schema:** new `BankMatchRule` Prisma model + migration
>   `20260429000001_add_bank_match_rule` (+ `BankMatchRuleKind` enum:
>   `RENT_PAYMENT | EXPENSE | IGNORE`). 14 → **15** Prisma models;
>   16 migrations.
> - **Lib (`src/lib/banking/`):** `match-engine.ts` (pure scoring,
>   thresholds 0.85 auto / 0.6 review / <0.6 unmatched);
>   `auto-match-runner.ts` (loads UNMATCHED, scores, upserts
>   `RentPayment` / `Expense` keyed by deterministic
>   `sha1(providerTxId)` so re-runs never duplicate);
>   `rules-store.ts` (CRUD); `consent-banner.ts`
>   (`computeConsentSeverity` + `worstSeverity`).
> - **Cron:** `/api/cron/banking-sync` daily at 03:00 UTC,
>   `CRON_SECRET`-gated (constant-time compare). Idempotent
>   consent-Task creation: a single `task-bank-consent-{connId}` row
>   per expired connection, never duplicated.
> - **APIs:** `/api/banking/rules` (GET/POST), `/api/banking/rules/[id]`
>   (GET/PUT/DELETE), `/api/banking/auto-match` (POST manual trigger),
>   `/api/banking/queue/bulk-accept` (POST, max 200 ids).
> - **Pages:** `/finances/banking/queue` and `/finances/banking/rules`.
>   Banner component
>   `src/components/banking/consent-renewal-banner.tsx` rendered on
>   both new pages + the existing banking page.
> - **Tests:** +47 new unit/integration tests across 5 suites
>   (`banking-match-engine`, `banking-consent-banner`,
>   `banking-rules-store`, `banking-auto-match-runner`,
>   `banking-bulk-accept`, `banking-sync-cron-route`). 1118 →
>   **1165** total. **E2E:** new `e2e/tests/banking/auto-match.spec.ts`
>   (4 cases — queue render, rule add, navigation, run-auto-match
>   button).
>
> **Sandbox-only:** Phase 2 ships against TrueLayer **sandbox**.
> Production credentials still need the FCA TrueLayer Agent route
> (Phase 4) — the auto-match pipeline starts working the moment those
> credentials land without code changes.
>
> **Cross-references:** `docs/architecture.md` §17.1,
> `docs/new-scope.md` #C (flipped to Shipped),
> `docs/uat-checklist.md` (new section), `docs/future-ideas.md`
> (Open Banking Phase 2 row → Shipped).

> **29 Apr (evening):** **Rent Review v1.1 — ONS PRI auto-pull cron.**
> The v1 admin-paste benchmark refresh path now has an automated
> sibling: a daily Vercel cron (`/api/cron/ons-pri-refresh`,
> 04:00 UTC, `CRON_SECRET`-gated) that fetches the ONS Beta API's
> Private Rental Index and compounds regional MoM% onto each curated
> area's median rent.
>
> **What shipped:**
>
> - **Lib (`src/lib/rent-review/`):** new `ons-client.ts` (pure
>   parser + injectable fetcher: `fetchOnsPriIndex`,
>   `extractRegionSeries`, `parseOnsTimeId`, `looksLikeOnsPayload`,
>   `OnsFetchError`, `ONS_GEOGRAPHY_CODES`); new `refresh.ts`
>   (orchestration: `refreshFromOns`, `translateOnsToBenchmark`,
>   `existingAsOfMonth`, `asOfMonthToIsoDate`).
> - **Type:** `MarketAreaRow.region?: OnsRegionCode` (new optional
>   ITL1 region tag). Seed file (`benchmark-seed.ts`) bundles each
>   curated area with its region. Areas without a region tag pass
>   through the refresh untouched (legacy contract preserved).
> - **Cron:** `src/app/api/cron/ons-pri-refresh/route.ts` —
>   `CRON_SECRET`-gated, daily at 04:00 UTC. `vercel.json` extended.
> - **Admin override:** existing admin route extended to accept
>   `?source=ons` query, which triggers the same `refreshFromOns`
>   path. Body-paste curated workflow preserved.
>
> **Translation rule (the critical bit):** ONS publishes a relative
> _index_ per region; benchmarks store _absolute £/month medians_.
> We compound regional MoM% onto each median (`median * (1 + momPct)`
> rounded to nearest pound) and refresh `onsIndex`/`onsYoyPct` to
> the regional values. We never overwrite medians with index values.
>
> **Defensive contract:** any HTTP error / schema mismatch /
> unexpected shape leaves the existing KV bundle untouched. The
> cron returns 200 with `ok: false` (no Vercel retry-storm); the
> admin override returns 502. The `existingAsOfMonth >= ons.asOfMonth`
> gate skips the network call when the cache is current — daily
> cron, ~28-of-30 days a no-op.
>
> **Env vars:** `CRON_SECRET` (already used by other crons),
> `ONS_API_BASE` (default `https://api.beta.ons.gov.uk/v1`),
> `ONS_PRI_DATASET_ID` (default `private-rent-prices`). Operator
> verification before first run documented in
> `docs/rent-review-insights-readiness.md` §12.
>
> **Tests:** +33 new unit tests across 3 suites
> (`tests/rent-review-ons-{client,refresh,cron-route}.test.ts`).
> 1063 → **1096** total.
> **E2E:** new `e2e/tests/admin/ons-refresh.spec.ts` (3 cases —
> read-only benchmarks fetch confirms region tags + admin-triggered
> `?source=ons` refresh either succeeds or fails cleanly without
> corrupting the bundle + cron 401 without secret).
>
> **Migrations:** unchanged at **15** (KV-only).
> **Cross-references:** `docs/rent-review-insights-readiness.md` §12
> (canonical), `docs/architecture.md` §29, `docs/process-maps.md`
> Map 27 (extended), `docs/uat-checklist.md` AC.,
> `docs/future-ideas.md` §42.
>
> **Still deferred (v1.2+ candidates):**
>
> - Section 13 notice generation + signing flow handoff.
> - Trend mini-charts on the property page (table-first v1).
> - Postcode-level granularity (v1 is area-level).
> - Crowd-sourced comparables across the user base.

> **29 Apr (late afternoon — PR #11):** **#H — Rent Review Insights.**
> Identifies properties whose rent agreement is stale (no review in
> 12+ months — configurable) and surfaces a defensible suggested rent
> range based on ONS Private Rental Index uplift + curated local
> comparables. Surfaces on `/market` (top section, table-first),
> property detail Overview, and the dashboard alert.
>
> **What shipped:**
>
> - **Lib (`src/lib/rent-review/`):** `store.ts` (KV bundle helpers
>   for `market-benchmarks`, `rent-review-history:{propertyId}`,
>   `rent-review-settings`), `benchmark-seed.ts` (curated v1 seed
>   plus admin-refresh helper sized for an ONS API drop-in v1.1),
>   `insights.ts` (pure pipeline — `lastReviewAnchor`,
>   `monthsSinceReview`, `isOutdated`, `suggestedRentRange`,
>   `rraTribunalRisk`, `isSnoozed`, `buildInsight`), `benchmarks.ts`
>   (area lookup + ONS uplift compounding).
> - **API (8 routes):** `GET /api/market/insights`,
>   `POST /api/market/insights/[propertyId]/{apply,snooze,dismiss,restore}`,
>   `GET /api/market/benchmarks`,
>   `POST /api/admin/market/refresh-benchmarks`,
>   `GET / PUT /api/market/settings`. The Apply route routes through
>   `upsertProperty` (per CLAUDE.md the only sanctioned per-property
>   write) — **never `writeProperties`**. Extended
>   `tests/property-routes-no-nuclear-write.test.ts` by one case to
>   pin this contract.
> - **UI:** new top "Rent Review Insights" section on `/market` with
>   `MarketInsightsTable` client island (filter chips, per-row Apply
>   / Snooze with duration picker / Dismiss / Restore);
>   `PropertyRentReviewCard` in property detail Overview (hidden
>   when up-to-date and not RRA-risk); dashboard alert when
>   `summary.outdated > 0`; new "Rent Review Settings" card under
>   Settings → Reference Data with thresholds editor + read-only
>   benchmarks panel.
> - **Storage:** KV bundles only — three buckets on the `KeyValue`
>   JSONB table. **No Prisma migration.**
>
> **Decisions locked (29 April 2026):** curated KV seed v1 with ONS
> API drop-in for v1.1, 12-month outdated threshold (configurable),
> Apply updates fields + logs history (no Section 13 generation in
> v1), confidence HIGH ≥5 / MEDIUM ≥2 / LOW (index-only),
> RRA tribunal risk warns at >10% above market median (don't cap),
> anchor fallback to `Tenancy.moveInDate`, snooze duration
> user-configurable per dismissal (90-day default), table-first v1
> (charts deferred to v1.1), MANAGED properties read-only with
> Apply suppressed, KV-only storage.
>
> **Tests:** ~+27 new unit tests across 4 suites
> (`tests/rent-review-{insights,benchmarks,routes}.test.ts` plus a
> 1-case extension to `tests/property-routes-no-nuclear-write.test.ts`).
> 977 → **~1004** total.
> **E2E:** new `e2e/tests/market/rent-review.spec.ts` (7 cases —
> outstanding-row render, Apply round-trip, Snooze, Dismiss +
> Restore, dashboard alert, Settings persistence, MANAGED Apply
> suppression).
>
> **Migrations:** unchanged at **15** (Rent Review Insights is
> KV-only).
> **Canonical spec:** `docs/rent-review-insights-readiness.md`.
>
> **Deferred (v1.1+ candidates):**
>
> - ~~ONS PRI auto-pull cron~~ **Shipped 29 Apr 2026 evening** —
>   see the v1.1 entry above this block.
> - Section 13 notice generation + signing flow handoff. v1's
>   Apply only updates fields and logs to history.
> - Trend mini-charts on the property page (table-first v1).
> - Postcode-level granularity (v1 is area-level: IG6, IG4, etc.).
> - Crowd-sourced comparables across the user base.

> **29 Apr (afternoon — PR #11):** **#G — Renters' Rights Act 2025
> compliance dispatch (Wave 1).** The Information Sheet dispatch
> shipped two days ahead of the 1 May 2026 commencement, giving
> landlords the full 31 days to issue to every named adult on every
> active tenancy before the £7,000-per-tenant penalty starts to bite.
>
> **What shipped (Wave 1):**
>
> - **Lib (`src/lib/rra/`):** `dispatch.ts` (status state machine +
>   `appendEvent` de-dupe + `transitionedTo` gate), `templates.ts`
>   (Information Sheet + cover letter), `store.ts` (KV bundle
>   helpers), `email-resend.ts` (Resend wrapper + webhook
>   signature verification), `evidence.ts` (per-tenant evidence
>   pack export).
> - **API (10 route files):** `/api/compliance/rra/*` (6 — list,
>   dispatch, mark-posted, evidence download, per-tenant detail,
>   status backfill), `/api/portal/rra/{acknowledge,status}` (2),
>   `/api/webhooks/resend` (1), `/api/cron/rra-status` (1).
> - **UI:** new `/compliance/rra` page + `rra-dispatch-table.tsx`
>   client island, dashboard widget
>   (`src/components/compliance/rra-dispatch-widget.tsx`), tenant
>   portal banner
>   (`src/components/portal/rra-info-sheet-banner.tsx`), property
>   detail compliance section
>   (`src/components/property/property-rra-section.tsx`), Settings
>   → Reference Data card, sidebar entry under Operations.
> - **Storage:** KV bundle keyed `rra-dispatch:{tenantUserId}`. **No
>   Prisma migration** — RRA state rides on the `KeyValue` JSONB
>   table alongside lease-renewals, companies, growth-snapshots, HMO.
> - **Email transport:** Resend (`resend` SDK) added alongside the
>   existing nodemailer SMTP transport. Resend is retained for the
>   RRA flow specifically because its delivery + open webhooks are
>   the audit-quality evidence the £7,000 penalty defence requires.
>   New env vars: `RESEND_API_KEY`, `RESEND_FROM_EMAIL`,
>   `RRA_RESEND_WEBHOOK_SECRET`.
>
> **Tests:** +55 new unit tests across 6 suites
> (`tests/rra-{dispatch,templates,evidence,email-resend,routes,resend-webhook}.test.ts`).
> 922 → **977** total. **E2E:** new specs at
> `e2e/tests/compliance/rra-dispatch.spec.ts` and
> `e2e/tests/portal/rra-acknowledge.spec.ts`.
>
> **E2E coverage gap closure (additive — no production-code change):**
> six previously-reserved Playwright specs landed in the same wave to
> cover earlier 28 April features —
> `e2e/tests/properties/{gas-appliances,transfer-date,managed-ownership,data-integrity}.spec.ts`
> and `e2e/tests/taxes/{cross-reference-exclusions,banner-refinements}.spec.ts`.
> Plus five marketing demo recordings under `e2e/demos/`
> (sa105, mtd, hmo, growth, ct600 tours + README).
>
> **Migrations:** unchanged at 15 (RRA is KV-only).
> **Commits (5-commit landing pattern):** `216114a`, `ff18cc5`,
> `ceed343`, `7265adb`, `eb0421b`. PR **#11**.
>
> **Deferred from Wave 1 (Wave 2 candidates):**
>
> - PDF merging of the Info Sheet via jspdf isn't viable for v1
>   (jspdf can't merge external PDFs reliably) — Info Sheet rides as
>   a Resend attachment + portal download for v1 instead. Acceptable
>   because the cover letter + Info Sheet flow doesn't depend on a
>   single combined PDF.
> - Periodic-tenancy audit on `/tenants` (Z5) and Section 21
>   wind-down flagging (Z6) — both await the Statutory Instrument
>   confirming commencement detail.
> - Written statement of terms (separate RRA requirement, no 1 May
>   urgency) defers to v1.1.

> **29 Apr (morning):** **#F — Limited-company operating expenses +
> capital assets (CT600 deductions).** Two new Prisma models
> (`CompanyExpense` revenue + `CompanyAsset` capital with AIA / WDA),
> migration `20260429000000_add_company_expenses_and_assets`, four
> API routes (`/api/companies/:id/expenses` + `/assets` GET/POST/PUT/
> DELETE), two pure helpers (`src/lib/tax/company-expenses.ts`,
> `src/lib/tax/capital-allowances.ts`), new UI page
> `/taxes/company/[id]/expenses` (tabbed Operating / Capital), and
> two new P&L rows on the existing `/taxes/company` summary that
> feed `computeCompanyPL` so the Corporation Tax estimate
> immediately reflects director salary + accountancy + insurance +
> AIA-claimed plant. Closes the gap that was leaving CT600 estimates
> systematically overstated.
>
> **Tests:** +42 (880 → **922** total) across
> `tests/company-expenses.test.ts` (15),
> `tests/capital-allowances.test.ts` (23), and 4 new
> `computeCompanyPL` cases.
> **Migrations:** +1 (14 → **15** —
> `20260429000000_add_company_expenses_and_assets`).
> **E2E:** new `e2e/tests/taxes/company-expenses.spec.ts`.
> **Vehicles deferred:** schema supports SPECIAL_RATE pool; UI hides
> the VEHICLE category until v2 (CO₂ banding + first-year allowance
> rules).

> **28 Apr (late evening, third wave — PR #11):** Two items shipped on
> top of the second wave's gas + transfer-date pair.
>
> 1. **Critical data-loss fix — `upsertProperty` (commit `bba24da`).**
>    Discovered tonight: `writeProperties()` was nuclear-deleting
>    Property + Mortgage + Tenancy on every per-property edit,
>    cascade-wiping PropertyDocument / Expense / RentPayment /
>    MaintenanceRequest / PortalMessage / SigningRequest / TenantUser /
>    PropertyOwnership. The bug was fired by Prisma's
>    delete-then-create pattern when the entire properties array was
>    rewritten on each edit. **Production damage:** 9 properties
>    survived, 19 tasks survived (`Task.propertyId` is nullable so
>    cascade didn't fire), every other related table had **0 rows**.
>    Documents are recoverable via Vercel Blob (separate recovery
>    script being built in main thread — blob keys survived the SQL
>    cascade). Other tables (expenses, rent payments, maintenance,
>    messages, signing, tenant users) are user-entered and **not
>    recoverable** from any external source — the user will need to
>    re-enter them.
>
>    **Fix:** `upsertProperty(id, patch)` is now the only sanctioned
>    per-property write path; `writeProperties()` is reserved strictly
>    for bulk-import + seed code paths where deliberate wipe-and-replace
>    is the intent. A regression-locked test in
>    `tests/property-routes-no-nuclear-write.test.ts` greps the
>    `src/app/api/**/route.ts` tree and fails if any route file imports
>    `writeProperties`. **5 new tests** in this suite (880 → **885**
>    total). See `docs/new-scope.md` "Architectural decisions
>    (28 April 2026 — late evening)" for the full contract.
>
> 2. **#F capture — limited-company operating expenses + capital assets
>    (commit `0f777a7`).** Documented in `docs/future-ideas.md` §39 and
>    cross-referenced from `docs/new-scope.md` #F. Two new record types
>    (`CompanyExpense` revenue + `CompanyAsset` capital with AIA / WDA),
>    per-company expenses page under
>    `/taxes/company/[id]/expenses`, CT600 summary integration. Without
>    it the user's CT600 estimates are **systematically overstated** —
>    every accountancy fee, business insurance premium, bit of office
>    kit is a missed deduction. ~£3-8k of operating expenses + capital
>    allowances per year for MAR Property Co's portfolio at 25% CT =
>    £750-2,000 of tax saved. No infrastructure prerequisite — attaches
>    cleanly to the existing Reference Data → Companies module by
>    `companyId`. Status: captured, not built (resume condition: next
>    CT600 prep cycle OR user signals ready).
>
> **Tests:** +5 new (880 → **885** total) — all in
> `tests/property-routes-no-nuclear-write.test.ts` regression-locking the contract
> that route files cannot import `writeProperties`.
> **Migrations:** unchanged (still **14**).
> **Commits:** `bba24da` (data-loss fix), `0f777a7` (#F capture).
> PR **#11**.

> **28 Apr (evening, second wave — PR #11):** Two related properties
> features shipped together as a 4-agent parallel build.
>
> 1. **`Property.hasGasAppliances` boolean (default `true`).** Drives
>    gas-safety (CP12) compliance gating across the app. Single source
>    of truth is `shouldRequireGasSafety(property)` in
>    `src/lib/property-compliance.ts`. Gates portfolio compliance
>    matrix, property Compliance Checklist, HMO tab gas event rows /
>    "Log Gas Safety" button, auto-task generator, dashboard alerts,
>    and portfolio JSON / PDF export. Surfaced as a checkbox on
>    add-property + edit-property forms, an "Electric only" badge on
>    property tiles, and a "Gas appliances:" row on the Overview.
> 2. **Transfer-date-aware `syncCurrentOwnership`.** Adds an optional
>    `transferDate` to PUT/PATCH `/api/properties/:id` so structural
>    ownership changes (`ownershipType` flip OR `companyId` change
>    involving COMPANY) close the current `PropertyOwnership` period at
>    the actual transfer date rather than today. Trivial (share-only)
>    changes still update in place. Guard prevents inverted windows.
>    The edit-property panel renders a "Transfer date" date input only
>    when the user has changed `ownershipType` or `companyId`. Each
>    property tile + the property detail Overview now show
>    "{OwnershipType} since {effectiveFrom}" using
>    `loadCurrentOwnershipFromMap` / `getCurrentOwnershipFrom`. Use
>    case: Kirby Close was transferred to limited company on a date
>    earlier than today; recording the actual date splits MTD / CT600
>    correctly across the tax-year boundary.
>
> **Tests:** +22 new (847 → **880** total) across
> `tests/gas-appliance-compliance.test.ts` (5),
> `tests/property-validation.test.ts` (14 — `hasGasAppliances` +
> `transferDate` on `createPropertySchema`, plus pinned
> `z.coerce.boolean('false') === true` gotcha), and
> `tests/property-ownership.test.ts` (+3 — sequential closed/open
> periods, same-day boundary).
> **Migrations:** +1 (13 → **14** — `20260428000004_add_has_gas_appliances`).
> **Commits:** `9f7a309` (gas + transfer-date wave 0+1), `88d0513`
> (display + alerts + tests). PR **#11**.
>
> **Tech debt noted, not blocking:**
>
> - No separate `updatePropertySchema`; PUT/PATCH currently spreads
>   the body without a Zod parse. Low priority — the route still
>   peels `transferDate` cleanly and downstream writers validate.
> - `parseTransferDate` is a private helper inside the
>   `/api/properties/:id` route — could be lifted to `src/lib` for
>   unit testing. Low priority.

> **28 Apr (evening):** SA105 **Compliance Cross-Reference** panel
> now respects the tax-excluded property list. After shipping the
> MANAGED type, the cross-reference panel on `/taxes` was still
> flagging COMPANY (Homelea Flat 4) and MANAGED (Redbridge Court)
> properties for "rental income but no tax return data filed" — a
> false positive because those properties intentionally have no
> SA105 entries.
>
> Fix: `getComplianceFlags(year, excludedPropertyNames)` now accepts
> a per-call exclusion list and skips ALL flag types for any matching
> property (case-insensitive on `propertyName`). The `/taxes` page
> passes the union of `companyPropertyNames` + `managedPropertyNames`.
> +6 unit tests in new `tests/tax-data-compliance-flags.test.ts` +
> UAT entries W.C9–W.C11.

> **28 Apr (late afternoon):** MANAGED ownership type — fourth value
> on the OwnershipType enum. Properties classified MANAGED appear on
> operational surfaces (dashboard, properties listing, compliance,
> maintenance) but are EXCLUDED from every tax surface (SA105, MTD
> threshold, MTD quarterly, CT600). Use case: managing a property on
> behalf of someone else where the income belongs to the actual
> owner's tax return.
>
> 4-agent parallel execution: tax/MTD filter call-sites + UI components
>
> - unit tests + docs. Backed by 22 new unit tests (840 total) +
>   UAT section W (16 entries) + new `tests/managed-ownership.test.ts`.

> **28 Apr (afternoon):** Tax-correctness banner pass — three bugs fixed (PRs #8, #9):
>
> - SA105 banner intersection + tax-year aware (was firing 3 false positives + giving wrong advice for historic years)
> - SA105 page now hides company-owned property placeholders ("No Data" yellow cards) so users aren't told to upload personal data for company properties
> - MTD info banner data-driven (only shows when user has company properties; updated stale "coming soon" link to live `/taxes/company`)
>
> Banner conditional logic extracted to pure helpers in
> `src/lib/tax-page-banners.ts` with unit tests in
> `tests/tax-page-banners.test.ts`. No schema changes.

## Quick status

| #                 | Item                                                                                                                                                                    | Status                                                                      | Effort                                            | When                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| #A                | SA105 2025-26 hardcoded projection tidy                                                                                                                                 | **✓ Shipped 28 Apr 2026**                                                   | ~15 min                                           | Done — Kirby Close removed from 2025-26 personal projection (commit `c3dfef5`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| #B                | Joint-AST signing Session 2 (UI)                                                                                                                                        | **✓ Shipped 28 Apr 2026**                                                   | ~half session (parallel-wave execution: ~2 hours) | Done — 6 subtasks across Wave 1 (3 parallel agents) + Wave 2 (property-tabs.tsx direct) + Wave 3 (E2E + UAT)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| #E                | MANAGED ownership type                                                                                                                                                  | **✓ Shipped 28 Apr 2026**                                                   | ~half session (4 parallel agents)                 | Done — schema + UI + filters + tests + docs                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| #C                | Open Banking Phase 2 (auto-match + cron + consent)                                                                                                                      | **Shipped 29 Apr 2026**                                                     | ~1 session                                        | Sandbox build complete. Phase 4 (production TrueLayer Agent credentials) still pending FCA approval — code path is ready.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| #D                | Property Migration UI Phase 2                                                                                                                                           | **Shipped 29 Apr 2026**                                                     | shipped                                           | n/a — landed                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Phase A           | Unified tax data source — RentPayment + Expense feed every tax view; MTD threshold + SA105 + CT600 reconcile to the penny; Open Banking Phase 2 auto-match prerequisite | **Helper + 3 call-sites wired (29 Apr 2026); /taxes/company follows in #D** | ~1 session                                        | Helper `src/lib/tax/rental-income.ts` shipped 29 Apr 2026 (commit `4db96f2`) with full unit tests. Call-site refactor (29 Apr 2026 evening) wired three of four planned consumers: `tax-calculator.ts` (date-range / rounding shared), `/mtd` page (threshold via `/api/tax/mtd-threshold`), `/taxes` page (top-line totals via `/api/tax/year-rental-income`). The fourth consumer, `/taxes/company`, ships with the Property Migration UI track (#D). All existing MTD + SA105 numbers byte-for-byte unchanged (regression contract holds via `tests/mtd-tax-calculator.test.ts` + `mtd-ownership-aware.test.ts`). Phase A's deeper goal — penny-perfect reconciliation across SA105/CT600/MTD — still depends on live `RentPayment` data from Open Banking Phase 2 auto-match. Detail in `docs/new-scope.md` §0.5 and `docs/architecture.md` §21.                                                                                                                                                                                                                                                                                                                                                                   |
| #F                | Limited-company operating expenses + capital assets (CT600 deductions)                                                                                                  | **✓ Shipped 29 Apr 2026**                                                   | ~1 session                                        | Done — `CompanyExpense` + `CompanyAsset` Prisma models + migration `20260429000000`, `/taxes/company/[id]/expenses` page, CT600 summary integration via extended `computeCompanyPL`. +42 tests (880 → 922).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| #G / RRA dispatch | Renters' Rights Act 2025 compliance dispatch (1 May target)                                                                                                             | **✓ Shipped 29 Apr 2026 (Wave 1 + Wave 2)**                                 | ~1 session                                        | Done — Wave 1 (Information Sheet dispatch) + Wave 2 (Z5 periodic-tenancy audit, Z6 Section 21 wind-down, Z7 Statement of Tenancy Terms) shipped two days ahead of the 1 May 2026 commencement. Resend + KV bundles + 14 API routes + portal acknowledge + cron + dispatch UI. **+89 tests** across both waves. Wave 2 adds 4 helpers (`constants`, `periodic-audit`, `section-21-wind-down`, `statement-of-terms`), 2 stores, 4 routes, 3 page sections. Builds to current Bill text — single-line constant patch in `src/lib/rra/constants.ts` when the Statutory Instrument lands. **Canonical spec: `docs/rra-compliance-readiness.md` §14**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| #H                | Rent Review Insights (market-driven rent suggestions)                                                                                                                   | **✓ Shipped 29 Apr 2026**                                                   | ~half session                                     | Done — KV-only data model (no migration), 4 lib modules under `src/lib/rent-review/`, 8 API routes (`/api/market/insights/*`, `/api/market/benchmarks`, `/api/admin/market/refresh-benchmarks`, `/api/market/settings`), `MarketInsightsTable` on `/market`, `PropertyRentReviewCard` in property detail Overview, dashboard alert, Settings → Reference Data card. Apply route routes through `upsertProperty` (regression-locked). +~27 unit tests (977 → ~1004). E2E at `e2e/tests/market/rent-review.spec.ts` (7 cases). MANAGED properties read-only with Apply suppressed. **Canonical spec: `docs/rent-review-insights-readiness.md`**. Deferred to v1.1: ONS API auto-pull cron, Section 13 notice generation, trend mini-charts.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| #I                | Plan-tier feature gating + multi-user (invites, Owner role, audit)                                                                                                      | **✓ Shipped 30 Apr 2026**                                                   | ~1 session (vs ~1.5 planned)                      | Done — Wave 0 (Prisma schema + migration `20260430000000_add_invites_and_audit_and_owner_role` adds `UserInvite` + `owner` enum value; reuses existing `AuditLog`), Wave 1 (`src/lib/plan-features.ts` central registry, `src/lib/feature-gate.ts` server gate extending AuthError, `src/lib/db/invites.ts` with HMAC-signed tokens + constant-time compare, `src/lib/email/invite-email.ts` Resend wrapper), Wave 2 (50 routes gated via `requireFeature(...)`, regression-guard test pinning the contract, `<FeatureGate>` + `<UpgradePaywall>` components, `/api/admin/invites` + accept-invite + transfer-ownership routes, owner protection on user PATCH/DELETE, `ensureOwnerExists` bootstrap), Wave 3 (`/admin` invite form replaces cleartext-pw flow + transfer-ownership UI + Owner role visualisation, accept-invite page, `/settings/billing` feature matrix, AuthProvider extended with plan + features). +119 unit tests (1247 → 1366), all 110 suites green. New E2E `e2e/tests/admin/invite-flow.spec.ts`. Rollout via `ENABLE_PLAN_FEATURE_GATING` env flag (default `false` first deploy) + 30-day grace period. Per-property scoping deferred to #44. **Canonical spec: `docs/new-scope.md` §#I.** |

**Active outstanding items:** **None pending build.** #C, #D, and
Phase A remain deferred until their resume conditions hit. #F
shipped 29 Apr 2026 (morning); **#G RRA dispatch Wave 1 shipped 29
Apr 2026 (afternoon)**, **#G RRA dispatch Wave 2 shipped 29 Apr
2026 (evening)** — two days ahead of the 1 May 2026 commencement
deadline; **#H Rent Review Insights shipped 29 Apr 2026 (late
afternoon)**; **#I plan-tier feature gating + multi-user shipped
30 Apr 2026** (the same morning the user surfaced the gap). The
Statutory Instrument carrying precise commencement detail had not
landed at build time; the patch when it does is a single-line
change to `src/lib/rra/constants.ts` (accepted risk). The next live
build is **open / TBD** — the user has shipped the immediate
priorities. Nothing blocks current functionality day-to-day; the
marketing pricing tiers now actually differentiate features at
runtime via the feature-flag matrix in `src/lib/plan-features.ts`.

## Where the detailed plans live

- **`docs/new-scope.md`** — section "Outstanding work (planned 28
  April 2026)" → sub-sections #A, #B, #C, #D, #F, #G with subtasks,
  files, tests, risk, open questions, resume conditions; plus
  "Architectural decisions (28 April 2026 — late evening)" capturing
  the data-loss fix contract
- **`docs/future-ideas.md`** — Status Summary table rows 24, 28-40
  reflect outstanding state with priority labels (rows 37-40 are
  today's late-evening additions: gas-appliance flag, transfer-date,
  #F company expenses, RRA dispatch)
- **`docs/rra-compliance-readiness.md`** — canonical build spec for
  the 1 May 2026 RRA dispatch work
- **`docs/build-cost-estimate.md`** — projected token usage table for
  each plan + recommended-path totals

## Working principle for next session

**Docs-first capture only — no implementation until per-item green
light from user.** Decided 28 April 2026.

When ready to implement:

1. Pick an item from the table above
2. Read its detailed plan in `docs/new-scope.md`
3. Resolve any open questions noted at the bottom of the plan
4. Build, test, doc-update, commit, push

## Parallel execution strategy

Use parallel subagents whenever independent subtasks are identified.
Pattern proven on past sessions: 3 source agents + 1 test agent
running simultaneously delivers ~3× the throughput of sequential
work, provided file conflicts are pre-mapped.

**Per-plan parallelism map:**

| Plan                                    | Parallelisable?  | How                                                                                                                                                                                                                                                          |
| --------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| #A — SA105 tidy                         | No               | Single-file 15-min edit; no benefit from parallelism                                                                                                                                                                                                         |
| #B — Joint-AST UI (6 subtasks)          | **Yes — 5 of 6** | B.1 (contact editor), B.3 (status panel), B.4 (portal slice), B.5 (invite UI), B.6 (compliance) all touch different files and can run in parallel. B.2 (send modal) depends on B.1 being completable, so does it serially after. **Split: 2 parallel waves** |
| #C — Banking Phase 2 (7 subtasks)       | **Yes — 5 of 7** | C.1 (schema), C.6 (queue page), C.7 (rules CRUD) parallel after schema. C.2 (engine), C.3 (runner), C.4 (cron), C.5 (banner) parallel afterward. **Split: 3 parallel waves**                                                                                 |
| #D — Property Migration UI (5 subtasks) | **Yes — 3 of 5** | D.1 (page UI), D.5 (history sidebar) independent of D.2 (API). D.3 (reverse) and D.4 (`/taxes/company` refactor) parallel after D.2. **Split: 2 parallel waves**                                                                                             |

**Concrete plan for #B (next implementation target):**

- **Wave 1 (parallel):** Spawn 4 source agents simultaneously:
  - Agent: B.1 contact editor (`edit-property-panel.tsx`)
  - Agent: B.3 status panel (`property-tabs.tsx` — different region than B.2)
  - Agent: B.4 portal slice (`portal-documents.tsx`)
  - Agent: B.6 compliance checklist (`compliance/page.tsx`)
- **Wave 2 (after Wave 1):** B.2 send modal + B.5 invite UI (parallel — each depends on shape of B.1's output but not the same files)
- **Wave 3:** Test agent runs alongside Wave 2 source agents, writing the ~12 RTL tests

This compresses #B from a half session sequential to ~2-3 hours
with parallel execution. Same pattern was used to deliver MTD's
~10,800 lines + 189 tests in a single session in March.

## Production state at handoff

- All Session 28-29 April builds are **live on Vercel** (Open Banking
  Phase 1 MVP, joint-tenant signing Sessions 1 + 2, property
  ownership history Phase 1, tax-correctness banner refinements,
  MANAGED ownership type, `hasGasAppliances` flag, transfer-date-aware
  ownership sync, SA105 cross-reference exclusions, the critical
  data-loss fix, **#F — limited-company operating expenses +
  capital assets**, **#G — Renters' Rights Act 2025 dispatch
  Wave 1**, and **#H — Rent Review Insights**)
- **~1004 tests** passing locally and in CI (was 825 at start of 28 Apr
  session, 880 after second wave, 885 after the data-loss-fix
  regression test, 922 after #F, 977 after RRA Wave 1, **~1004 after
  Rent Review Insights** — +~27 across
  `tests/rent-review-{insights,benchmarks,routes}.test.ts` plus a
  1-case extension to `tests/property-routes-no-nuclear-write.test.ts`)
- **15 Prisma migrations** applied (no migration added for RRA or
  Rent Review Insights — both ride on KV bundles on the `KeyValue`
  JSONB table: `rra-dispatch:{tenantUserId}` and `market-benchmarks`
  / `rent-review-history:{propertyId}` / `rent-review-settings`)
- 86 unit-test suites; **32 Playwright E2E specs** (six new specs
  added 29 Apr afternoon: gas-appliances, transfer-date, managed-ownership,
  data-integrity, cross-reference-exclusions, banner-refinements +
  the two RRA specs `e2e/tests/compliance/rra-dispatch.spec.ts` and
  `e2e/tests/portal/rra-acknowledge.spec.ts`; plus `e2e/tests/market/rent-review.spec.ts`
  added 29 Apr late afternoon); ~100 pages; ~57,640 LOC across ~370
  files
- New lib modules: `src/lib/rra/{dispatch,templates,store,email-resend,evidence}.ts`
  and `src/lib/rent-review/{store,benchmark-seed,insights,benchmarks}.ts`
- New API surfaces: 10 RRA routes under `/api/compliance/rra/*` +
  portal + cron + Resend webhook; **8 Rent Review Insights routes**
  under `/api/market/*` + `/api/admin/market/refresh-benchmarks`
- New production dependency: `resend` (added alongside `nodemailer`).
  Env vars added: `RESEND_API_KEY`, `RESEND_FROM_EMAIL`,
  `RRA_RESEND_WEBHOOK_SECRET`
- DocuSeal joint AST template id `524100` configured in Vercel +
  `.env.local`
- TrueLayer credentials configured in Vercel; `npm run banking:doctor`
  validates connectivity
- Database migrations all applied; P3009 recovery scripts in
  `prisma/recovery/` for future reference
- **`upsertProperty(id, patch)`** is the only sanctioned per-property
  write path; `writeProperties()` is reserved strictly for
  bulk-import + seed. A regression-locked test pins the contract.
  See `docs/new-scope.md` "Architectural decisions (28 April 2026 —
  late evening)" for full detail.
- **RRA 1 May 2026 deadline:** ✓ shipped on 29 April 2026 — Wave 1
  is **live on Vercel** two days ahead of commencement. Landlords can
  bulk-send the Information Sheet from `/compliance/rra`, track
  delivery via Resend webhooks, capture portal acknowledgement, mark
  postal-pack alternatives, and download per-tenant evidence packs
  for the £7,000 penalty defence. See
  `docs/rra-compliance-readiness.md` for the canonical spec and
  `docs/architecture.md` §26 for the runtime architecture.

## Contact / data state checks

- Verified four COMPANY-classified properties (Homelea Flat 1, Flat
  4, Kirby Close, Runcorn) have zero `Expense` and `RentPayment`
  records
- This is what makes #D defer-indefinitely viable: no historic
  records means no time-split needed
- If records start being added in future, revisit #D

---

_Created 28 April 2026 — last updated 29 April 2026 (Rent Review
Insights shipped, late afternoon — on top of the morning's #F and
the early-afternoon RRA Wave 1). Keep this file in sync with
`new-scope.md` and `future-ideas.md`._
