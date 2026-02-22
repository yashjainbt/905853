import { skills } from '@/content/skills';
import Reveal from '@/components/ui/Reveal';

export default function Skills() {
  return (
    <section id="skills" className="section-spacing bg-base-alt">
      <div className="section-container">
        <Reveal>
          <h2 className="font-heading text-2xl font-semibold">Skills</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {skills.map((group) => (
              <article key={group.category} className="card-surface p-6">
                <h3 className="font-heading text-lg font-semibold">{group.category}</h3>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-base text-base-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
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
