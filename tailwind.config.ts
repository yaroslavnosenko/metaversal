import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f9fafa',
        border: '#e4e7e8',
        primary: '#141c24',
        secondary: '#5c6970',
        accent: '#4426d9',
        focus: '#361fad',
        light: '#ECE9FB',
        slate: {
          150: '#dfdfdf',
        },
      },
      boxShadow: {
        sm: '0 0 3px 0 rgba(26, 26, 26, 0.08)',
        lg: '0 2px 10px 0 rgba(26, 26, 26, 0.1)',
      },
    },
  },
  plugins: [],
}
export default config
