import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const quickLinks = ['About', 'Skills', 'Projects', 'Services', 'Contact'];

export default function Footer() {
  return (
    <footer className="relative border-t border-ink/10 py-12 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
          <div className="text-center sm:text-left">
            <p className="font-display text-xl font-bold">
              Kusum<span className="text-gradient">.</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-ink/55 dark:text-white/55">
              Frontend React Developer crafting clean, fast, and elegant web experiences.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <p className="mb-3 text-sm font-semibold">Quick Links</p>
            <ul className="space-y-2 text-sm text-ink/60 dark:text-white/60">
              {quickLinks.map((l) => (
                <li key={l}>
                  <button
                    onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-accent-purple"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3">
            {[
              { icon: <FiGithub />, href: 'https://github.com/kusumhans/' },
              { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/kusum-hans/?skipRedirect=true' },
              { icon: <FiMail />, href: 'mailto:kusumhansbaghel007@gmail.com' },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="grid h-10 w-10 place-items-center rounded-full glass transition-transform hover:-translate-y-1 hover:text-accent-purple"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-6 text-xs text-ink/50 dark:border-white/10 dark:text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Kusum. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            data-cursor-hover
            className="grid h-9 w-9 place-items-center rounded-full glass hover:text-accent-purple"
            aria-label="Back to top"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
