import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { WaitlistForm } from '../WaitlistForm'
import { fadeUpVariant, staggerContainer } from '@/lib/motion'

export function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="py-20 md:py-24 px-4 sm:px-6 bg-bg-soft"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div variants={fadeUpVariant} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-bg-base border border-border rounded-full text-xs font-body font-medium text-ink-700">
            <Zap className="w-3.5 h-3.5 text-status-warning" aria-hidden="true" />
            Limited spots available
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUpVariant}
          className="font-heading font-bold text-3xl md:text-4xl text-ink-900 mb-4"
        >
          Be first to try SafeCode
        </motion.h2>

        {/* Sub-copy */}
        <motion.p
          variants={fadeUpVariant}
          className="text-ink-500 font-body text-lg leading-relaxed mb-10"
        >
          Join the private beta waitlist. No credit card required.
        </motion.p>

        {/* Form */}
        <motion.div variants={fadeUpVariant} className="w-full">
          <WaitlistForm />
        </motion.div>
      </motion.div>
    </section>
  )
}
