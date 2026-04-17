import { useState, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, Shield, Zap, TrendingUp, Clock, Users, ChevronRight,
  Stethoscope, Heart, Brain, Eye, Bone, Baby, Activity, Pill,
  HeartPulse, Microscope, Syringe, Ear
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import HeroScene from '../components/HeroScene'

/* ── Metrics Data ── */
const metrics = [
  { value: '$1B+', label: 'Revenue Managed', icon: TrendingUp },
  { value: '99%', label: 'Client Retention', icon: Users },
  { value: '2-6', label: 'Weeks Onboarding', icon: Clock },
  { value: '24/7', label: 'Support Available', icon: Shield },
]

/* ── Specialties ── */
const specialties = [
  { name: 'Anesthesiology', icon: Activity },
  { name: 'Cardiology', icon: HeartPulse },
  { name: 'Emergency Medicine', icon: Zap },
  { name: 'Endocrinology', icon: Microscope },
  { name: 'Family Medicine', icon: Users },
  { name: 'Gastroenterology', icon: Pill },
  { name: 'General Surgery', icon: Syringe },
  { name: 'Immunology', icon: Shield },
  { name: 'Mental Health', icon: Brain },
  { name: 'Nephrology', icon: Activity },
  { name: 'OB/GYN', icon: Baby },
  { name: 'Oncology', icon: Microscope },
  { name: 'Ophthalmology', icon: Eye },
  { name: 'Orthopedics', icon: Bone },
  { name: 'ENT', icon: Ear },
  { name: 'Pediatrics', icon: Heart },
  { name: 'Physiotherapy', icon: Activity },
  { name: 'Podiatry', icon: Stethoscope },
  { name: 'Radiology', icon: Microscope },
  { name: 'Rheumatology', icon: Pill },
  { name: 'Sleep Medicine', icon: Brain },
  { name: 'Urology', icon: Stethoscope },
  { name: 'And More...', icon: ChevronRight },
]

/* ── Services ── */
const services = [
  { name: 'Patient Scheduling', desc: 'Streamlined appointment management and calendar optimization for maximum throughput.', icon: Clock },
  { name: 'Verification of Benefits', desc: 'Real-time insurance eligibility checks to ensure coverage before services.', icon: Shield },
  { name: 'Referral Management', desc: 'Integrated referral tracking from request through completion and billing.', icon: Users },
  { name: 'Pre-Authorization', desc: 'Swift pre-certification workflows to eliminate delays and denials before they start.', icon: Zap },
  { name: 'Charge Entry & Submission', desc: 'Precise coding and rapid claim submissions for accelerated revenue capture.', icon: ArrowRight },
  { name: 'Insurance AR Follow-Up', desc: 'Aggressive pursuit of unpaid claims with systematic escalation protocols.', icon: TrendingUp },
  { name: 'Patient Billing Queries', desc: 'Professional patient communication handling for billing questions and concerns.', icon: Users },
  { name: 'Denial Management', desc: 'Root-cause analysis and rapid appeal workflows to recover rejected revenue.', icon: Shield },
  { name: 'Payment Posting', desc: 'Accurate, same-day posting of insurance and patient payments.', icon: Activity },
  { name: 'Patient AR Follow-Up', desc: 'Compassionate yet effective patient balance recovery programs.', icon: Heart },
  { name: 'Negotiations & Arbitration', desc: 'Expert payer negotiations to secure maximum contractual reimbursement.', icon: Zap },
  { name: 'Custom Solutions', desc: 'Tailored RCM workflows designed around your unique practice needs.', icon: Stethoscope },
]

/* ── Why Choose ── */
const whyChoose = [
  { title: 'Rapid Onboarding', desc: 'Up and running in 2 to 6 weeks with our refined procedures and seasoned professionals.', icon: Zap },
  { title: 'Dedicated Support', desc: 'Client Success and Account Management Teams with all communication lines always open.', icon: Users },
  { title: 'Maximum Collections', desc: 'Best-ever collections through attention to detail and continuous improvement.', icon: TrendingUp },
  { title: 'Faster Reimbursement', desc: 'Faster submissions, lower errors, quick denial management and swift posting times.', icon: Clock },
  { title: 'Flexible Pricing', desc: 'Percentage of collections, resource-based, or unit-based. Very competitive rates.', icon: Shield },
]

export default function Home() {
  const [claimVolume, setClaimVolume] = useState(5000)
  const recoveryRate = 0.12
  const avgClaimValue = 285
  const recoveredRevenue = Math.round(claimVolume * avgClaimValue * recoveryRate)

  return (
    <main>
      {/* ════════ HERO ════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* 3D Background */}
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-dark-900/70 to-dark-900" style={{ zIndex: 1 }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2" style={{ width: 800, height: 600, background: 'rgba(6,182,212,0.05)', borderRadius: '50%', filter: 'blur(150px)', zIndex: 1 }} />

        <div className="relative page-container" style={{ zIndex: 10, paddingTop: '8rem', paddingBottom: '5rem' }}>
          <div style={{ maxWidth: '48rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full text-xs font-semibold tracking-widest uppercase text-accent-400 bg-accent-500/10 border border-accent-500/20" style={{ padding: '4px 12px', marginBottom: '1.5rem', display: 'inline-flex' }}>
                <span className="rounded-full bg-accent-400 animate-pulse-glow" style={{ width: 6, height: 6 }} />
                Enterprise Revenue Cycle Management
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-bold text-white"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)', lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}
            >
              Streamline Your{' '}
              <span className="gradient-text">Revenue Cycle</span>{' '}
              With Precision
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-dark-100"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '36rem' }}
            >
              Improve cash flow, reduce denials, and enhance operational efficiency while ensuring compliance and timely reimbursements for your practice.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/reach-us"
                className="group flex items-center gap-2 text-sm font-semibold text-dark-900 bg-gradient-to-r from-accent-500 to-accent-400 rounded-xl hover:shadow-2xl hover:shadow-accent-500/25 transition-all duration-300 hover:scale-[1.02]"
                style={{ padding: '1rem 2rem' }}
              >
                Get Started
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="flex items-center gap-2 text-sm font-semibold text-white glass rounded-xl hover:bg-dark-500/30 transition-all duration-300"
                style={{ padding: '1rem 2rem' }}
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-900 to-transparent" style={{ height: '8rem', zIndex: 1 }} />
      </section>

      {/* ════════ METRICS BAR ════════ */}
      <section className="relative" style={{ zIndex: 10, marginTop: '-2.5rem' }}>
        <div className="page-container-lg">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl glow-border"
            style={{ padding: '0.5rem' }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-dark-500/20">
              {metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center justify-center"
                  style={{ padding: '2rem 1rem' }}
                >
                  <metric.icon size={20} className="text-accent-500" style={{ marginBottom: '0.75rem' }} />
                  <span className="font-bold text-white text-glow" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '0.25rem' }}>{metric.value}</span>
                  <span className="text-dark-100 text-xs font-medium tracking-wide">{metric.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════ ABOUT SECTION ════════ */}
      <section style={{ padding: '6rem 0 7rem' }}>
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionHeading
                badge="Who We Are"
                title={<>Transform Your <span className="gradient-text">Revenue Cycle</span></>}
                description=""
                align="left"
              />
              <p className="text-dark-100 leading-relaxed" style={{ marginBottom: '1.5rem' }}>
                At Trigon RCM, we transform revenue cycles for providers nationwide. From solo practices to large
                medical groups, our expert team boosts profitability by optimizing workflows, eliminating inefficiencies,
                and recovering lost revenue.
              </p>
              <p className="text-dark-100 leading-relaxed" style={{ marginBottom: '2rem' }}>
                Most clients cover our fees through the income we help generate—making
                us a partner that pays for itself. Every solution is tailored—no cookie-cutter templates.
              </p>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-accent-400 text-sm font-semibold hover:text-accent-300 transition-colors"
              >
                Learn More About Us
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-5"
            >
              {whyChoose.slice(0, 4).map((item, i) => (
                <div
                  key={item.title}
                  className={`glass-card rounded-2xl ${i === 0 ? 'col-span-2' : ''}`}
                  style={{ padding: '1.5rem' }}
                >
                  <item.icon size={24} className="text-accent-500" style={{ marginBottom: '0.75rem' }} />
                  <h3 className="text-white font-semibold text-sm" style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p className="text-dark-100 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════ SPECIALTIES ════════ */}
      <section className="relative overflow-hidden" style={{ padding: '6rem 0 7rem' }}>
        <div className="absolute inset-0 grid-pattern" style={{ opacity: 0.5 }} />
        <div className="relative page-container">
          <SectionHeading
            badge="Specialties"
            title={<>Healthcare Verticals <span className="gradient-text">We Serve</span></>}
            description="From solo practices to nationwide multispecialty clinic groups, we serve every medical specialty."
          />

          <div className="flex flex-wrap justify-center gap-3" style={{ maxWidth: '64rem', margin: '0 auto' }}>
            {specialties.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="glass-card flex items-center gap-2 rounded-xl cursor-default"
                style={{ padding: '0.625rem 1rem' }}
              >
                <s.icon size={14} className="text-accent-500" />
                <span className="text-sm text-dark-100 font-medium whitespace-nowrap">{s.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ SERVICES GRID ════════ */}
      <section style={{ padding: '6rem 0 7rem' }}>
        <div className="page-container">
          <SectionHeading
            badge="Our Services"
            title={<>Comprehensive <span className="gradient-text">RCM Solutions</span></>}
            description="Explore our end-to-end services designed to streamline your revenue cycle and maximize efficiency."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card rounded-2xl group cursor-pointer"
                style={{ padding: '1.75rem' }}
              >
                <div className="flex items-center justify-center rounded-xl bg-accent-500/10 group-hover:bg-accent-500/20 transition-colors" style={{ width: '2.5rem', height: '2.5rem', marginBottom: '1rem' }}>
                  <service.icon size={20} className="text-accent-500" />
                </div>
                <h3 className="text-white font-semibold text-base group-hover:text-accent-400 transition-colors" style={{ marginBottom: '0.5rem' }}>{service.name}</h3>
                <p className="text-dark-100 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-dark-900 bg-gradient-to-r from-accent-500 to-accent-400 rounded-xl hover:shadow-2xl hover:shadow-accent-500/25 transition-all duration-300"
              style={{ padding: '1rem 2rem' }}
            >
              View All Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════ ROI CALCULATOR ════════ */}
      <section className="relative overflow-hidden" style={{ padding: '6rem 0 7rem' }}>
        <div className="absolute inset-0 grid-pattern" style={{ opacity: 0.3 }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: 600, height: 600, background: 'rgba(6,182,212,0.05)', borderRadius: '50%', filter: 'blur(120px)' }} />

        <div className="relative page-container-sm">
          <SectionHeading
            badge="ROI Calculator"
            title={<>See Your <span className="gradient-text">Potential Savings</span></>}
            description="Adjust your monthly claim volume to discover how much revenue Trigon RCM could help you recover."
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl glow-border"
            style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}
          >
            <div className="text-center" style={{ marginBottom: '2.5rem' }}>
              <label className="text-dark-100 text-sm font-medium block" style={{ marginBottom: '1.5rem' }}>Monthly Claim Volume</label>
              <div className="font-bold text-white text-glow" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', marginBottom: '0.5rem' }}>
                {claimVolume.toLocaleString()}
              </div>
              <span className="text-dark-200 text-sm">claims per month</span>
            </div>

            <div style={{ maxWidth: '32rem', margin: '0 auto 3rem', padding: '0 1rem' }}>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={claimVolume}
                onChange={(e) => setClaimVolume(Number(e.target.value))}
                className="w-full"
                id="roi-slider"
              />
              <div className="flex justify-between text-xs text-dark-200" style={{ marginTop: '0.5rem' }}>
                <span>500</span>
                <span>50,000</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="glass rounded-2xl text-center" style={{ padding: '1.5rem' }}>
                <p className="text-dark-200 text-xs font-medium uppercase tracking-wider" style={{ marginBottom: '0.5rem' }}>Avg Claim Value</p>
                <p className="text-2xl font-bold text-white">${avgClaimValue}</p>
              </div>
              <div className="glass rounded-2xl text-center" style={{ padding: '1.5rem' }}>
                <p className="text-dark-200 text-xs font-medium uppercase tracking-wider" style={{ marginBottom: '0.5rem' }}>Recovery Rate</p>
                <p className="text-2xl font-bold text-white">{(recoveryRate * 100).toFixed(0)}%</p>
              </div>
              <div className="glass rounded-2xl text-center border border-accent-500/20" style={{ padding: '1.5rem' }}>
                <p className="text-accent-400 text-xs font-medium uppercase tracking-wider" style={{ marginBottom: '0.5rem' }}>Recovered Revenue</p>
                <p className="text-2xl font-bold gradient-text">${recoveredRevenue.toLocaleString()}</p>
                <p className="text-dark-200 text-xs" style={{ marginTop: '0.25rem' }}>per month</p>
              </div>
            </div>

            <div className="text-center" style={{ marginTop: '2rem' }}>
              <Link
                to="/reach-us"
                className="group inline-flex items-center gap-2 text-accent-400 text-sm font-semibold hover:text-accent-300 transition-colors"
              >
                Get a personalized assessment
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════ WHY CHOOSE ════════ */}
      <section style={{ padding: '6rem 0 7rem' }}>
        <div className="page-container">
          <SectionHeading
            badge="Why Trigon"
            title={<>Built for <span className="gradient-text">Results</span></>}
            description="Expert RCM solutions for faster claims, fewer denials, and maximized revenue."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`glass-card rounded-2xl ${i === 0 ? 'lg:col-span-2 lg:row-span-1' : ''}`}
                style={{ padding: '2rem' }}
              >
                <div className="flex items-center justify-center rounded-xl bg-accent-500/10" style={{ width: '3rem', height: '3rem', marginBottom: '1.25rem' }}>
                  <item.icon size={24} className="text-accent-500" />
                </div>
                <h3 className="text-white font-semibold text-lg" style={{ marginBottom: '0.75rem' }}>{item.title}</h3>
                <p className="text-dark-100 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section style={{ padding: '6rem 0 7rem' }}>
        <div className="page-container-sm">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl text-center relative overflow-hidden"
            style={{ padding: 'clamp(3rem, 5vw, 4rem)' }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2" style={{ width: 400, height: 300, background: 'rgba(6,182,212,0.1)', borderRadius: '50%', filter: 'blur(100px)' }} />
            <div className="relative">
              <h2 className="font-bold text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '1rem' }}>
                Ready to <span className="gradient-text">Optimize</span> Your Revenue?
              </h2>
              <p className="text-dark-100 text-lg" style={{ marginBottom: '2rem', maxWidth: '32rem', marginLeft: 'auto', marginRight: 'auto' }}>
                We begin with a complimentary deep-dive analysis, identifying gaps and unlocking new revenue streams.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/reach-us"
                  className="group flex items-center gap-2 text-sm font-semibold text-dark-900 bg-gradient-to-r from-accent-500 to-accent-400 rounded-xl hover:shadow-2xl hover:shadow-accent-500/25 transition-all duration-300"
                  style={{ padding: '1rem 2rem' }}
                >
                  Schedule Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+16463470999"
                  className="flex items-center gap-2 text-sm font-semibold text-white glass rounded-xl hover:bg-dark-500/30 transition-all duration-300"
                  style={{ padding: '1rem 2rem' }}
                >
                  Call (646) 347-0999
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
