import { motion } from 'framer-motion'
import Section from './Section'
import { fadeUp, stagger, viewportLoose } from '../lib/motion'

const ACHIEVEMENTS = [
  {
    rank: '3rd',
    event: 'ImageEval 2025',
    title: 'Arabic Image Captioning Shared Task',
    desc: 'Developed a multimodal image-captioning system for Arabic, competing at an international evaluation benchmark.',
    tags: ['Multimodal AI', 'Computer Vision', 'Arabic NLP'],
  },
  {
    rank: '3rd',
    event: 'LT-EDI @ LDK 2025',
    title: 'Detecting Racial Hoaxes in Code-Mixed Hindi-English Social Media',
    desc: 'Built a classification system identifying racial misinformation in code-mixed social media content.',
    tags: ['NLP', 'Code-Mixed Text', 'Misinformation'],
  },
  {
    rank: '5th',
    event: 'CASE 2025',
    title: 'Multimodal Hate, Humor & Stance Detection in Marginalized Movements',
    desc: 'Designed a multimodal system for hate speech, humor recognition and stance detection in social movements.',
    tags: ['Multimodal NLP', 'Hate Detection', 'Stance'],
  },
]

export default function Achievements({ flip }) {
  return (
    <Section
      flip={flip}
      id="achievements"
      label="Recognition"
      title={<span className="gradient-text">Achievements</span>}
      subtitle="Top placements at international AI research competitions and shared tasks"
    >
      <motion.div
        variants={stagger(0, 0.14)}
        initial="hidden"
        whileInView="show"
        viewport={viewportLoose}
        className="max-w-4xl mx-auto space-y-5"
      >
        {ACHIEVEMENTS.map((a, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="group card card-hover hover:border-amber-400/25 p-6 sm:p-7"
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              {/* Medal */}
              <div className="shrink-0 flex sm:flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl border border-amber-400/25 bg-amber-500/10 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-amber-300 text-xl font-black leading-none">{a.rank}</span>
                  <span className="text-amber-400/70 text-[9px] font-bold uppercase tracking-widest mt-0.5">place</span>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
                  <span className="text-amber-300/90 text-xs font-bold uppercase tracking-widest">{a.event}</span>
                  <span className="text-slate-600 text-xs font-mono">2025</span>
                </div>
                <h3 className="text-white font-bold text-base leading-snug mb-2">{a.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{a.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {a.tags.map((tag, j) => (
                    <span key={j} className="chip-amber">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
