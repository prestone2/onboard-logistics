import type { ContactFormData, FreightQuoteData } from '../types/forms'

/** Integration boundary only. Contact submission is unavailable until an approved endpoint is configured. */
export async function submitContactEnquiry(_data: ContactFormData): Promise<never> {
  throw new Error('Contact enquiry submission is not configured.')
}

/** Integration boundary only. Quote submission is unavailable until an approved endpoint is configured. */
export async function submitFreightQuote(_data: FreightQuoteData): Promise<never> {
  throw new Error('Freight quote submission is not configured.')
}
