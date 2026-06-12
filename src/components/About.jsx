import { motion } from 'framer-motion'
import { fadeUp, fadeLeft, stagger, viewport } from '../lib/motion'

const INFO = [
  { label: 'Location', value: 'Chittagong, Bangladesh' },
  { label: 'University', value: 'CUET — BSc in CSE' },
  { label: 'CGPA', value: '3.84 / 4.00' },
  { label: 'Languages', value: 'Bengali & English' },
  { label: 'Goal', value: 'PhD in AI / Research' },
  { label: 'Status', value: 'Open to opportunities' },
]

const CODE_LINES = [
  [{ t: 'class', c: 'text-sky-400' }, { t: ' FarhanAmin', c: 'text-amber-200' }, { t: ':', c: 'text-slate-300' }],
  [{ t: '    """AI researcher in the making."""', c: 'text-slate-500 italic' }],
  [{ t: '    def', c: 'text-sky-400' }, { t: ' __init__', c: 'text-indigo-300' }, { t: '(self):', c: 'text-slate-300' }],
  [{ t: '        self.education', c: 'text-slate-300' }, { t: ' = ', c: 'text-slate-500' }, { t: '"BSc CSE @ CUET"', c: 'text-teal-300' }],
  [{ t: '        self.cgpa', c: 'text-slate-300' }, { t: ' = ', c: 'text-slate-500' }, { t: '3.84', c: 'text-orange-300' }],
  [{ t: '        self.interests', c: 'text-slate-300' }, { t: ' = [', c: 'text-slate-500' }],
  [{ t: '            "LLMs"', c: 'text-teal-300' }, { t: ', ', c: 'text-slate-500' }, { t: '"Multimodal AI"', c: 'text-teal-300' }, { t: ',', c: 'text-slate-500' }],
  [{ t: '            "NLP"', c: 'text-teal-300' }, { t: ', ', c: 'text-slate-500' }, { t: '"Computer Vision"', c: 'text-teal-300' }, { t: ',', c: 'text-slate-500' }],
  [{ t: '        ]', c: 'text-slate-500' }],
  [],
  [{ t: '    def', c: 'text-sky-400' }, { t: ' mission', c: 'text-indigo-300' }, { t: '(self):', c: 'text-slate-300' }],
  [{ t: '        return', c: 'text-sky-400' }, { t: ' "Research that matters"', c: 'text-teal-300' }],
]

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Section lighting */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-10 w-[34rem] h-[34rem] rounded-full blur-[130px] bg-indigo-600/[0.13]" />
        <div className="absolute right-[8%] bottom-0 w-96 h-96 rounded-full blur-[110px] bg-sky-500/[0.09]" />
        <div className="absolute right-1/3 top-1/2 w-72 h-72 rounded-full blur-[100px] bg-violet-500/[0.08]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Code editor */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0a0e1c]/90 shadow-2xl shadow-black/50 backdrop-blur-md">
              <div className="flex items-center gap-2 px-5 py-3.5 bg-white/[0.03] border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
                <span className="ml-3 text-slate-500 text-xs font-mono">farhan_amin.py</span>
                <span className="ml-auto text-slate-600 text-[10px] font-mono">UTF-8 · Python</span>
              </div>
              <motion.pre
                variants={stagger(0.2, 0.06)}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="p-6 text-[13px] font-mono leading-7 overflow-x-auto"
              >
                {CODE_LINES.map((line, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -12 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.35 } },
                    }}
                    className="whitespace-pre"
                  >
                    <span className="inline-block w-7 text-right mr-4 text-slate-700 select-none">{i + 1}</span>
                    {line.map((seg, j) => (
                      <span key={j} className={seg.c}>{seg.t}</span>
                    ))}
                  </motion.div>
                ))}
              </motion.pre>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={stagger(0.1, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.span variants={fadeUp} className="section-label">Who I Am</motion.span>
            <motion.h2 variants={fadeUp} className="section-title mb-6">
              About <span className="gradient-text">Me</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed mb-4">
              I'm <span className="text-white font-semibold">Farhan Amin</span>, a Computer Science &
              Engineering student at{' '}
              <span className="text-indigo-300 font-medium">Chittagong University of Engineering and Technology</span>,
              maintaining a CGPA of 3.84. My academic journey is driven by a deep
              fascination with how machines learn, reason, and understand language.
            </motion.p>

            <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed mb-9">
              My work centers on research in{' '}
              <span className="text-sky-300 font-medium">machine learning</span> and{' '}
              <span className="text-teal-300 font-medium">artificial intelligence</span> —
              from building practical applications with open-source LLMs to exploring
              problems in NLP and multimodal understanding. I enjoy taking ideas from
              paper to prototype, and I'm working toward a PhD and a career in AI research.
            </motion.p>

            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INFO.map((item, i) => (
                <div
                  key={i}
                  className="card card-hover px-4 py-3 flex flex-col gap-0.5"
                >
                  <span className="text-slate-500 text-xs">{item.label}</span>
                  <span className="text-white text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
