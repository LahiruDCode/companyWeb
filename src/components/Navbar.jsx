import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronRight } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About' },
  { path: '/reach-us', label: 'Reach Us' },
  { path: '/careers', label: 'Careers' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-strong shadow-2xl shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="page-container">
          <div className="flex items-center justify-between" style={{ height: '4.5rem' }}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-purple-600 flex items-center justify-center overflow-hidden">
                <span className="text-white font-bold text-lg tracking-tighter">T</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-tight leading-none">Trigon</span>
                <span className="text-accent-400 text-[10px] font-semibold tracking-[0.2em] uppercase leading-none mt-0.5">RCM</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-accent-400'
                      : 'text-dark-100 hover:text-white'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 rounded-lg bg-accent-500/10 border border-accent-500/20"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+16463470999"
                className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors"
              >
                <Phone size={14} />
                (646) 347-0999
              </a>
              <Link
                to="/reach-us"
                className="hidden lg:flex items-center gap-1 px-5 py-2.5 text-sm font-semibold text-dark-900 bg-gradient-to-r from-accent-500 to-accent-400 rounded-lg hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300 hover:scale-[1.02]"
              >
                Get Started
                <ChevronRight size={14} />
              </Link>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 text-dark-100 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-80 glass-strong p-6 pt-24"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      location.pathname === link.path
                        ? 'text-accent-400 bg-accent-500/10'
                        : 'text-dark-100 hover:text-white hover:bg-dark-600/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="tel:+16463470999"
                  className="mt-4 flex items-center gap-2 px-4 py-3 text-accent-400 font-medium"
                >
                  <Phone size={16} />
                  (646) 347-0999
                </a>
                <Link
                  to="/reach-us"
                  className="mt-2 flex items-center justify-center gap-1 px-5 py-3 text-sm font-semibold text-dark-900 bg-gradient-to-r from-accent-500 to-accent-400 rounded-xl"
                >
                  Get Started
                  <ChevronRight size={14} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
