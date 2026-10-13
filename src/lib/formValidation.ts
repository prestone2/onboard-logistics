import type { ContactErrors, ContactFormData, FreightQuoteData, FreightQuoteStep, QuoteErrors } from '../types/forms'

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
const isPhone = (value: string) => /^[+()\d\s.-]{7,}$/.test(value.trim())
const isPositiveNumber = (value: string) => Number.isFinite(Number(value)) && Number(value) > 0

export function validateContact(data: ContactFormData): ContactErrors {
  const errors: ContactErrors = {}
  if (!data.fullName.trim()) errors.fullName = 'Enter your full name.'
  if (data.email.trim() && !isEmail(data.email)) errors.email = 'Enter a valid email address.'
  if (!data.email.trim()) errors.email = 'Enter your email address.'
  if (data.phone.trim() && !isPhone(data.phone)) errors.phone = 'Enter a valid phone number or leave this optional field blank.'
  if (!data.subject) errors.subject = 'Choose a subject.'
  if (!data.message.trim()) errors.message = 'Enter a message.'
  else if (data.message.trim().length < 10) errors.message = 'Please include a little more detail (at least 10 characters).'
  return errors
}

export function validateQuoteStep(data: FreightQuoteData, step: FreightQuoteStep): QuoteErrors {
  const errors: QuoteErrors = {}
  if (step === 1) {
    if (!data.company.trim()) errors.company = 'Enter your company or organization.'
    if (!data.contactPerson.trim()) errors.contactPerson = 'Enter the contact person’s name.'
    if (!data.businessEmail.trim()) errors.businessEmail = 'Enter your business email.'
    else if (!isEmail(data.businessEmail)) errors.businessEmail = 'Enter a valid email address.'
    if (!data.phone.trim()) errors.phone = 'Enter a phone number.'
    else if (!isPhone(data.phone)) errors.phone = 'Enter a valid phone number.'
  }
  if (step === 2) {
    if (!data.commodity) errors.commodity = 'Choose a commodity type.'
    if (!data.tonnage.trim()) errors.tonnage = 'Enter the total tonnage.'
    else if (!isPositiveNumber(data.tonnage)) errors.tonnage = 'Enter a number greater than zero.'
    if (!data.volume.trim()) errors.volume = 'Enter the total volume.'
    else if (!isPositiveNumber(data.volume)) errors.volume = 'Enter a number greater than zero.'
    if (!data.packaging) errors.packaging = 'Choose a packaging type.'
  }
  if (step === 3) {
    if (!data.origin.trim()) errors.origin = 'Enter the shipment origin.'
    if (!data.destination.trim()) errors.destination = 'Enter the shipment destination.'
  }
  if (step === 4) {
    if (!data.clearingRequired) errors.clearingRequired = 'Choose yes or no.'
    if (!data.preArrivalRequired) errors.preArrivalRequired = 'Choose yes or no.'
  }
  return errors
}
