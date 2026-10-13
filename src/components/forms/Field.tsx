import type { ComponentPropsWithoutRef } from 'react'
import { FormError } from './FormError'

type NativeInputProps = Omit<ComponentPropsWithoutRef<'input'>, 'id' | 'name' | 'value' | 'onChange' | 'required'>
interface FieldProps extends NativeInputProps {
  id: string
  name: string
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  hint?: string
  required?: boolean
  inputClassName?: string
}

export function Field({ id, name, label, value, onChange, error, hint, required = false, inputClassName = '', ...props }: FieldProps) {
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}{required ? <span className="required-mark" aria-hidden="true"> *</span> : <span className="optional-note"> Optional</span>}</label>
      <input {...props} className={`form-control ${inputClassName}`} id={id} name={name} value={value} onChange={event => onChange(event.target.value)} aria-required={required} aria-invalid={error ? true : undefined} aria-describedby={describedBy} />
      {hint && <p className="form-hint" id={hintId}>{hint}</p>}
      <FormError id={errorId ?? `${id}-error`} message={error} />
    </div>
  )
}
