import { motion } from 'framer-motion'
import AuroraBackground from './components/AuroraBackground'
import CursorSpotlight from './components/CursorSpotlight'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Research from './components/Research'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Section entrance — one clean, GPU-only reveal (opacity + slide up) that
// fires once as the section scrolls into view. No continuous loops, no blur:
// buttery on both desktop and mobile.
function Stage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Glowing seam between sections.
function Divider() {
  return (
    <div className="relative max-w-4xl mx-auto px-6 h-px">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent"
      />
      <div className="absolute left-1/2 -translate-x-1/2 -top-px w-32 h-[3px] bg-indigo-400/30 blur-[6px]" />
    </div>
  )
}

const SECTIONS = [
  About,
  Research,
  Education,
  Projects,
  Skills,
  Certifications,
  Achievements,
  Contact,
]

export default function App() {
  return (
    <div className="relative bg-[#04060f] text-slate-200 overflow-x-hidden dot-grid">
      <AuroraBackground />
      <CursorSpotlight />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        {SECTIONS.map((Comp, i) => (
          <div key={i}>
            <Divider />
            <Stage>
              <Comp flip={i % 2 === 1} />
            </Stage>
          </div>
        ))}
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
