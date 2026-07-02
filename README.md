# PropertyApp Marketing Site

Public marketing and lead-generation site for **PropertyApp**, the property
portfolio management product of MAR Property Investments Ltd. Live at
[marpropertyinvestments.co.uk](https://www.marpropertyinvestments.co.uk).

## Stack

Next.js (App Router) · React · TypeScript (strict) · Tailwind CSS 4 ·
Resend (email) · deployed on Vercel.

All marketing pages are statically prerendered. The only server code is two
API routes: `/api/contact` (contact form) and `/api/rra-check` (Renters'
Rights Act readiness checker lead magnet). Both send email via Resend and
are rate-limited per IP.

## Development

```bash
npm install
npm run dev        # http://localhost:3001
npm run typecheck  # strict TS check
npm run build      # production build (CI runs this on every PR)
```

## Configuration

Copy `.env.example` to `.env` and set:

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Required for both forms. Sending domain must be verified in Resend. |
| `CONTACT_TO_EMAIL` | Optional override for the delivery inbox. |
| `CONTACT_FROM_EMAIL` | Optional override for the sending identity. |

Site-wide constants (app URL, site URL, statutory company details) live in
`lib/site.ts`.

## Repository conventions

See [CLAUDE.md](./CLAUDE.md) for architecture rules, editorial and
compliance controls, and the definition of done. A full architecture,
security and compliance review lives in
[docs/application-review-2026-07.md](./docs/application-review-2026-07.md).

This repository is **public**: never commit internal product docs, roadmap
material or anything listed in `.gitignore`'s exclusion block.
