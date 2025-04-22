
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E4161D",
        secondary: "#D9D9D9",
        dark: "#282828",
        light: "#F9F9F9",
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'pattern': "url('/placeholder.svg')",
        'metal-structure': "url('/placeholder.svg')",
      },
    },
  },
  plugins: [],
};

export default config;
