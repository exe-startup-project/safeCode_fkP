import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { fadeUpVariant } from '@/lib/motion'

interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  items: string[]
}

export function BenefitCard({ icon, title, subtitle, items }: BenefitCardProps) {
  return (
    <motion.article
      variants={fadeUpVariant}
      className="p-8 bg-bg-base border border-border rounded-md hover:shadow-sm transition-shadow duration-200"
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-sm flex items-center justify-center bg-ink-900 text-white"
          aria-hidden="true"
        >
          {icon}
        </div>
        <div>
          <h3 className="font-heading font-semibold text-ink-900 text-lg leading-tight">{title}</h3>
          <p className="font-body text-ink-500 text-sm">{subtitle}</p>
        </div>
      </div>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check
              className="w-4 h-4 text-status-success mt-0.5 shrink-0"
              aria-hidden="true"
            />
            <span className="font-body text-ink-700 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  )
}
