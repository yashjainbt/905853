import Link from 'next/link';
import { contactContent } from '@/content/contact';
import Reveal from '@/components/ui/Reveal';

export default function Contact(): JSX.Element {
  return (
    <section id="contact" className="section-spacing bg-base-alt">
      <div className="section-container">
        <Reveal>
          <h2 className="font-heading text-2xl font-semibold">Contact</h2>
          <p className="mt-4 text-base text-base-muted">{contactContent.supportingLine}</p>
          <div className="mt-6 space-y-2 text-base text-base-muted">
            <p>
              Phone: <a className="text-brand-accent" href={`tel:${contactContent.phone}`}>{contactContent.phone}</a>
            </p>
            <p>
              Email: <a className="text-brand-accent" href={`mailto:${contactContent.email}`}>{contactContent.email}</a>
            </p>
            <p>
              LinkedIn:{' '}
              <Link className="text-brand-accent" href={contactContent.linkedin} target="_blank" rel="noreferrer">
                {contactContent.linkedin}
              </Link>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
