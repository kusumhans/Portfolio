import { FiBookOpen, FiBriefcase, FiTarget, FiHeart } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { stats } from '../data/content';
import { useCountUp } from '../hooks/useCountUp';

const timeline = [
  {
    icon: <FiBookOpen />,
    title: 'Education',
    text: 'BCA (Bachelor of Computer Applications) in Computer Science, with a focus on web technologies and software fundamentals.',
  },
  {
    icon: <FiBriefcase />,
    title: 'Experience',
    text: 'Hands-on experience building React applications through self-driven projects, focusing on responsive UI, modern web development, and user experience.',
  },
  {
    icon: <FiTarget />,
    title: 'Career Goals',
    text: 'Growing into a frontend role where I can build scalable, accessible, and delightful user interfaces.',
  },
  {
    icon: <FiHeart />,
    title: 'Passion',
    text: 'Genuinely enjoy turning designs into pixel-perfect, performant interfaces with smooth interactions.',
  },
];

function StatCard({ stat }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div ref={ref} className="rounded-2xl glass p-6 text-center shadow-glow">
      <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">
        {value}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm text-ink/60 dark:text-white/60">{stat.label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="A frontend developer who cares about craft"
          subtitle="I'm Kusum, a frontend React developer who enjoys turning ideas into clean, fast, and user-friendly web experiences."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl glass p-6 transition-transform hover:-translate-y-1">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple text-white">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/65 dark:text-white/65">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} direction="zoom">
              <StatCard stat={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
