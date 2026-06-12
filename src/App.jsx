import { useEffect, useRef } from 'react'
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

// Scroll-linked stage: each section slides up, scales and brightens as it
// enters the viewport, then gently recedes as you scroll past — a live
// transition on every scroll, not a one-shot reveal. Driven by a rAF loop
// (polling, not scroll events) so it works in every embedding environment.
function Stage({ children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    let cur = { o: 0.15, y: 90, s: 0.94 }
    let raf

    const tick = () => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const p = Math.min(1, Math.max(0, (vh - r.top) / (r.height + vh)))

      let target
      if (p < 0.18) {
        const t = p / 0.18
        target = { o: 0.15 + t * 0.85, y: 90 * (1 - t), s: 0.94 + t * 0.06 }
      } else if (p > 0.85) {
        const t = (p - 0.85) / 0.15
        target = { o: 1 - t * 0.65, y: -46 * t, s: 1 - 0.03 * t }
      } else {
        target = { o: 1, y: 0, s: 1 }
      }

      // Lerp toward target for a soft settle
      cur.o += (target.o - cur.o) * 0.18
      cur.y += (target.y - cur.y) * 0.18
      cur.s += (target.s - cur.s) * 0.18

      el.style.opacity = cur.o.toFixed(3)
      el.style.transform = `translateY(${cur.y.toFixed(2)}px) scale(${cur.s.toFixed(4)})`
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div ref={ref} style={{ willChange: 'transform, opacity' }}>
      {children}
    </div>
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
