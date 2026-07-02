import { motion } from 'framer-motion'
import { Code2, Users, Check } from 'lucide-react'
import { staggerContainer, fadeUpVariant, staggerFast, slideLeftVariant, slideRightVariant } from '@/lib/motion'

const freelancerItems = [
  'Keep full ownership of your source code',
  'Enforce license terms automatically',
  'Get paid when proof of execution is verified',
  'Full audit trail for every engagement',
  'Configurable offline access windows',
]

const clientItems = [
  'Verify you received what was promised',
  'No vendor lock-in — proof is portable',
  'Transparent credit-based billing',
  'AI verification in minutes, not weeks',
  'Role-based access for your whole team',
]

const itemVariant = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
}

function Card({
  icon,
  title,
  subtitle,
  items,
  accent,
  iconBg,
  iconText,
  slideVariant,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
  items: string[]
  accent: string
  iconBg: string
  iconText: string
  slideVariant: typeof slideLeftVariant
}) {
  return (
    <motion.div
      variants={slideVariant}
      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 280, damping: 20 } }}
      className="p-8 bg-white rounded-2xl border border-slate-100 hover:shadow-2xl hover:shadow-slate-100/80 transition-shadow duration-300"
    >
      <div className={`h-1 w-16 rounded-full ${accent} mb-6`} aria-hidden="true" />

      <div className="flex items-center gap-3 mb-6">
        <motion.div
          className={`w-11 h-11 rounded-xl flex items-center justify-center ${iconBg}`}
          whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
          aria-hidden="true"
        >
          <span className={iconText}>{icon}</span>
        </motion.div>
        <div>
          <h3 className="font-heading font-bold text-ink-900 text-xl">{title}</h3>
          <p className="font-body text-ink-500 text-sm">{subtitle}</p>
        </div>
      </div>

      <motion.ul
        variants={staggerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="space-y-3"
      >
        {items.map((item, i) => (
          <motion.li key={i} variants={itemVariant} className="flex items-start gap-3">
            <motion.div
              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-emerald-50"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 400, damping: 14, delay: i * 0.07 }}
            >
              <Check className="w-3 h-3 text-emerald-600" aria-hidden="true" />
            </motion.div>
            <span className="font-body text-sm text-ink-700">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}

export function BothSides() {
  return (
    <section className="bg-slate-50 py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <motion.h2 variants={fadeUpVariant} className="font-heading font-bold text-3xl md:text-4xl text-ink-900 mb-4">
            Built for both sides of the deal
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-ink-500 font-body text-lg max-w-xl mx-auto">
            Whether you write the code or pay for it, SafeCode gives you proof.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <Card
            icon={<Code2 className="w-5 h-5" />}
            title="Freelancers"
            subtitle="Protect your work, your terms"
            items={freelancerItems}
            accent="bg-blue-500"
            iconBg="bg-blue-50"
            iconText="text-blue-600"
            slideVariant={slideLeftVariant}
          />
          <Card
            icon={<Users className="w-5 h-5" />}
            title="Clients"
            subtitle="Trust the delivery, not just the promise"
            items={clientItems}
            accent="bg-teal-500"
            iconBg="bg-teal-50"
            iconText="text-teal-600"
            slideVariant={slideRightVariant}
          />
        </motion.div>
      </div>
    </section>
  )
}
