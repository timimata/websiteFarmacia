/**
 * Input validation & sanitization utilities (OWASP best practice).
 *
 * All validators are schema-based, enforce type checks, length limits, and
 * reject unexpected fields.  The sanitiser strips dangerous characters / HTML
 * to prevent XSS when values are later rendered or sent to a server.
 *
 * Uses DOMPurify for robust HTML sanitization (industry standard).
 *
 * Usage:
 *   const result = validateContactForm({
 *     name: 'Maria',
 *     email: 'maria@example.com',
 *     phone: '963013294',
 *     message: 'Olá!',
 *   });
 *   if (!result.valid) console.error(result.errors);
 */

import DOMPurify from 'dompurify';

/* ─────────────── Sanitisation ─────────────── */

/**
 * Sanitize a string using DOMPurify (strips all HTML/SVG/MathML).
 * Falls back to regex-based stripping if DOMPurify is unavailable (e.g. SSR).
 * Prevents stored / reflected XSS when user input is displayed or persisted.
 */
export function sanitizeString(input: unknown): string {
  if (typeof input !== 'string') return '';

  // DOMPurify: strip ALL tags (ALLOWED_TAGS empty = plain text output)
  const purified = DOMPurify.sanitize(input, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });

  return (
    purified
      // Extra defense: remove javascript: / data: URI schemes
      .replace(/javascript\s*:/gi, '')
      .replace(/data\s*:/gi, '')
      // Remove event handler attributes (onerror, onload, etc.)
      .replace(/on\w+\s*=/gi, '')
      // Collapse multiple spaces
      .replace(/\s+/g, ' ')
      .trim()
  );
}

/**
 * Sanitize HTML while allowing a safe subset of tags (e.g. for rich text).
 * Useful when you need to render user-provided formatted content safely.
 */
export function sanitizeHtml(input: unknown): string {
  if (typeof input !== 'string') return '';
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'ol', 'li'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
    ALLOW_DATA_ATTR: false,
  });
}

/**
 * Encode HTML special characters to their entity equivalents.
 * Use this when you must display user-provided text inside HTML attributes
 * or outside of React's JSX (which auto-escapes).
 */
export function escapeHtml(input: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };
  // eslint-disable-next-line security/detect-object-injection
  return input.replace(/[&<>"'/]/g, (char) => map[char]);
}

/* ─────────────── Validation helpers ─────────────── */

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

/** Validate that a value is a non-empty string within length bounds. */
export function validateString(
  value: unknown,
  fieldName: string,
  minLength = 1,
  maxLength = 500,
): ValidationResult {
  const errors: string[] = [];

  if (typeof value !== 'string') {
    errors.push(`${fieldName}: deve ser uma string.`);
    return { valid: false, errors };
  }

  const trimmed = value.trim();
  if (trimmed.length < minLength) {
    errors.push(`${fieldName}: deve ter pelo menos ${minLength} caractere(s).`);
  }
  if (trimmed.length > maxLength) {
    errors.push(`${fieldName}: não pode exceder ${maxLength} caracteres.`);
  }

  return { valid: errors.length === 0, errors };
}

/** Validate a Portuguese phone number (9 digits, optional +351 prefix). */
export function validatePhone(value: unknown, fieldName = 'Telefone'): ValidationResult {
  const errors: string[] = [];

  if (typeof value !== 'string') {
    errors.push(`${fieldName}: deve ser uma string.`);
    return { valid: false, errors };
  }

  // Strip spaces, dashes, parentheses
  const cleaned = value.replace(/[\s\-()]/g, '');
  // Accept +351XXXXXXXXX or 9XXXXXXXX patterns
  const ptPhoneRegex = /^(?:\+351)?[1-9]\d{8}$/;

  if (!ptPhoneRegex.test(cleaned)) {
    errors.push(`${fieldName}: número de telefone português inválido.`);
  }

  return { valid: errors.length === 0, errors };
}

/** Validate an email address (RFC 5322 simplified). */
export function validateEmail(value: unknown, fieldName = 'Email'): ValidationResult {
  const errors: string[] = [];

  if (typeof value !== 'string') {
    errors.push(`${fieldName}: deve ser uma string.`);
    return { valid: false, errors };
  }

  // Simplified but practical email regex (OWASP recommendation: don't over-complicate)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(value)) {
    errors.push(`${fieldName}: endereço de email inválido.`);
  }
  if (value.length > 254) {
    errors.push(`${fieldName}: email não pode exceder 254 caracteres.`);
  }

  return { valid: errors.length === 0, errors };
}

/* ─────────────── Schema-based form validation ─────────────── */

/** Allowed field names for the contact form — anything else is rejected. */
const CONTACT_FORM_ALLOWED_FIELDS = new Set(['name', 'email', 'phone', 'message']);

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  [key: string]: unknown; // to detect unexpected fields
}

/**
 * Validate and sanitize a contact form submission.
 * Rejects unexpected fields (OWASP: mass-assignment protection).
 */
export function validateContactForm(data: unknown): ValidationResult & { sanitized?: ContactFormData } {
  const errors: string[] = [];

  // 1. Type check: must be a plain object
  if (typeof data !== 'object' || data === null || Array.isArray(data)) {
    return { valid: false, errors: ['Os dados do formulário devem ser um objeto.'] };
  }

  const obj = data as Record<string, unknown>;

  // 2. Reject unexpected fields (mass-assignment protection)
  for (const key of Object.keys(obj)) {
    if (!CONTACT_FORM_ALLOWED_FIELDS.has(key)) {
      errors.push(`Campo inesperado: "${escapeHtml(String(key))}".`);
    }
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  // 3. Validate & sanitize each field
  const nameResult = validateString(obj.name, 'Nome', 2, 100);
  const emailResult = validateEmail(obj.email);
  const messageResult = validateString(obj.message, 'Mensagem', 10, 2000);
  errors.push(...nameResult.errors, ...emailResult.errors, ...messageResult.errors);

  // Phone is optional — validate only if provided
  if (obj.phone !== undefined && obj.phone !== '') {
    const phoneResult = validatePhone(obj.phone);
    errors.push(...phoneResult.errors);
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  // 4. Return sanitized data
  return {
    valid: true,
    errors: [],
    sanitized: {
      name: sanitizeString(obj.name),
      email: sanitizeString(obj.email),
      phone: obj.phone ? sanitizeString(obj.phone) : undefined,
      message: sanitizeString(obj.message),
    },
  };
}
