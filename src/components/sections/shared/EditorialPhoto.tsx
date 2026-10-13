import { motion } from 'framer-motion'
import { useScrollReveal } from '../../ui/useScrollReveal'
import type { EditorialImage } from '../../../types/corporate'

interface EditorialPhotoProps {
  image: EditorialImage
  caption?: string
  className?: string
}

export function EditorialPhoto({ image, caption, className = '' }: EditorialPhotoProps) {
  const reveal = useScrollReveal()
  return <motion.figure {...reveal} className={`editorial-photo ${className}`}><img src={image.src} width={image.width} height={image.height} alt={image.alt} loading="lazy" decoding="async" />{caption && <figcaption>{caption}</figcaption>}</motion.figure>
}
