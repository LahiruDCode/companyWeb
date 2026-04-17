import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Users, Zap, TrendingUp, Shield, Clock, Target,
  Award, Globe, HeartHandshake, Sparkles, CheckCircle2
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const timeline = [
  {
    year: 'Our Mission',
    icon: Target,
    title: 'Revenue Optimization Partners',
    description: "We're more than just a medical billing company. We're your revenue optimization partner, dedicated to helping your medical practice thrive. We don't just handle the paperwork—we unlock hidden efficiencies, fight for every dollar, and empower you to focus on what matters most: your patients.",
  },
  {
    year: 'Our Expertise',
    icon: Award,
    title: '10+ Years of Healthcare Excellence',
    description: "We're a team of young healthcare experts, brimming with over 10 years' experience, well versed in the nuances of the medical billing world. We combine that expertise with cutting-edge technology to fuel the revenue cycle of medical groups like yours.",
  },
  {
    year: 'Our Approach',
    icon: Sparkles,
    title: 'Technology Meets Strategy',
    description: "Forget just outsourcing billing—we offer strategic consulting that helps you optimize processes and implement technology solutions to maximize your revenue. We're transparent, cost-effective, and we scale with your needs and growth.",
  },
  {
    year: 'Our Reach',
    icon: Globe,
    title: 'Nationwide Coverage',
    description: "From small single-provider practices to larger multi-specialty groups with locations across the United States, we work with any group of any size. We are completely system agnostic—we work on the system that you are comfortable with.",
  },
  {
    year: 'Our Promise',
    icon: HeartHandshake,
    title: 'The Trigon Difference',
    description: "Experience the Trigon RCM difference—contact our sales team for a free consultation and let's take your healthcare facility to new heights. We begin with a complimentary deep-dive analysis, identifying gaps and unlocking new revenue streams.",
  },
]

const whyChoose = [
  { icon: Zap, title: 'Rapid Onboarding', desc: 'Up and running in 2 to 6 weeks with our refined procedures and seasoned professionals.' },
  { icon: Users, title: 'Dedicated Support', desc: 'Client Success and Account Management Teams with all communication lines always open and monitored.' },
  { icon: TrendingUp, title: 'Maximum Collections', desc: 'Best-ever collections with our attention to detail and continuous improvement.' },
  { icon: Clock, title: 'Faster Reimbursement', desc: 'Faster submissions with lower errors, faster denial management and quick posting times.' },
  { icon: Shield, title: 'Flexible Pricing', desc: 'Percentage of collections, resource-based, or unit-based. Our rates are very competitive.' },
  { icon: Target, title: 'Tailored Solutions', desc: 'No cookie-cutter templates. Every solution is designed around your unique practice needs.' },
]

const clientTypes = [
  'Solo Practitioners',
  'Small Group Practices',
  'Multi-Specialty Clinics',
  'Nationwide Medical Groups',
  'Hospital Systems',
  'Specialty Practices',
]

function TimelineItem({ item, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1])
  const y = useTransform(scrollYProgress, [0, 1], [60, 0])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="relative flex gap-8"
      style={{ opacity, y, paddingBottom: index < timeline.length - 1 ? '2.5rem' : 0 }}
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center shrink-0">
        <div className="flex items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20 relative" style={{ width: '3rem', height: '3rem', zIndex: 10 }}>
          <item.icon size={20} className="text-accent-500" />
        </div>
        {index < timeline.length - 1 && (
          <div className="bg-gradient-to-b from-accent-500/30 to-transparent" style={{ width: 1, flexGrow: 1, marginTop: '0.5rem' }} />
        )}
      </div>

      {/* Content */}
      <div className="glass-card rounded-2xl flex-1" style={{ padding: 'clamp(1.25rem, 3vw, 2rem)' }}>
        <span className="text-accent-400 text-xs font-semibold tracking-widest uppercase">{item.year}</span>
        <h3 className="text-white font-bold text-xl" style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}>{item.title}</h3>
        <p className="text-dark-100 text-sm leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  )
}

