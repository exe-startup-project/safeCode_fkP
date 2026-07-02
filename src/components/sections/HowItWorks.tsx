import { motion, useInView } from 'framer-motion'
import { Lock, Search, CheckCircle2 } from 'lucide-react'
import { staggerContainer, fadeUpVariant } from '@/lib/motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    icon: <Lock className="w-7 h-7" />,
    title: 'Upload your code',
    description: 'Your work is encrypted and zero-trust-wrapped the moment it leaves your machine. Clients never see raw source.',
    bg: 'bg-blue-600',
    ring: 'ring-blue-200',
    pulse: 'bg-blue-400',
    num: 'text-blue-600',
    connectorFrom: 'from-blue-400',
    connectorTo: 'to-teal-400',
  },
  {
    number: '02',
    icon: <Search className="w-7 h-7" />,
    title: 'Client submits a proof request',
    description: 'They trigger an 8-stage AI verification pipeline. Every step is logged, time-stamped, and auditable.',
    bg: 'bg-teal-500',
    ring: 'ring-teal-200',
    pulse: 'bg-teal-400',
    num: 'text-teal-600',
    connectorFrom: 'from-teal-400',
    connectorTo: 'to-emerald-400',
  },
  {
    number: '03',
    icon: <CheckCircle2 className="w-7 h-7" />,
    title: 'Get paid automatically',
    description: 'Once proof clears, the deal locks, credits are settled, and the audit trail is sealed. No chasing invoices.',
    bg: 'bg-emerald-500',
    ring: 'ring-emerald-200',
    pulse: 'bg-emerald-400',
    num: 'text-emerald-600',
    connectorFrom: 'from-emerald-400',
    connectorTo: 'to-emerald-400',
  },
]

function Step({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div ref={ref} variants={fadeUpVariant} className="flex gap-6 items-start">
      {/* Left: icon + connector */}
      <div className="flex flex-col items-center shrink-0">
        <div className="relative">
          {/* Pulse ring on enter */}
          {inView && (
            <motion.div
              aria-hidden="true"
              className={`absolute inset-0 rounded-full ${step.pulse}`}
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            />
          )}
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 280, damping: 18 }}
            className={`w-16 h-16 rounded-2xl ${step.bg} ring-4 ${step.ring} flex items-center justify-center text-white shadow-xl`}
          >
            {step.icon}
          </motion.div>
        </div>
        {/* Connector fill */}
        {index < steps.length - 1 && (
          <div className="relative w-0.5 h-16 bg-slate-100 mt-2 rounded-full overflow-hidden">
            <motion.div
              className={`absolute top-0 left-0 w-full bg-gradient-to-b ${step.connectorFrom} ${step.connectorTo} rounded-full`}
              initial={{ height: '0%' }}
              animate={inView ? { height: '100%' } : { height: '0%' }}
              transition={{ duration: 0.9, delay: 0.5, ease: 'easeInOut' }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="pb-10 pt-1">
        <span className={`font-mono text-xs font-bold ${step.num} mb-1.5 block tracking-wider uppercase`}>
          Step {step.number}
        </span>
        <h3 className="font-heading font-bold text-ink-900 text-xl mb-2">{step.title}</h3>
        <p className="font-body text-ink-500 text-sm leading-relaxed max-w-sm">{step.description}</p>
      </div>
    </motion.div>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <motion.h2 variants={fadeUpVariant} className="font-heading font-bold text-3xl md:text-4xl text-ink-900 mb-4">
            How it works
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-ink-500 font-body text-lg max-w-xl mx-auto">
            Three steps. From delivery to verified, paid, and locked in the audit trail.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col"
        >
          {steps.map((step, i) => (
            <Step key={step.number} step={step} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
