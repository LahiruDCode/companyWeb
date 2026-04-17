import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Briefcase, X, Upload, MapPin, Clock, DollarSign, ArrowRight,
  Heart, Rocket, GraduationCap, Coffee, Shield, Users, Zap, Code,
  HeadphonesIcon, FileUp, Check
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const perks = [
  {
    icon: Rocket,
    title: 'Growth-First Culture',
    desc: 'We invest in your journey with mentorship, learning budgets, and clear career paths. Your growth fuels ours.',
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    desc: 'Comprehensive healthcare, mental health support, flexible PTO, and a culture that truly values work-life balance.',
  },
  {
    icon: Coffee,
    title: 'Remote-Friendly',
    desc: 'Work from anywhere. Modern tools, async-first communication, and a results-driven environment—not seat-time culture.',
  },
]

const jobs = [
  {
    id: 1,
    title: 'Senior RPA Developer',
    department: 'Engineering',
    location: 'Remote / Montebello, NY',
    type: 'Full-time',
    salary: '$110K – $140K',
    description: 'Design and build intelligent automation solutions for healthcare revenue cycle workflows using UiPath, Python, and modern RPA frameworks.',
    requirements: [
      '5+ years experience in RPA development',
      'Proficiency in UiPath, Automation Anywhere, or Power Automate',
      'Experience with healthcare/RCM workflows preferred',
      'Strong Python / scripting skills',
    ],
    icon: Code,
  },
  {
    id: 2,
    title: 'Client Success Manager',
    department: 'Client Relations',
    location: 'Montebello, NY / Hybrid',
    type: 'Full-time',
    salary: '$85K – $110K',
    description: 'Own the end-to-end client experience, driving satisfaction, retention, and growth for our healthcare practice partners.',
    requirements: [
      '3+ years in client success / account management',
      'Healthcare or RCM industry experience strongly preferred',
      'Exceptional communication and relationship-building skills',
      'Data-driven approach to client health monitoring',
    ],
    icon: HeadphonesIcon,
  },
  {
    id: 3,
    title: 'Medical Billing Specialist',
    department: 'Operations',
    location: 'Remote',
    type: 'Full-time',
    salary: '$50K – $65K',
    description: 'Process claims, manage denials, and ensure accurate reimbursement across multiple specialty practices.',
    requirements: [
      '2+ years of medical billing experience',
      'CPC or CCS certification preferred',
      'Knowledge of CPT, ICD-10, and HCPCS coding',
      'EHR proficiency (Epic, Athena, or similar)',
    ],
    icon: Shield,
  },
  {
    id: 4,
    title: 'Data Analyst – Revenue Intelligence',
    department: 'Analytics',
    location: 'Remote / Montebello, NY',
    type: 'Full-time',
    salary: '$80K – $105K',
    description: 'Transform RCM data into actionable insights, building dashboards and predictive models that drive revenue optimization.',
    requirements: [
      '3+ years in data analytics or business intelligence',
      'Proficiency in SQL, Python, and BI tools (Tableau, Power BI)',
      'Experience with healthcare data and KPIs',
      'Strong statistical analysis skills',
    ],
    icon: Zap,
  },
  {
    id: 5,
    title: 'Authorization Coordinator',
    department: 'Operations',
    location: 'Remote',
    type: 'Full-time',
    salary: '$42K – $55K',
    description: 'Manage pre-authorization workflows, coordinate with payers, and ensure timely approvals to prevent claim denials.',
    requirements: [
      '1+ years in medical authorization or verification',
      'Knowledge of insurance plan types and payer requirements',
      'Detail-oriented with strong organizational skills',
      'Comfortable with high-volume, fast-paced work',
    ],
    icon: Users,
  },
]

