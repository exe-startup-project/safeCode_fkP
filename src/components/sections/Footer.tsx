import { Code2 } from 'lucide-react'
import { contactLinks } from '@/lib/contactLinks'

const APP_URL = 'https://www.safecode.id.vn/'

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm group"
          aria-label="SafeCode app (opens in new tab)"
        >
          <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-700 transition-colors shadow-md shadow-blue-100" aria-hidden="true">
            <Code2 className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-heading font-bold text-ink-900 text-sm group-hover:text-blue-600 transition-colors">SafeCode</span>
          <span className="text-ink-500 font-body text-sm">— zero-trust code delivery</span>
        </a>

        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end">
          <div className="flex items-center gap-2" aria-label="Social links">
            {contactLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                aria-label={link.external ? `${link.label} (opens in new tab)` : link.label}
                className={`w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-50 opacity-60 hover:opacity-100 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-1 ${link.iconTint}`}
              >
                {link.icon(15)}
              </a>
            ))}
          </div>
          <span className="text-slate-200 text-xs" aria-hidden="true">|</span>
          <p className="font-mono text-xs text-ink-500">
            © 2026 SafeCode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
