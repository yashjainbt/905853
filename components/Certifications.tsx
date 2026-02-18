import { certifications } from '@/content/certifications';
import Reveal from '@/components/ui/Reveal';

export default function Certifications(): JSX.Element {
  return (
    <section className="section-spacing">
      <div className="section-container">
        <Reveal>
          <h2 className="font-heading text-2xl font-semibold">Certifications</h2>
          <ul className="mt-6 space-y-3 text-base text-base-muted">
            {certifications.map((item) => (
              <li key={item} className="card-surface p-4">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
