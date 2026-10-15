import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Container } from '../ui/Container'
import { company } from '../../data/company'
import { contactAddress } from '../../data/contact'
import { footerContent, footerLinks, footerContactLinks, footerLegalLinks } from '../../data/footer'
import logo from '../../assets/brand/onboard-logistics-logo.png'

const currentYear = new Date().getFullYear()

export function Footer() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-columns">
          <div className="footer-identity">
            <Link className="brand footer-brand" to="/" aria-label="Onboard Logistics Ltd — home"><img src={logo} width="100" height="78" alt="Onboard Logistics Ltd" /></Link>
            <p>{footerContent.positioning}</p>
          </div>
          {footerLinks.map(group => <nav className="footer-column footer-link-group" key={group.id} data-expanded={!!expanded[group.id]} aria-labelledby={`footer-${group.id}`}><h2 id={`footer-${group.id}`}><span className="footer-heading-label">{group.title}</span><button className="footer-toggle" type="button" aria-expanded={!!expanded[group.id]} aria-controls={`footer-links-${group.id}`} onClick={() => setExpanded(current => ({ ...current, [group.id]: !current[group.id] }))}>{group.title}<ChevronDown size={17} aria-hidden="true" /></button></h2><ul id={`footer-links-${group.id}`}>{group.links.map(link => <li key={link.label}><Link to={link.href}>{link.label}</Link></li>)}</ul></nav>)}
          <div className="footer-column footer-contact-column">
            <h2 id="footer-contact-title">{footerContent.contactTitle}</h2>
            <address>{contactAddress.street}<br />{contactAddress.postal}<br />{contactAddress.locality}, {contactAddress.country}</address>
            <nav aria-labelledby="footer-contact-title"><ul>{footerContactLinks.map(link => <li key={link.label}><Link to={link.href}>{link.label}</Link></li>)}</ul></nav>
          </div>
        </div>
        <div className="footer-lower-bar">
          <p>© {currentYear} {company.name}.</p>
          <nav aria-label="Legal"><ul>{footerLegalLinks.map(link => <li key={link.label}><Link to={link.href}>{link.label}</Link></li>)}</ul></nav>
        </div>
      </Container>
    </footer>
  )
}
