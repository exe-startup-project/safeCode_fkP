import React from 'react'

interface PillProps {
  icon?: React.ReactNode
  label: string
  className?: string
}

export function Pill({ icon, label, className = '' }: PillProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 bg-bg-base border border-border rounded-full text-xs font-body font-medium text-ink-700 ${className}`}
    >
      {icon && <span className="text-base leading-none" aria-hidden="true">{icon}</span>}
      {label}
    </span>
  )
}