export default function About() {
  return (
    <main>
      {/* ════════ HERO ════════ */}
      <section className="relative overflow-hidden" style={{ paddingTop: '9rem', paddingBottom: '5rem' }}>
        <div className="absolute inset-0 grid-pattern" style={{ opacity: 0.3 }} />
        <div className="absolute" style={{ top: '5rem', left: 0, width: 500, height: 500, background: 'rgba(139,92,246,0.05)', borderRadius: '50%', filter: 'blur(120px)' }} />

        <div className="relative page-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full text-xs font-semibold tracking-widest uppercase text-accent-400 bg-accent-500/10 border border-accent-500/20" style={{ padding: '4px 12px', marginBottom: '1.5rem' }}>
              <span className="rounded-full bg-accent-400 glow-dot" style={{ width: 6, height: 6 }} />
              About Trigon RCM
            </span>
            <h1 className="font-bold text-white" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              Your Revenue{' '}
              <span className="gradient-text">Optimization</span>{' '}
              Partner
            </h1>
            <p className="text-dark-100" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', maxWidth: '40rem', margin: '0 auto', lineHeight: 1.7 }}>
              We know how to make you get the best out of your practice. Over a decade of RCM expertise, combined with cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════ TIMELINE ════════ */}
      <section style={{ padding: '6rem 0 7rem' }}>
        <div className="page-container-sm">
          <SectionHeading
            badge="Our Story"
            title={<>The Trigon <span className="gradient-text">Journey</span></>}
            description=""
            align="center"
          />

          <div style={{ marginTop: '4rem' }}>
            {timeline.map((item, i) => (
              <TimelineItem key={item.year} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════ WHY CHOOSE TRIGON ════════ */}
      <section className="relative overflow-hidden" style={{ padding: '6rem 0 7rem' }}>
        <div className="absolute inset-0 grid-pattern" style={{ opacity: 0.2 }} />
        <div className="absolute" style={{ top: '50%', right: 0, width: 500, height: 500, background: 'rgba(6,182,212,0.05)', borderRadius: '50%', filter: 'blur(120px)' }} />

        <div className="relative page-container">
          <SectionHeading
            badge="Why Choose Trigon"
            title={<>Built for <span className="gradient-text">Healthcare Excellence</span></>}
            description="Expert RCM solutions for faster claims, fewer denials, and maximized revenue."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card rounded-2xl group"
                style={{ padding: '1.75rem' }}
              >
                <div className="flex items-center justify-center rounded-xl bg-accent-500/10 group-hover:bg-accent-500/20 transition-colors" style={{ width: '2.75rem', height: '2.75rem', marginBottom: '1.25rem' }}>
                  <item.icon size={22} className="text-accent-500" />
                </div>
                <h3 className="text-white font-semibold text-base" style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
                <p className="text-dark-100 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CLIENTS ════════ */}
      <section style={{ padding: '6rem 0 7rem' }}>
        <div className="page-container-sm">
          <SectionHeading
            badge="Our Clients"
            title={<>Serving <span className="gradient-text">Every Practice Size</span></>}
            description="We cater to clients of every size. Be it a single provider clinic or a nationwide multispecialty clinic group."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" style={{ maxWidth: '52rem', margin: '0 auto' }}>
            {clientTypes.map((type, i) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="glass-card rounded-xl flex items-center gap-3"
                style={{ padding: '1.25rem' }}
              >
                <CheckCircle2 size={18} className="text-accent-500 shrink-0" />
                <span className="text-white text-sm font-medium">{type}</span>
              </motion.div>
            ))}
          </div>
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
            <div className="absolute top-0 left-1/2 -translate-x-1/2" style={{ width: 400, height: 300, background: 'rgba(6,182,212,0.1)', borderRadius: '50%', filter: 'blur(100px)' }} />
            <div className="relative">
              <h2 className="font-bold text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '1rem' }}>
                Ready to <span className="gradient-text">Experience the Difference?</span>
              </h2>
              <p className="text-dark-100 text-lg" style={{ marginBottom: '2rem', maxWidth: '32rem', marginLeft: 'auto', marginRight: 'auto' }}>
                Contact our sales team for a free consultation and let's take your healthcare facility to new heights.
              </p>
              <Link
                to="/reach-us"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-dark-900 bg-gradient-to-r from-accent-500 to-accent-400 rounded-xl hover:shadow-2xl hover:shadow-accent-500/25 transition-all duration-300"
                style={{ padding: '1rem 2rem' }}
              >
                Schedule Free Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
