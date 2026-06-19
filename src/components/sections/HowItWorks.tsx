import React from 'react'
import { motion } from 'framer-motion'
import { Lock, Search, CheckCircle2 } from 'lucide-react'
import { StepItem } from '../ui/StepItem'
import { SectionHeading } from '../ui/SectionHeading'
import { staggerContainer } from '@/lib/motion'

const steps = [
  {
    number: 'Step 01',
    icon: <Lock className="w-6 h-6" />,
    title: 'Upload your code',
    description:
      'Your work is encrypted and zero-trust-wrapped the moment it leaves your machine. Clients never see raw source.',
  },
  {
    number: 'Step 02',
    icon: <Search className="w-6 h-6" />,
    title: 'Client submits a proof request',
    description:
      'They trigger an 8-stage AI verification pipeline. Every step is logged, time-stamped, and auditable.',
  },
  {
    number: 'Step 03',
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: 'Get paid automatically',
    description:
      'Once proof clears, the deal locks, credits are settled, and the audit trail is sealed. No chasing invoices.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 md:py-24 px-4 sm:px-6"
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="How it works"
          subtitle="Three steps. From delivery to verified, paid, and locked in the audit trail."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col md:flex-row gap-8 md:gap-4"
        >
          {steps.map((step, i) => (
            <StepItem
              key={step.number}
              {...step}
              isLast={i === steps.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
