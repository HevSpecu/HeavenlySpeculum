/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './docs/**/*.{md,mdx}',
    './blog/**/*.{md,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        fd: {
          background: 'var(--color-fd-background)',
          foreground: 'var(--color-fd-foreground)',
          muted: 'var(--color-fd-muted)',
          'muted-foreground': 'var(--color-fd-muted-foreground)',
          popover: 'var(--color-fd-popover)',
          'popover-foreground': 'var(--color-fd-popover-foreground)',
          card: 'var(--color-fd-card)',
          'card-foreground': 'var(--color-fd-card-foreground)',
          border: 'var(--color-fd-border)',
          primary: 'var(--color-fd-primary)',
          'primary-foreground': 'var(--color-fd-primary-foreground)',
          secondary: 'var(--color-fd-secondary)',
          'secondary-foreground': 'var(--color-fd-secondary-foreground)',
          accent: 'var(--color-fd-accent)',
          'accent-foreground': 'var(--color-fd-accent-foreground)',
          ring: 'var(--color-fd-ring)',
          info: 'var(--color-fd-info)',
          warning: 'var(--color-fd-warning)',
          error: 'var(--color-fd-error)',
          success: 'var(--color-fd-success)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0', opacity: '0.5' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0', opacity: '0.5' },
        },
        'collapsible-down': {
          from: { height: '0', opacity: '0' },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: '0', opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 200ms ease-out',
        'accordion-up': 'accordion-up 200ms ease-out',
        'collapsible-down': 'collapsible-down 150ms cubic-bezier(0.45, 0, 0.55, 1)',
        'collapsible-up': 'collapsible-up 150ms cubic-bezier(0.45, 0, 0.55, 1)',
      },
    },
  },
  plugins: [],
};
