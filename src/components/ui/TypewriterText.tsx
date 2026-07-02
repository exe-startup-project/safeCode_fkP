import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number       // seconds before typing starts
  speed?: number       // ms per character
}

/**
 * Renders text with a typewriter effect — each character fades in
 * sequentially. Uses a cursor blink that disappears when done.
 */
export function TypewriterText({
  text,
  className = '',
  delay = 0.3,
  speed = 28,
}: TypewriterTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!isInView) return
    let i = 0
    setDisplayed('')
    setDone(false)

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [isInView, text, delay, speed])

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{displayed}</span>
      {/* blinking cursor */}
      {!done && (
        <motion.span
          aria-hidden="true"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
          className="inline-block w-[2px] h-[0.9em] bg-blue-600 ml-0.5 align-middle"
        />
      )}
    </span>
  )
}
