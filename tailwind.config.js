/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Theme follows the OS setting, set in index.css via prefers-color-scheme.
  // The `dark:` variant is intentionally unused: the token layer in index.css
  // swaps the palette wholesale, so components never branch on mode.
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Brand neutrals. Referenced through CSS custom properties in index.css
        // so light and dark resolve the same utility names. The -rgb channel
        // form makes opacity modifiers (bg-surface/90) compile.
        onyx: 'var(--onyx)',
        charcoal: 'var(--charcoal)',
        slate: 'var(--slate)',
        ice: 'var(--ice)',
        // Semantic roles. Always prefer these over the raw palette above.
        surface: 'rgb(var(--surface-rgb) / <alpha-value>)',
        raised: 'rgb(var(--raised-rgb) / <alpha-value>)',
        sunken: 'rgb(var(--sunken-rgb) / <alpha-value>)',
        line: 'rgb(var(--line-rgb) / <alpha-value>)',
        'line-strong': 'rgb(var(--line-strong-rgb) / <alpha-value>)',
        body: 'rgb(var(--body-rgb) / <alpha-value>)',
        muted: 'rgb(var(--muted-rgb) / <alpha-value>)',
        inverted: 'rgb(var(--inverted-rgb) / <alpha-value>)',
      },
      maxWidth: {
        content: '76rem',
      },
    },
  },
  plugins: [],
};
