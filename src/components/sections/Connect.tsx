import { motion } from 'framer-motion'
import { fadeUpVariant, staggerContainer } from '@/lib/motion'
import { contactLinks } from '@/lib/contactLinks'

export function Connect() {
  return (
    <section
      id="connect"
      className="bg-bg-soft py-20 md:py-24 px-4 sm:px-6"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.h2
          variants={fadeUpVariant}
          className="font-heading font-bold text-3xl md:text-4xl text-ink-900 mb-4"
        >
          Connect with SafeCode
        </motion.h2>

        <motion.p
          variants={fadeUpVariant}
          className="text-ink-500 font-body text-lg leading-relaxed mb-12"
        >
          Follow us for updates, or reach out directly through the channels below.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-4"
          role="list"
          aria-label="Contact channels"
        >
          {contactLinks.map(ch => (
            <motion.div key={ch.label} variants={fadeUpVariant} role="listitem">
              <a
                href={ch.href}
                {...(ch.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex items-center gap-3 px-5 py-3.5 bg-bg-base border border-border rounded-md text-ink-700 hover:text-ink-900 hover:border-ink-500 hover:shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 font-body font-medium text-sm"
                aria-label={ch.external ? `${ch.label} (opens in new tab)` : ch.label}
              >
                {/* Icon gets its own tint color */}
                <span className={ch.iconTint}>{ch.icon(20)}</span>
                {ch.label}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
