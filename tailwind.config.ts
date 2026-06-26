import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // MP025 palette tokens
        'arctic-powder': '#F1F6F4',
        forsythia:     '#FFC801',
        nocturnal:     '#114C5A',
        'mystic-mint': '#D9E8E2',
        'deep-saffron':'#FF9932',
        'oceanic-noir':'#172B36',

        // Semantic
        bg:           'var(--bg-primary)',
        'bg-secondary':'var(--bg-secondary)',
        'bg-light':    'var(--bg-light)',
        'bg-surface':  'var(--bg-surface)',
        accent:       'var(--accent-primary)',
        'accent-2':   'var(--accent-secondary)',
        primary:      'var(--text-on-dark)',
        muted:        'var(--text-muted-dark)',
        border:       'var(--border-dark)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-monospace', 'monospace'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      screens: {
        tablet: '768px',
        desktop: '1024px',
        wide: '1280px',
      },
      maxWidth: {
        shell: '1200px',
      },
      transitionTimingFunction: {
        micro: 'cubic-bezier(0, 0, 0.2, 1)',
        layout: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        micro: '150ms',
        'micro-max': '200ms',
        layout: '300ms',
        'layout-max': '400ms',
      },
    },
  },
  plugins: [],
};

export default config;
