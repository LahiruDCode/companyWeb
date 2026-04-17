import { motion } from 'framer-motion'

export default function SectionHeading({ badge, title, description, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      style={{
        marginBottom: '4rem',
        textAlign: align === 'center' ? 'center' : 'left',
        maxWidth: align === 'center' ? '40rem' : '36rem',
        marginLeft: align === 'center' ? 'auto' : undefined,
        marginRight: align === 'center' ? 'auto' : undefined,
      }}
    >
      {badge && (
        <span
          className="inline-flex items-center gap-2 rounded-full text-xs font-semibold tracking-widest uppercase text-accent-400 bg-accent-500/10 border border-accent-500/20"
          style={{ padding: '4px 12px', marginBottom: '1rem', display: 'inline-flex' }}
        >
          <span className="rounded-full bg-accent-400 glow-dot" style={{ width: 6, height: 6 }} />
          {badge}
        </span>
      )}
      <h2
        className="font-bold text-white"
        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', lineHeight: 1.2, marginBottom: '1rem' }}
      >
        {title}
      </h2>
      {description && (
        <p className="text-dark-100" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)', lineHeight: 1.7 }}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
