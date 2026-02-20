import { aboutContent } from '@/content/about';
import Reveal from '@/components/ui/Reveal';

export default function About(): React.ReactElement {
  return (
    <section id="about" className="section-spacing bg-base-alt">
      <div className="section-container">
        <Reveal>
          <h2 className="font-heading text-2xl font-semibold">About</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-base-muted">
            <p>{aboutContent.paragraph1}</p>
            <p>{aboutContent.paragraph2}</p>
            <p>{aboutContent.paragraph3}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
