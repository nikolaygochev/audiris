import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        field:    '#F4F6F8',
        graphite: '#1E2329',
        dim:      '#4A525C',
        haze:     '#8A93A0',
        pupil:    '#0F1433',
        iris: {
          50:  '#ECEBF7',
          100: '#D9D7F0',
          300: '#A29FDB',
          500: '#3D3A9E',
          600: '#322F86',
        },
        focus: {
          300: '#7FD3DD',
          500: '#1FA3B5',
        },
      },
      fontFamily: {
        sans:    ['var(--font-instrument)', 'system-ui', 'sans-serif'],
        display: ['var(--font-bricolage)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        focusPull: {
          '0%':   { opacity: '0', filter: 'blur(10px)', transform: 'scale(1.06)' },
          '100%': { opacity: '1', filter: 'blur(0)',    transform: 'scale(1)' },
        },
      },
      animation: {
        'focus-pull': 'focusPull 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both',
      },
    },
  },
  plugins: [],
}

export default config
