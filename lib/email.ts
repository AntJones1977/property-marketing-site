// Shared helpers for the two email API routes.

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Server-side length caps — anything longer is a bot or an accident, and
// unbounded fields would otherwise flow straight into outbound email.
export const MAX_NAME = 100
export const MAX_EMAIL = 254
export const MAX_SUBJECT = 150
export const MAX_MESSAGE = 5000

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/** Read a string field from an untrusted payload, trimmed and length-capped. */
export function field(payload: Record<string, unknown>, key: string, max: number): string {
  return String(payload[key] ?? '')
    .trim()
    .slice(0, max)
}
