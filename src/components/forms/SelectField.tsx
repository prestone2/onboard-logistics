import type { ComponentPropsWithoutRef } from 'react'
import { FormError } from './FormError'

type SelectOption = { value: string; label: string }
type NativeSelectProps = Omit<ComponentPropsWithoutRef<'select'>, 'id' | 'name' | 'value' | 'onChange' | 'required' | 'children'>
interface SelectFieldProps extends NativeSelectProps {
  id: string
  name: string
  label: string
  value: string
  options: readonly SelectOption[]
  placeholder: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
}

export function SelectField({ id, name, label, value, options, placeholder, onChange, error, required = false, ...props }: SelectFieldProps) {
  const errorId = `${id}-error`
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}{required ? <span className="required-mark" aria-hidden="true"> *</span> : <span className="optional-note"> Optional</span>}</label>
      <select {...props} className="form-control" id={id} name={name} value={value} onChange={event => onChange(event.target.value)} aria-required={required} aria-invalid={error ? true : undefined} aria-describedby={error ? errorId : undefined}>
        <option value="">{placeholder}</option>
        {options.map(option => <option value={option.value} key={option.value}>{option.label}</option>)}
      </select>
      <FormError id={errorId} message={error} />
    </div>
  )
}
