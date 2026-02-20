import Link from 'next/link';
import { projectConfig } from '@/lib/projects.config';
import Reveal from '@/components/ui/Reveal';

export default function ProjectsPreview(): JSX.Element {
  const featured = projectConfig.filter((project) => project.featured);

  return (
    <section id="projects-preview" className="section-spacing">
      <div className="section-container">
        <Reveal>
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-2xl font-semibold">Projects</h2>
            <Link href="/projects" className="text-sm text-brand-accent hover:text-brand-accentHover">
              View all projects
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {featured.map((project) => (
              <article
                key={project.slug}
                className="card-surface p-6 transition-smooth duration-300 ease-out hover:-translate-y-1 hover:shadow-subtleHover"
              >
                <p className="text-sm text-brand-accent">{project.category}</p>
                <h3 className="mt-2 font-heading text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-base text-base-muted">{project.shortDescription}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-sm bg-brand-accentSoft px-2 py-1 text-xs text-brand-accent">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
