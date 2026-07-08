import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const links = [
  {   id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-sm' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-8">
        <button
  onClick={() => scrollTo("home")}
  data-cursor-hover
  className="flex items-center gap-3"
>
  <img  
    src='/public/logo.png'
    alt="Kusum Logo"
    className="h-10 w-10 rounded-full object-cover"
  />

  <div className="hidden sm:block text-left">
    <h2 className="font-display text-lg font-bold">
      Kusum
    </h2>
    <p className="text-xs text-gray-500 dark:text-gray-400">
      Frontend Developer
    </p>
  </div>
</button>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  data-cursor-hover
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    active === l.id
                      ? 'text-accent-blue dark:text-accent-cyan'
                      : 'text-ink/70 hover:text-ink dark:text-white/70 dark:hover:text-white'
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-accent-blue to-accent-purple"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              data-cursor-hover
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-full glass text-ink dark:text-white"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {theme === 'dark' ? <FiSun /> : <FiMoon />}
                </motion.span>
              </AnimatePresence>
            </button>

            <button
              onClick={() => setOpen(true)}
              data-cursor-hover
              aria-label="Open menu"
              className="grid h-9 w-9 place-items-center rounded-full glass lg:hidden"
            >
              <FiMenu />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-[56] h-full w-[78%] max-w-xs glass p-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-display text-lg font-bold">Menu</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-9 w-9 place-items-center rounded-full glass">
                  <FiX />
                </button>
              </div>
              <ul className="flex flex-col gap-2">
                {links.map((l, i) => (
                  <motion.li
                    key={l.id}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <button
                      onClick={() => scrollTo(l.id)}
                      className={`w-full rounded-xl px-4 py-3 text-left text-base font-medium transition-colors ${
                        active === l.id
                          ? 'bg-gradient-to-r from-accent-blue/15 to-accent-purple/15 text-accent-blue dark:text-accent-cyan'
                          : 'text-ink/80 dark:text-white/80'
                      }`}
                    >
                      {l.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
