import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { skills } from '../data/content';

export default function Skills() {
  const categories = Object.keys(skills);
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="skills" className="section-pad relative bg-gradient-to-b from-transparent via-accent-blue/[0.03] to-transparent">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I build with"
          subtitle="A focused toolkit for shipping production-ready React interfaces."
        />

        <div className="mt-10 flex justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              data-cursor-hover
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                active === cat
                  ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-glow'
                  : 'glass text-ink/70 dark:text-white/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {skills[active].map((skill, i) => (
            <Reveal key={skill.name} delay={i * 0.05}>
              <div className="rounded-2xl glass p-5 transition-transform hover:-translate-y-1">
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span>{skill.name}</span>
                  <span className="text-accent-purple">{skill.level}%</span>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-ink/10 dark:bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
