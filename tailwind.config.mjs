/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E0E1DD', // Light Gray
        secondary: '#778DA9', // Cool Blue Gray
        tertiary: '#1b263b', // Dark Navy
        background: '#0d1b2a', // Deep Blue
        accent: '#415a77', // Steel Blue
        // dark_background: 'zinc-900'
        
      },
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
        Ovo: ['Ovo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
