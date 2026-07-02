import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUpVariant, staggerContainer } from '@/lib/motion'
import { contactLinks } from '@/lib/contactLinks'

const APP_URL = 'https://www.safecode.id.vn/'

export function Connect() {
  return (
    <section
      id="connect"
      className="relative overflow-hidden py-20 md:py-28 px-4 sm:px-6"
      style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #ccfbf1 50%, #dcfce7 100%)' }}
    >
      {/* Animated orbs */}
      <motion.div aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.7) 0%, transparent 65%)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(167,243,208,0.5) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <motion.div variants={fadeUpVariant} className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/70 border border-blue-200 rounded-full text-xs font-body font-semibold text-blue-700 backdrop-blur-sm">
            🚀 Get started today
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUpVariant}
          className="font-heading font-bold text-3xl md:text-5xl text-ink-900 mb-4"
        >
          Ready to protect your work?
        </motion.h2>
        <motion.p
          variants={fadeUpVariant}
          className="text-ink-600 font-body text-lg leading-relaxed mb-10 max-w-xl mx-auto"
        >
          Join freelancers already using SafeCode to ship with confidence.
          Follow us for updates or reach out directly.
        </motion.p>

        {/* Pulsing CTA */}
        <motion.div variants={fadeUpVariant} className="flex justify-center mb-12">
          <div className="relative inline-flex">
            {/* Pulse rings */}
            {[0, 1].map(i => (
              <motion.div
                key={i}
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl bg-blue-400"
                initial={{ opacity: 0.5, scale: 1 }}
                animate={{ opacity: 0, scale: 1.5 }}
                transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.9, ease: 'easeOut' }}
              />
            ))}
            <motion.a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 group font-body font-bold text-base rounded-2xl bg-blue-600 text-white px-8 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              whileHover={{ scale: 1.04, boxShadow: '0 16px 40px -4px rgba(37,99,235,0.45)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 16 }}
            >
              Get started free
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </motion.span>
            </motion.a>
          </div>
        </motion.div>

        <motion.p variants={fadeUpVariant} className="text-ink-500 text-sm font-body mb-5">
          Or connect with us on
        </motion.p>

        <motion.div
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-3"
          role="list"
          aria-label="Contact channels"
        >
          {contactLinks.map((ch) => (
            <motion.div
              key={ch.label}
              variants={fadeUpVariant}
              role="listitem"
              whileHover={{ y: -3, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              <a
                href={ch.href}
                {...(ch.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex items-center gap-2.5 px-5 py-2.5 bg-white/80 border border-white rounded-xl text-ink-700 hover:bg-white hover:shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 font-body font-medium text-sm backdrop-blur-sm"
                aria-label={ch.external ? `${ch.label} (opens in new tab)` : ch.label}
              >
                <span className={ch.iconTint}>{ch.icon(18)}</span>
                {ch.label}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
