import { motion } from 'framer-motion'
import { fadeUpVariant, staggerContainer } from '@/lib/motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <motion.h2
        variants={fadeUpVariant}
        className="font-heading font-bold text-3xl md:text-4xl text-ink-900 mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUpVariant}
          className={`text-ink-500 font-body text-lg leading-relaxed ${centered ? 'mx-auto max-w-xl' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
