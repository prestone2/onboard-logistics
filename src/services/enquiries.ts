import { DEFAULT_ENQUIRY_ENDPOINT } from '../config/enquiries'
import type { ContactFormData, FreightQuoteData } from '../types/forms'

async function sendEnquiry(endpoint: string | undefined, data: Record<string, string>): Promise<void> {
  if (!endpoint?.trim()) {
    throw new Error('Online enquiries are temporarily unavailable. Your request has not been sent. Please try again later.')
  }

  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), 20000)
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
      signal: controller.signal,
      credentials: 'omit',
      redirect: 'error',
    })
    if (!response.ok) {
      throw new Error(response.status === 429
        ? 'Too many requests. Please wait a moment before trying again.'
        : 'The enquiry service could not accept your request. Please try again.')
    }
    // Require a service acknowledgement rather than treating a hosting fallback page as success.
    const result = await response.json() as { ok?: boolean; success?: boolean | string; message?: string }
    if (typeof result.message === 'string' && /activat|confirm.{0,30}email/i.test(result.message)) {
      throw new Error('Online enquiries are awaiting activation. Please email info@onboardlogisticsltd.com directly for now.')
    }
    if (result.ok !== true && result.success !== true && result.success !== 'true') {
      throw new Error('The enquiry service did not confirm receipt. Please try again.')
    }
  } catch (error) {
    if (controller.signal.aborted) {
      throw new Error('The request timed out. Receipt could not be confirmed. Please check before sending again.')
    }
    if (error instanceof TypeError || error instanceof SyntaxError) {
      throw new Error('Unable to confirm receipt. Check your connection and try again.')
    }
    throw error
  } finally {
    window.clearTimeout(timeout)
  }
}

export function submitContactEnquiry(data: ContactFormData): Promise<void> {
  return sendEnquiry(import.meta.env.VITE_CONTACT_ENDPOINT ?? DEFAULT_ENQUIRY_ENDPOINT, { ...data, name: data.fullName, _subject: 'Onboard Logistics — Contact Enquiry', _template: 'table', email: data.email.trim(), enquiryType: 'contact' })
}

export function submitFreightQuote(data: FreightQuoteData): Promise<void> {
  return sendEnquiry(import.meta.env.VITE_QUOTE_ENDPOINT ?? DEFAULT_ENQUIRY_ENDPOINT, { ...data, name: data.contactPerson, _subject: 'Onboard Logistics — Freight Quote Request', _template: 'table', email: data.businessEmail.trim(), enquiryType: 'freight-quote' })
}
