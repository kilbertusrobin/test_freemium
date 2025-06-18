import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
        chronicle: ['Chronicle Display', 'serif'],
      },

    },
  },
  plugins: [],
}

export default config
