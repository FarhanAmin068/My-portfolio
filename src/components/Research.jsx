import { motion } from 'framer-motion'
import Section from './Section'
import { fadeUp, stagger, viewport, viewportLoose } from '../lib/motion'

const INTERESTS = [
  {
    abbr: 'LLM',
    title: 'Large Language Models',
    desc: 'LangChain, Ollama and Transformers — few-shot prompting, fine-tuning and RAG pipelines.',
    tone: 'indigo',
  },
  {
    abbr: 'NLP',
    title: 'Natural Language Processing',
    desc: 'Code-mixed text analysis, hoax and hate-speech detection in multilingual low-resource settings.',
    tone: 'sky',
  },
  {
    abbr: 'MM',
    title: 'Multimodal AI',
    desc: 'Combining vision and language for hate, humor and stance classification across modalities.',
    tone: 'teal',
  },
  {
    abbr: 'CV',
    title: 'Computer Vision',
    desc: 'Image captioning and multimodal understanding, including Arabic captioning in cross-lingual contexts.',
    tone: 'indigo',
  },
  {
    abbr: 'DL',
    title: 'Deep Learning',
    desc: 'CNNs, RNNs and Transformer architectures applied to NLP and vision research challenges.',
    tone: 'sky',
  },
  {
    abbr: 'ML',
    title: 'Machine Learning',
    desc: 'Classical and modern algorithms — from regression and ensembles to optimization at scale.',
    tone: 'teal',
  },
]

const TONES = {
  indigo: {
    icon: 'bg-indigo-500/10 text-indigo-300 border-indigo-400/20',
    hover: 'hover:border-indigo-400/30',
    title: 'group-hover:text-indigo-300',
  },
  sky: {
    icon: 'bg-sky-500/10 text-sky-300 border-sky-400/20',
    hover: 'hover:border-sky-400/30',
    title: 'group-hover:text-sky-300',
  },
  teal: {
    icon: 'bg-teal-500/10 text-teal-300 border-teal-400/20',
    hover: 'hover:border-teal-400/30',
    title: 'group-hover:text-teal-300',
  },
}

const COMPETITIONS = [
  {
    rank: '3rd',
    event: 'ImageEval 2025',
    task: 'Arabic Image Captioning Shared Task',
    field: 'Multimodal AI',
  },
  {
    rank: '3rd',
    event: 'LT-EDI @ LDK 2025',
    task: 'Detecting Racial Hoaxes in Code-Mixed Hindi-English Social Media',
    field: 'NLP',
  },
  {
    rank: '5th',
    event: 'CASE 2025',
    task: 'Multimodal Hate, Humor & Stance Detection in Marginalized Movements',
    field: 'Multimodal NLP',
  },
]

export default function Research({ flip }) {
  return (
    <Section
      flip={flip}
      id="research"
      label="Academic Focus"
      title={<>Research <span className="gradient-text">Interests</span></>}
      subtitle="Exploring the frontiers of artificial intelligence and machine learning"
    >
      {/* Interest grid */}
      <motion.div
        variants={stagger(0, 0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportLoose}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14"
      >
        {INTERESTS.map((item, i) => {
          const t = TONES[item.tone]
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`group card card-hover ${t.hover} p-6 cursor-default`}
            >
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center text-xs font-bold tracking-widest mb-5 ${t.icon}`}>
                {item.abbr}
              </div>
              <h3 className={`text-white font-semibold text-lg mb-2 transition-colors duration-200 ${t.title}`}>
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Competition highlights */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="card p-8"
      >
        <div className="flex flex-wrap items-center gap-3 mb-7">
          <h3 className="text-xl font-bold text-white">Competition Highlights</h3>
          <span className="ml-auto text-xs text-slate-500 font-medium bg-white/5 px-3 py-1 rounded-full border border-white/5">
            International Shared Tasks
          </span>
        </div>
        <motion.div
          variants={stagger(0.1, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid md:grid-cols-3 gap-4"
        >
          {COMPETITIONS.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-xl border border-indigo-400/15 bg-indigo-500/[0.06] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/30"
            >
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-black gradient-text">{c.rank}</span>
                <span className="text-slate-500 text-xs font-medium uppercase tracking-wider">place</span>
              </div>
              <div className="text-white font-semibold text-sm mb-1">{c.event}</div>
              <div className="text-slate-400 text-xs leading-relaxed mb-3">{c.task}</div>
              <span className="chip-sky">{c.field}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  )
}
