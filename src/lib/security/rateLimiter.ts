/**
 * Client-side rate limiter (OWASP best practice).
 *
 * Uses a sliding-window approach keyed by an arbitrary identifier (e.g. action
 * name, IP placeholder, or user ID). When the limit is exceeded the caller
 * receives a structured result that includes a `retryAfterMs` hint so the UI
 * can display a friendly "try again in X seconds" message and return 429-style
 * feedback.
 *
 * Usage:
 *   const limiter = createRateLimiter({ maxRequests: 5, windowMs: 60_000 });
 *   const result = limiter.check('contact-form');
 *   if (!result.allowed) {
 *     // Show "Tente novamente em ${Math.ceil(result.retryAfterMs! / 1000)}s"
 *   }
 *
 * NOTE: This is a **client-side** guard. It does NOT replace server-side rate
 * limiting — it only improves UX and reduces obviously-abusive traffic before
 * it reaches the server.
 */

export interface RateLimiterOptions {
  /** Maximum number of requests allowed inside the window. Default: 10 */
  maxRequests?: number;
  /** Time window in milliseconds. Default: 60 000 (1 minute) */
  windowMs?: number;
}

export interface RateLimitResult {
  /** Whether the action is allowed. */
  allowed: boolean;
  /** Remaining requests in the current window (0 when blocked). */
  remaining: number;
  /** ms until the oldest request expires and the client can retry. `undefined` when allowed. */
  retryAfterMs?: number;
}

interface BucketEntry {
  timestamps: number[];
}

/**
 * Create a new rate limiter instance.
 *
 * Each instance maintains its own in-memory store, so separate limiters
 * can be created for different features (forms, API calls, etc.).
 */
export function createRateLimiter(options: RateLimiterOptions = {}) {
  const maxRequests = options.maxRequests ?? 10;
  const windowMs = options.windowMs ?? 60_000;
  const store = new Map<string, BucketEntry>();

  /** Remove timestamps that have fallen outside the current window. */
  function pruneExpired(entry: BucketEntry, now: number) {
    const threshold = now - windowMs;
    entry.timestamps = entry.timestamps.filter((t) => t > threshold);
  }

  /**
   * Check whether `key` is allowed to proceed.
   *
   * @param key A string identifying the caller / action (e.g. "contact-form").
   * @returns A `RateLimitResult` that the UI can inspect.
   */
  function check(key: string): RateLimitResult {
    const now = Date.now();
    let entry = store.get(key);

    if (!entry) {
      entry = { timestamps: [] };
      store.set(key, entry);
    }

    pruneExpired(entry, now);

    if (entry.timestamps.length >= maxRequests) {
      // Blocked — compute retry delay based on the oldest request in the window
      const oldestTimestamp = entry.timestamps[0];
      const retryAfterMs = oldestTimestamp + windowMs - now;
      return { allowed: false, remaining: 0, retryAfterMs: Math.max(retryAfterMs, 0) };
    }

    // Allowed — record this request
    entry.timestamps.push(now);
    return { allowed: true, remaining: maxRequests - entry.timestamps.length };
  }

  /** Reset all tracked state (useful in tests). */
  function reset() {
    store.clear();
  }

  /** Reset state for a specific key. */
  function resetKey(key: string) {
    store.delete(key);
  }

  return { check, reset, resetKey };
}

/* ──────────────────────────────────────────────
 * Pre-configured limiters with sensible defaults
 * ────────────────────────────────────────────── */

/** Rate limiter for contact / enquiry form submissions: 5 per minute. */
export const contactFormLimiter = createRateLimiter({
  maxRequests: 5,
  windowMs: 60_000,
});

/** Rate limiter for general API calls: 30 per minute. */
export const apiLimiter = createRateLimiter({
  maxRequests: 30,
  windowMs: 60_000,
});
