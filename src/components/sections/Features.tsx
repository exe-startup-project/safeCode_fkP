import { motion } from 'framer-motion'
import { FileText, Layers, ShieldCheck, Clock, CreditCard, BookOpen } from 'lucide-react'
import { staggerContainer, fadeUpVariant } from '@/lib/motion'
import { TiltCard } from '../ui/TiltCard'

const features = [
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'Deals',
    description: 'Manage the full contract lifecycle — draft, active, expired — with two-person approval for high-value engagements.',
    gradient: 'from-blue-500 to-blue-600',
    shadow: 'hover:shadow-blue-100',
    bg: 'group-hover:bg-blue-50',
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: 'Products',
    description: 'Attach licensing terms to every deliverable. Define exactly what clients can run, fork, and distribute.',
    gradient: 'from-teal-500 to-teal-600',
    shadow: 'hover:shadow-teal-100',
    bg: 'group-hover:bg-teal-50',
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'ProofQueue',
    description: 'An 8-stage AI verification pipeline validates client proof requests before access is granted.',
    gradient: 'from-emerald-500 to-emerald-600',
    shadow: 'hover:shadow-emerald-100',
    bg: 'group-hover:bg-emerald-50',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Policy',
    description: 'Set offline lease windows (1–72h), expiry rules, and access policies that travel with the code.',
    gradient: 'from-amber-500 to-amber-600',
    shadow: 'hover:shadow-amber-100',
    bg: 'group-hover:bg-amber-50',
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: 'Credits',
    description: 'Transparent per-operation billing with a full formula breakdown — no surprise charges, ever.',
    gradient: 'from-orange-500 to-orange-600',
    shadow: 'hover:shadow-orange-100',
    bg: 'group-hover:bg-orange-50',
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Audit',
    description: 'An immutable, tamper-evident event log for every action. Export-ready for legal or compliance review.',
    gradient: 'from-rose-500 to-rose-600',
    shadow: 'hover:shadow-rose-100',
    bg: 'group-hover:bg-rose-50',
  },
]

export function Features() {
  return (
    <section className="bg-slate-50 py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <motion.h2 variants={fadeUpVariant} className="font-heading font-bold text-3xl md:text-4xl text-ink-900 mb-4">
            Everything you need to work safely
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-ink-500 font-body text-lg max-w-xl mx-auto">
            Six integrated modules, built for the realities of freelance code delivery.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ perspective: '1200px' }}
        >
          {features.map(f => (
            <motion.div key={f.title} variants={fadeUpVariant}>
              <TiltCard
                intensity={6}
                className={`relative p-6 bg-white rounded-2xl border border-slate-100 overflow-hidden cursor-default group hover:shadow-2xl ${f.shadow} transition-shadow duration-300 h-full`}
              >
                {/* bg wash on hover */}
                <div className={`absolute inset-0 opacity-0 ${f.bg} transition-opacity duration-300 rounded-2xl`} aria-hidden="true" />

                <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-5 shadow-lg`} aria-hidden="true">
                  <motion.span
                    className="text-white"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                  >
                    {f.icon}
                  </motion.span>
                </div>
                <h3 className="relative font-heading font-bold text-ink-900 text-base mb-2">{f.title}</h3>
                <p className="relative font-body text-ink-500 text-sm leading-relaxed">{f.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
