import { motion } from 'framer-motion'
import { Code2, Users } from 'lucide-react'
import { BenefitCard } from '../ui/BenefitCard'
import { SectionHeading } from '../ui/SectionHeading'
import { staggerContainer } from '@/lib/motion'

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

export function BothSides() {
  return (
    <section className="bg-bg-base py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Built for both sides of the deal" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <BenefitCard
            icon={<Code2 className="w-5 h-5" />}
            title="Freelancers"
            subtitle="Protect your work, your terms"
            items={freelancerItems}
            iconBg="bg-blue-50"
            iconColor="text-blue-600"
          />
          <BenefitCard
            icon={<Users className="w-5 h-5" />}
            title="Clients"
            subtitle="Trust the delivery, not just the promise"
            items={clientItems}
            iconBg="bg-teal-50"
            iconColor="text-teal-600"
          />
        </motion.div>
      </div>
    </section>
  )
}
