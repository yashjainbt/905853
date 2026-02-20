import type { MetadataRoute } from 'next';
import { getMdxEntries } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://yash-jain-portfolio.vercel.app';
  const projectRoutes = getMdxEntries('projects').map((entry) => ({
    url: `${base}/projects/${entry.slug}`,
    lastModified: new Date(entry.frontmatter.date)
  }));
  const blogRoutes = getMdxEntries('blog').map((entry) => ({
    url: `${base}/blog/${entry.slug}`,
    lastModified: new Date(entry.frontmatter.date)
  }));

  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/projects`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
    ...projectRoutes,
    ...blogRoutes
  ];
}
