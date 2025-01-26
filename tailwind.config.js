/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#b624ff',
        'neon-blue': '#246bff',
        'dark': '#1a0b2e',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite', // Slow 20-second rotation
      },
      filter: {
        sepia: 'sepia(100%)',
        saturate: 'saturate(150%)',
        brightness: 'brightness(75%)',
      },
    },
  },
  plugins: [],
};
