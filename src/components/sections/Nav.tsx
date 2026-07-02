import { motion, useScroll, useTransform } from 'framer-motion'
import { Code2, ExternalLink } from 'lucide-react'

const APP_URL = 'https://www.safecode.id.vn/'

export function Nav() {
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 70], [0, 1])
  const shadow = useTransform(scrollY, [50, 90], [0, 1])

  return (
    <header className="sticky top-0 z-50" role="banner">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-white/90 backdrop-blur-md pointer-events-none"
        style={{ opacity: bgOpacity }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: shadow,
          boxShadow: '0 1px 0 0 #e2e8f0',
        }}
      />
      <nav
        className="relative max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm"
          aria-label="SafeCode — open app"
        >
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center shrink-0 shadow-md shadow-blue-200" aria-hidden="true">
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <span className="font-heading font-bold text-ink-900 text-base">SafeCode</span>
        </a>

        <div className="flex items-center gap-3">
          <a
            href="#how-it-works"
            className="hidden sm:block font-body text-sm text-ink-700 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm px-2 py-1"
          >
            How it works
          </a>
          <button
            onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden sm:inline-flex items-center font-body font-medium text-sm rounded-lg text-ink-700 hover:text-blue-600 px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            Contact
          </button>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-body font-semibold text-sm rounded-lg bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            Try the App
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  )
}
