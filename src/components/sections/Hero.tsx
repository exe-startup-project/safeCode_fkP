import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react'
import { useState, useEffect } from 'react'
import { FloatingParticles } from '../ui/FloatingParticles'
import { Marquee } from '../ui/Marquee'
import { CountUp } from '../ui/CountUp'
import { fadeUpVariant, staggerContainer } from '@/lib/motion'

const APP_URL = 'https://www.safecode.id.vn/'

// ── FullHeadline: animates both lines together as one unit ────────────────────
interface HeadlineItem { line1: string; line2: string }

function FullHeadline({ items, interval = 2800 }: { items: HeadlineItem[]; interval?: number }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % items.length), interval)
    return () => clearInterval(id)
  }, [items.length, interval])

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={index}
        style={{ position: 'absolute', width: '100%', textAlign: 'center' }}
        initial={{ y: '55%', opacity: 0, filter: 'blur(6px)' }}
        animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
        exit={{ y: '-55%', opacity: 0, filter: 'blur(6px)' }}
        transition={{ duration: 0.52, ease: [0.33, 1, 0.68, 1] }}
      >
        <span className="block text-ink-900">{items[index].line1}</span>
        <span className="block text-blue-600">{items[index].line2}</span>
      </motion.div>
    </AnimatePresence>
  )
}

// ── Data ───────────────────────────────────────────────────────────────────────
const trustBadges = [
  { emoji: '🛡', label: 'Zero-Trust Architecture' },
  { emoji: '⚡', label: 'AI-Powered Verification' },
  { emoji: '✅', label: 'WCAG AA Compliant' },
  { emoji: '🕐', label: 'Offline Lease Support' },
  { emoji: '📈', label: 'Immutable Audit Trail' },
  { emoji: '🔒', label: 'End-to-End Encrypted' },
  { emoji: '📋', label: 'Contract Lifecycle' },
  { emoji: '⚖️', label: 'License Enforcement' },
]

const stats = [
  { value: 8,   suffix: '',  label: 'Verification Stages' },
  { value: 72,  suffix: 'h', label: 'Max Offline Lease' },
  { value: 100, suffix: '%', label: 'Source Ownership' },
  { value: 0,   suffix: '',  label: 'Surprise Charges' },
]

const headlines: HeadlineItem[] = [
  { line1: 'Ship client work without', line2: 'handing over your code.' },
  { line1: 'Protect your IP without',  line2: 'losing your rights.' },
  { line1: 'Get paid without',         line2: 'chasing unpaid invoices.' },
  { line1: 'Deliver securely without', line2: 'trusting a handshake.' },
  { line1: 'Ship freely without',      line2: 'giving away your source.' },
]

// ── Component ─────────────────────────────────────────────────────────────────
export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden dot-grid-light py-24 md:py-36 px-4 sm:px-6"
      style={{ background: 'linear-gradient(160deg, #f0f7ff 0%, #f5fffe 50%, #fff7ed 100%)' }}
    >
      <FloatingParticles />

      {/* Orbs */}
      <motion.div aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 w-[560px] h-[560px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(191,219,254,0.7) 0%, transparent 65%)' }}
        animate={{ x:[0,50,-20,0], y:[0,-30,20,0], scale:[1,1.08,0.96,1] }}
        transition={{ duration:14, repeat:Infinity, ease:'easeInOut' }}
      />
      <motion.div aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-20 w-[480px] h-[480px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(153,246,228,0.65) 0%, transparent 65%)' }}
        animate={{ x:[0,-40,25,0], y:[0,30,-15,0], scale:[1,0.94,1.1,1] }}
        transition={{ duration:18, repeat:Infinity, ease:'easeInOut', delay:2 }}
      />
      <motion.div aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-1/4 w-[280px] h-[280px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(254,215,170,0.5) 0%, transparent 70%)' }}
        animate={{ scale:[1,1.2,0.9,1], opacity:[0.6,0.9,0.5,0.6] }}
        transition={{ duration:10, repeat:Infinity, ease:'easeInOut', delay:1 }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div variants={fadeUpVariant} className="flex justify-center mb-8">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 border border-blue-100 rounded-full text-xs font-body font-semibold text-blue-700 shadow-sm backdrop-blur-sm"
            whileHover={{ scale: 1.04 }}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500" aria-hidden="true" />
            Code protection for freelancers
          </motion.span>
        </motion.div>

        {/* H1 — both lines animate together */}
        <motion.div variants={fadeUpVariant} className="mb-6">
          <div
            className="relative overflow-hidden font-heading font-bold"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: 1.15,
              height: 'calc(clamp(2.5rem, 6vw, 4.5rem) * 1.15 * 2.3)',
            }}
            aria-live="polite"
            aria-atomic="true"
          >
            <FullHeadline items={headlines} interval={2800} />
          </div>
        </motion.div>

        {/* Sub-copy */}
        <motion.p
          variants={fadeUpVariant}
          className="text-ink-500 font-body text-lg leading-relaxed max-w-[580px] mx-auto mb-10"
        >
          SafeCode is a zero-trust execution and licensing platform for freelancers.
          Your clients verify they got what they paid for — you keep full ownership of your source.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUpVariant} className="flex flex-wrap justify-center gap-3 mb-14">
          <motion.a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body font-bold text-sm rounded-xl bg-blue-600 text-white px-7 py-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            whileHover={{ y: -3, boxShadow: '0 12px 30px -4px rgba(37,99,235,0.45)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 18 }}
          >
            Try SafeCode Free
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </motion.span>
          </motion.a>

          <motion.button
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 font-body font-medium text-sm rounded-xl text-ink-700 border border-slate-200 bg-white/70 px-7 py-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 backdrop-blur-sm"
            whileHover={{ y: -2, borderColor: '#93c5fd', boxShadow: '0 4px 16px rgba(0,0,0,0.07)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 18 }}
          >
            See how it works
            <ChevronDown className="w-4 h-4" aria-hidden="true" />
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {stats.map((s, i) => (
            <motion.div key={i} variants={fadeUpVariant} className="text-center">
              <div className="font-heading font-bold text-2xl text-ink-900 leading-none mb-1">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <div className="font-body text-xs text-ink-500">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Marquee */}
      <div className="relative z-10 mt-2">
        <Marquee speed={32}>
          {trustBadges.map(b => (
            <span
              key={b.label}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/80 border border-slate-200 rounded-full text-xs font-body font-medium text-ink-700 shadow-sm backdrop-blur-sm whitespace-nowrap"
            >
              <span>{b.emoji}</span>
              {b.label}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
