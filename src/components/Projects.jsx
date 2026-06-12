import { motion } from 'framer-motion'
import Section from './Section'
import { fadeUp, stagger, viewportLoose } from '../lib/motion'

const PROJECTS = [
  {
    title: 'BreatheEasy',
    year: '2026',
    desc: 'Interactive stress-management app featuring WebGL-powered breathing exercises and mini-games for real-time mental relaxation.',
    tags: ['WebGL', 'JavaScript', 'Bootstrap'],
    link: 'https://breatheeasy-virid.vercel.app/',
    linkLabel: 'Live Demo',
    featured: true,
  },
  {
    title: 'Chandler Bing AI Chatbot',
    year: '2025',
    desc: 'Locally running generative AI chatbot with a Chandler Bing personality — few-shot prompting, conversation memory and a Streamlit interface.',
    tags: ['LangChain', 'Ollama', 'Mistral', 'Streamlit', 'Python'],
    link: 'https://www.linkedin.com/posts/farhan-amin-94a74523a_built-my-first-generative-ai-chatbot-chandler-activity-7365120645292048384-lCpd',
    linkLabel: 'View Post',
    featured: true,
  },
  {
    title: 'CUET Gym Management System',
    year: '2024',
    desc: 'Full-stack gym management platform with member registration, membership tracking and a role-based admin dashboard.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    link: 'https://cuet-gym-management-client.vercel.app/',
    linkLabel: 'Live Demo',
    featured: false,
  },
  {
    title: 'Airmax Website',
    year: '2025',
    desc: 'Responsive business website with product search, client listing, Google Maps integration and dynamic FAQ support.',
    tags: ['React', 'Tailwind CSS'],
    link: 'https://airmax-client.vercel.app/',
    linkLabel: 'Live Demo',
    featured: false,
  },
]

export default function Projects({ flip }) {
  return (
    <Section
      flip={flip}
      id="projects"
      label="What I've Built"
      title={<>Featured <span className="gradient-text">Projects</span></>}
      subtitle="A selection of technical work — from AI systems to full-stack applications"
    >
      <motion.div
        variants={stagger(0, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportLoose}
        className="grid md:grid-cols-2 gap-6"
      >
        {PROJECTS.map((p, i) => (
          <motion.a
            key={i}
            variants={fadeUp}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative card card-hover overflow-hidden block"
          >
            {/* Top accent line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="p-7">
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl border border-indigo-400/20 bg-indigo-500/10 flex items-center justify-center text-indigo-300 group-hover:scale-110 group-hover:border-indigo-400/40 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  {p.featured && (
                    <span className="chip-amber">Featured</span>
                  )}
                  <span className="text-xs font-mono font-semibold text-slate-500">{p.year}</span>
                </div>
              </div>

              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-indigo-300 transition-colors duration-200">
                {p.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((tag, j) => (
                  <span key={j} className="chip-sky">{tag}</span>
                ))}
              </div>

              <span className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 group-hover:text-indigo-200 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {p.linkLabel}
                <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
              </span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </Section>
  )
}
