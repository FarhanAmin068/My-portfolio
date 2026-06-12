import { motion } from 'framer-motion'
import Section from './Section'
import { fadeUp, stagger, viewportLoose } from '../lib/motion'

const GROUPS = [
  {
    category: 'Programming Languages',
    tone: 'indigo',
    skills: ['Python', 'JavaScript', 'C/C++', 'HTML & CSS', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    tone: 'sky',
    skills: ['React.js', 'LangChain', 'Transformers (HF)', 'Node.js', 'Streamlit'],
  },
  {
    category: 'AI / ML',
    tone: 'teal',
    skills: ['Large Language Models', 'Generative AI', 'Deep Learning', 'NLP', 'Computer Vision'],
  },
  {
    category: 'Databases & Tools',
    tone: 'indigo',
    skills: ['MongoDB', 'Git & GitHub', 'Vite', 'Ollama', 'Linux CLI'],
  },
]

const TONES = {
  indigo: { head: 'text-indigo-300', pill: 'hover:border-indigo-400/40 hover:text-indigo-200' },
  sky: { head: 'text-sky-300', pill: 'hover:border-sky-400/40 hover:text-sky-200' },
  teal: { head: 'text-teal-300', pill: 'hover:border-teal-400/40 hover:text-teal-200' },
}

const MARQUEE_TECH = [
  'Python', 'PyTorch', 'Transformers', 'LangChain', 'Ollama', 'Mistral', 'React',
  'TypeScript', 'Tailwind CSS', 'Three.js', 'WebGL', 'MongoDB', 'Pandas', 'NumPy',
  'Scikit-learn', 'Jupyter', 'Git', 'Streamlit',
]

export default function Skills({ flip }) {
  return (
    <Section
      flip={flip}
      id="skills"
      label="Technical Arsenal"
      title={<>Skills & <span className="gradient-text">Technologies</span></>}
    >
      <motion.div
        variants={stagger(0, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportLoose}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
      >
        {GROUPS.map((group, gi) => {
          const t = TONES[group.tone]
          return (
            <motion.div key={gi} variants={fadeUp} className="card card-hover p-6">
              <h3 className={`text-sm font-semibold mb-5 ${t.head}`}>{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <span
                    key={si}
                    className={`text-sm font-medium text-slate-300 border border-white/10 bg-white/[0.03] rounded-lg px-3 py-1.5 transition-all duration-200 cursor-default ${t.pill}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Infinite tech marquee */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportLoose}
        className="relative overflow-hidden py-2"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        }}
      >
        <div className="marquee gap-3">
          {[...MARQUEE_TECH, ...MARQUEE_TECH].map((tech, i) => (
            <span
              key={i}
              className="shrink-0 text-xs text-slate-400 border border-white/10 bg-white/[0.03] px-4 py-2 rounded-full hover:border-indigo-400/40 hover:text-indigo-200 transition-colors duration-200 cursor-default mr-3"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
