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
    },
  },
  plugins: [],
}
export default config
