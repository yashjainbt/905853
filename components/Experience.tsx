import { experience } from '@/content/experience';
import Reveal from '@/components/ui/Reveal';

export default function Experience() {
  return (
    <section id="work" className="section-spacing">
      <div className="section-container">
        <Reveal>
          <h2 className="font-heading text-2xl font-semibold">Experience</h2>
          <div className="mt-8 space-y-8 border-l border-base-border pl-6">
            {experience.map((item) => (
              <article key={`${item.role}-${item.organization}`} className="space-y-3">
                <h3 className="font-heading text-xl font-semibold">{item.role}</h3>
                <p className="text-sm text-base-muted">
                  {item.organization} · {item.duration}
                </p>
                <ul className="list-disc space-y-2 pl-5 text-base text-base-muted">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
