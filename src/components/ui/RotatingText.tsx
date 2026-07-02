import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface RotatingTextProps {
  phrases: string[]
  interval?: number
  /** Tailwind or CSS classes applied to the outer wrapper div */
  className?: string
}

/**
 * Full-line rotating text.
 * - Uses a fixed-height block so the parent H1 never reflows.
 * - The gradient/color is applied to the wrapper; individual spans inherit it.
 */
export function RotatingText({ phrases, interval = 2800, className = '' }: RotatingTextProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % phrases.length), interval)
    return () => clearInterval(id)
  }, [phrases.length, interval])

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ height: '1.2em' }}   /* exactly one line tall */
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={index}
          style={{ position: 'absolute', width: '100%' }}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.46, ease: [0.33, 1, 0.68, 1] }}
        >
          {phrases[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
