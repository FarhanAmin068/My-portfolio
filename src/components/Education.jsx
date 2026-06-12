import { motion } from 'framer-motion'
import Section from './Section'
import { fadeUp, stagger, viewportLoose } from '../lib/motion'

const EDUCATION = [
  {
    degree: 'BSc in Computer Science & Engineering',
    institution: 'Chittagong University of Engineering and Technology (CUET)',
    period: 'Mar 2022 — Present',
    detail: 'Current CGPA 3.84 · 141.5 of 159.75 credit hours completed',
    ongoing: true,
    tags: ['Machine Learning', 'AI Research', 'Software Engineering'],
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Govt Hazi Mohammad Mohsin College',
    period: '2018 — 2020',
    detail: 'GPA 5.00 / 5.00',
    ongoing: false,
    tags: ['Science', 'Mathematics', 'Physics'],
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Halishahar Cantonment Public School and College',
    period: '2012 — 2018',
    detail: 'GPA 5.00 / 5.00',
    ongoing: false,
    tags: ['Science', 'Mathematics'],
  },
]

export default function Education({ flip }) {
  return (
    <Section flip={flip} id="education" label="Academic Journey" title="Education">
      <div className="max-w-3xl mx-auto relative">
        {/* Animated timeline spine */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-6 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-indigo-400/60 via-sky-400/30 to-transparent"
        />

        <motion.div
          variants={stagger(0.15, 0.18)}
          initial="hidden"
          whileInView="show"
          viewport={viewportLoose}
        >
          {EDUCATION.map((edu, i) => (
            <motion.div key={i} variants={fadeUp} className="relative pl-16 pb-10 last:pb-0">
              {/* Node */}
              <div className="absolute left-[17px] top-7 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-[#04060f] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white/90" />
              </div>

              <div className="card card-hover p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-white font-bold text-base leading-snug">{edu.degree}</h3>
                    <p className="text-slate-400 text-sm mt-1">{edu.institution}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="text-xs font-semibold font-mono text-indigo-300">{edu.period}</span>
                    {edu.ongoing && (
                      <span className="flex items-center gap-1.5 text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full">
                        <span className="dot-pulse" />
                        Ongoing
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-slate-300 text-sm font-medium mb-4">{edu.detail}</p>

                <div className="flex flex-wrap gap-2">
                  {edu.tags.map((tag, j) => (
                    <span key={j} className="chip-indigo">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
