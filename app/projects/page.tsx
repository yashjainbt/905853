import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { projectConfig } from '@/lib/projects.config';

export const metadata = buildMetadata({
  title: 'Projects | Yash Jain',
  description: 'Research projects in biotechnology, experimental therapeutics, and translational systems.',
  path: '/projects'
});

export default function ProjectsPage(): React.ReactElement {
  return (
    <section className="section-spacing">
      <div className="section-container">
        <h1 className="font-heading text-3xl font-bold">Projects</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projectConfig.map((project) => (
            <article
              key={project.slug}
              className="card-surface p-6 transition-smooth duration-300 ease-out hover:-translate-y-1 hover:shadow-subtleHover"
            >
              <p className="text-sm text-brand-accent">{project.category}</p>
              <h2 className="mt-2 font-heading text-xl font-semibold">{project.title}</h2>
              <p className="mt-3 text-base text-base-muted">{project.shortDescription}</p>
              <Link href={`/projects/${project.slug}`} className="mt-5 inline-block text-sm text-brand-accent">
                Read case study →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
