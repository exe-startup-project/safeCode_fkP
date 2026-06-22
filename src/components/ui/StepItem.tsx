import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUpVariant } from '@/lib/motion'

interface StepItemProps {
  number: string
  icon: ReactNode
  title: string
  description: string
  isLast?: boolean
  /** Tailwind bg class for the circle, e.g. "bg-blue-50" */
  iconBg: string
  /** Tailwind text class for the icon, e.g. "text-blue-600" */
  iconColor: string
  /** Tailwind border class for the circle, e.g. "border-blue-200" */
  iconBorder: string
}

export function StepItem({
  number,
  icon,
  title,
  description,
  isLast = false,
  iconBg,
  iconColor,
  iconBorder,
}: StepItemProps) {
  return (
    <motion.div variants={fadeUpVariant} className="flex flex-col items-center text-center relative flex-1">
      {/* connector line (desktop) */}
      {!isLast && (
        <div
          className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-border"
          aria-hidden="true"
        />
      )}
      {/* icon badge */}
      <div className={`relative z-10 w-16 h-16 rounded-full border-2 flex items-center justify-center mb-4 shadow-sm ${iconBg} ${iconBorder}`}>
        <span className={iconColor} aria-hidden="true">{icon}</span>
      </div>
      <span className="font-mono text-xs text-ink-500 mb-1">{number}</span>
      <h3 className="font-heading font-semibold text-ink-900 text-base mb-2">{title}</h3>
      <p className="font-body text-ink-500 text-sm leading-relaxed max-w-xs">{description}</p>
    </motion.div>
  )
}
