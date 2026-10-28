import type { ReactNode } from 'react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { SEO } from '../ui/SEO'
import { Button } from '../ui/Button'

interface PageShellProps { title: string; description: string; children?: ReactNode }

export function PageShell({ title, description, children }: PageShellProps) {
  return (
    <>
      <SEO title={`${title} | Onboard Logistics Ltd`} description={description} noIndex />
      <section className="page-shell">
        <Container>
          <SectionHeading eyebrow="Onboard Logistics Ltd" title={title} description={description} />
          {children ? <div className="legal-content">{children}</div> : <div className="page-placeholder"><span className="status-mark" /><p>This page is being prepared. More information will be available soon.</p></div>}
          <Button to="/" variant="secondary">Back to Home</Button>
        </Container>
      </section>
    </>
  )
}
