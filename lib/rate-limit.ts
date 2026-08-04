// Minimal in-memory, per-IP sliding-window rate limiter for the two email
// endpoints. State is per serverless instance, so this is a mitigation that
// raises the cost of abuse rather than a hard guarantee — a shared store
// (e.g. Upstash) or a platform WAF rule is the upgrade path if abuse is seen.

const WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const MAX_REQUESTS = 5 // per IP, per window, per endpoint

const hits = new Map<string, number[]>()

function clientIp(request: Request): string {
  // Vercel sets x-forwarded-for; first entry is the client.
  const fwd = request.headers.get('x-forwarded-for')
  return fwd?.split(',')[0]?.trim() || 'unknown'
}

/** Returns true when the request is within limits, false when it should be rejected. */
export function checkRateLimit(request: Request, bucket: string): boolean {
  const key = `${bucket}:${clientIp(request)}`
  const now = Date.now()
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS)

  if (recent.length >= MAX_REQUESTS) {
    hits.set(key, recent)
    return false
  }

  recent.push(now)
  hits.set(key, recent)

  // Opportunistic cleanup so the map can't grow unbounded.
  if (hits.size > 10_000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k)
    }
  }

  return true
}
