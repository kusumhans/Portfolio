import { useMemo, useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { projects } from '../data/content';
import shopcart from '../../public/shopcart.png'
import growupcraft from '../../public/growupcraft.png'
import holichildren from '../../public/holichildren.png'
import todo from '../../public/todo.png'
import weather from '../../public/weather.png'
import portfolio from '../../public/portfolio.png'

export default function Projects() {
  const allTags = useMemo(
    () => ['All', ...new Set(projects.flatMap((p) => p.tags))],
    []
  );
  const [filter, setFilter] = useState('All');

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter));

  const images = [shopcart, growupcraft, holichildren, todo, weather, portfolio]

  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I've built"
          subtitle="A mix of e-commerce, business, education, and utility apps — built with React and shipped to production."
        />

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              data-cursor-hover
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                filter === tag
                  ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-white'
                  : 'glass text-ink/70 dark:text-white/70'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06}>
              <article className="group h-full overflow-hidden rounded-2xl glass transition-transform hover:-translate-y-2 hover:shadow-glow">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={images[i % 6]}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="h-full w-full  object-fill transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-ink/65 dark:text-white/65">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-accent-blue/10 px-3 py-1 text-xs font-medium text-accent-blue dark:bg-accent-cyan/10 dark:text-accent-cyan"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3">
                    <a
                      href={project.demo}
                      data-cursor-hover
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-4 py-2 text-xs font-semibold text-white transition-transform hover:scale-105"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                    <a
                      href={project.code}
                      data-cursor-hover
                      className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-xs font-semibold transition-transform hover:scale-105"
                    >
                      <FiGithub /> Code
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
