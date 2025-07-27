import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C7BE5',
        secondary: '#FF7F50',
        accent: '#00BFA6',
        dark: '#0F172A',
        light: '#F1F5F9',
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
      },
      fontSize: {
        '14xl': '10rem',
        '13xl': '9rem',
        '12xl': '8rem',
        '11xl': '7rem',
        '10xl': '6rem',
        '9xl': '5rem',
        '8xl': '4rem',
        '7xl': '3rem',
        '6xl': '2.5rem',
        '5xl': '2rem',
      }
    }
  },
  plugins: [],
};

export default config;
