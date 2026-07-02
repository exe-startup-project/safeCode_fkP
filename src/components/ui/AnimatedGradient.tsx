import { motion } from 'framer-motion'

/**
 * Slowly shifts a blue→teal→blue gradient in the background.
 * Wraps its children — place as the outermost element of a section.
 */
export function AnimatedGradient({ children, className = '', style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {/* Animated orbs */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, #bfdbfe, transparent 70%)' }}
        animate={{
          x: [0, 60, -20, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full opacity-25"
        style={{ background: 'radial-gradient(circle, #99f6e4, transparent 70%)' }}
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #a5f3fc, transparent 70%)' }}
        animate={{
          scale: [1, 1.3, 0.85, 1],
          opacity: [0.15, 0.22, 0.10, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
