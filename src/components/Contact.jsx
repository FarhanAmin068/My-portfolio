import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'
import { fadeLeft, fadeRight, viewport } from '../lib/motion'

const LINKS = [
  {
    label: 'Email',
    value: 'farhanamin1200@gmail.com',
    href: 'mailto:farhanamin1200@gmail.com',
    icon: <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />,
  },
  {
    label: 'Phone',
    value: '+880 1318 879104',
    href: 'tel:+8801318879104',
    icon: <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />,
  },
  {
    label: 'GitHub',
    value: 'FarhanAmin068',
    href: 'https://github.com/FarhanAmin068',
    icon: <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />,
  },
  {
    label: 'LinkedIn',
    value: 'Farhan Amin',
    href: 'https://www.linkedin.com/in/farhan-amin-94a74523a/',
    icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
  },
]

const inputCls =
  'w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-400/50 focus:bg-indigo-500/[0.06] transition-all duration-200'

export default function Contact({ flip }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = form
    window.location.href = `mailto:farhanamin1200@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <Section
      flip={flip}
      id="contact"
      label="Let's Connect"
      title={<>Get In <span className="gradient-text">Touch</span></>}
      subtitle="Open to research collaborations, PhD opportunities and academic discussions"
    >
      <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Info */}
        <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}>
          <h3 className="text-2xl font-bold text-white mb-3">Say hello</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Whether you're a researcher, professor, or fellow student — I'd love to hear
            from you. I'm always excited to discuss new ideas, collaborations, or
            opportunities.
          </p>

          <div className="space-y-3">
            {LINKS.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group card card-hover flex items-center gap-4 p-4"
              >
                <div className="w-10 h-10 rounded-xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{link.icon}</svg>
                </div>
                <div className="min-w-0">
                  <div className="text-slate-500 text-xs">{link.label}</div>
                  <div className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors truncate">
                    {link.value}
                  </div>
                </div>
                <svg className="w-4 h-4 text-slate-600 ml-auto group-hover:text-indigo-300 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}>
          <form onSubmit={handleSubmit} className="card p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-400 font-medium block mb-1.5">Your Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Dr. Jane Smith" className={inputCls} />
              </div>
              <div>
                <label className="text-xs text-slate-400 font-medium block mb-1.5">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="jane@university.edu" className={inputCls} />
              </div>
            </div>
            <div>
              <label className="text-xs text-slate-400 font-medium block mb-1.5">Subject</label>
              <input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder="Research collaboration / PhD inquiry" className={inputCls} />
            </div>
            <div>
              <label className="text-xs text-slate-400 font-medium block mb-1.5">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell me about your research or opportunity..." className={`${inputCls} resize-none`} />
            </div>

            <button type="submit" className="btn-primary w-full justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send Message
            </button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-emerald-300 text-sm bg-emerald-500/10 border border-emerald-400/20 rounded-xl px-4 py-3"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Opening your email client — thanks for reaching out!
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </Section>
  )
}
