import { Code2 } from 'lucide-react'
import { Button } from '../ui/Button'

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
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 rounded-sm"
          aria-label="SafeCode home"
        >
          <div
            className="w-7 h-7 rounded-sm bg-ink-900 flex items-center justify-center shrink-0"
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
            className="hidden sm:block font-body text-sm text-ink-700 hover:text-ink-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 rounded-sm"
          >
            How it works
          </a>
          <Button
            variant="primary"
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm px-4 py-2"
          >
            Join Waitlist
          </Button>
        </div>
      </nav>
    </header>
  )
}
