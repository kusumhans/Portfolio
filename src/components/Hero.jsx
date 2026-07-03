import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi';
import { roles } from '../data/content';

function useTypewriter(words, speed = 80, pause = 1400) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 sm:pt-24"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-aurora opacity-70 dark:opacity-50" />
      <div className="absolute -left-20 top-20 -z-10 h-72 w-72 rounded-full bg-accent-blue/30 blur-3xl animate-blob" />
      <div className="absolute right-0 top-40 -z-10 h-80 w-80 rounded-full bg-accent-purple/30 blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-accent-cyan/25 blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/40 dark:bg-white/20 animate-float"
            style={{
              width: `${4 + (i % 4) * 2}px`,
              height: `${4 + (i % 4) * 2}px`,
              left: `${(i * 7.3) % 100}%`,
              top: `${(i * 13.7) % 100}%`,
              animationDelay: `${(i % 6) * 0.7}s`,
              animationDuration: `${5 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono-ui text-sm uppercase tracking-[0.2em] text-accent-purple">
            Hello, I'm
          </p>
          <h1 className="mt-3 text-5xl font-bold font-mono leading-[1.05] sm:text-6xl lg:text-7xl">
            𝒦𝓊𝓈𝓊𝓂
          </h1>
          <p className="mt-4 h-9 font-display text-xl font-semibold text-gradient sm:text-2xl">
            {typed}
            <span className="ml-1 inline-block w-[2px] animate-pulse bg-accent-purple align-middle h-6" />
          </p>
          <p className="mt-6 max-w-lg text-base text-ink/70 dark:text-white/70 sm:text-lg">
            I build modern, responsive, and user-friendly web applications using React.js
            and Tailwind CSS, focusing on clean UI, performance, and exceptional user experience.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="../../public/kusum.pdf"
              download="Kusum-React-Developer-Resume.pdf"
              data-cursor-hover
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform active:scale-95 hover:scale-[1.03]"
            >
              <FiDownload className="transition-transform group-hover:-translate-y-0.5" />
              Download Resume
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              data-cursor-hover
              className="rounded-full glass px-6 py-3 text-sm font-semibold transition-transform active:scale-95 hover:scale-[1.03]"
            >
              Contact Me
            </button>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {[
              { icon: <FiGithub />, href: 'https://github.com', label: 'GitHub' },
              { icon: <FiLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: <FiMail />, href: 'mailto:kusum@example.com', label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                data-cursor-hover
                className="grid h-11 w-11 place-items-center rounded-full glass text-lg transition-transform hover:-translate-y-1 hover:text-accent-purple"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent-blue/40 via-accent-purple/30 to-accent-cyan/30 blur-2xl" />
          <div className="relative aspect-square overflow-hidden rounded-[2rem] glass p-1.5 shadow-glow">
            <img
              src="https://images.openai.com/static-rsc-4/70rOmyH_yDGaBGSFWkM4awOyuUmcAKsYG6MavnrSco15juOCiTftlFicErfyodXuZTKXn4_17HitAJFFgBXwoQURfTAg1IgnmigzEXOAeEMT_3F9roELXxCXvd4Wtf_zJYJziXi_E551oRQ7mcFcdZ_wDqkVS9YcxmgSldEg_W_cRXXNoZVKuYVWaaARhF_n?purpose=inline"
              alt="Portrait of Kusum, Frontend React Developer"
              loading="lazy"
              className="h-full w-full rounded-[1.7rem] object-cover"
            />
          </div>
          <motion.div
            className="absolute -bottom-6 -left-6 rounded-2xl glass px-4 py-3 shadow-glow"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="font-mono-ui text-xs text-ink/60 dark:text-white/60">Stack</p>
            <p className="font-display text-sm font-semibold">React · Tailwind</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink/50 dark:text-white/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <FiArrowDown size={22} />
      </motion.button>
    </section>
  );
}
