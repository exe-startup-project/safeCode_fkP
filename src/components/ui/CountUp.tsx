import { useInView, useMotionValue, useSpring, animate } from 'framer-motion'
import { useRef, useEffect } from 'react'

interface CountUpProps {
  to: number
  suffix?: string
  duration?: number
  className?: string
}

export function CountUp({ to, suffix = '', duration = 1.8, className = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const motionVal = useMotionValue(0)
  const springVal = useSpring(motionVal, { stiffness: 60, damping: 14 })

  useEffect(() => {
    if (!inView) return
    const controls = animate(motionVal, to, { duration, ease: 'easeOut' })
    return controls.stop
  }, [inView, to, duration, motionVal])

  useEffect(() => {
    return springVal.on('change', (v) => {
      if (ref.current) ref.current.textContent = Math.round(v) + suffix
    })
  }, [springVal, suffix])

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  )
}
