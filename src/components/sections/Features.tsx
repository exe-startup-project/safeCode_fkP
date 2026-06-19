import { motion } from 'framer-motion'
import {
  FileText,
  Layers,
  ShieldCheck,
  Clock,
  CreditCard,
  BookOpen,
} from 'lucide-react'
import { FeatureCard } from '../ui/FeatureCard'
import { SectionHeading } from '../ui/SectionHeading'
import { staggerContainer } from '@/lib/motion'

const features = [
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'Deals',
    description:
      'Manage the full contract lifecycle — draft, active, expired — with two-person approval for high-value engagements.',
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: 'Products',
    description:
      'Attach licensing terms to every deliverable. Define exactly what clients can run, fork, and distribute.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'ProofQueue',
    description:
      'An 8-stage AI verification pipeline validates client proof requests before access is granted.',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Policy',
    description:
      'Set offline lease windows (1–72h), expiry rules, and access policies that travel with the code.',
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: 'Credits',
    description:
      'Transparent per-operation billing with a full formula breakdown — no surprise charges, ever.',
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Audit',
    description:
      'An immutable, tamper-evident event log for every action. Export-ready for legal or compliance review.',
  },
]

export function Features() {
  return (
    <section className="bg-bg-base py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Everything you need to work safely"
          subtitle="Six integrated modules, built for the realities of freelance code delivery."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map(f => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
