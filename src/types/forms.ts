export interface ContactFormData {
  fullName: string
  company: string
  email: string
  phone: string
  subject: string
  message: string
}

export type YesNoAnswer = 'yes' | 'no' | ''

export interface FreightQuoteData {
  company: string
  contactPerson: string
  businessEmail: string
  phone: string
  commodity: string
  tonnage: string
  volume: string
  packaging: string
  origin: string
  destination: string
  borderCrossing: string
  clearingRequired: YesNoAnswer
  preArrivalRequired: YesNoAnswer
  additionalRequirements: string
}

export type FreightQuoteStep = 1 | 2 | 3 | 4

export type ContactField = keyof ContactFormData
export type QuoteField = keyof FreightQuoteData
export type ContactErrors = Partial<Record<ContactField, string>>
export type QuoteErrors = Partial<Record<QuoteField, string>>
