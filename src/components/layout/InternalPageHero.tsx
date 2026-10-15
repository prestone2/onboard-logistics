import { Container } from '../ui/Container'
import type { EditorialImage, PageIntro } from '../../types/corporate'

interface InternalPageHeroProps extends PageIntro {
  variant?: 'dark' | 'light'
  image?: EditorialImage
}

export function InternalPageHero({ title, intro, variant = 'dark', image }: InternalPageHeroProps) {
  return (
    <section className={`internal-hero internal-hero--${variant}`} aria-labelledby="internal-page-title">
      <Container>
        <div className={`internal-hero-grid ${image ? 'internal-hero-grid--image' : ''}`}>
          <div><h1 id="internal-page-title">{title}</h1><p className="internal-hero-intro">{intro}</p></div>
          {image && <img className="internal-hero-image" src={image.src} width={image.width} height={image.height} alt={image.alt} decoding="async" />}
        </div>
      </Container>
    </section>
  )
}
