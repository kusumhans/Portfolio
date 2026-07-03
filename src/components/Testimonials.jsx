import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { testimonials } from '../data/content';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[index];

  return (
    <section id="testimonials" className="section-pad relative">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow="Testimonials" title="Built on Trust" />

        <div className="relative mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl glass p-8 text-center sm:p-10"
            >
              <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-accent-blue to-accent-purple font-display text-xl font-bold text-white">
                {t.name.charAt(0)}
              </div>
              <p className="text-lg text-ink/80 dark:text-white/80">"{t.quote}"</p>
              <p className="mt-5 font-display font-semibold">{t.name}</p>
              <p className="text-sm text-ink/55 dark:text-white/55">{t.role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={prev} data-cursor-hover aria-label="Previous" className="grid h-10 w-10 place-items-center rounded-full glass hover:text-accent-purple">
              <FiChevronLeft />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-6 bg-accent-purple' : 'w-2 bg-ink/20 dark:bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button onClick={next} data-cursor-hover aria-label="Next" className="grid h-10 w-10 place-items-center rounded-full glass hover:text-accent-purple">
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
