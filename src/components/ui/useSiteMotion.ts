import { useEffect, type RefObject } from 'react'
import { usePrefersReducedMotion as useReducedMotion } from '../../hooks/usePrefersReducedMotion'

/** Enhance rendered content, including lazy routes, without hiding the server HTML. */
export function useSiteMotion(root: RefObject<HTMLElement | null>, pathname: string) {
  const reducedMotion = useReducedMotion()
  useEffect(() => {
    const element = root.current
    if (!element || reducedMotion || !('IntersectionObserver' in window)) return
    const nodes = new Set<HTMLElement>()
    const reveal = (node: HTMLElement) => {
      node.dataset.motionState = 'visible'
      observer.unobserve(node)
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) reveal(entry.target as HTMLElement)
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' })
    const scan = () => {
      element.querySelectorAll<HTMLElement>([
        '.home-section-intro > *', '.internal-hero-grid > *',
        '.corporate-section-intro > *', '.quick-action', '.service-row',
        '.editorial-list > li', '.fleet-capabilities > li', '.safety-controls > li',
        '.corridor-list > li', '.quote-layout > *', '.service-explorer-panel',
        '.positioning-image img', '.fleet-visual img', '.safety-visual img',
        '.editorial-photo img', '.services-photo img', '.internal-hero-image',
      ].join(',')).forEach(node => {
        if (nodes.has(node)) return
        nodes.add(node)
        node.dataset.motion = node.tagName === 'IMG' ? 'image' : 'rise'
        const index = Array.from(node.parentElement?.children ?? []).indexOf(node)
        node.style.setProperty('--entrance-delay', `${Math.min(index, 3) * 75}ms`)
        // Content already above the viewport must remain available for keyboard users.
        if (node.getBoundingClientRect().bottom < 0) reveal(node)
        else {
          node.dataset.motionState = 'pending'
          observer.observe(node)
        }
      })
    }
    scan()
    const mutations = new MutationObserver(scan)
    mutations.observe(element, { childList: true, subtree: true })
    const onFocus = (event: FocusEvent) => {
      const node = (event.target as Element).closest<HTMLElement>('[data-motion-state="pending"]')
      if (node) reveal(node)
    }
    element.addEventListener('focusin', onFocus)
    return () => {
      observer.disconnect()
      mutations.disconnect()
      element.removeEventListener('focusin', onFocus)
      nodes.forEach(node => {
        delete node.dataset.motion
        delete node.dataset.motionState
        node.style.removeProperty('--entrance-delay')
      })
    }
  }, [root, pathname, reducedMotion])
}
