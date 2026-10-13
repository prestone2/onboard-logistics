import type { ComponentPropsWithoutRef } from 'react'
import { FormError } from './FormError'

type NativeTextareaProps = Omit<ComponentPropsWithoutRef<'textarea'>, 'id' | 'name' | 'value' | 'onChange' | 'required'>
interface TextareaFieldProps extends NativeTextareaProps {
  id: string
  name: string
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
}

export function TextareaField({ id, name, label, value, onChange, error, required = false, ...props }: TextareaFieldProps) {
  const errorId = `${id}-error`
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}{required ? <span className="required-mark" aria-hidden="true"> *</span> : <span className="optional-note"> Optional</span>}</label>
      <textarea {...props} className="form-control form-textarea" id={id} name={name} value={value} onChange={event => onChange(event.target.value)} aria-required={required} aria-invalid={error ? true : undefined} aria-describedby={error ? errorId : undefined} />
      <FormError id={errorId} message={error} />
    </div>
  )
}
