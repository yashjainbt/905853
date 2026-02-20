import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import ResearchFocus from '@/components/ResearchFocus';
import ProjectsPreview from '@/components/ProjectsPreview';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import { publications } from '@/content/publications';
import { scholarlyArticleSchema } from '@/lib/seo';

export default function HomePage() {
  const showPublications = publications.length > 1;

  return (
    <>
      {/* Homepage section flow follows the academic-first structure requested in the specification. */}
      <Hero />
      <About />
      <Experience />
      <ResearchFocus />
      <ProjectsPreview />
      <Skills />
      {showPublications && (
        <section className="section-spacing">
          <div className="section-container">
            <h2 className="font-heading text-2xl font-semibold">Publications</h2>
            <ul className="mt-6 space-y-4 text-base text-base-muted">
              {publications.map((publication) => (
                <li key={`${publication.title}-${publication.year}`} className="card-surface p-4">
                  <p className="font-medium text-base-text">{publication.title}</p>
                  <p>
                    {publication.journal} · {publication.year}
                  </p>
                </li>
              ))}
            </ul>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(publications.map((item) => scholarlyArticleSchema(item.title, item.year, item.journal)))
              }}
            />
          </div>
        </section>
      )}
      <Certifications />
      <Contact />
    </>
  );
}
