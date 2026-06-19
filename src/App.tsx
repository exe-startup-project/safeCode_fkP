import { Toaster } from 'sonner'
import { Nav } from './components/sections/Nav'
import { Hero } from './components/sections/Hero'
import { Features } from './components/sections/Features'
import { HowItWorks } from './components/sections/HowItWorks'
import { BothSides } from './components/sections/BothSides'
import { WaitlistSection } from './components/sections/WaitlistSection'
import { Footer } from './components/sections/Footer'

export default function App() {
  return (
    <>
      <Toaster
        position="top-center"
        richColors
        toastOptions={{
          style: { fontFamily: '"IBM Plex Sans", sans-serif' },
        }}
      />
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <BothSides />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  )
}
