import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2, ArrowRight } from 'lucide-react'

const serviceOptions = [
  'Multiple Services',
  'Patient Scheduling',
  'Verification of Benefits',
  'Referral Management',
  'Pre-Authorization & Pre-Certification',
  'Demo/Charge Entry and Submission',
  'Insurance AR Follow-Up',
  'Patient Calls (Billing Queries)',
  'Denial Management',
  'Payment Posting',
  'Patient AR Follow-Up',
  'Negotiations and Arbitration',
  'Other Customized Services',
]

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office',
    details: ['400 Rella Blvd, #207-298', 'Montebello, NY 10901'],
    href: null,
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@TrigonRCM.com'],
    href: 'mailto:info@TrigonRCM.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['(646) 347 – 0999'],
    href: 'tel:+16463470999',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon - Fri: 9:00 AM - 6:00 PM EST'],
    href: null,
  },
]

export default function ReachUs() {
  const [formData, setFormData] = useState({
    type: 'General Inquiry',
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <main>
      {/* ════════ HERO ════════ */}
      <section className="relative overflow-hidden" style={{ paddingTop: '9rem', paddingBottom: '5rem' }}>
        <div className="absolute inset-0 grid-pattern" style={{ opacity: 0.3 }} />
        <div className="absolute" style={{ top: '5rem', right: '25%', width: 500, height: 500, background: 'rgba(6,182,212,0.05)', borderRadius: '50%', filter: 'blur(120px)' }} />

        <div className="relative page-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full text-xs font-semibold tracking-widest uppercase text-accent-400 bg-accent-500/10 border border-accent-500/20" style={{ padding: '4px 12px', marginBottom: '1.5rem' }}>
              <span className="rounded-full bg-accent-400 glow-dot" style={{ width: 6, height: 6 }} />
              Contact Us
            </span>
            <h1 className="font-bold text-white" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              Let's Start a{' '}
              <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-dark-100" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', maxWidth: '40rem', margin: '0 auto', lineHeight: 1.7 }}>
              Reach out to discuss how we can optimize your revenue cycle. Your free consultation awaits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════ CONTACT SECTION ════════ */}
      <section style={{ padding: '3rem 0 5rem' }}>
        <div className="page-container">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* ── Contact Form ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="glass-card rounded-3xl glow-border" style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                <h2 className="text-white font-bold text-2xl" style={{ marginBottom: '0.5rem' }}>Send Us a Message</h2>
                <p className="text-dark-100 text-sm" style={{ marginBottom: '2rem' }}>We'll get back to you within one business day.</p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center" style={{ padding: '4rem 0' }}
                  >
                    <CheckCircle2 size={48} className="text-accent-500" style={{ marginBottom: '1rem' }} />
                    <h3 className="text-white font-semibold text-xl" style={{ marginBottom: '0.5rem' }}>Message Sent!</h3>
                    <p className="text-dark-100 text-sm">Thank you! Our team will reach out shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {/* Inquiry Type */}
                    <div className="flex gap-3">
                      {['Service', 'General Inquiry'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, type })}
                          className={`rounded-lg text-sm font-medium transition-all duration-200 ${
                            formData.type === type
                              ? 'bg-accent-500/20 text-accent-400 border border-accent-500/30'
                              : 'glass text-dark-100 hover:text-white'
                          }`}
                          style={{ padding: '0.5rem 1rem' }}
                        >
                          {type}
                        </button>
                      ))}
                    </div>

                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-dark-100 text-xs font-medium uppercase tracking-wider" style={{ marginBottom: '0.5rem' }}>Name</label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl glass text-white text-sm placeholder-dark-300 focus:outline-none focus:border-accent-500/40 transition-colors"
                        placeholder="Your full name"
                        style={{ padding: '0.75rem 1rem' }}
                      />
                    </div>

                    {/* Phone + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-phone" className="block text-dark-100 text-xs font-medium uppercase tracking-wider" style={{ marginBottom: '0.5rem' }}>Phone</label>
                        <input
                          type="tel"
                          id="contact-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-xl glass text-white text-sm placeholder-dark-300 focus:outline-none focus:border-accent-500/40 transition-colors"
                          placeholder="(XXX) XXX-XXXX"
                          style={{ padding: '0.75rem 1rem' }}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-dark-100 text-xs font-medium uppercase tracking-wider" style={{ marginBottom: '0.5rem' }}>Email</label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl glass text-white text-sm placeholder-dark-300 focus:outline-none focus:border-accent-500/40 transition-colors"
                          placeholder="you@practice.com"
                          style={{ padding: '0.75rem 1rem' }}
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="contact-service" className="block text-dark-100 text-xs font-medium uppercase tracking-wider" style={{ marginBottom: '0.5rem' }}>Service Interested In</label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-xl glass text-white text-sm focus:outline-none focus:border-accent-500/40 transition-colors appearance-none"
                        style={{ padding: '0.75rem 1rem', backgroundImage: "url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%238a8da5%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M1.646%204.646a.5.5%200%200%201%20.708%200L8%2010.293l5.646-5.647a.5.5%200%200%201%20.708.708l-6%206a.5.5%200%200%201-.708%200l-6-6a.5.5%200%200%201%200-.708z%22/%3E%3C/svg%3E')", backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat' }}
                      >
                        <option value="" className="bg-dark-700">Select a service...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-dark-700">{opt}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className="block text-dark-100 text-xs font-medium uppercase tracking-wider" style={{ marginBottom: '0.5rem' }}>Message</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full rounded-xl glass text-white text-sm placeholder-dark-300 focus:outline-none focus:border-accent-500/40 transition-colors resize-none"
                        placeholder="Tell us about your practice and needs..."
                        style={{ padding: '0.75rem 1rem' }}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group w-full flex items-center justify-center gap-2 text-sm font-semibold text-dark-900 bg-gradient-to-r from-accent-500 to-accent-400 rounded-xl hover:shadow-2xl hover:shadow-accent-500/25 transition-all duration-300 hover:scale-[1.01]"
                      style={{ padding: '1rem 2rem' }}
                    >
                      Send Message
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* ── Sidebar ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              {/* Contact Info Cards */}
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                  className="glass-card rounded-2xl"
                  style={{ padding: '1.5rem' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center shrink-0 rounded-xl bg-accent-500/10" style={{ width: '2.5rem', height: '2.5rem' }}>
                      <info.icon size={18} className="text-accent-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm" style={{ marginBottom: '0.25rem' }}>{info.title}</h3>
                      {info.details.map((detail, j) => (
                        info.href ? (
                          <a key={j} href={info.href} className="block text-dark-100 text-sm hover:text-accent-400 transition-colors">{detail}</a>
                        ) : (
                          <p key={j} className="text-dark-100 text-sm">{detail}</p>
                        )
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="glass-card rounded-2xl overflow-hidden relative"
                style={{ aspectRatio: '4/3' }}
              >
                <div className="absolute inset-0 bg-dark-700/50">
                  <div className="absolute inset-0 grid-pattern" style={{ opacity: 0.4 }} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="relative">
                      <div className="rounded-full bg-accent-500 animate-pulse-glow" style={{ width: '1rem', height: '1rem' }} />
                      <div className="absolute rounded-full border-2 border-accent-500/30 animate-ping" style={{ inset: '-0.75rem', animationDuration: '2s' }} />
                      <div className="absolute rounded-full border border-accent-500/15" style={{ inset: '-1.5rem' }} />
                      <div className="absolute rounded-full border border-accent-500/10" style={{ inset: '-2.5rem' }} />
                    </div>
                    <p className="text-white text-sm font-semibold" style={{ marginTop: '2rem' }}>Montebello, New York</p>
                    <p className="text-dark-200 text-xs" style={{ marginTop: '0.25rem' }}>400 Rella Blvd, #207-298</p>
                  </div>
                </div>
              </motion.div>

              {/* Book Appointment */}
              <a
                href="https://outlook.office.com/book/SalesMeetings@TrigonRCM.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 glass-card rounded-2xl text-accent-400 font-semibold text-sm hover:bg-accent-500/10 transition-all duration-300"
                style={{ padding: '1rem 1.5rem' }}
              >
                Book an Appointment
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
