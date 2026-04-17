import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight, Globe, ExternalLink } from 'lucide-react'

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Reach Us', path: '/reach-us' },
  { label: 'Careers', path: '/careers' },
]

const services = [
  'Patient Scheduling',
  'Verification of Benefits',
  'Denial Management',
  'Payment Posting',
  'Insurance AR Follow-Up',
  'Pre-Authorization',
]

export default function Footer() {
  return (
    <footer className="relative border-t border-dark-500/30">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" style={{ height: 1 }} />

      <div className="page-container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3" style={{ marginBottom: '1.5rem' }}>
              <div className="rounded-xl bg-gradient-to-br from-accent-500 to-purple-600 flex items-center justify-center" style={{ width: '2.5rem', height: '2.5rem' }}>
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-tight leading-none">Trigon</span>
                <span className="text-accent-400 font-semibold tracking-[0.2em] uppercase leading-none" style={{ fontSize: '10px', marginTop: '2px' }}>RCM</span>
              </div>
            </Link>
            <p className="text-dark-100 text-sm leading-relaxed" style={{ marginBottom: '1.5rem', maxWidth: '18rem' }}>
              Transforming revenue cycles for healthcare providers nationwide. Expert RCM solutions that pay for themselves.
            </p>
            <div className="flex gap-3">
              <a href="#" className="rounded-lg bg-dark-600/50 flex items-center justify-center text-dark-200 hover:text-accent-400 hover:bg-dark-500/50 transition-all duration-300" style={{ width: '2.25rem', height: '2.25rem' }} aria-label="LinkedIn">
                <Globe size={16} />
              </a>
              <a href="#" className="rounded-lg bg-dark-600/50 flex items-center justify-center text-dark-200 hover:text-accent-400 hover:bg-dark-500/50 transition-all duration-300" style={{ width: '2.25rem', height: '2.25rem' }} aria-label="Twitter">
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase" style={{ marginBottom: '1.5rem' }}>Quick Links</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-dark-100 hover:text-accent-400 text-sm transition-colors duration-200"
                  >
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase" style={{ marginBottom: '1.5rem' }}>Services</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="group flex items-center gap-2 text-dark-100 hover:text-accent-400 text-sm transition-colors duration-200"
                  >
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase" style={{ marginBottom: '1.5rem' }}>Get in Touch</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent-500 shrink-0" style={{ marginTop: 2 }} />
                <span className="text-dark-100 text-sm leading-relaxed">
                  400 Rella Blvd, #207-298<br />
                  Montebello, NY 10901
                </span>
              </li>
              <li>
                <a href="mailto:info@TrigonRCM.com" className="flex items-center gap-3 text-dark-100 hover:text-accent-400 text-sm transition-colors">
                  <Mail size={16} className="text-accent-500 shrink-0" />
                  info@TrigonRCM.com
                </a>
              </li>
              <li>
                <a href="tel:+16463470999" className="flex items-center gap-3 text-dark-100 hover:text-accent-400 text-sm transition-colors">
                  <Phone size={16} className="text-accent-500 shrink-0" />
                  (646) 347 – 0999
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-dark-500/20" style={{ marginTop: '4rem', paddingTop: '2rem' }}>
          <p className="text-dark-200 text-xs">
            © {new Date().getFullYear()} Trigon RCM. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-dark-200 hover:text-accent-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-dark-200 hover:text-accent-400 text-xs transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
