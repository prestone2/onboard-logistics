import type { CorporatePageData } from '../types/corporate'

export const quotePage: CorporatePageData = {
  hero: {
    eyebrow: 'Freight Quotation', title: 'Tell Us What You Need to Move.',
    intro: 'Provide the key details of your shipment and route. This helps the logistics team understand the cargo, destination and operational support required.',
  },
  seo: { title: 'Request a Freight Quote | Onboard Logistics Ltd', description: 'Share your shipment, route and clearing requirements to prepare a regional freight quote request with Onboard Logistics Ltd.' },
}

export const quoteSteps = [
  { step: 1, label: 'Shipper Profile' },
  { step: 2, label: 'Cargo Profile' },
  { step: 3, label: 'Route' },
  { step: 4, label: 'Clearing & Review' },
] as const

export const quoteOptions = {
  commodities: [
    { value: 'general', label: 'General Cargo' },
    { value: 'out-of-gauge', label: 'Out-of-Gauge' },
    { value: 'dangerous-goods', label: 'Dangerous Goods / Hazmat' },
    { value: 'break-bulk', label: 'Break-Bulk' },
    { value: 'other', label: 'Other' },
  ],
  packaging: [
    { value: '20ft', label: '20ft Container' },
    { value: '40ft', label: '40ft Container' },
    { value: 'loose-pallets', label: 'Loose Pallets' },
    { value: 'break-bulk', label: 'Break-Bulk' },
    { value: 'other', label: 'Other' },
  ],
  destinations: ['Kampala', 'Kigali / Rwanda', 'Tanzania', 'Eastern DRC', 'Other'],
  clearingLabel: 'Clearing & Forwarding Required?',
  preArrivalLabel: 'Pre-arrival Processing Required?',
  yesNo: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }],
} as const

export const quoteFormCopy = {
  next: 'Continue', previous: 'Previous', prepare: 'Prepare Quote Request',
  successTitle: 'Quote request prepared successfully.',
  successMessage: 'Online submission will be enabled once the enquiry service is connected.',
  reviewTitle: 'Review your freight details',
}

// TODO(client verification): confirm the authorized quote enquiry recipient and
// approved privacy/data retention handling before enabling online submission.

export const quoteFieldLabels = {
  company: 'Company / Organization',
  contactPerson: 'Contact Person',
  businessEmail: 'Business Email',
  phone: 'Phone Number',
  commodity: 'Commodity Type',
  tonnage: 'Total Tonnage',
  volume: 'Total Volume (CBM)',
  packaging: 'Packaging Type',
  origin: 'Origin',
  destination: 'Destination',
  borderCrossing: 'Preferred Border Crossing',
  additionalRequirements: 'Additional Requirements',
} as const
export const quoteFieldHints = { borderCrossing: 'Optional. Enter a preferred border crossing if known.' } as const
