import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUpVariant } from '@/lib/motion'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  /** Tailwind bg class for the icon square, e.g. "bg-blue-50" */
  iconBg: string
  /** Tailwind text class for the icon color, e.g. "text-blue-600" */
  iconColor: string
}

export function FeatureCard({ icon, title, description, iconBg, iconColor }: FeatureCardProps) {
  return (
    <motion.article
      variants={fadeUpVariant}
      className="p-6 bg-bg-base border border-border rounded-md hover:shadow-sm transition-shadow duration-200"
    >
      <div
        className={`w-10 h-10 rounded-sm flex items-center justify-center mb-4 ${iconBg}`}
        aria-hidden="true"
      >
        <span className={iconColor}>{icon}</span>
      </div>
      <h3 className="font-heading font-semibold text-ink-900 text-base mb-2">{title}</h3>
      <p className="font-body text-ink-500 text-sm leading-relaxed">{description}</p>
    </motion.article>
  )
}
