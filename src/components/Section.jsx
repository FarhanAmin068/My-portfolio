import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../lib/motion'

export default function Section({ id, label, title, subtitle, children, flip = false, className = '' }) {
  return (
    <section id={id} className={`relative py-28 overflow-hidden ${className}`}>
      {/* Section lighting — large glow orbs, side alternates per section */}
      <div aria-hidden className="section-glow absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-10 w-[34rem] h-[34rem] rounded-full blur-[130px] bg-indigo-600/[0.13] ${
            flip ? '-right-40' : '-left-40'
          }`}
        />
        <div
          className={`absolute bottom-0 w-96 h-96 rounded-full blur-[110px] bg-sky-500/[0.09] ${
            flip ? 'left-[8%]' : 'right-[8%]'
          }`}
        />
        <div
          className={`absolute top-1/2 w-72 h-72 rounded-full blur-[100px] bg-violet-500/[0.08] ${
            flip ? 'left-1/3' : 'right-1/3'
          }`}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          variants={stagger(0, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mb-16"
        >
          {label && (
            <motion.span variants={fadeUp} className="section-label">
              {label}
            </motion.span>
          )}
          <motion.h2 variants={fadeUp} className="section-title">
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p variants={fadeUp} className="section-subtitle">
              {subtitle}
            </motion.p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  )
}
