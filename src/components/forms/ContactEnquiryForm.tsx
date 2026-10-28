import { Link } from 'react-router-dom'
import { submitContactEnquiry } from '../../services/enquiries'
import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Field } from './Field'
import { SelectField } from './SelectField'
import { TextareaField } from './TextareaField'
import { validateContact } from '../../lib/formValidation'
import { contactFields, contactFormCopy, contactSubjects } from '../../data/contact'
import type { ContactErrors, ContactField, ContactFormData } from '../../types/forms'

const initialContact: ContactFormData = { fullName: '', company: '', email: '', phone: '', subject: '', message: '' }

export function ContactEnquiryForm({ careerEnquiry = false }: { careerEnquiry?: boolean }) {
  const [data, setData] = useState<ContactFormData>(() => ({ ...initialContact, subject: careerEnquiry ? 'careers' : '' }))
  const [errors, setErrors] = useState<ContactErrors>({})
  const [prepared, setPrepared] = useState(false)
  const [sending, setSending] = useState(false)
  const [deliveryError, setDeliveryError] = useState('')
  const sendingRef = useRef(false)
  const honeypotRef = useRef<HTMLInputElement>(null)

  async function deliver() {
    if (sendingRef.current) return
    if (honeypotRef.current?.value) {
      setDeliveryError('Unable to send your request. Please reload the page and try again.')
      return
    }
    sendingRef.current = true
    setSending(true)
    setDeliveryError('')
    try {
      await submitContactEnquiry(data)
      setPrepared(true)
    } catch (error) {
      setDeliveryError(error instanceof Error ? error.message : 'Unable to send your request. Please try again.')
    } finally {
      sendingRef.current = false
      setSending(false)
    }
  }
  const statusRef = useRef<HTMLDivElement>(null)

  useEffect(() => { if (prepared) statusRef.current?.focus() }, [prepared])

  function update(field: ContactField, value: string) {
    setData(current => ({ ...current, [field]: value }))
    setErrors(current => ({ ...current, [field]: undefined }))
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const validationErrors = validateContact(data)
    setErrors(validationErrors)
    const invalidField = (Object.keys(validationErrors) as ContactField[])[0]
    if (invalidField) {
      window.requestAnimationFrame(() => document.getElementById(`contact-${invalidField}`)?.focus())
      return
    }
    void deliver()
  }

  if (prepared) return (
    <div className="form-success" ref={statusRef} role="status" aria-live="polite" tabIndex={-1}>
      <span className="success-rule" aria-hidden="true" />
      <h2>{contactFormCopy.successTitle}</h2>
      <p>{contactFormCopy.successMessage}</p>
    </div>
  )

  return (
    <form className="enquiry-form" onSubmit={submit} aria-busy={sending} noValidate>
      <div className="form-honeypot" aria-hidden="true"><label>Leave this field empty<input ref={honeypotRef} name="_honey" type="text" tabIndex={-1} autoComplete="off" /></label></div>
      <h2>{contactFormCopy.title}</h2>
      <p className="form-required-note"><span aria-hidden="true">*</span> Required fields</p>
      <div className="form-grid">
        <Field id="contact-fullName" name="fullName" label={contactFields.fullName} autoComplete="name" value={data.fullName} onChange={value => update('fullName', value)} error={errors.fullName} required />
        <Field id="contact-company" name="company" label={contactFields.company} autoComplete="organization" value={data.company} onChange={value => update('company', value)} error={errors.company} />
        <Field id="contact-email" name="email" label={contactFields.email} type="email" autoComplete="email" value={data.email} onChange={value => update('email', value)} error={errors.email} required />
        <Field id="contact-phone" name="phone" label={contactFields.phone} type="tel" autoComplete="tel" value={data.phone} onChange={value => update('phone', value)} error={errors.phone} />
        <SelectField id="contact-subject" name="subject" label={contactFields.subject} value={data.subject} options={contactSubjects} placeholder={contactFields.subjectPlaceholder} onChange={value => update('subject', value)} error={errors.subject} required />
        <TextareaField id="contact-message" name="message" label={contactFields.message} rows={5} value={data.message} onChange={value => update('message', value)} error={errors.message} required />
      </div>
      {Object.keys(errors).length > 0 && <p className="form-summary-error" role="alert">Please review the highlighted fields.</p>}
      <p className="form-privacy-note">Your details are processed by FormSubmit and emailed to our team. Read our <Link to="/privacy" target="_blank" rel="noopener noreferrer">Privacy Notice (opens in a new tab)</Link>.</p>
      {deliveryError && <p className="form-summary-error" role="alert">{deliveryError}</p>}
      <button className="button button--primary form-submit" type="submit" disabled={sending}><span>{sending ? 'Sending…' : contactFormCopy.submit}</span><span aria-hidden="true">↗</span></button>
    </form>
  )
}
