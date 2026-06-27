import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useInView, animate } from 'framer-motion'
import { EASE } from '../lib/motion'

const ROLES = ['AI Researcher', 'NLP Engineer', 'ML Practitioner', 'PhD Aspirant']

const STATS = [
  { num: 3.84, decimals: 2, label: 'CGPA at CUET' },
  { num: 3, suffix: 'x', label: 'Intl. Competition Wins' },
  { num: 5, suffix: '+', label: 'Certifications' },
  { num: 4, suffix: '', label: 'Live Projects' },
]

const SOCIALS = [
  {
    href: 'mailto:farhanamin1200@gmail.com', label: 'Email',
    icon: <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />,
  },
  {
    href: 'https://github.com/FarhanAmin068', label: 'GitHub',
    icon: <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />,
  },
  {
    href: 'https://www.linkedin.com/in/farhan-amin-94a74523a/', label: 'LinkedIn',
    icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
  },
  {
    href: 'https://scholar.google.com/citations?user=Qz1D110AAAAJ&hl=en', label: 'Google Scholar',
    icon: <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 100 14 7 7 0 000-14z" />,
  },
]

function useTypewriter(words) {
  const [text, setText] = useState('')
  const state = useRef({ word: 0, char: 0, deleting: false })

  useEffect(() => {
    let timer
    const tick = () => {
      const s = state.current
      const current = words[s.word]
      if (!s.deleting) {
        s.char++
        setText(current.slice(0, s.char))
        if (s.char === current.length) {
          s.deleting = true
          timer = setTimeout(tick, 2000)
          return
        }
        timer = setTimeout(tick, 90)
      } else {
        s.char--
        setText(current.slice(0, s.char))
        if (s.char === 0) {
          s.deleting = false
          s.word = (s.word + 1) % words.length
        }
        timer = setTimeout(tick, 45)
      }
    }
    timer = setTimeout(tick, 600)
    return () => clearTimeout(timer)
  }, [words])

  return text
}

function CountUp({ to, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = v.toFixed(decimals) + suffix
      },
    })
    return () => controls.stop()
  }, [inView, to, decimals, suffix])

  return <span ref={ref}>0{suffix}</span>
}

function TiltPhoto() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 })

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative"
    >
      {/* Rotating dashed ring */}
      <div className="absolute -inset-4 rounded-full border-2 border-dashed border-indigo-400/25 spin-slow" />
      {/* Glow halo */}
      <div className="absolute -inset-5 rounded-full bg-gradient-to-br from-indigo-500/25 to-sky-400/20 blur-2xl" />

      <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-indigo-400/40 overflow-hidden shadow-2xl shadow-indigo-900/40 bg-gradient-to-br from-[#10173a] to-[#0a0e1c]">
        <img
          src="/farhan.jpg"
          alt="Farhan Amin"
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 22%', transform: 'scale(1.7)', transformOrigin: '50% 25%' }}
          loading="eager"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#04060f]/70 to-transparent" />
      </div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, type: 'spring', stiffness: 260, damping: 18 }}
        className="absolute -bottom-2 -right-2 bg-gradient-to-r from-indigo-600 to-sky-500 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg shadow-indigo-900/50"
      >
        CSE @ CUET
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section id="home" className="relative min-h-screen flex items-start lg:items-center overflow-hidden">
      {/* Legibility gradients over the global aurora */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04060f]/40 via-transparent to-[#04060f]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#04060f]/70 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-5 gap-14 items-center">
          {/* LEFT */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-7 text-sm text-slate-300"
            >
              <span className="dot-pulse" />
              Open to research collaborations & PhD opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-5"
            >
              Farhan
              <br />
              <span className="gradient-text">Amin</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
              className="flex items-center gap-3 mb-6 h-10"
            >
              <span className="text-2xl md:text-3xl font-light text-slate-200">
                {typed}
                <span className="inline-block w-0.5 h-7 bg-indigo-400 ml-1 animate-pulse align-middle" />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
              className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl"
            >
              Exploring the frontiers of{' '}
              <span className="text-indigo-300 font-medium">Large Language Models</span>,{' '}
              <span className="text-sky-300 font-medium">Multimodal AI</span> and{' '}
              <span className="text-teal-300 font-medium">NLP</span> — with multiple
              top placements at international research shared tasks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a href="#research" className="btn-primary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Research
              </a>
              <a href="#projects" className="btn-outline">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                My Projects
              </a>
              <a href="/Farhan_Amin_CV.pdf" download className="btn-outline">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
              className="flex items-center gap-3"
            >
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-10 h-10 rounded-xl glass hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-300 text-slate-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-2 flex flex-col items-center gap-9">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            >
              <TiltPhoto />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
              className="grid grid-cols-2 gap-3 w-full max-w-xs"
            >
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="card card-hover p-4 text-center"
                >
                  <div className="text-2xl font-black gradient-text mb-1">
                    <CountUp to={s.num} decimals={s.decimals || 0} suffix={s.suffix || ''} />
                  </div>
                  <div className="text-xs text-slate-400 font-medium">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-slate-600 z-10"
      >
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 bg-indigo-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
