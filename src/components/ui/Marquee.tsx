import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  speed?: number   // seconds for one full loop
  className?: string
}

/**
 * Horizontal infinite scroll marquee. Duplicates children to fill seamlessly.
 */
export function Marquee({ children, speed = 28, className = '' }: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        {/* Render twice for seamless loop */}
        <div className="flex gap-4">{children}</div>
        <div className="flex gap-4">{children}</div>
      </motion.div>
    </div>
  )
}
