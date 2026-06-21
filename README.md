# SafeCode — Landing Page

Static marketing page for [SafeCode](https://safecode.dev), a zero-trust code execution and licensing platform for freelancers.

## Stack

- Vite + React 18 + TypeScript
- TailwindCSS (slate palette)
- Framer Motion (scroll-triggered animations)
- Fonts: Space Grotesk / IBM Plex Sans / IBM Plex Mono
- Icons: lucide-react

## Project Structure

Each section in `src/components/sections/` maps 1:1 to a block on the page, in the order they're rendered in `App.tsx`.

```
src/
├── components/
│   ├── sections/          # one component per landing-page section
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── BothSides.tsx
│   │   ├── Connect.tsx
│   │   └── Footer.tsx
│   └── ui/                # reusable primitives used across sections
│       ├── Button.tsx
│       ├── Pill.tsx
│       ├── FeatureCard.tsx
│       ├── BenefitCard.tsx
│       ├── SectionHeading.tsx
│       └── StepItem.tsx
├── lib/
│   ├── motion.ts           # shared Framer Motion variants
│   └── contactLinks.tsx    # single source of truth for Facebook/Email/TikTok/Discord
├── App.tsx                 # assembles all sections in order
├── main.tsx                # React entry point
└── index.css               # Tailwind base + global CSS custom properties
```

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. No environment variables required — this is a fully static page with no backend.

## Build

```bash
npm run build
```

Output goes to `dist/`. Deploy to Netlify by connecting the GitHub repo — it picks up `netlify.toml` automatically (build command: `npm run build`, publish directory: `dist`).

## Share a preview via ngrok

Requires ngrok installed and available on your PATH.

```bash
# Terminal 1
npm run dev

# Terminal 2
npm run tunnel
```

Copy the printed `https://xxxx.ngrok-free.app` URL and share it. The tunnel stays live as long as both terminals are running.

## Contact channels

Facebook, Email, TikTok, and Discord links are defined in `src/lib/contactLinks.ts` and rendered in the Connect section and Footer. Edit that file to update them.
