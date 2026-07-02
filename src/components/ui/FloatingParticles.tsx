import { motion } from 'framer-motion'

const PARTICLES = [
  { x: '10%',  y: '20%', size: 6,  color: 'bg-blue-300',    dur: 7,  delay: 0   },
  { x: '80%',  y: '15%', size: 9,  color: 'bg-teal-300',    dur: 9,  delay: 1   },
  { x: '25%',  y: '70%', size: 5,  color: 'bg-indigo-300',  dur: 11, delay: 0.5 },
  { x: '70%',  y: '65%', size: 8,  color: 'bg-emerald-200', dur: 8,  delay: 2   },
  { x: '50%',  y: '30%', size: 4,  color: 'bg-orange-200',  dur: 6,  delay: 1.5 },
  { x: '90%',  y: '50%', size: 7,  color: 'bg-pink-200',    dur: 10, delay: 0.8 },
  { x: '15%',  y: '50%', size: 5,  color: 'bg-cyan-200',    dur: 8,  delay: 3   },
  { x: '60%',  y: '80%', size: 6,  color: 'bg-blue-200',    dur: 12, delay: 1.2 },
  { x: '40%',  y: '10%', size: 4,  color: 'bg-teal-200',    dur: 9,  delay: 2.5 },
  { x: '5%',   y: '85%', size: 8,  color: 'bg-amber-200',   dur: 7,  delay: 0.3 },
  { x: '85%',  y: '90%', size: 5,  color: 'bg-rose-200',    dur: 11, delay: 1.8 },
  { x: '35%',  y: '45%', size: 3,  color: 'bg-violet-200',  dur: 6,  delay: 4   },
]

export function FloatingParticles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full opacity-60 ${p.color}`}
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          animate={{
            y: [0, -18, 0, 14, 0],
            x: [0, 10, -6, 0],
            opacity: [0.5, 0.9, 0.6, 0.8, 0.5],
            scale: [1, 1.3, 0.9, 1.1, 1],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  )
}
