import { ArrowUpRight } from 'lucide-react'
import { Link, type LinkProps } from 'react-router-dom'

interface ButtonProps extends LinkProps {
  variant?: 'primary' | 'secondary'
  arrow?: boolean
}

export function Button({ variant = 'primary', arrow = true, className = '', children, ...props }: ButtonProps) {
  return (
    <Link className={`button button--${variant} ${className}`} {...props}>
      <span>{children}</span>
      {arrow && <ArrowUpRight size={18} aria-hidden="true" />}
    </Link>
  )
}
