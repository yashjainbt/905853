'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import { cn } from '@/lib/cn';

const navItems = [
  { label: 'Home', href: '/#home', key: 'home' },
  { label: 'About', href: '/#about', key: 'about' },
  { label: 'Experience', href: '/#experience', key: 'experience' },
  { label: 'Research & Technical Focus', href: '/#research', key: 'research' },
  { label: 'Projects', href: '/projects', key: 'projects' },
  { label: 'Skills', href: '/#skills', key: 'skills' },
  { label: 'Certifications', href: '/#certifications', key: 'certifications' },
  { label: 'Contact', href: '/#contact', key: 'contact' }
] as const;

export default function Navbar({ showBlog }: { showBlog: boolean }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeMenu = (): void => setIsMobileOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-base-border bg-base-bg/90 backdrop-blur-sm">
      <nav className="section-container flex min-h-16 items-center justify-between py-2" aria-label="Primary navigation">
        <Link href="/" className="font-heading text-sm font-semibold text-base-text" onClick={closeMenu}>
          Yash Jain
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="focus-visible-ring border-b-2 border-transparent py-2 text-sm text-base-muted transition-smooth duration-300 ease-out hover:border-brand-accent hover:text-base-text"
              >
                {item.label}
              </Link>
            </li>
          ))}
          {showBlog && (
            <li>
              <Link
                href="/blog"
                className="focus-visible-ring border-b-2 border-transparent py-2 text-sm text-base-muted transition-smooth duration-300 ease-out hover:border-brand-accent hover:text-base-text"
              >
                Blog
              </Link>
            </li>
          )}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="focus-visible-ring rounded-sm border border-base-border px-3 py-2 text-sm text-base-text transition-smooth duration-300 ease-out hover:border-brand-accent md:hidden"
          >
            Menu
          </button>
          <ThemeToggle />
        </div>
      </nav>

      <div className={cn('border-t border-base-border bg-base-surface md:hidden', !isMobileOpen && 'hidden')}>
        <ul className="section-container flex flex-col py-3">
          {navItems.map((item) => (
            <li key={`mobile-${item.href}`}>
              <Link
                href={item.href}
                onClick={closeMenu}
                className="focus-visible-ring block py-2 text-sm text-base-text transition-smooth duration-300 ease-out hover:text-brand-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
          {showBlog && (
            <li>
              <Link
                href="/blog"
                onClick={closeMenu}
                className="focus-visible-ring block py-2 text-sm text-base-text transition-smooth duration-300 ease-out hover:text-brand-accent"
              >
                Blog
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}
