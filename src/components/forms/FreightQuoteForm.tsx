import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Field } from './Field'
import { SelectField } from './SelectField'
import { TextareaField } from './TextareaField'
import { YesNoField } from './YesNoField'
import { QuoteProgress } from './QuoteProgress'
import { quoteFieldHints, quoteFieldLabels, quoteFormCopy, quoteOptions, quoteSteps } from '../../data/quote'
import { validateQuoteStep } from '../../lib/formValidation'
import type { FreightQuoteData, FreightQuoteStep, QuoteErrors, QuoteField, YesNoAnswer } from '../../types/forms'

const initialQuote: FreightQuoteData = {
  company: '', contactPerson: '', businessEmail: '', phone: '', commodity: '',
  tonnage: '', volume: '', packaging: '', origin: '', destination: '',
  borderCrossing: '', clearingRequired: '', preArrivalRequired: '', additionalRequirements: '',
}

function answerLabel(value: YesNoAnswer) { return value === 'yes' ? 'Yes' : value === 'no' ? 'No' : 'Not provided' }
function optionLabel(options: readonly { value: string; label: string }[], value: string) { return options.find(option => option.value === value)?.label ?? 'Not provided' }

export function FreightQuoteForm() {
  const [data, setData] = useState<FreightQuoteData>(initialQuote)
  const [step, setStep] = useState<FreightQuoteStep>(1)
  const [errors, setErrors] = useState<QuoteErrors>({})
  const [prepared, setPrepared] = useState(false)
  const advancedRef = useRef(false)
  const successRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (prepared) successRef.current?.focus()
    else if (advancedRef.current) document.getElementById('quote-step-title')?.focus()
  }, [step, prepared])
  const formRef = useRef<HTMLFormElement>(null)
  const stepTitle = quoteSteps[step - 1]?.label ?? ''

  function update<K extends QuoteField>(field: K, value: FreightQuoteData[K]) {
    setData(current => ({ ...current, [field]: value }))
    setErrors(current => ({ ...current, [field]: undefined }))
  }

  function submitStep(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const validationErrors = validateQuoteStep(data, step)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      window.requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus())
      return
    }
    setErrors({})
    if (step < quoteSteps.length) {
      advancedRef.current = true
      setStep((step + 1) as FreightQuoteStep)
    } else setPrepared(true)
  }

  const previousStep = () => {
    advancedRef.current = true
    setErrors({})
    setStep(current => (current - 1) as FreightQuoteStep)
  }

  if (prepared) return (
    <div ref={successRef} className="form-success quote-success" role="status" aria-live="polite" tabIndex={-1}>
      <span className="success-rule" aria-hidden="true" />
      <h2>{quoteFormCopy.successTitle}</h2>
      <p>{quoteFormCopy.successMessage}</p>
    </div>
  )

  return (
    <form ref={formRef} className="quote-form" onSubmit={submitStep} noValidate>
      <QuoteProgress currentStep={step} />
      <section className="quote-step" aria-labelledby="quote-step-title">
        <h2 id="quote-step-title" tabIndex={-1}>0{step} <span aria-hidden="true">/</span> {stepTitle}</h2>
        {step === 1 && <div className="form-grid">
          <Field id="quote-company" name="company" label={quoteFieldLabels.company} autoComplete="organization" value={data.company} onChange={value => update('company', value)} error={errors.company} required />
          <Field id="quote-contactPerson" name="contactPerson" label={quoteFieldLabels.contactPerson} autoComplete="name" value={data.contactPerson} onChange={value => update('contactPerson', value)} error={errors.contactPerson} required />
          <Field id="quote-businessEmail" name="businessEmail" label={quoteFieldLabels.businessEmail} type="email" autoComplete="email" value={data.businessEmail} onChange={value => update('businessEmail', value)} error={errors.businessEmail} required />
          <Field id="quote-phone" name="phone" label={quoteFieldLabels.phone} type="tel" autoComplete="tel" value={data.phone} onChange={value => update('phone', value)} error={errors.phone} required />
        </div>}
        {step === 2 && <div className="form-grid">
          <SelectField id="quote-commodity" name="commodity" label={quoteFieldLabels.commodity} value={data.commodity} options={quoteOptions.commodities} placeholder="Select a commodity" onChange={value => update('commodity', value)} error={errors.commodity} required />
          <Field id="quote-tonnage" name="tonnage" label={quoteFieldLabels.tonnage} type="text" inputMode="decimal" autoComplete="off" value={data.tonnage} onChange={value => update('tonnage', value)} error={errors.tonnage} required />
          <Field id="quote-volume" name="volume" label={quoteFieldLabels.volume} type="text" inputMode="decimal" autoComplete="off" value={data.volume} onChange={value => update('volume', value)} error={errors.volume} required />
          <SelectField id="quote-packaging" name="packaging" label={quoteFieldLabels.packaging} value={data.packaging} options={quoteOptions.packaging} placeholder="Select a packaging type" onChange={value => update('packaging', value)} error={errors.packaging} required />
        </div>}
        {step === 3 && <div className="form-grid">
          <Field id="quote-origin" name="origin" label={quoteFieldLabels.origin} autoComplete="address-level2" value={data.origin} onChange={value => update('origin', value)} error={errors.origin} required />
          <Field id="quote-destination" name="destination" label={quoteFieldLabels.destination} list="quote-destinations" autoComplete="off" value={data.destination} onChange={value => update('destination', value)} error={errors.destination} required />
          <datalist id="quote-destinations">{quoteOptions.destinations.map(destination => <option value={destination} key={destination} />)}</datalist>
          <Field id="quote-borderCrossing" name="borderCrossing" label={quoteFieldLabels.borderCrossing} hint={quoteFieldHints.borderCrossing} autoComplete="off" value={data.borderCrossing} onChange={value => update('borderCrossing', value)} />
        </div>}
        {step === 4 && <div className="quote-review-step">
          <div className="quote-question-grid"><YesNoField id="quote-clearingRequired" name="clearingRequired" legend={quoteOptions.clearingLabel} value={data.clearingRequired} onChange={value => update('clearingRequired', value)} error={errors.clearingRequired} options={quoteOptions.yesNo} /><YesNoField id="quote-preArrivalRequired" name="preArrivalRequired" legend={quoteOptions.preArrivalLabel} value={data.preArrivalRequired} onChange={value => update('preArrivalRequired', value)} error={errors.preArrivalRequired} options={quoteOptions.yesNo} /></div>
          <TextareaField id="quote-additionalRequirements" name="additionalRequirements" label={quoteFieldLabels.additionalRequirements} rows={4} value={data.additionalRequirements} onChange={value => update('additionalRequirements', value)} />
          <h3 className="review-heading">{quoteFormCopy.reviewTitle}</h3>
          <dl className="quote-review-list">
            <div><dt>{quoteFieldLabels.company}</dt><dd>{data.company}</dd></div>
            <div><dt>{quoteFieldLabels.contactPerson}</dt><dd>{data.contactPerson}</dd></div>
            <div><dt>{quoteFieldLabels.businessEmail}</dt><dd>{data.businessEmail}</dd></div>
            <div><dt>{quoteFieldLabels.phone}</dt><dd>{data.phone}</dd></div>
            <div><dt>{quoteFieldLabels.commodity}</dt><dd>{optionLabel(quoteOptions.commodities, data.commodity)}</dd></div>
            <div><dt>{quoteFieldLabels.tonnage}</dt><dd>{data.tonnage} t</dd></div>
            <div><dt>{quoteFieldLabels.volume}</dt><dd>{data.volume} CBM</dd></div>
            <div><dt>{quoteFieldLabels.packaging}</dt><dd>{optionLabel(quoteOptions.packaging, data.packaging)}</dd></div>
            <div><dt>{quoteFieldLabels.origin}</dt><dd>{data.origin}</dd></div>
            <div><dt>{quoteFieldLabels.destination}</dt><dd>{data.destination}</dd></div>
            <div><dt>{quoteFieldLabels.borderCrossing}</dt><dd>{data.borderCrossing || 'Not specified'}</dd></div>
            <div><dt>{quoteOptions.clearingLabel}</dt><dd>{answerLabel(data.clearingRequired)}</dd></div>
            <div><dt>{quoteOptions.preArrivalLabel}</dt><dd>{answerLabel(data.preArrivalRequired)}</dd></div>
            <div><dt>{quoteFieldLabels.additionalRequirements}</dt><dd>{data.additionalRequirements || 'None provided'}</dd></div>
          </dl>
        </div>}
      </section>
      {Object.keys(errors).length > 0 && <p className="form-summary-error" role="alert">Please review the highlighted fields before continuing.</p>}
      <div className="quote-navigation">
        {step > 1 ? <button type="button" className="button button--secondary" onClick={previousStep}>{quoteFormCopy.previous}</button> : <span />}
        <button type="submit" className="button button--primary"><span>{step === 4 ? quoteFormCopy.prepare : quoteFormCopy.next}</span><span aria-hidden="true">→</span></button>
      </div>
    </form>
  )
}
