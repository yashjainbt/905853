import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { getMdxEntries } from '@/lib/utils';

export const metadata = buildMetadata({
  title: 'Blog | Yash Jain',
  description: 'Academic writing and translational biotechnology notes.',
  path: '/blog'
});

export default function BlogPage() {
  const posts = getMdxEntries('blog');

  return (
    <section className="section-spacing">
      <div className="section-container">
        <h1 className="font-heading text-3xl font-bold">Blog</h1>
        {posts.length === 0 ? (
          <p className="mt-6 text-base text-base-muted">No posts are published yet.</p>
        ) : (
          <div className="mt-8 space-y-6">
            {posts.map((post) => (
              <article key={post.slug} className="card-surface p-6">
                <p className="text-sm text-base-muted">
                  {post.frontmatter.date} · {post.readingTime}
                </p>
                <h2 className="mt-2 font-heading text-xl font-semibold">{post.frontmatter.title}</h2>
                <p className="mt-3 text-base text-base-muted">{post.frontmatter.description}</p>
                <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex text-sm text-brand-accent">
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
