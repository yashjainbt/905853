import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import { getMdxEntryBySlug, getMdxEntries } from '@/lib/mdx';
import { buildMetadata } from '@/lib/seo';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getMdxEntries('projects').map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = getMdxEntryBySlug('projects', slug);
  if (!entry) {
    return buildMetadata({ title: 'Project Not Found', description: 'Project unavailable', path: '/projects' });
  }

  return buildMetadata({
    title: `${entry.frontmatter.title} | Yash Jain`,
    description: entry.frontmatter.description,
    path: `/projects/${slug}`
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getMdxEntryBySlug('projects', slug);

  if (!entry) {
    notFound();
  }

  const { content } = await compileMDX({
    source: entry.content
  });

  return (
    <article className="section-spacing">
      <div className="section-container max-w-3xl">
        <p className="text-sm text-base-muted">
          {entry.frontmatter.date} · {entry.readingTime}
        </p>
        <h1 className="mt-2 font-heading text-3xl font-bold">{entry.frontmatter.title}</h1>
        <p className="mt-4 text-base text-base-muted">{entry.frontmatter.description}</p>
        <div className="blog-prose mt-10 font-body not-prose:[font-family:var(--font-inter)]">{content}</div>
      </div>
    </article>
  );
}
