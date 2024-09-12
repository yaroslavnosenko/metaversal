import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        secondary: 'var(--secondary)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        border: 'var(--border)',
        slate: {
          150: '#dfdfdf',
        },
      },
    },
  },
  plugins: [],
}
export default config
