import { usePrefersReducedMotion as useReducedMotion } from '../../hooks/usePrefersReducedMotion'

/** Shared entrance timing for editorial content and images. */
export function useScrollReveal(delay = 0) {
  const reducedMotion = useReducedMotion()
  return {
    initial: reducedMotion ? false as const : { opacity: 0, y: 28 },
    animate: reducedMotion ? { opacity: 1, y: 0 } : undefined,
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const },
  }
}
