import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#ffffff',
        'bg-soft': '#f8fafc',
        'bg-soft-2': '#f1f5f9',
        'ink-900': '#0f172a',
        'ink-700': '#334155',
        'ink-500': '#64748b',
        'border': '#e2e8f0',
        'accent-blue': '#2563eb',
        'status-success': '#16a34a',
        'status-warning': '#d97706',
        'status-danger': '#dc2626',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
      },
    },
  },
  plugins: [],
}

export default config
