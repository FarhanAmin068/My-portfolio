import { motion } from 'framer-motion'
import Section from './Section'
import { fadeUp, stagger, viewportLoose } from '../lib/motion'

const CERTS = [
  {
    title: 'Machine Learning Specialization',
    org: 'Stanford University · Coursera',
    date: 'Feb 2025',
    link: 'https://www.coursera.org/account/accomplishments/specialization/UXNF7PQCSEGQ',
  },
  {
    title: 'Advanced Learning Algorithms',
    org: 'DeepLearning.AI, Stanford · Coursera',
    date: 'Feb 2025',
    link: 'https://www.coursera.org/account/accomplishments/verify/IS59V0O851PG',
  },
  {
    title: 'Supervised ML: Regression and Classification',
    org: 'DeepLearning.AI, Stanford · Coursera',
    date: 'Feb 2025',
    link: 'https://www.coursera.org/account/accomplishments/verify/2P2GY99SWIOL',
  },
  {
    title: 'Introduction to LLMs in Python',
    org: 'DataCamp',
    date: 'Jan 2026',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/6152ed3c1260c8b598449d4719fd1194bba76713',
  },
  {
    title: 'Certificate of Presentation — QPAIN 2026',
    org: 'IEEE, CUET',
    date: 'Apr 2026',
    link: null,
  },
]

export default function Certifications({ flip }) {
  return (
    <Section
      flip={flip}
      id="certifications"
      label="Credentials"
      title="Certifications"
      subtitle="Verified learning from world-leading institutions"
    >
      <motion.div
        variants={stagger(0, 0.09)}
        initial="hidden"
        whileInView="show"
        viewport={viewportLoose}
        className="max-w-3xl mx-auto space-y-3"
      >
        {CERTS.map((cert, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="group card card-hover px-6 py-5 flex items-center gap-5"
          >
            <div className="w-11 h-11 shrink-0 rounded-xl border border-indigo-400/20 bg-indigo-500/10 flex items-center justify-center text-indigo-300 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold text-sm leading-snug">{cert.title}</h3>
              <p className="text-indigo-300/80 text-xs font-medium mt-0.5">{cert.org}</p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <span className="text-xs font-mono text-slate-500 hidden sm:block">{cert.date}</span>
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-400 hover:text-indigo-300 transition-colors flex items-center gap-1.5"
                >
                  Verify
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <span className="chip-teal">Presented</span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
