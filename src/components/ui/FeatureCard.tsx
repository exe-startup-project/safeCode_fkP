import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUpVariant } from '@/lib/motion'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  iconBg: string
  iconColor: string
}

export function FeatureCard({ icon, title, description, iconBg, iconColor }: FeatureCardProps) {
  return (
    <motion.article
      variants={fadeUpVariant}
      whileHover={{ y: -4, boxShadow: '0 8px 30px -4px rgba(37,99,235,0.12)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="relative p-6 bg-bg-base border border-border rounded-md overflow-hidden cursor-default"
    >
      {/* shimmer sweep on hover */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background:
            'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.55) 50%, transparent 60%)',
          backgroundSize: '200% 100%',
        }}
        animate={{ backgroundPosition: ['-100% 0', '200% 0'] }}
      />

      <div
        className={`w-10 h-10 rounded-sm flex items-center justify-center mb-4 ${iconBg}`}
        aria-hidden="true"
      >
        <motion.span
          className={iconColor}
          whileHover={{ scale: 1.15, rotate: 6 }}
          transition={{ type: 'spring', stiffness: 400, damping: 16 }}
        >
          {icon}
        </motion.span>
      </div>
      <h3 className="font-heading font-semibold text-ink-900 text-base mb-2">{title}</h3>
      <p className="font-body text-ink-500 text-sm leading-relaxed">{description}</p>
    </motion.article>
  )
}
