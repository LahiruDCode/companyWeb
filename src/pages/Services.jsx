import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Clock, Shield, Users, Zap, ArrowRight, TrendingUp, Activity, Heart,
  Stethoscope, CreditCard, FileText, PhoneCall, AlertTriangle, BarChart3,
  CheckCircle2, Star, Layers, Target, Headphones, BookOpen, Bell, Gift
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const endToEndServices = [
  {
    name: 'Patient Scheduling',
    desc: 'Optimized appointment management ensuring maximum provider utilization and reduced no-shows through intelligent scheduling workflows.',
    icon: Clock,
    accent: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    name: 'Verification of Benefits',
    desc: 'Real-time eligibility and benefits verification to confirm patient coverage before services, minimizing claim rejections.',
    icon: Shield,
    accent: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    name: 'Referral Management',
    desc: 'End-to-end referral tracking from request through completion and billing, ensuring no revenue leakage from missed referrals.',
    icon: Users,
    accent: 'from-purple-500/20 to-indigo-500/20',
  },
  {
    name: 'Pre-Authorization & Pre-Certification',
    desc: 'Swift pre-certification workflows to eliminate delays and denials before they start, protecting your revenue stream.',
    icon: Zap,
    accent: 'from-yellow-500/20 to-orange-500/20',
  },
  {
    name: 'Demo/Charge Entry & Submission',
    desc: 'Precise demographic capture, accurate coding, and rapid claim submissions for accelerated revenue capture.',
    icon: FileText,
    accent: 'from-pink-500/20 to-rose-500/20',
  },
  {
    name: 'Insurance AR Follow-Up',
    desc: 'Aggressive, systematic pursuit of unpaid insurance claims with escalation protocols to maximize collection rates.',
    icon: TrendingUp,
    accent: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    name: 'Patient Calls (Billing Queries)',
    desc: 'Professional, compassionate patient communication handling for all billing questions, concerns, and payment arrangements.',
    icon: PhoneCall,
    accent: 'from-teal-500/20 to-emerald-500/20',
  },
  {
    name: 'Denial Management',
    desc: 'Root-cause analysis, rapid appeal workflows, and prevention strategies to recover rejected revenue and reduce future denials.',
    icon: AlertTriangle,
    accent: 'from-red-500/20 to-orange-500/20',
  },
  {
    name: 'Payment Posting',
    desc: 'Accurate, same-day posting of insurance EOBs and patient payments with full reconciliation for clean accounting.',
    icon: CreditCard,
    accent: 'from-green-500/20 to-emerald-500/20',
  },
  {
    name: 'Patient AR Follow-Up',
    desc: 'Compassionate yet effective patient balance recovery programs that maintain satisfaction while improving collections.',
    icon: Heart,
    accent: 'from-rose-500/20 to-pink-500/20',
  },
  {
    name: 'Negotiations & Arbitration',
    desc: 'Expert payer negotiations and out-of-network arbitration to secure maximum contractual reimbursement for your services.',
    icon: Activity,
    accent: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    name: 'Other Customized Services',
    desc: 'Tailored RCM workflows designed around your unique practice needs. We adapt to your requirements, not the other way around.',
    icon: Stethoscope,
    accent: 'from-amber-500/20 to-yellow-500/20',
  },
]

const valueAddedServices = [
  { name: 'Comprehensive Practice Assessment', desc: 'Actionable recommendations to increase your revenue', icon: BarChart3 },
  { name: 'Custom Performance Dashboards', desc: 'Track financial and operational KPIs in real time', icon: Layers },
  { name: 'KPI Monitoring & Intelligent Alerts', desc: 'Spot trends or trouble early with smart alerts', icon: Bell },
  { name: 'Strategic Review Meetings', desc: 'Regular sessions with your team and ours to stay aligned', icon: Target },
  { name: 'Dedicated Account Manager', desc: 'Your trusted RCM advisor and point of contact', icon: Headphones },
  { name: 'One Business Day Support', desc: 'Fast, responsive help when you need it most', icon: Zap },
]

