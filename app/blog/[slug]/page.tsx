import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { articleSchema, buildMetadata } from '@/lib/seo';
import { getMdxEntryBySlug } from '@/lib/mdx';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const entries = await getMdxEntryBySlug('blog'); // or getMdxEntries if listing
  return entries.map((entry: any) => ({ slug: entry.slug }));
}

// generateMetadata expects params as Promise<{ slug: string }>
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getMdxEntryBySlug('blog', slug);

  if (!entry) {
    return buildMetadata({ title: 'Post Not Found', description: 'Post unavailable', path: '/blog' });
  }

  return buildMetadata({
    title: `${entry.frontmatter.title} | Yash Jain`,
    description: entry.frontmatter.description,
    path: `/blog/${slug}`,
  });
}

// Page receives params as Promise<{ slug: string }>
export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = await getMdxEntryBySlug('blog', slug);

  if (!entry) {
    notFound();
  }

  const PostComponent = (await import(`@/content/blog/${slug}.mdx`)).default;

  return (
    <article className="section-spacing">
      <div className="section-container max-w-3xl">
        <p className="text-sm text-base-muted">
          {entry.frontmatter.date} · {entry.readingTime}
        </p>
        <h1 className="mt-2 font-heading text-3xl font-bold">{entry.frontmatter.title}</h1>
        <p className="mt-4 text-base text-base-muted">{entry.frontmatter.description}</p>
        <div className="blog-prose mt-10">
          <PostComponent />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              articleSchema({
                title: entry.frontmatter.title,
                description: entry.frontmatter.description,
                datePublished: entry.frontmatter.date,
                path: `/blog/${slug}`,
              })
            ),
          }}
        />
      </div>
    </article>
  );
}