function ApplicationModal({ job, onClose }) {
  const fileInputRef = useRef(null)
  const [dragActive, setDragActive] = useState(false)
  const [fileName, setFileName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleDrag = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') setDragActive(true)
    if (e.type === 'dragleave') setDragActive(false)
  }, [])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files?.[0]) {
      setFileName(e.dataTransfer.files[0].name)
    }
  }, [])

  const handleFileSelect = (e) => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center"
      style={{ zIndex: 50, padding: '1rem' }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-md" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative glass-strong rounded-3xl w-full glow-border overflow-y-auto"
        style={{ maxWidth: '32rem', maxHeight: '90vh', padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}
      >
        <button
          onClick={onClose}
          className="absolute text-dark-200 hover:text-white transition-colors rounded-lg hover:bg-dark-500/30"
          style={{ top: '1rem', right: '1rem', padding: '0.5rem' }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center justify-center" style={{ padding: '2rem 0' }}>
            <div className="rounded-full bg-accent-500/20 flex items-center justify-center" style={{ width: '4rem', height: '4rem', marginBottom: '1rem' }}>
              <Check size={32} className="text-accent-500" />
            </div>
            <h3 className="text-white font-bold text-xl" style={{ marginBottom: '0.5rem' }}>Application Submitted!</h3>
            <p className="text-dark-100 text-sm text-center" style={{ marginBottom: '1.5rem' }}>
              Thank you for your interest in the <span className="text-accent-400">{job.title}</span> role. Our team will review your application and get back to you soon.
            </p>
            <button
              onClick={onClose}
              className="text-sm font-semibold text-dark-900 bg-gradient-to-r from-accent-500 to-accent-400 rounded-xl"
              style={{ padding: '0.75rem 1.5rem' }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="text-accent-400 text-xs font-semibold tracking-widest uppercase">{job.department}</span>
              <h3 className="text-white font-bold text-xl" style={{ marginTop: '0.25rem' }}>{job.title}</h3>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label htmlFor={`apply-name-${job.id}`} className="block text-dark-100 text-xs font-medium uppercase tracking-wider" style={{ marginBottom: '0.5rem' }}>Full Name</label>
                <input
                  type="text"
                  id={`apply-name-${job.id}`}
                  required
                  className="w-full rounded-xl glass text-white text-sm placeholder-dark-300 focus:outline-none focus:border-accent-500/40 transition-colors"
                  placeholder="Your full name"
                  style={{ padding: '0.75rem 1rem' }}
                />
              </div>

              <div>
                <label htmlFor={`apply-email-${job.id}`} className="block text-dark-100 text-xs font-medium uppercase tracking-wider" style={{ marginBottom: '0.5rem' }}>Email</label>
                <input
                  type="email"
                  id={`apply-email-${job.id}`}
                  required
                  className="w-full rounded-xl glass text-white text-sm placeholder-dark-300 focus:outline-none focus:border-accent-500/40 transition-colors"
                  placeholder="you@email.com"
                  style={{ padding: '0.75rem 1rem' }}
                />
              </div>

              <div>
                <label htmlFor={`apply-phone-${job.id}`} className="block text-dark-100 text-xs font-medium uppercase tracking-wider" style={{ marginBottom: '0.5rem' }}>Phone</label>
                <input
                  type="tel"
                  id={`apply-phone-${job.id}`}
                  className="w-full rounded-xl glass text-white text-sm placeholder-dark-300 focus:outline-none focus:border-accent-500/40 transition-colors"
                  placeholder="(XXX) XXX-XXXX"
                  style={{ padding: '0.75rem 1rem' }}
                />
              </div>

              <div>
                <label htmlFor={`apply-linkedin-${job.id}`} className="block text-dark-100 text-xs font-medium uppercase tracking-wider" style={{ marginBottom: '0.5rem' }}>LinkedIn Profile</label>
                <input
                  type="url"
                  id={`apply-linkedin-${job.id}`}
                  className="w-full rounded-xl glass text-white text-sm placeholder-dark-300 focus:outline-none focus:border-accent-500/40 transition-colors"
                  placeholder="https://linkedin.com/in/..."
                  style={{ padding: '0.75rem 1rem' }}
                />
              </div>

              {/* Drag & Drop Resume Upload */}
              <div>
                <label className="block text-dark-100 text-xs font-medium uppercase tracking-wider" style={{ marginBottom: '0.5rem' }}>CV / Resume</label>
                <div
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`w-full border-2 border-dashed rounded-2xl text-center cursor-pointer transition-all duration-300 ${
                    dragActive
                      ? 'border-accent-500 bg-accent-500/10'
                      : fileName
                        ? 'border-accent-500/30 bg-accent-500/5'
                        : 'border-dark-400 hover:border-dark-200 hover:bg-dark-600/30'
                  }`}
                  style={{ padding: '2rem' }}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileSelect}
                    className="hidden"
                    id={`file-upload-${job.id}`}
                  />
                  {fileName ? (
                    <div className="flex flex-col items-center gap-2">
                      <FileUp size={24} className="text-accent-500" />
                      <p className="text-white text-sm font-medium">{fileName}</p>
                      <p className="text-dark-200 text-xs">Click or drag to replace</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <Upload size={24} className="text-dark-200" />
                      <p className="text-dark-100 text-sm">
                        <span className="text-accent-400 font-medium">Click to upload</span> or drag & drop
                      </p>
                      <p className="text-dark-300 text-xs">PDF, DOC, DOCX (Max 10MB)</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Cover Note */}
              <div>
                <label htmlFor={`apply-note-${job.id}`} className="block text-dark-100 text-xs font-medium uppercase tracking-wider" style={{ marginBottom: '0.5rem' }}>Cover Note (Optional)</label>
                <textarea
                  id={`apply-note-${job.id}`}
                  rows={3}
                  className="w-full rounded-xl glass text-white text-sm placeholder-dark-300 focus:outline-none focus:border-accent-500/40 transition-colors resize-none"
                  placeholder="Why are you interested in this role?"
                  style={{ padding: '0.75rem 1rem' }}
                />
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 text-sm font-semibold text-dark-900 bg-gradient-to-r from-accent-500 to-accent-400 rounded-xl hover:shadow-2xl hover:shadow-accent-500/25 transition-all duration-300"
                style={{ padding: '1rem 2rem' }}
              >
                Submit Application
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

function JobCard({ job, onApply }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="glass-card rounded-2xl group"
      style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}
    >
      <div className="flex items-start justify-between" style={{ marginBottom: '1rem' }}>
        <div className="flex items-center justify-center rounded-xl bg-accent-500/10 group-hover:bg-accent-500/20 transition-colors" style={{ width: '2.75rem', height: '2.75rem' }}>
          <job.icon size={22} className="text-accent-500" />
        </div>
        <span className="text-xs font-medium text-accent-400 bg-accent-500/10 rounded-full" style={{ padding: '0.25rem 0.75rem' }}>{job.department}</span>
      </div>

      <h3 className="text-white font-bold text-lg group-hover:text-accent-400 transition-colors" style={{ marginBottom: '0.5rem' }}>{job.title}</h3>
      <p className="text-dark-100 text-sm leading-relaxed" style={{ marginBottom: '1.25rem' }}>{job.description}</p>

      <div className="flex flex-wrap gap-3" style={{ marginBottom: '1.25rem' }}>
        <span className="flex items-center gap-1.5 text-dark-200 text-xs">
          <MapPin size={12} /> {job.location}
        </span>
        <span className="flex items-center gap-1.5 text-dark-200 text-xs">
          <Clock size={12} /> {job.type}
        </span>
        <span className="flex items-center gap-1.5 text-dark-200 text-xs">
          <DollarSign size={12} /> {job.salary}
        </span>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <h4 className="text-dark-100 text-xs font-semibold uppercase tracking-wider" style={{ marginBottom: '0.75rem' }}>Requirements</h4>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {job.requirements.map((req) => (
            <li key={req} className="flex items-start gap-2 text-dark-100 text-xs">
              <div className="rounded-full bg-accent-500 shrink-0" style={{ width: '0.25rem', height: '0.25rem', marginTop: '0.375rem' }} />
              {req}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => onApply(job)}
        className="group/btn w-full flex items-center justify-center gap-2 text-sm font-semibold text-dark-900 bg-gradient-to-r from-accent-500 to-accent-400 rounded-xl hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300 hover:scale-[1.01]"
        style={{ padding: '0.75rem 1.5rem' }}
      >
        Apply Now
        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  )
}

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null)

  return (
    <main>
      {/* ════════ HERO ════════ */}
      <section className="relative overflow-hidden" style={{ paddingTop: '9rem', paddingBottom: '5rem' }}>
        <div className="absolute inset-0 grid-pattern" style={{ opacity: 0.3 }} />
        <div className="absolute" style={{ top: '5rem', left: '33%', width: 500, height: 500, background: 'rgba(139,92,246,0.05)', borderRadius: '50%', filter: 'blur(120px)' }} />
        <div className="absolute" style={{ bottom: 0, right: '25%', width: 400, height: 400, background: 'rgba(6,182,212,0.05)', borderRadius: '50%', filter: 'blur(100px)' }} />

        <div className="relative page-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full text-xs font-semibold tracking-widest uppercase text-accent-400 bg-accent-500/10 border border-accent-500/20" style={{ padding: '4px 12px', marginBottom: '1.5rem' }}>
              <span className="rounded-full bg-accent-400 glow-dot" style={{ width: 6, height: 6 }} />
              We're Hiring
            </span>
            <h1 className="font-bold text-white" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              Build the Future of{' '}
              <span className="gradient-text">Healthcare Finance</span>
            </h1>
            <p className="text-dark-100" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', maxWidth: '40rem', margin: '0 auto', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Join a team of ambitious innovators transforming how healthcare providers manage revenue.
              Meaningful work, real impact, and a culture that puts people first.
            </p>
            <a
              href="#open-positions"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-dark-900 bg-gradient-to-r from-accent-500 to-accent-400 rounded-xl hover:shadow-2xl hover:shadow-accent-500/25 transition-all duration-300"
              style={{ padding: '1rem 2rem' }}
            >
              View Open Positions
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ════════ CULTURE / PERKS ════════ */}
      <section style={{ padding: '6rem 0 7rem' }}>
        <div className="page-container-sm">
          <SectionHeading
            badge="Culture"
            title={<>Why People <span className="gradient-text">Love Working Here</span></>}
            description="We're building a workplace where ambition meets empathy, and where every team member can do their best work."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card rounded-2xl text-center"
                style={{ padding: '2rem' }}
              >
                <div className="rounded-2xl bg-accent-500/10 flex items-center justify-center" style={{ width: '3.5rem', height: '3.5rem', margin: '0 auto 1.25rem' }}>
                  <perk.icon size={28} className="text-accent-500" />
                </div>
                <h3 className="text-white font-bold text-lg" style={{ marginBottom: '0.75rem' }}>{perk.title}</h3>
                <p className="text-dark-100 text-sm leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ OPEN POSITIONS ════════ */}
      <section id="open-positions" className="relative overflow-hidden" style={{ padding: '6rem 0 7rem' }}>
        <div className="absolute inset-0 grid-pattern" style={{ opacity: 0.2 }} />
        <div className="absolute" style={{ top: '33%', right: 0, width: 500, height: 500, background: 'rgba(6,182,212,0.05)', borderRadius: '50%', filter: 'blur(120px)' }} />

        <div className="relative page-container">
          <SectionHeading
            badge="Open Positions"
            title={<>Find Your <span className="gradient-text">Next Role</span></>}
            description="Explore current openings and take the next step in your career with Trigon RCM."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} onApply={setSelectedJob} />
            ))}
          </div>

          {/* Open application */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-3xl text-center"
            style={{ marginTop: '3rem', padding: 'clamp(2rem, 4vw, 3rem)' }}
          >
            <GraduationCap size={32} className="text-accent-500" style={{ margin: '0 auto 1rem' }} />
            <h3 className="text-white font-bold text-xl" style={{ marginBottom: '0.75rem' }}>Don't See Your Perfect Role?</h3>
            <p className="text-dark-100 text-sm" style={{ maxWidth: '28rem', margin: '0 auto 1.5rem' }}>
              We're always looking for exceptional talent. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button
              onClick={() =>
                setSelectedJob({
                  id: 'open',
                  title: 'Open Application',
                  department: 'General',
                  icon: Briefcase,
                })
              }
              className="group inline-flex items-center gap-2 text-sm font-semibold text-accent-400 glass rounded-xl hover:bg-accent-500/10 transition-all duration-300"
              style={{ padding: '0.75rem 1.5rem' }}
            >
              Send Open Application
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ════════ APPLICATION MODAL ════════ */}
      <AnimatePresence>
        {selectedJob && (
          <ApplicationModal
            job={selectedJob}
            onClose={() => setSelectedJob(null)}
          />
        )}
      </AnimatePresence>
    </main>
  )
}
