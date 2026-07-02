import { motion, useInView } from 'framer-motion'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import { fadeUpVariant } from '@/lib/motion'

interface StepItemProps {
  number: string
  icon: ReactNode
  title: string
  description: string
  isLast?: boolean
  iconBg: string
  iconColor: string
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
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariant}
      className="flex flex-col items-center text-center relative flex-1"
    >
      {/* connector line with animated beam */}
      {!isLast && (
        <div
          className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-border overflow-hidden"
          aria-hidden="true"
        >
          <motion.div
            className="h-full w-1/3 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            initial={{ x: '-100%' }}
            animate={isInView ? { x: '400%' } : { x: '-100%' }}
            transition={{
              duration: 1.6,
              ease: 'easeInOut',
              delay: 0.6,
              repeat: Infinity,
              repeatDelay: 2.5,
            }}
          />
        </div>
      )}

      {/* icon badge with pulse ring on enter */}
      <div className="relative z-10 mb-4">
        {isInView && (
          <motion.div
            aria-hidden="true"
            className={`absolute inset-0 rounded-full ${iconBg}`}
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 1.6, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        )}
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className={`w-16 h-16 rounded-full border-2 flex items-center justify-center shadow-sm ${iconBg} ${iconBorder}`}
        >
          <span className={iconColor} aria-hidden="true">{icon}</span>
        </motion.div>
      </div>

      <span className="font-mono text-xs text-ink-500 mb-1">{number}</span>
      <h3 className="font-heading font-semibold text-ink-900 text-base mb-2">{title}</h3>
      <p className="font-body text-ink-500 text-sm leading-relaxed max-w-xs">{description}</p>
    </motion.div>
  )
}
