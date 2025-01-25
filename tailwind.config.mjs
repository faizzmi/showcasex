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
        primary: '#E0E1DD',         // Base color
        lightest: '#F5F6F3',        // Lighter than primary
        light: '#E9EAE3',           // Slightly lighter than primary
        dark: '#D1D2C9',            // Slightly darker than primary
        darker: '#B9B9A9',          // Darker
        darkest: '#A0A18A',         // Darkest
        
      },
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
        Ovo: ['Ovo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
