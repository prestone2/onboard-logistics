import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { SEO } from '../ui/SEO'
import { Button } from '../ui/Button'

interface PageShellProps { title: string; description: string }

export function PageShell({ title, description }: PageShellProps) {
  return (
    <>
      <SEO title={`${title} | Onboard Logistics Ltd`} description={description} noIndex />
      <section className="page-shell">
        <Container>
          <SectionHeading eyebrow="Onboard Logistics Ltd" title={title} description={description} />
          <div className="page-placeholder"><span className="status-mark" /><p>This page is being prepared. More information will be available soon.</p></div>
          <Button to="/" variant="secondary">Back to Home</Button>
        </Container>
      </section>
    </>
  )
}
