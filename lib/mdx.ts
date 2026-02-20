import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export type MdxFrontmatter = {
  title: string;
  date: string;
  description: string;
  tags: string[];
};

export type MdxEntry = {
  slug: string;
  frontmatter: MdxFrontmatter;
  content: string;
  readingTime: string;
};

const getContentDirectory = (folder: 'blog' | 'projects'): string =>
  path.join(process.cwd(), 'content', folder);

export const getMdxEntries = (folder: 'blog' | 'projects'): MdxEntry[] => {
  const directory = getContentDirectory(folder);
  if (!fs.existsSync(directory)) {
    return [];
  }

  const files = fs.readdirSync(directory).filter((file) =>
    file.endsWith('.mdx')
  );

  return files
    .map((fileName) => {
      const fullPath = path.join(directory, fileName);
      const source = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(source);
      const slug = fileName.replace(/\.mdx$/, '');

      return {
        slug,
        frontmatter: data as MdxFrontmatter,
        content,
        readingTime: readingTime(content).text
      };
    })
    .sort((a, b) =>
      a.frontmatter.date < b.frontmatter.date ? 1 : -1
    );
};

export const getMdxEntryBySlug = (
  folder: 'blog' | 'projects',
  slug: string
): MdxEntry | null => {
  const entries = getMdxEntries(folder);
  return entries.find((entry) => entry.slug === slug) ?? null;
};
