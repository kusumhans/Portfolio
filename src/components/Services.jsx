import { FiCode, FiBriefcase, FiBookOpen, FiLayout, FiUser, FiFeather } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { services } from '../data/content';

const icons = [<FiCode />, <FiBriefcase />, <FiBookOpen />, <FiLayout />, <FiUser />, <FiFeather />];

export default function Services() {
  return (
    <section id="services" className="section-pad relative bg-gradient-to-b from-transparent via-accent-purple/[0.04] to-transparent">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="sevices"
          title="What I Do"
          subtitle="Building responsive, modern, and user-friendly web applications with React.js and modern frontend technologies."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="group h-full rounded-2xl glass p-6 transition-transform hover:-translate-y-1">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple text-lg text-white transition-transform group-hover:scale-110">
                  {icons[i % icons.length]}
                </div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-ink/65 dark:text-white/65">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
