interface FormErrorProps { id: string; message?: string }

export function FormError({ id, message }: FormErrorProps) {
  return message ? <p className="form-error" id={id}>{message}</p> : null
}
