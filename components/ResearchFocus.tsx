import { researchAreas, researchIntro } from '@/content/research';
import Reveal from '@/components/ui/Reveal';

export default function ResearchFocus() {
  return (
    <section className="section-spacing bg-base-alt">
      <div className="section-container">
        <Reveal>
          <h2 className="font-heading text-2xl font-semibold">Research & Technical Focus</h2>
          <p className="mt-4 max-w-4xl text-base text-base-muted">{researchIntro}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {researchAreas.map((area) => (
              <article
                key={area.title}
                className="card-surface p-6 transition-smooth duration-300 ease-out hover:-translate-y-1 hover:shadow-subtleHover"
              >
                <h3 className="font-heading text-lg font-semibold">{area.title}</h3>
                <p className="mt-3 text-base text-base-muted">{area.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
