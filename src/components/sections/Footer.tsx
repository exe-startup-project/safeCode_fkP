import { Code2 } from 'lucide-react'

export function Footer() {
  return (
    <footer
      className="bg-bg-base border-t border-border"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: brand */}
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-sm bg-ink-900 flex items-center justify-center shrink-0"
            aria-hidden="true"
          >
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <span className="font-heading font-semibold text-ink-900 text-sm">SafeCode</span>
          <span className="text-ink-500 font-body text-sm">— zero-trust code delivery</span>
        </div>

        {/* Right: legal */}
        <p className="font-mono text-xs text-ink-500">
          © 2026 SafeCode. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
