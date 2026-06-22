import { Mail } from 'lucide-react'
import type { ReactElement } from 'react'

// Neutral inline SVGs for platforms lucide doesn't ship branded icons for.
// Single-color, stroke-based, sized via props to match the lucide line-icon style.

export function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

export function DiscordIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="9" cy="12" r="1" />
      <circle cx="15" cy="12" r="1" />
      <path d="M7.5 7.5c3.5-1 5.5-1 9 0" />
      <path d="M7 16.5c3.5 1 6.5 1 10 0" />
      <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5" />
      <path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.48-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5" />
    </svg>
  )
}

export interface ContactLink {
  label: string
  href: string
  external: boolean
  /** Tailwind text class for the icon tint, e.g. "text-blue-600" */
  iconTint: string
  /** Render the icon at a given pixel size. Defaults to 20. */
  icon: (size?: number) => ReactElement
}

export const contactLinks: ContactLink[] = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61590480126901',
    external: true,
    iconTint: 'text-blue-600',
    icon: (size = 20) => <FacebookIcon size={size} />,
  },
  {
    label: 'Email',
    href: 'mailto:freelancerkillswitch@gmail.com',
    external: false,
    iconTint: 'text-orange-600',
    icon: (size = 20) => <Mail width={size} height={size} aria-hidden="true" />,
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com/@freelancer.killswitch',
    external: true,
    iconTint: 'text-rose-600',
    icon: (size = 20) => <TikTokIcon size={size} />,
  },
  {
    label: 'Discord',
    href: 'https://discord.gg/gwP5r9DQ',
    external: true,
    iconTint: 'text-indigo-500',
    icon: (size = 20) => <DiscordIcon size={size} />,
  },
]
