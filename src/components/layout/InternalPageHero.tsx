import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import type { EditorialImage, PageIntro } from '../../types/corporate'

interface InternalPageHeroProps extends PageIntro {
  variant?: 'dark' | 'light'
  image?: EditorialImage
  breadcrumb?: boolean
  breadcrumbLabel?: string
}

export function InternalPageHero({ title, intro, variant = 'dark', image, breadcrumb = true, breadcrumbLabel = title }: InternalPageHeroProps) {
  return (
    <section className={`internal-hero internal-hero--${variant}`} aria-labelledby="internal-page-title">
      <Container>
        {breadcrumb && <nav className="breadcrumbs" aria-label="Breadcrumb"><ol><li><Link to="/">Home</Link></li><li><span aria-hidden="true">/</span><span aria-current="page">{breadcrumbLabel}</span></li></ol></nav>}
        <div className={`internal-hero-grid ${image ? 'internal-hero-grid--image' : ''}`}>
          <div><h1 id="internal-page-title">{title}</h1><p className="internal-hero-intro">{intro}</p></div>
          {image && <img className="internal-hero-image" src={image.src} width={image.width} height={image.height} alt={image.alt} decoding="async" />}
        </div>
      </Container>
    </section>
  )
}
