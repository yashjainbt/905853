import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx,ts}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          accent: 'var(--color-accent)',
          accentHover: 'var(--color-accent-hover)',
          accentSoft: 'var(--color-accent-soft)'
        },
        base: {
          bg: 'var(--color-bg)',
          surface: 'var(--color-surface)',
          alt: 'var(--color-alt)',
          text: 'var(--color-text)',
          muted: 'var(--color-muted)',
          border: 'var(--color-border)'
        }
      },
      borderRadius: {
        sm: '8px',
        card: '12px'
      },
      boxShadow: {
        subtle: 'var(--shadow-subtle)',
        subtleHover: 'var(--shadow-subtle-hover)'
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-lora)', 'serif']
      },
      maxWidth: {
        container: '1200px'
      },
      transitionProperty: {
        smooth: 'color, background-color, transform, box-shadow'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
} satisfies Config;
