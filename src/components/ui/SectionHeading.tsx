interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h1>{title}</h1>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}
