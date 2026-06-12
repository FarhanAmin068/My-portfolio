import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1))
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 200) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    // Poll as a fallback for environments where scroll events don't fire
    const poll = setInterval(onScroll, 200)
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearInterval(poll)
    }
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 pointer-events-none"
    >
      {/* Morphing shell: full-width bar at top → floating glass pill when scrolled */}
      <div
        className={`pointer-events-auto mx-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? 'max-w-4xl mt-3 px-3 rounded-2xl glass-strong shadow-2xl shadow-black/40'
            : 'max-w-7xl mt-0 px-6 rounded-none bg-transparent border border-transparent'
        }`}
      >
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-2.5 group shrink-0 pl-1"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-indigo-500/50 to-sky-400/50 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
                FA
              </div>
            </div>
            <span className={`font-semibold text-white tracking-tight transition-all duration-500 hidden sm:block ${scrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
              Farhan<span className="text-indigo-400">.</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map(link => {
              const isActive = active === link.href.slice(1)
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-indigo-500/15 border border-indigo-400/25"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                  {/* Hover underline for inactive links */}
                  {!isActive && (
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-1 h-px w-0 bg-indigo-400/70 transition-all duration-300 group-hover:w-1/2 hover:w-1/2" />
                  )}
                </button>
              )
            })}
            <a
              href="/Farhan_Amin_CV.pdf"
              download
              className="relative ml-3 inline-flex items-center gap-2 px-5 py-2 text-white text-sm font-semibold rounded-xl overflow-hidden group/cv shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/45 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 bg-[length:200%_100%] bg-left group-hover/cv:bg-right transition-[background-position] duration-500" />
              <svg className="relative w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
              <span className="relative">Resume</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white transition-colors p-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu — expands inside the shell so the pill grows open */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className={`md:hidden overflow-hidden ${scrolled ? '' : 'glass-strong rounded-2xl mb-3'}`}
            >
              <div className="px-3 py-3 flex flex-col gap-1 border-t border-white/[0.06]">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.045, duration: 0.3 }}
                    onClick={() => handleNav(link.href)}
                    className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      active === link.href.slice(1)
                        ? 'text-white bg-indigo-500/15 border border-indigo-400/25'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <a
                  href="/Farhan_Amin_CV.pdf"
                  download
                  className="mt-1.5 mb-1 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-sky-500 text-white text-sm font-semibold rounded-xl text-center shadow-lg shadow-indigo-600/25"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
