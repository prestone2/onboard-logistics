import type { YesNoAnswer } from '../../types/forms'
import { FormError } from './FormError'

interface YesNoFieldProps {
  id: string
  name: string
  legend: string
  value: YesNoAnswer
  onChange: (value: YesNoAnswer) => void
  error?: string
  options: readonly { value: 'yes' | 'no'; label: string }[]
}

export function YesNoField({ id, name, legend, value, onChange, error, options }: YesNoFieldProps) {
  const errorId = `${id}-error`
  return (
    <fieldset className="choice-field" aria-describedby={error ? errorId : undefined}>
      <legend>{legend}<span className="required-mark" aria-hidden="true"> *</span></legend>
      <div className="choice-options">{options.map(option => <label className="choice-option" key={option.value} htmlFor={`${id}-${option.value}`}><input id={`${id}-${option.value}`} type="radio" name={name} value={option.value} checked={value === option.value} aria-invalid={error ? true : undefined} aria-describedby={error ? errorId : undefined} aria-required="true" onChange={() => onChange(option.value)} /><span>{option.label}</span></label>)}</div>
      <FormError id={errorId} message={error} />
    </fieldset>
  )
}
