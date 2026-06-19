import React from 'react'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  fullWidth?: boolean
  loading?: boolean
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  fullWidth = false,
  loading = false,
  disabled,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-body font-medium text-sm rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 disabled:cursor-not-allowed select-none'

  const variants = {
    primary:
      'bg-ink-900 text-white px-5 py-2.5 hover:bg-ink-700 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 disabled:bg-ink-500 disabled:text-white disabled:opacity-60',
    ghost:
      'bg-transparent text-ink-900 px-5 py-2.5 hover:bg-bg-soft-2 active:bg-bg-soft-2 disabled:opacity-50',
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />}
      {children}
    </button>
  )
}
