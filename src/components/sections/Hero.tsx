import { motion } from 'framer-motion'
import { ShieldCheck, ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '../ui/Button'
import { Pill } from '../ui/Pill'
import { fadeUpVariant, staggerContainer } from '@/lib/motion'

const trustBadges = [
  { emoji: '🛡', label: 'Zero-Trust Architecture' },
  { emoji: '⚡', label: 'AI-Powered Verification' },
  { emoji: '✅', label: 'WCAG AA Compliant' },
  { emoji: '🕐', label: 'Offline Lease Support' },
  { emoji: '📈', label: 'Immutable Audit Trail' },
]

export function Hero() {
  return (
    <section
      className="bg-bg-soft py-20 md:py-28 px-4 sm:px-6"
      aria-label="Hero"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div variants={fadeUpVariant} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-bg-base border border-border rounded-full text-xs font-body font-medium text-ink-700">
            <ShieldCheck className="w-3.5 h-3.5 text-accent-blue" aria-hidden="true" />
            Private beta — apply now
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={fadeUpVariant}
          className="font-heading font-bold text-5xl md:text-6xl text-ink-900 leading-tight mb-6"
        >
          Ship client work without
          <br />
          handing over your code.
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          variants={fadeUpVariant}
          className="text-ink-500 font-body text-lg leading-relaxed max-w-[600px] mx-auto mb-8"
        >
          SafeCode is a zero-trust execution and licensing platform for freelancers. Your clients
          verify they got what they paid for — you keep full ownership of your source.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUpVariant} className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant="primary"
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="group"
          >
            Get Early Access
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Button>
          <Button
            variant="ghost"
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See how it works
            <ChevronDown className="w-4 h-4" aria-hidden="true" />
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          variants={fadeUpVariant}
          className="flex flex-wrap justify-center gap-2"
          role="list"
          aria-label="Platform features"
        >
          {trustBadges.map(b => (
            <span role="listitem" key={b.label}>
              <Pill icon={b.emoji} label={b.label} />
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
