import { Code2 } from 'lucide-react'

export function Nav() {
  return (
    <header
      className="sticky top-0 z-50 bg-bg-base border-b border-border"
      role="banner"
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm"
          aria-label="SafeCode home"
        >
          <div
            className="w-7 h-7 rounded-sm bg-blue-600 flex items-center justify-center shrink-0"
            aria-hidden="true"
          >
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <span className="font-heading font-semibold text-ink-900 text-base">SafeCode</span>
        </a>

        {/* Right */}
        <div className="flex items-center gap-4">
          <a
            href="#how-it-works"
            className="hidden sm:block font-body text-sm text-ink-700 hover:text-ink-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm"
          >
            How it works
          </a>
          <button
            onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center font-body font-medium text-sm rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  )
}
