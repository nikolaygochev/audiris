import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink:       '#14181C',
        paper:     '#FBFBFA',
        verify: {
          50:  '#E8F3EE',
          200: '#AFD6C5',
          500: '#1B7F5C',
          600: '#166B4D',
        },
        blueprint: {
          50:  '#E8EEF8',
          200: '#A9C0E3',
          500: '#2454A6',
          600: '#1E4589',
        },
        rule:      '#D8D6D0',
        muted:     '#5B6168',
      },
      fontFamily: {
        sans:    ['var(--font-plex-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-grotesk)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-plex-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '6px',
        md: '6px',
        lg: '6px',
      },
      keyframes: {
        tick: {
          '0%':   { opacity: '0', transform: 'translateY(2px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        tick: 'tick 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
