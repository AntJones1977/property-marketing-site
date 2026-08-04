// Single source of truth for site-wide constants.
// Never hardcode these values in pages, components or API routes.

/** The PropertyApp product (signup / login CTAs). */
export const APP_URL = 'https://marpropertyinvestments-app.co.uk'

/** This marketing site's canonical origin. */
export const SITE_URL = 'https://www.marpropertyinvestments.co.uk'

/** Where form submissions are delivered. Env-overridable without a code change. */
export const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL ?? 'Marpropertyinvestmentsltd@mail.com'

/** Verified Resend sending identity. Env-overridable without a code change. */
export const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? 'PropertyApp <contact@marpropertyinvestments.co.uk>'

/**
 * Statutory trading disclosures (Companies Act 2006 / Trading Disclosures
 * Regulations 2015). COMPANY_NUMBER and REGISTERED_OFFICE must be completed
 * with the real Companies House values — the footer renders them once set.
 */
export const COMPANY_NAME = 'MAR Property & Investments Ltd'
export const COMPANY_NUMBER = '' // TODO: set the real Companies House CRN
export const REGISTERED_OFFICE = '' // TODO: set the registered office address
export const PLACE_OF_REGISTRATION = 'England & Wales'
