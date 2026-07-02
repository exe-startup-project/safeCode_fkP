import { Nav } from './components/sections/Nav'
import { Hero } from './components/sections/Hero'
import { Features } from './components/sections/Features'
import { HowItWorks } from './components/sections/HowItWorks'
import { BothSides } from './components/sections/BothSides'
import { Connect } from './components/sections/Connect'
import { Footer } from './components/sections/Footer'
import { ScrollProgress } from './components/ui/ScrollProgress'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <BothSides />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
