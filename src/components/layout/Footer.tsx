import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { company } from '../../data/company'
import { footerContent, footerLinks, footerContactLinks, footerLegalLinks } from '../../data/footer'
import logo from '../../assets/brand/onboard-logistics-logo.png'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-columns">
          <div className="footer-identity">
            <Link className="brand footer-brand" to="/" aria-label="Onboard Logistics Ltd — home"><img src={logo} width="100" height="78" alt="Onboard Logistics Ltd" /></Link>
            <p>{footerContent.positioning}</p>
          </div>
          {footerLinks.map(group => <nav className="footer-column" key={group.id} aria-labelledby={`footer-${group.id}`}><h2 id={`footer-${group.id}`}>{group.title}</h2><ul>{group.links.map(link => <li key={link.label}><Link to={link.href}>{link.label}</Link></li>)}</ul></nav>)}
          <div className="footer-column footer-contact-column">
            <h2 id="footer-contact-title">{footerContent.contactTitle}</h2>
            <address>{footerContent.location}</address>
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
