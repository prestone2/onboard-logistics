import type { CorporatePageData } from '../types/corporate'

export const contactPage: CorporatePageData = {
  hero: {
    eyebrow: 'Contact', title: 'Talk to Our Logistics Team.',
    intro: 'Whether you are planning a freight movement, discussing clearing requirements or exploring a regional logistics partnership, our team can help you identify the next step.',
  },
  seo: { title: 'Contact Onboard Logistics Ltd | Uganda', description: 'Contact Onboard Logistics Ltd in Kampala, Uganda, about freight movements, clearing requirements and regional logistics partnerships.' },
}

// TODO(client verification): confirm the physical office address, public phone
// numbers and email addresses before displaying contact details.
export const contactLocation = 'Kampala, Uganda'
export const contactSubjects = [
  { value: 'freight', label: 'Freight Enquiry' },
  { value: 'clearing', label: 'Clearing & Forwarding' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'careers', label: 'Careers' },
  { value: 'general', label: 'General Enquiry' },
] as const
export const contactFormCopy = {
  title: 'Send an Enquiry', submit: 'Prepare Enquiry',
  successTitle: 'Your enquiry has been prepared.',
  successMessage: 'Online submission will be enabled once the contact service is connected.',
}

export const contactFields = {
  fullName: 'Full Name', company: 'Company', email: 'Email', phone: 'Phone',
  subject: 'Subject', message: 'Message', subjectPlaceholder: 'Select a subject',
} as const
