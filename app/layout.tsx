import type { Metadata } from 'next';
import { Inter, Lora, Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { buildMetadata, personSchema, siteConfig } from '@/lib/seo';
import { getMdxEntries } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-poppins' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });

export const metadata: Metadata = buildMetadata({
  title: siteConfig.title,
  description: siteConfig.description
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
  const showBlog = getMdxEntries('blog').length >= 3;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} ${lora.variable}`}>
        <Navbar showBlog={showBlog} />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <Analytics />
      </body>
    </html>
  );
}
