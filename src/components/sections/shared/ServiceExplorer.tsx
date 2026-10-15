import { useRef, useState, type KeyboardEvent } from 'react'
import { Check, Truck, FileCheck2, PackageOpen, Network } from 'lucide-react'
import { serviceDetails } from '../../../data/services'
import { Container } from '../../ui/Container'
import { Button } from '../../ui/Button'

const tabs = [
  { id: 'cross-border', label: 'Freight', icon: Truck },
  { id: 'clearing', label: 'Customs', icon: FileCheck2 },
  { id: 'specialized', label: 'Specialized haulage', icon: PackageOpen },
  { id: 'capacity', label: 'Fleet capacity', icon: Network },
] as const

export function ServiceExplorer() {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const activeTab = tabs[activeIndex]
  const service = serviceDetails.find(item => item.id === activeTab.id) ?? serviceDetails[0]

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length
    else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length
    else if (event.key === 'ArrowDown' && window.matchMedia('(max-width: 767px)').matches) next = (index + 2) % tabs.length
    else if (event.key === 'ArrowUp' && window.matchMedia('(max-width: 767px)').matches) next = (index + tabs.length - 2) % tabs.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = tabs.length - 1
    else return
    event.preventDefault()
    setActiveIndex(next)
    tabRefs.current[next]?.focus({ preventScroll: true })
    tabRefs.current[next]?.scrollIntoView({ block: 'nearest', inline: 'nearest' })
  }

  return (
    <section className="corporate-section service-explorer" aria-label="Explore our freight services">
      <Container>
        <div className="service-tabs" role="tablist" aria-label="Service categories">
          {tabs.map((tab, index) => {
            const Icon = tab.icon
            return (
              <button key={tab.id} ref={element => { tabRefs.current[index] = element }} id={`service-tab-${tab.id}`} type="button" role="tab" aria-selected={activeIndex === index} aria-controls={`service-panel-${tab.id}`} tabIndex={activeIndex === index ? 0 : -1} onClick={() => setActiveIndex(index)} onKeyDown={event => onTabKeyDown(event, index)}>
                <Icon size={18} strokeWidth={1.6} aria-hidden="true" />{tab.label}
              </button>
            )
          })}
        </div>
        {tabs.map(tab => {
          const detail = serviceDetails.find(item => item.id === tab.id)
          if (!detail) return null
          return (
            <div className="service-explorer-panel" key={tab.id} id={`service-panel-${tab.id}`} role="tabpanel" aria-labelledby={`service-tab-${tab.id}`} hidden={service.id !== tab.id} tabIndex={0}>
              <div>
                <h2 className="corporate-heading" id={`service-${detail.id}`}>{detail.title}</h2>
                <p className="corporate-prose">{detail.description}</p>
                <Button to="/request-quote" className="service-explorer-cta">Request a Freight Quote</Button>
              </div>
              <ul className="service-scope" aria-label={`${detail.title} capabilities`}>
                {detail.scope.map(scope => <li key={scope}><Check size={18} aria-hidden="true" /><span>{scope}</span></li>)}
              </ul>
            </div>
          )
        })}
      </Container>
    </section>
  )
}
