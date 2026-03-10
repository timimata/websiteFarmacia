/**
 * Security utilities barrel export.
 *
 * Import from '@/lib/security' for easy access to all security helpers:
 *   import { contactFormLimiter, validateContactForm, sanitizeString } from '@/lib/security';
 */

export {
  createRateLimiter,
  contactFormLimiter,
  apiLimiter,
  type RateLimiterOptions,
  type RateLimitResult,
} from './rateLimiter';

export {
  sanitizeString,
  sanitizeHtml,
  escapeHtml,
  validateString,
  validatePhone,
  validateEmail,
  validateContactForm,
  type ValidationResult,
  type ContactFormData,
} from './inputValidation';
