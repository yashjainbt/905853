'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '#home', key: 'home' },
  { label: 'About', href: '#about', key: 'about' },
  { label: 'Work', href: '#work', key: 'work' },
  { label: 'Projects', href: '/projects', key: 'projects' },
  { label: 'Contact', href: '#contact', key: 'contact' }
] as const;

export default function Navbar({ showBlog }: { showBlog: boolean }): JSX.Element {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'work', 'projects-preview', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) {
          const id = visible.target.id === 'projects-preview' ? 'projects' : visible.target.id;
          setActive(id);
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0.1 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = (): void => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-transparent transition-smooth duration-300 ease-out',
        scrolled && 'border-base-border bg-base-bg/90 backdrop-blur-sm'
      )}
    >
      <nav className="section-container flex h-16 items-center justify-between" aria-label="Primary navigation">
        <Link href="/" className="font-heading text-sm font-semibold text-base-text">
          Yash Jain
        </Link>
        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                className={cn(
                  'focus-visible-ring border-b-2 border-transparent py-2 text-sm text-base-muted transition-smooth duration-300 ease-out hover:text-base-text',
                  active === item.key && 'border-brand-accent text-base-text'
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
          {showBlog && (
            <li>
              <Link href="/blog" className="focus-visible-ring py-2 text-sm text-base-muted hover:text-base-text">
                Blog
              </Link>
            </li>
          )}
        </ul>
        <div className="flex items-center gap-3">
          <Link
            href="/assets/Yash-Jain-Resume.pdf"
            className="focus-visible-ring hidden rounded-sm border border-brand-accent px-3 py-2 text-sm text-brand-accent transition-smooth duration-300 ease-out hover:bg-brand-accent/10 md:inline-flex"
          >
            Resume
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
