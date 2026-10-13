import { motion } from 'framer-motion'
import { useScrollReveal } from '../../ui/useScrollReveal'
import type { EditorialItem } from '../../../types/corporate'

export function EditorialList({ items, className = '' }: { items: readonly EditorialItem[]; className?: string }) {
  const reveal = useScrollReveal()
  return <motion.ol {...reveal} className={`editorial-list ${className}`}>{items.map((item, index) => <li key={item.id}><span className="editorial-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.description}</p></li>)}</motion.ol>
}
