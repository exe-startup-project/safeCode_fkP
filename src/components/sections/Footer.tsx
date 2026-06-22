import { Code2 } from 'lucide-react'
import { contactLinks } from '@/lib/contactLinks'

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
            className="w-7 h-7 rounded-sm bg-blue-600 flex items-center justify-center shrink-0"
            aria-hidden="true"
          >
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <span className="font-heading font-semibold text-ink-900 text-sm">SafeCode</span>
          <span className="text-ink-500 font-body text-sm">— zero-trust code delivery</span>
        </div>

        {/* Right: social links + legal */}
        <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-end">
          {/* Icon-only social links with per-platform tint */}
          <div className="flex items-center gap-2" aria-label="Social links">
            {contactLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                aria-label={link.external ? `${link.label} (opens in new tab)` : link.label}
                className={`w-6 h-6 flex items-center justify-center transition-opacity hover:opacity-100 opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-1 rounded-sm ${link.iconTint}`}
              >
                {link.icon(14)}
              </a>
            ))}
          </div>
          <span className="text-border font-mono text-xs" aria-hidden="true">·</span>
          <p className="font-mono text-xs text-ink-500">
            © 2026 SafeCode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
