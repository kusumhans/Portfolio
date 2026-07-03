import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="font-mono-ui text-xs uppercase tracking-[0.25em] text-accent-purple">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-ink/65 dark:text-white/65">{subtitle}</p>
      )}
    </Reveal>
  );
}