const bonusValues = [
  { name: 'RCM Best Practices & Workflow Playbooks', icon: BookOpen },
  { name: 'On-demand Training for Your Teams', icon: Star },
  { name: 'Payer Policy Updates & Coding Bulletins', icon: FileText },
]

export default function Services() {
  return (
    <main>
      {/* ════════ HERO ════════ */}
      <section className="relative overflow-hidden" style={{ paddingTop: '9rem', paddingBottom: '5rem' }}>
        <div className="absolute inset-0 grid-pattern" style={{ opacity: 0.3 }} />
        <div className="responsive-circle absolute" style={{ top: '5rem', right: 0, background: 'rgba(6,182,212,0.05)', borderRadius: '50%', filter: 'blur(120px)' }} />

        <div className="relative page-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full text-xs font-semibold tracking-widest uppercase text-accent-400 bg-accent-500/10 border border-accent-500/20" style={{ padding: '4px 12px', marginBottom: '1.5rem' }}>
              <span className="rounded-full bg-accent-400 glow-dot" style={{ width: 6, height: 6 }} />
              Our Services
            </span>
            <h1 className="font-bold text-white" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              Breathe Easy With{' '}
              <span className="gradient-text">End-to-End</span>{' '}
              or À La Carte RCM
            </h1>
            <p className="text-dark-100" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', maxWidth: '40rem', margin: '0 auto', lineHeight: 1.7 }}>
              Tired of chasing down payments and battling billing complexities? We free healthcare providers from
              the administrative burden, so they can focus on patient care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════ SERVICE APPROACH CARDS ════════ */}
      <section style={{ padding: '4rem 0' }}>
        <div className="page-container-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl relative overflow-hidden group"
              style={{ padding: '2rem' }}
            >
              <div className="absolute top-0 right-0" style={{ width: '10rem', height: '10rem', background: 'linear-gradient(to bottom left, rgba(6,182,212,0.1), transparent)', borderBottomLeftRadius: '100%' }} />
              <div className="relative">
                <div className="flex items-center justify-center rounded-xl bg-accent-500/10" style={{ width: '3rem', height: '3rem', marginBottom: '1.25rem' }}>
                  <Layers size={24} className="text-accent-500" />
                </div>
                <h3 className="text-white font-bold text-xl" style={{ marginBottom: '0.75rem' }}>End-to-End RCM</h3>
                <p className="text-accent-400 text-sm font-medium" style={{ marginBottom: '0.75rem' }}>Let us handle it all — so you can focus on care</p>
                <p className="text-dark-100 text-sm leading-relaxed">
                  Seamless integration across the revenue cycle. One vendor, one workflow. This minimizes friction
                  between phases—coding, billing, collections, analytics—all handled in unison.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl relative overflow-hidden group"
              style={{ padding: '2rem' }}
            >
              <div className="absolute top-0 right-0" style={{ width: '10rem', height: '10rem', background: 'linear-gradient(to bottom left, rgba(139,92,246,0.1), transparent)', borderBottomLeftRadius: '100%' }} />
              <div className="relative">
                <div className="flex items-center justify-center rounded-xl bg-purple-500/10" style={{ width: '3rem', height: '3rem', marginBottom: '1.25rem' }}>
                  <Target size={24} className="text-purple-400" />
                </div>
                <h3 className="text-white font-bold text-xl" style={{ marginBottom: '0.75rem' }}>À La Carte RCM</h3>
                <p className="text-purple-400 text-sm font-medium" style={{ marginBottom: '0.75rem' }}>Pick and choose exactly what you need</p>
                <p className="text-dark-100 text-sm leading-relaxed">
                  Targeted optimization where it's needed most. If one part of your revenue cycle is struggling,
                  you can deploy laser-focused support without changing the entire system.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════ BENTO SERVICE GRID ════════ */}
      <section style={{ padding: '6rem 0 7rem' }}>
        <div className="page-container">
          <SectionHeading
            badge="Full Service Suite"
            title={<>Every Step of Your <span className="gradient-text">Revenue Cycle</span></>}
            description="Select any service for your practice. Each one is optimized to work independently or as part of our full-suite solution."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {endToEndServices.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ y: -6 }}
                className={`glass-card rounded-2xl group cursor-pointer relative overflow-hidden ${
                  i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
                } ${i === 7 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
                style={{ padding: '1.75rem' }}
              >
                {/* Gradient accent on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                <div className="relative">
                  <div className="flex items-center justify-center rounded-xl bg-accent-500/10 group-hover:bg-accent-500/20 transition-colors" style={{ width: '2.5rem', height: '2.5rem', marginBottom: '1rem' }}>
                    <service.icon size={20} className="text-accent-500 group-hover:text-accent-400 transition-colors" />
                  </div>
                  <h3 className="text-white font-semibold text-base group-hover:text-accent-400 transition-colors" style={{ marginBottom: '0.5rem' }}>{service.name}</h3>
                  <p className="text-dark-100 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ PRICING ════════ */}
      <section className="relative overflow-hidden" style={{ padding: '6rem 0 7rem' }}>
        <div className="absolute inset-0 grid-pattern" style={{ opacity: 0.2 }} />
        <div className="absolute" style={{ bottom: 0, left: '25%', width: 500, height: 500, background: 'rgba(139,92,246,0.05)', borderRadius: '50%', filter: 'blur(120px)' }} />

        <div className="relative page-container-sm">
          <SectionHeading
            badge="Pricing"
            title={<>Flexible. Transparent. <span className="gradient-text">Designed for Growth.</span></>}
            description="We offer a variety of flexible pricing models tailored to your operational needs—percentage-based, hourly, FTE-based, or a custom hybrid approach."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl glow-border"
            style={{ padding: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2rem' }}
          >
            <h3 className="text-white font-bold text-xl" style={{ marginBottom: '0.5rem' }}>Value-Added Services</h3>
            <p className="text-accent-400 text-sm font-medium" style={{ marginBottom: '2rem' }}>Included in every engagement at no extra cost</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {valueAddedServices.map((svc, i) => (
                <motion.div
                  key={svc.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="glass rounded-xl flex gap-4"
                  style={{ padding: '1.25rem' }}
                >
                  <div className="flex items-center justify-center shrink-0 rounded-lg bg-accent-500/10" style={{ width: '2.25rem', height: '2.25rem' }}>
                    <svc.icon size={16} className="text-accent-500" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold" style={{ marginBottom: '0.25rem' }}>{svc.name}</h4>
                    <p className="text-dark-200 text-xs leading-relaxed">{svc.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl"
            style={{ padding: '2rem' }}
          >
            <div className="flex items-center gap-3" style={{ marginBottom: '1.5rem' }}>
              <Gift size={20} className="text-purple-400" />
              <h3 className="text-white font-bold text-lg">Even More Value, Built In</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {bonusValues.map((bonus) => (
                <div key={bonus.name} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-accent-500 shrink-0" />
                  <span className="text-dark-100 text-sm">{bonus.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section style={{ padding: '6rem 0 7rem' }}>
        <div className="page-container-sm text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl relative overflow-hidden"
            style={{ padding: 'clamp(3rem, 5vw, 4rem)' }}
          >
            <div className="responsive-cta-circle absolute top-0 left-1/2 -translate-x-1/2 rounded-full" style={{ background: 'rgba(6,182,212,0.1)', filter: 'blur(100px)' }} />
            <div className="relative">
              <h2 className="font-bold text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '1rem' }}>
                Let's Build Your <span className="gradient-text">Custom RCM Solution</span>
              </h2>
              <p className="text-dark-100 text-lg" style={{ marginBottom: '2rem', maxWidth: '32rem', marginLeft: 'auto', marginRight: 'auto' }}>
                Every plan is tailored. Contact us for a complimentary practice assessment and custom pricing proposal.
              </p>
              <Link
                to="/reach-us"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-dark-900 bg-gradient-to-r from-accent-500 to-accent-400 rounded-xl hover:shadow-2xl hover:shadow-accent-500/25 transition-all duration-300"
                style={{ padding: '1rem 2rem' }}
              >
                Get Your Free Assessment
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
