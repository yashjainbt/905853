'use client';

import { useEffect, useState } from 'react';

const THEME_KEY = 'yash-portfolio-theme';

export default function ThemeToggle(): JSX.Element {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Manual theme persistence: we only read localStorage and never use system media queries.
    const stored = window.localStorage.getItem(THEME_KEY);
    const shouldBeDark = stored === 'dark';
    document.documentElement.classList.toggle('dark', shouldBeDark);
    setIsDark(shouldBeDark);
  }, []);

  const toggleTheme = (): void => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    document.documentElement.classList.toggle('dark', nextIsDark);
    window.localStorage.setItem(THEME_KEY, nextIsDark ? 'dark' : 'light');
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="focus-visible-ring rounded-sm border border-base-border px-3 py-2 text-sm text-base-text transition-smooth duration-300 ease-out hover:border-brand-accent"
    >
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
}
