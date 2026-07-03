import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiX } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { experience, certifications } from '../data/content';

export default function Experience() {
  const [active, setActive] = useState(null);

  return (
    <section id="experience" className="section-pad relative">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="Experience" title="My journey so far" />

        <div className="relative mt-14 border-l border-ink/10 pl-8 dark:border-white/10 sm:pl-10">
          {experience.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1} direction="left" className="relative mb-10 last:mb-0">
              <span className="absolute -left-[2.6rem] top-1 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-accent-blue to-accent-purple sm:-left-[3.1rem]" />
              <p className="font-mono-ui text-xs uppercase tracking-wider text-accent-purple">{item.period}</p>
              <h3 className="mt-1 font-display text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-ink/55 dark:text-white/55">{item.org}</p>
              <p className="mt-2 text-sm text-ink/65 dark:text-white/65">{item.desc}</p>
            </Reveal>
          ))}
        </div>

        {/* <div className="mt-20">
          <h3 className="mb-8 text-center font-display text-2xl font-bold">Certifications</h3>
          <div className="grid gap-5 sm:grid-cols-2">
            {certifications.map((cert, i) => (
              <Reveal key={cert.title} delay={i * 0.07}>
                <button
                  onClick={() => setActive(cert)}
                  data-cursor-hover
                  className="flex w-full items-center gap-4 rounded-2xl glass p-5 text-left transition-transform hover:-translate-y-1"
                >
                  <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-blue to-accent-cyan text-white">
                    <FiAward />
                  </span>
                  <span>
                    <p className="font-display text-sm font-semibold">{cert.title}</p>
                    <p className="text-xs text-ink/55 dark:text-white/55">{cert.issuer}</p>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div> */}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="w-full max-w-sm rounded-2xl glass p-8 text-center"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setActive(null)} className="absolute right-4 top-4" aria-label="Close">
                <FiX />
              </button>
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accent-blue to-accent-purple text-2xl text-white">
                <FiAward />
              </span>
              <h4 className="mt-4 font-display text-lg font-semibold">{active.title}</h4>
              <p className="mt-1 text-sm text-ink/60 dark:text-white/60">{active.issuer}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
