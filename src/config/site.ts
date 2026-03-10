/**
 * Site configuration — update these values before deploying to production.
 *
 * The SITE_URL is read from the VITE_SITE_URL environment variable at build
 * time. Create a `.env` (or `.env.production`) file in the project root:
 *
 *   VITE_SITE_URL=https://www.farmaciaascensaonunes.pt
 *
 * If not set, it falls back to "/" so relative paths still work.
 */

export const SITE_URL: string =
  (import.meta as unknown as { env: Record<string, string | undefined> }).env
    ?.VITE_SITE_URL ?? '/';

export const SITE_NAME = 'Farmácia Ascensão Nunes';

export const SITE_DESCRIPTION =
  'Farmácia Ascensão Nunes em Agualva-Cacém: serviços farmacêuticos, promoções, aconselhamento profissional e atendimento personalizado.';

export const SITE_OG_IMAGE = '/og-image.svg';
