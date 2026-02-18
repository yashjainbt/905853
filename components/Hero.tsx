import Image from 'next/image';
import Link from 'next/link';
import { heroContent } from '@/content/hero';
import Reveal from '@/components/ui/Reveal';

export default function Hero(): JSX.Element {
  return (
    <section id="home" className="section-spacing border-b border-base-border">
      <div className="section-container grid items-center gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-8">
          <p className="mb-3 text-sm font-medium text-brand-accent">{heroContent.name}</p>
          <h1 className="font-heading text-3xl font-bold leading-tight text-base-text md:text-4xl">
            {heroContent.primaryLine}
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-base-muted">{heroContent.supportingLine}</p>
          <p className="mt-4 text-base text-base-muted">{heroContent.microStatement}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#projects-preview"
              className="focus-visible-ring rounded-sm bg-brand-accent px-5 py-3 text-sm font-medium text-white shadow-subtle transition-smooth duration-300 ease-out hover:bg-brand-accentHover"
            >
              {heroContent.primaryCTA}
            </Link>
            <Link
              href="/assets/Yash-Jain-Resume.pdf"
              className="focus-visible-ring rounded-sm border border-brand-accent px-5 py-3 text-sm font-medium text-brand-accent transition-smooth duration-300 ease-out hover:bg-brand-accent/10"
            >
              {heroContent.secondaryCTA}
            </Link>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-4">
          <div className="card-surface overflow-hidden p-6">
            <div className="relative aspect-[16/11] w-full">
              <Image
                src="/assets/images/biomed-motif.svg"
                alt="Abstract biomedical network motif"
                fill
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-contain"
                priority={false}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
