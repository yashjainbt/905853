import type { Metadata } from 'next';

const baseUrl = 'https://yash-jain-portfolio.vercel.app';

export const siteConfig = {
  name: 'Yash Jain',
  title: 'Yash Jain | Biotechnology Researcher',
  description:
    'Biotechnology Researcher and Medical Device Quality & Regulatory Specialist integrating experimental oncology with translational systems.',
  url: baseUrl,
  ogImage: `${baseUrl}/assets/images/og-cover.png`
};

export const buildMetadata = ({
  title,
  description,
  path = ''
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata => {
  const canonicalUrl = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: 'website',
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteConfig.ogImage]
    }
  };
};

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Yash Jain',
  jobTitle: 'Biotechnology Researcher | Medical Device Quality & Regulatory Specialist',
  email: 'mailto:yashjain.bt@gmail.com',
  telephone: '+91 90585 31606',
  url: siteConfig.url,
  sameAs: ['https://linkedin.com/in/yashjainbt']
};

export const scholarlyArticleSchema = (
  title: string,
  year: string,
  journal: string,
  author = 'Yash Jain'
) => ({
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  headline: title,
  datePublished: year,
  author: {
    '@type': 'Person',
    name: author
  },
  isPartOf: {
    '@type': 'Periodical',
    name: journal
  }
});

export const articleSchema = ({
  title,
  description,
  datePublished,
  path
}: {
  title: string;
  description: string;
  datePublished: string;
  path: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  datePublished,
  author: {
    '@type': 'Person',
    name: 'Yash Jain'
  },
  mainEntityOfPage: `${siteConfig.url}${path}`
});
